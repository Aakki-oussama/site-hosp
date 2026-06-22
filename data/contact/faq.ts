export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqs: FAQItem[] = [
  {
    id: "traitement-livraison",
    question: "Comment se déroule le traitement et la livraison de ma commande ?",
    answer: "Dès réception de votre commande, nos équipes vérifient la disponibilité et préparent vos produits. Nous prenons ensuite contact avec vous pour confirmer la validation de la commande et fixer ensemble le délai de livraison le plus adapté à vos contraintes.",
  },
  {
    id: "certifications-produits",
    question: "Vos produits de désinfection médicale sont-ils certifiés ?",
    answer: "Oui, tous les produits de nos Gammes Médical et Med sont rigoureusement testés, certifiés conformes aux normes internationales (EN/NF) et disposent des autorisations réglementaires nécessaires.",
  },
  {
    id: "solutions-sur-mesure",
    question: "Proposez-vous des solutions personnalisées pour les industries ou les cliniques ?",
    answer: "Absolument. Nos experts peuvent réaliser un diagnostic de vos besoins et de vos installations pour concevoir des protocoles d'hygiène et de traitement d'eau sur mesure adaptés à vos contraintes réglementaires.",
  },
  {
    id: "moyens-paiement",
    question: "Quelles sont les modalités de paiement acceptées ?",
    answer: "Nous acceptons les règlements par virement bancaire, chèque, ainsi que par traite pour nos clients professionnels réguliers après ouverture de compte auprès de notre service financier.",
  },
  {
    id: "demande-devis-volume",
    question: "Comment obtenir un devis pour une commande en grand volume ou un contrat annuel ?",
    answer: "Vous pouvez soumettre votre demande via le formulaire de contact ci-dessus en sélectionnant le type 'Société' et en décrivant votre projet, ou nous appeler directement. Un conseiller vous répondra sous 24 heures.",
  },
  {
    id: "modification-commande",
    question: "Puis-je modifier ou annuler une commande après validation ?",
    answer: "Tant que votre commande est en cours de traitement et n'a pas quitté notre entrepôt, vous pouvez la modifier ou l'annuler en contactant rapidement notre service client par téléphone.",
  },
  {
    id: "fiches-techniques-fds",
    question: "Fournissez-vous les fiches techniques et fiches de données de sécurité (FDS) ?",
    answer: "Oui, pour chaque produit commandé, nous pouvons vous fournir les fiches techniques (FT) ainsi que les fiches de données de sécurité (FDS) conformes à la réglementation en vigueur.",
  },
  {
    id: "formation-utilisation",
    question: "Proposez-vous une assistance ou des formations sur l'usage de vos produits ?",
    answer: "Tout à fait. Nous proposons des sessions de formation et d'accompagnement pour vos équipes afin de garantir un dosage optimal, une efficacité maximale et une manipulation en toute sécurité de nos solutions.",
  },
]
