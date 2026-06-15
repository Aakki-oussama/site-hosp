import type { Metadata } from "next"
import { Countdown } from "./maintenance/_components/countdown"

export const metadata: Metadata = {
  title: "Site en construction | Polaris Industrie",
  description: "Notre site est en cours de construction. Revenez bientôt.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl text-center space-y-10">

        {/* Logo / Brand */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <p className="font-heading text-sm font-bold tracking-[0.2em] text-text-muted uppercase">
              Polaris Industrie hosp
            </p>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-strong leading-tight">
            Site en{" "}
            <span className="text-primary">construction</span>
          </h1>
          <p className="text-text-muted leading-relaxed text-sm sm:text-base max-w-md mx-auto">
            Nous travaillons activement pour vous offrir une expérience
            exceptionnelle. Notre nouveau site sera disponible très prochainement.
          </p>
        </div>

        {/* Countdown */}
        <Countdown />

        {/* Divider */}
        <div className="border-t border-stone-200 pt-8 space-y-4">
          <p className="text-sm text-text-muted font-medium">
            Besoin d&apos;informations ? Contactez-nous :
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+212537570035"
              aria-label="Appeler Polaris Industrie"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full text-sm hover:bg-primary-dark transition-all duration-300 shadow-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +212 7-70-45-16-59
            </a>

            <a
              href="mailto:contact@polaris-industrie.ma"
              aria-label="Envoyer un email à Polaris Industrie"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full text-sm ring-1 ring-primary/30 hover:bg-primary-light transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              contact@polaris-industriehosp.com
            </a>
          </div>

          {/* Address */}
          <p className="text-xs text-text-muted mt-4">
            Rabat, Maroc
          </p>
        </div>

      </div>
    </main>
  )
}