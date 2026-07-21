"use client"

import { useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { ParticulierFormData } from "@/lib/validations/contact"
import { particulierSchema } from "@/lib/validations/contact"
import { villes } from "@/data/contact/villes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldContent,
  FieldError,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ParticulierFormProps {
  onSubmit: (data: ParticulierFormData) => Promise<boolean>
  isLoading?: boolean
}

export function ParticulierForm({ onSubmit, isLoading = false }: ParticulierFormProps) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ParticulierFormData>({
    resolver: zodResolver(particulierSchema),
    mode: "onBlur",
    defaultValues: {
      type: "particulier",
      ville: "",
      nom: "",
      telephone: "",
      email: "",
      objet: "",
      message: "",
      honeypot: "",
    },
  })

  const villeValue = useWatch({ control, name: "ville" })

  const handleSubmitForm = async (data: ParticulierFormData) => {
    try {
      const success = await onSubmit(data)
      if (success) {
        reset({ type: "particulier" })
      }
    } catch (err) {
      console.error("Unexpected error submitting form:", err)
    }
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Nom Complet */}
        <Field>
          <FieldLabel>
            <Label htmlFor="nom">Nom complet *</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="nom"
              placeholder="Ex: Aakki oussama"
              {...register("nom")}
              aria-invalid={!!errors.nom}
            />
            {errors.nom && <FieldError errors={[{ message: errors.nom.message }]} />}
          </FieldContent>
        </Field>

        {/* Téléphone */}
        <Field>
          <FieldLabel>
            <Label htmlFor="telephone">Téléphone *</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="telephone"
              placeholder="Ex: 0770451659"
              inputMode="tel"
              autoComplete="tel"
              {...register("telephone")}
              aria-invalid={!!errors.telephone}
            />
            {errors.telephone && <FieldError errors={[{ message: errors.telephone.message }]} />}
          </FieldContent>
        </Field>

        {/* Email */}
        <Field>
          <FieldLabel>
            <Label htmlFor="email">Email (optionnel)</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="email"
              type="email"
              placeholder="Ex: contact@email.com"
              autoComplete="email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && <FieldError errors={[{ message: errors.email.message }]} />}
          </FieldContent>
        </Field>

        {/* Ville */}
        <Field>
          <FieldLabel>
            <Label htmlFor="ville">Ville (optionnel)</Label>
          </FieldLabel>
          <FieldContent>
            <Select
              value={villeValue ?? ""}
              onValueChange={(value) => setValue("ville", value, { shouldValidate: true, shouldDirty: true })}
            >
              <SelectTrigger id="ville">
                <SelectValue placeholder="Choisir une ville" />
              </SelectTrigger>
              <SelectContent>
                {villes.map((ville) => (
                  <SelectItem key={ville.value} value={ville.value}>
                    {ville.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>

        {/* Objet */}
        <Field className="md:col-span-2">
          <FieldLabel>
            <Label htmlFor="objet">Objet de la demande *</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="objet"
              placeholder="Ex: Demande d'information"
              {...register("objet")}
              aria-invalid={!!errors.objet}
            />
            {errors.objet && <FieldError errors={[{ message: errors.objet.message }]} />}
          </FieldContent>
        </Field>

        {/* Message */}
        <Field className="md:col-span-2">
          <FieldLabel>
            <Label htmlFor="message">Message *</Label>
          </FieldLabel>
          <FieldContent>
            <Textarea
              id="message"
              placeholder="Décrivez votre demande..."
              rows={6}
              {...register("message")}
              aria-invalid={!!errors.message}
            />
            {errors.message && <FieldError errors={[{ message: errors.message.message }]} />}
          </FieldContent>
        </Field>
      </FieldGroup>

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] h-0 w-0 opacity-0"
        {...register("honeypot")}
      />

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  )
}
