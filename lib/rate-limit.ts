import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

// ─── Constants ────────────────────────────────────────────────────────────────

/** Max submissions per IP within the window */
const IP_MAX_REQUESTS = 5
/** Max submissions across all IPs within the window (global guard) */
const GLOBAL_MAX_REQUESTS = 50
/** Sliding window duration */
const WINDOW = "1 h"

// ─── Result Type ──────────────────────────────────────────────────────────────

export type RateLimitResult =
  | { success: true }
  | { success: false; reason: "ip" | "global" }

// ─── Redis Client ─────────────────────────────────────────────────────────────

/**
 * Lazily initialized Redis client.
 * Throws a clear error at runtime if env vars are missing,
 * instead of silently failing or crashing at build time.
 */
function getRedis(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    throw new Error(
      "[rate-limit] Missing UPSTASH_REDIS_REST_URL or UPSTASH_REDIS_REST_TOKEN in environment variables."
    )
  }

  return new Redis({ url, token })
}

// ─── Limiters ─────────────────────────────────────────────────────────────────

/**
 * Per-IP limiter — primary defense.
 * Sliding window is fairer than fixed window: it prevents
 * a burst at the boundary of two fixed windows.
 */
function getIpLimiter(): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(IP_MAX_REQUESTS, WINDOW),
    prefix: "ratelimit:contact:ip",
    analytics: false,
  })
}

/**
 * Global limiter — secondary defense against coordinated attacks
 * where many IPs each stay just under the per-IP limit.
 */
function getGlobalLimiter(): Ratelimit {
  return new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(GLOBAL_MAX_REQUESTS, WINDOW),
    prefix: "ratelimit:contact:global",
    analytics: false,
  })
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Checks both the per-IP and global rate limits for the contact form.
 *
 * Fail-open policy: if Redis is unreachable, the request is allowed through
 * rather than blocking legitimate users due to an infrastructure issue.
 *
 * @param ip - The client IP address (use "127.0.0.1" as fallback for local dev)
 * @returns RateLimitResult — success or blocked with a reason
 */
export async function checkRateLimit(ip: string): Promise<RateLimitResult> {
  try {
    const [ipResult, globalResult] = await Promise.all([
      getIpLimiter().limit(ip),
      getGlobalLimiter().limit("global"),
    ])

    if (!ipResult.success) return { success: false, reason: "ip" }
    if (!globalResult.success) return { success: false, reason: "global" }

    return { success: true }
  } catch (error) {
    // Fail open: log the error but don't punish the user for infra issues
    console.error("[rate-limit] Redis error — failing open:", error)
    return { success: true }
  }
}