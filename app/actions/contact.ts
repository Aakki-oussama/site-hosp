"use server"

import nodemailer from "nodemailer"
import { headers } from "next/headers"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"
import { checkRateLimit } from "@/lib/rate-limit"

export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

// ─── SMTP Configuration ───────────────────────────────────────────────────────

const host = process.env.SMTP_HOST
const port = Number(process.env.SMTP_PORT) || 587
const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS
const to = process.env.SMTP_TO

const transporter =
  host && user && pass
    ? nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      })
    : null

if (process.env.NODE_ENV === "development" && transporter) {
  transporter.verify().catch((err) => {
    console.error("❌ [SMTP CONNECT ERROR] Configuration SMTP invalide :", err.message)
  })
}

// ─── HTML Escape ──────────────────────────────────────────────────────────────

function escapeHtml(text: string): string {
  if (!text) return ""
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

// ─── Server Action ────────────────────────────────────────────────────────────

export async function submitContactForm(data: ContactFormData): Promise<ActionResponse> {

  // A. Resolve client IP
  let ip = "127.0.0.1"
  try {
    const headerList = await headers()
    ip =
      headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headerList.get("x-real-ip") ||
      "127.0.0.1"
  } catch {
    console.warn("⚠️ Impossible de lire les en-têtes IP, repli sur local.")
  }

  // B. Rate limiting (Upstash Redis — persistent across all serverless instances)
  const rateLimit = await checkRateLimit(ip)
  if (!rateLimit.success) {
    return {
      success: false,
      message: "Trop de messages envoyés. Veuillez patienter une heure avant de réessayer.",
    }
  }

// C. Honeypot check — silent fake success for bots
  if (data.honeypot && data.honeypot.length > 0) {
    return { success: true, message: "Votre message a été envoyé avec succès." }
  }

  // D. Server-side validation with Zod
  const validatedFields = contactSchema.safeParse(data)
  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors
    const errors: Record<string, string[]> = {}
    Object.entries(fieldErrors).forEach(([key, val]) => {
      if (val) errors[key] = val
    })
    return {
      success: false,
      message: "Formulaire invalide. Veuillez vérifier vos données.",
      errors,
    }
  }

  const verifiedData = validatedFields.data

  try {
    if (!transporter || !to) {
      console.error("❌ Le transporteur SMTP n'a pas pu être initialisé. Vérifiez votre fichier .env.local")
      return {
        success: false,
        message: "Le service de messagerie n'est pas configuré. Veuillez réessayer plus tard.",
      }
    }

    const isSociete = verifiedData.type === "societe"
    const rawSenderName = isSociete ? verifiedData.nomSociete : verifiedData.nom
    const senderName = escapeHtml(rawSenderName)

    const safeEmail = verifiedData.email ? escapeHtml(verifiedData.email) : ""
    const safePhone = escapeHtml(verifiedData.telephone)
    const safeCity = verifiedData.ville ? escapeHtml(verifiedData.ville) : "Non spécifiée"
    const safeSubject = verifiedData.objet ? escapeHtml(verifiedData.objet) : "Demande de contact"
    const safeMessage = escapeHtml(verifiedData.message)
    const safeResponsable = isSociete && verifiedData.nomResponsable ? escapeHtml(verifiedData.nomResponsable) : ""
    const safeSecteur = isSociete && verifiedData.secteur ? escapeHtml(verifiedData.secteur) : ""

    // E. HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
        <h2 style="color: #0d9488; border-bottom: 2px solid #0d9488; padding-bottom: 10px; margin-top: 0;">
          Nouveau message — ${isSociete ? "Société" : "Particulier"}
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 35%; color: #475569; border-bottom: 1px solid #f1f5f9;">Type de client :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${isSociete ? "Professionnel / Société" : "Particulier"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Nom / Raison sociale :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${senderName}</td>
          </tr>
          ${isSociete ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Responsable :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${safeResponsable || "Non spécifié"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Secteur d'activité :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${safeSecteur}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Téléphone :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${safePhone}</td>
          </tr>
          ${safeEmail ? `
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">E-mail :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${safeEmail}" style="color: #0d9488; text-decoration: none;">${safeEmail}</a></td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Ville :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9;">${safeCity}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #475569; border-bottom: 1px solid #f1f5f9;">Objet :</td>
            <td style="padding: 8px 0; color: #1e293b; border-bottom: 1px solid #f1f5f9; font-style: italic;">${safeSubject}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0d9488; border-radius: 4px;">
          <p style="margin: 0 0 8px 0; font-weight: bold; color: #334155;">Message du client :</p>
          <p style="margin: 0; white-space: pre-wrap; color: #475569; line-height: 1.6;">${safeMessage}</p>
        </div>
      </div>
    `

    // F. Plain text fallback
    const textContent = `
Nouveau message - Polaris Industrie HOSP
-----------------------------------------------
Type : ${isSociete ? "Société" : "Particulier"}
Nom/Société : ${rawSenderName}
${isSociete ? `Responsable : ${verifiedData.nomResponsable || "Non spécifié"}\nSecteur : ${verifiedData.secteur}` : ""}
Téléphone : ${verifiedData.telephone}
Email : ${verifiedData.email || "Non spécifié"}
Ville : ${verifiedData.ville || "Non spécifiée"}
Objet : ${verifiedData.objet || "Non spécifié"}

Message :
${verifiedData.message}
    `

    // G. Send email
    await transporter.sendMail({
      from: `"Polaris Industrie HOSP" <${user}>`,
      to,
      replyTo: verifiedData.email || undefined,
      subject: `[Polaris HOSP] ${verifiedData.objet || "Message"} — ${rawSenderName}`,
      text: textContent,
      html: htmlContent,
    })

    return {
      success: true,
      message: "Votre message a été envoyé avec succès.",
    }

  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'e-mail :", error)
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
    }
  }
}