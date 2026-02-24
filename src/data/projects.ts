export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-cremieu",
    slug: "renovation-sdb-cremieu",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain années 80 en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    location: "Crémieu",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "cuisine-bourgoin",
    slug: "refection-plomberie-cuisine-bourgoin",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    shortDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré.",
    fullDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    location: "Bourgoin-Jallieu",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chauffe-eau-morestel",
    slug: "remplacement-chauffe-eau-morestel",
    title: "Remplacement chauffe-eau",
    category: "Chauffe-eau",
    shortDescription: "Remplacement d'un vieux chauffe-eau par un ballon thermodynamique classe A.",
    fullDescription: "Remplacement d'un vieux chauffe-eau rouillé par un ballon thermodynamique classe A.",
    location: "Morestel",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "pac-la-tour-du-pin",
    slug: "installation-pac-la-tour-du-pin",
    title: "Installation pompe à chaleur",
    category: "Chauffage",
    shortDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau.",
    fullDescription: "Remplacement d'une vieille chaudière fioul par une pompe à chaleur air-eau compacte.",
    location: "La Tour-du-Pin",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "sdb-pmr-pont-de-cheruy",
    slug: "salle-de-bain-pmr-pont-de-cheruy",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    shortDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite.",
    fullDescription: "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    location: "Pont-de-Chéruy",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chaudiere-lisle-dabeau",
    slug: "remplacement-chaudiere-lisle-dabeau",
    title: "Remplacement chaudière gaz",
    category: "Chauffage",
    shortDescription: "Installation d'une chaudière gaz à condensation dernière génération.",
    fullDescription: "Installation d'une chaudière gaz à condensation dernière génération en remplacement d'un modèle de 20 ans.",
    location: "L'Isle-d'Abeau",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
