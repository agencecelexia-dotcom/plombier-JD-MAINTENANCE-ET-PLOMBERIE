/**
 * Mapping des images du site — 33 images uniques pour 46 emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** #3 — 16:9 — hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** #4 — 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-frontonas-after */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** #15 — 4:3 — page douche-italienne + realisation douche-villefontaine-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** #16 — 4:3 — page PMR + realisation sdb-pmr-pont-de-cheruy-after */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** #17 — 3:2 — page chaudiere-gaz + realisation chaudiere-lisle-dabeau-after */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** #19 — 3:2 — page plancher-chauffant + realisation plancher-tignieu-after */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** #8 — 4:3 — section urgence-card + realisation depannage-hieres-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (11 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "chauffage":            "/images/heroes/chauffage.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (12 emplacements → 10 images uniques)
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/plomberie-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/plomberie-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/plomberie-mise-aux-normes.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Chauffage
  "chauffage-chaudiere-gaz":     IMG_CHAUDIERE_GAZ,
  "chauffage-pac":               "/images/pages/chauffage-pac.jpeg",
  "chauffage-plancher-chauffant": IMG_PLANCHER_CHAUFFANT,
};

// ============================================================
// Realisations avant/apres (20 emplacements → 14 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-cremieu-before":                  "/images/realisations/sdb-cremieu-before.jpeg",
  "sdb-cremieu-after":                   "/images/realisations/sdb-cremieu-after.png",
  "cuisine-bourgoin-before":             "/images/realisations/cuisine-bourgoin-before.png",
  "cuisine-bourgoin-after":              "/images/realisations/cuisine-bourgoin-after.jpeg",
  "chauffe-eau-morestel-before":         "/images/realisations/chauffe-eau-morestel-before.png",
  "chauffe-eau-morestel-after":          "/images/realisations/chauffe-eau-morestel-after.png",
  "pac-la-tour-du-pin-before":           "/images/realisations/pac-la-tour-du-pin-before.jpeg",
  "pac-la-tour-du-pin-after":            "/images/realisations/pac-la-tour-du-pin-after.png",
  "sdb-pmr-pont-de-cheruy-before":       "/images/realisations/sdb-pmr-pont-de-cheruy-before.jpeg",
  "sdb-pmr-pont-de-cheruy-after":        IMG_SDB_PMR,
  "chaudiere-lisle-dabeau-before":       "/images/realisations/chaudiere-lisle-dabeau-before.png",
  "chaudiere-lisle-dabeau-after":        IMG_CHAUDIERE_GAZ,
  "douche-villefontaine-before":         "/images/realisations/douche-villefontaine-before.png",
  "douche-villefontaine-after":          IMG_DOUCHE_ITALIENNE,
  "plancher-chauffant-tignieu-before":   "/images/realisations/plancher-chauffant-tignieu-before.png",
  "plancher-chauffant-tignieu-after":    IMG_PLANCHER_CHAUFFANT,
  "depannage-hieres-before":             IMG_FUITE_EAU,
  "depannage-hieres-after":              "/images/realisations/depannage-hieres-after.png",
  "sdb-complete-frontonas-before":       "/images/realisations/sdb-complete-frontonas-before.png",
  "sdb-complete-frontonas-after":        IMG_RENOVATION_SDB,
};
