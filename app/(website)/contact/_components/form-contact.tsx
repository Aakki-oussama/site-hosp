"use client"

import { useState } from "react"
import type { ContactFormData, ParticulierFormData, SocieteFormData } from "@/lib/validations/contact"
import { ParticulierForm } from "./partiel/ParticulierForm"
import { SocieteForm } from "./partiel/SocieteForm"
import { toast } from "sonner"


type FormType = "particulier" | "societe"

export function FormContact() {
  const [formType, setFormType] = useState<FormType>("particulier")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true)
      // TODO: Send form data to backend/API
      
      // TODO: Show success toast
      toast.success("Merci ! Votre demande a été envoyée avec succès. Un expert vous répondra sous 24h.")
      
    } catch (error) {
      console.error("Error submitting form:", error)
      // TODO: Show error toast
      toast.error("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Form Title & Subtitle */}
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground font-heading">
          Envoyer un message
        </h2>
        <p className="text-muted-foreground text-sm">
          Remplissez le formulaire, un expert vous répondra sous 24h.
        </p>
      </div>
      {/* Form Type Toggle */}
      <div className="flex gap-3 border-b">
        <button
          onClick={() => setFormType("particulier")}
          className={`pb-3 px-1 text-base font-medium transition-colors ${
            formType === "particulier"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Particulier
        </button>
        <button
          onClick={() => setFormType("societe")}
          className={`pb-3 px-1 text-base font-medium transition-colors ${
            formType === "societe"
              ? "text-primary border-b-2 border-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Société
        </button>
      </div>

      {/* Forms */}
      {formType === "particulier" && (
        <ParticulierForm
          onSubmit={(data) => handleSubmit({ ...data, type: "particulier" } as ParticulierFormData)}
          isLoading={isLoading}
        />
      )}

      {formType === "societe" && (
        <SocieteForm
          onSubmit={(data) => handleSubmit({ ...data, type: "societe" } as SocieteFormData)}
          isLoading={isLoading}
        />
      )}
    </div>
  )
}
