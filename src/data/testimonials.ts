export interface AdminTestimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export const testimonials: AdminTestimonial[] = [
  {
    id: "1",
    clientName: "Marie L.",
    clientRole: "Propriétaire à Crémieu",
    quote: "Jimmy est intervenu très rapidement pour une fuite sous l'évier. Travail propre et soigné. Je recommande vivement !",
    rating: 5,
    projectType: "Dépannage urgent",
    date: "2025-11",
  },
  {
    id: "2",
    clientName: "Pierre D.",
    clientRole: "Propriétaire à Bourgoin-Jallieu",
    quote: "Remplacement de notre vieux chauffe-eau par un modèle thermodynamique. Explications claires, installation impeccable. Très professionnel.",
    rating: 5,
    projectType: "Chauffe-eau",
    date: "2025-12",
  },
  {
    id: "3",
    clientName: "Sophie M.",
    clientRole: "Propriétaire à Morestel",
    quote: "Rénovation complète de notre salle de bain. Résultat magnifique, délais respectés. Jimmy est à l'écoute et de bon conseil.",
    rating: 5,
    projectType: "Salle de bain",
    date: "2026-01",
  },
  {
    id: "4",
    clientName: "Laurent B.",
    clientRole: "Propriétaire à La Tour-du-Pin",
    quote: "Bon travail pour le débouchage de nos canalisations. Intervention rapide un samedi matin. Tarifs corrects.",
    rating: 4,
    projectType: "Dépannage urgent",
    date: "2025-10",
  },
  {
    id: "5",
    clientName: "Isabelle R.",
    clientRole: "Propriétaire à Pont-de-Chéruy",
    quote: "Excellente prestation pour l'installation de notre nouvelle chaudière gaz. Jimmy a pris le temps de nous expliquer le fonctionnement. Très satisfaite.",
    rating: 5,
    projectType: "Chauffage",
    date: "2026-01",
  },
];
