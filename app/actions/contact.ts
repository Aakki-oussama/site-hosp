"use server"

import { contactSchema, type ContactFormData } from "@/lib/validations/contact"

export type ActionResponse = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

/**
 * Server action to securely handle and validate contact form submissions.
 */
export async function submitContactForm(data: ContactFormData): Promise<ActionResponse> {
  // 1. Re-validate the data on the server for security
  const validatedFields = contactSchema.safeParse(data)

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors
    const errors: Record<string, string[]> = {}
    Object.entries(fieldErrors).forEach(([key, val]) => {
      if (val) errors[key] = val
    })

    return {
      success: false,
      message: "Formulaire invalide. Veuillez vérifier les erreurs.",
      errors,
    }
  }

  const verifiedData = validatedFields.data

  try {
    // 📬 Log the verified submission in the server terminal
    console.log("\n📬 [SERVER TERMINAL] RECEIVED FORM SUBMISSION:")
    console.log(JSON.stringify(verifiedData, null, 2))
    console.log("-----------------------------------------------\n")

    // Simulate small backend delay (e.g. database save or SMTP connect)
    await new Promise((resolve) => setTimeout(resolve, 800))

    // TODO: Implement email sending logic (e.g., using nodemailer, Resend, or SendGrid)
    // example: await sendEmail(verifiedData)

    return {
      success: true,
      message: "Votre demande a été envoyée avec succès.",
    }
  } catch (error) {
    console.error("❌ [SERVER ACTION ERROR]:", error)
    return {
      success: false,
      message: "Une erreur serveur est survenue. Veuillez réessayer plus tard.",
    }
  }
}
