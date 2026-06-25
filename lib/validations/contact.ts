import { z } from "zod"

const emailSchema = z.email("Email invalide").or(z.literal(""))

const phoneSchema = z
  .string()
  .transform((val) => val.replace(/\s+/g, "").replace(/[-()]/g, "").replace(/^\+212/, "0"))
  .refine((val) => /^(05|06|07|08)\d{8}$/.test(val), {
    message: "Le numéro doit être un téléphone marocain valide (10 chiffres commençant par 05, 06, 07 ou 08)",
  })

const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/
const nameErrorMessage = "Ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes"

export const particulierSchema = z.object({
  type: z.literal("particulier"),
  nom: z
    .string()
    .trim()
    .min(2, "Le nom complet est requis (minimum 2 caractères)")
    .max(100)
    .regex(nameRegex, nameErrorMessage),
  telephone: phoneSchema,
  email: emailSchema.optional(),
  ville: z.string().trim().optional(),
  objet: z.string().trim().min(1, "L'objet est requis"),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(5000),
  honeypot: z.string().optional(),
})

export const societeSchema = z.object({
  type: z.literal("societe"),
  nomSociete: z
    .string()
    .trim()
    .min(2, "Le nom de la société est requis")
    .max(150)
    .regex(nameRegex, "Le nom de la société ne doit contenir que des lettres, des espaces, des tirets ou des apostrophes"),
  nomResponsable: z
    .string()
    .trim()
    .max(100)
    .regex(/^[a-zA-ZÀ-ÿ\s'-]*$/, nameErrorMessage)
    .optional()
    .or(z.literal("")),
  telephone: phoneSchema,
  email: emailSchema.optional(),
  ville: z.string().trim().optional(),
  secteur: z.string().trim().min(1, "Le secteur d'activité est requis"),
  objet: z.string().trim().optional(),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(5000),
  honeypot: z.string().max(0, "Bot detected").optional(),
})

export const contactSchema = z.discriminatedUnion("type", [particulierSchema, societeSchema])

export type ContactFormData = z.infer<typeof contactSchema>
export type ParticulierFormData = z.infer<typeof particulierSchema>
export type SocieteFormData = z.infer<typeof societeSchema>