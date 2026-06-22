"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import type { SocieteFormData } from "@/lib/validations/contact"
import { societeSchema } from "@/lib/validations/contact"
import { villes } from "@/data/contact/villes"
import { secteurs } from "@/data/contact/secteurs"
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

interface SocieteFormProps {
  onSubmit: (data: SocieteFormData) => void | Promise<void>
  isLoading?: boolean
}

export function SocieteForm({ onSubmit, isLoading = false }: SocieteFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<SocieteFormData>({
    resolver: zodResolver(societeSchema),
    mode: "onBlur",
    defaultValues: {
      type: "societe",
    },
  })

  const villeValue = watch("ville")
  const secteurValue = watch("secteur")

  const handleSubmitForm = async (data: SocieteFormData) => {
    await onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
      <FieldGroup className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Nom de la Société */}
        <Field>
          <FieldLabel>
            <Label htmlFor="nomSociete">Nom de la société *</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="nomSociete"
              placeholder="Ex: Polaris Industrie HOSP"
              {...register("nomSociete")}
              aria-invalid={!!errors.nomSociete}
            />
            {errors.nomSociete && (
              <FieldError errors={[{ message: errors.nomSociete.message }]} />
            )}
          </FieldContent>
        </Field>

        {/* Nom du Responsable */}
        <Field>
          <FieldLabel>
            <Label htmlFor="nomResponsable">Nom du responsable (optionnel)</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="nomResponsable"
              placeholder="Ex: John Doe"
              {...register("nomResponsable")}
              aria-invalid={!!errors.nomResponsable}
            />
            {errors.nomResponsable && (
              <FieldError errors={[{ message: errors.nomResponsable.message }]} />
            )}
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
              placeholder="Ex: +212 537 570 035"
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
              placeholder="Ex: contact@societe.com"
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
            <Select value={villeValue || ""} onValueChange={(value) => setValue("ville", value)}>
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

        {/* Secteur d'Activité */}
        <Field>
          <FieldLabel>
            <Label htmlFor="secteur">Secteur d'activité *</Label>
          </FieldLabel>
          <FieldContent>
            <Select
              value={secteurValue || ""}
              onValueChange={(value) => setValue("secteur", value)}
            >
              <SelectTrigger id="secteur">
                <SelectValue placeholder="Choisir un secteur" />
              </SelectTrigger>
              <SelectContent>
                {secteurs.map((secteur) => (
                  <SelectItem key={secteur.value} value={secteur.value}>
                    {secteur.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.secteur && <FieldError errors={[{ message: errors.secteur.message }]} />}
          </FieldContent>
        </Field>

        {/* Objet */}
        <Field className="md:col-span-2">
          <FieldLabel>
            <Label htmlFor="objet">Objet de la demande (optionnel)</Label>
          </FieldLabel>
          <FieldContent>
            <Input
              id="objet"
              placeholder="Ex: Demande de devis"
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

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
      </Button>
    </form>
  )
}
