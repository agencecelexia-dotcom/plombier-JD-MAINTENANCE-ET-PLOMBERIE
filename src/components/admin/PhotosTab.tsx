"use client";

import { useState, useRef } from "react";
import { X, ZoomIn, Upload, Check, Loader2, ImageIcon } from "lucide-react";

interface PhotoItem {
  path: string;
  filename: string;
  usage: string;
}

interface PhotoGroup {
  label: string;
  photos: PhotoItem[];
}

const PHOTO_GROUPS: PhotoGroup[] = [
  {
    label: "Hero & Bannieres",
    photos: [
      { path: "/images/heroes/accueil.jpeg", filename: "heroes/accueil.jpeg", usage: "Hero page d'accueil" },
      { path: "/images/heroes/depannage-plomberie.jpeg", filename: "heroes/depannage-plomberie.jpeg", usage: "Hero page depannage plomberie" },
      { path: "/images/heroes/plomberie.jpeg", filename: "heroes/plomberie.jpeg", usage: "Hero page plomberie + page plomberie-tuyauterie" },
      { path: "/images/heroes/renovation-sdb.jpeg", filename: "heroes/renovation-sdb.jpeg", usage: "Hero page renovation salle de bain + renovation-complete + realisation sdb-frontonas" },
      { path: "/images/heroes/chauffage.jpeg", filename: "heroes/chauffage.jpeg", usage: "Hero page chauffage" },
      { path: "/images/heroes/chauffe-eau.jpeg", filename: "heroes/chauffe-eau.jpeg", usage: "Hero page chauffe-eau" },
      { path: "/images/heroes/generique-plombier.jpeg", filename: "heroes/generique-plombier.jpeg", usage: "Hero blog, avis-clients, contact, a-propos, realisations + CTA bandeau" },
    ],
  },
  {
    label: "Sections",
    photos: [
      { path: "/images/sections/urgence-card.png", filename: "sections/urgence-card.png", usage: "Section depannage urgent + realisation depannage-hieres (avant)" },
      { path: "/images/sections/projet-card.jpeg", filename: "sections/projet-card.jpeg", usage: "Section projets / realisations en accueil" },
    ],
  },
  {
    label: "Equipe & A propos",
    photos: [
      { path: "/images/pages/a-propos-fondateur.jpeg", filename: "pages/a-propos-fondateur.jpeg", usage: "Portrait du fondateur — page A propos" },
      { path: "/images/pages/a-propos-equipe.jpeg", filename: "pages/a-propos-equipe.jpeg", usage: "Photo equipe — page A propos" },
    ],
  },
  {
    label: "Pages services",
    photos: [
      { path: "/images/pages/plomberie-robinetterie.jpeg", filename: "pages/plomberie-robinetterie.jpeg", usage: "Page plomberie — robinetterie" },
      { path: "/images/pages/plomberie-recherche-fuite.jpeg", filename: "pages/plomberie-recherche-fuite.jpeg", usage: "Page plomberie — recherche de fuite" },
      { path: "/images/pages/plomberie-mise-aux-normes.jpeg", filename: "pages/plomberie-mise-aux-normes.jpeg", usage: "Page plomberie — mise aux normes" },
      { path: "/images/pages/renovation-douche-italienne.jpeg", filename: "pages/renovation-douche-italienne.jpeg", usage: "Page douche italienne + realisation douche-villefontaine" },
      { path: "/images/pages/renovation-pmr.jpeg", filename: "pages/renovation-pmr.jpeg", usage: "Page salle de bain PMR + realisation sdb-pmr-pont-de-cheruy" },
      { path: "/images/pages/chauffage-chaudiere-gaz.jpeg", filename: "pages/chauffage-chaudiere-gaz.jpeg", usage: "Page chaudiere gaz + realisation chaudiere-lisle-dabeau" },
      { path: "/images/pages/chauffage-pac.jpeg", filename: "pages/chauffage-pac.jpeg", usage: "Page pompe a chaleur" },
      { path: "/images/pages/chauffage-plancher-chauffant.jpeg", filename: "pages/chauffage-plancher-chauffant.jpeg", usage: "Page plancher chauffant + realisation plancher-tignieu" },
    ],
  },
  {
    label: "Realisations — Avant",
    photos: [
      { path: "/images/realisations/sdb-cremieu-before.jpeg", filename: "realisations/sdb-cremieu-before.jpeg", usage: "Salle de bain Crémieu — avant travaux" },
      { path: "/images/realisations/cuisine-bourgoin-before.png", filename: "realisations/cuisine-bourgoin-before.png", usage: "Cuisine Bourgoin-Jallieu — avant travaux" },
      { path: "/images/realisations/chauffe-eau-morestel-before.png", filename: "realisations/chauffe-eau-morestel-before.png", usage: "Chauffe-eau Morestel — avant travaux" },
      { path: "/images/realisations/pac-la-tour-du-pin-before.jpeg", filename: "realisations/pac-la-tour-du-pin-before.jpeg", usage: "PAC La Tour-du-Pin — avant travaux" },
      { path: "/images/realisations/sdb-pmr-pont-de-cheruy-before.jpeg", filename: "realisations/sdb-pmr-pont-de-cheruy-before.jpeg", usage: "SDB PMR Pont-de-Chéruy — avant travaux" },
      { path: "/images/realisations/chaudiere-lisle-dabeau-before.png", filename: "realisations/chaudiere-lisle-dabeau-before.png", usage: "Chaudière L'Isle-d'Abeau — avant travaux" },
      { path: "/images/realisations/douche-villefontaine-before.png", filename: "realisations/douche-villefontaine-before.png", usage: "Douche Villefontaine — avant travaux" },
      { path: "/images/realisations/plancher-chauffant-tignieu-before.png", filename: "realisations/plancher-chauffant-tignieu-before.png", usage: "Plancher chauffant Tignieu-Jameyzieu — avant travaux" },
      { path: "/images/realisations/sdb-complete-frontonas-before.png", filename: "realisations/sdb-complete-frontonas-before.png", usage: "SDB complète Frontonas — avant travaux" },
    ],
  },
  {
    label: "Realisations — Apres",
    photos: [
      { path: "/images/realisations/sdb-cremieu-after.png", filename: "realisations/sdb-cremieu-after.png", usage: "Salle de bain Crémieu — après travaux" },
      { path: "/images/realisations/cuisine-bourgoin-after.jpeg", filename: "realisations/cuisine-bourgoin-after.jpeg", usage: "Cuisine Bourgoin-Jallieu — après travaux" },
      { path: "/images/realisations/chauffe-eau-morestel-after.png", filename: "realisations/chauffe-eau-morestel-after.png", usage: "Chauffe-eau Morestel — après travaux" },
      { path: "/images/realisations/pac-la-tour-du-pin-after.png", filename: "realisations/pac-la-tour-du-pin-after.png", usage: "PAC La Tour-du-Pin — après travaux" },
      { path: "/images/realisations/depannage-hieres-after.png", filename: "realisations/depannage-hieres-after.png", usage: "Dépannage Hières-sur-Amby — après travaux" },
    ],
  },
];

function PhotoCard({
  photo,
  onPreview,
}: {
  photo: PhotoItem;
  onPreview: (p: PhotoItem) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [imgKey, setImgKey] = useState(0);
  const [hasError, setHasError] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploaded(false);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("path", photo.path);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setUploaded(true);
        setHasError(false);
        setImgKey((k) => k + 1);
        setTimeout(() => setUploaded(false), 2000);
      }
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 transition-colors hover:border-primary-900">
      {/* Image */}
      <div
        className="relative aspect-video cursor-pointer bg-neutral-100"
        onClick={() => onPreview(photo)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={imgKey}
          src={photo.path + "?v=" + imgKey}
          alt={photo.filename}
          className={`h-full w-full object-cover ${hasError ? "hidden" : ""}`}
          onError={() => setHasError(true)}
          onLoad={() => setHasError(false)}
        />
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-neutral-300">
            <ImageIcon size={28} />
            <span className="text-[10px]">Pas d&apos;image</span>
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <ZoomIn
            size={20}
            className="text-white opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Info + Upload */}
      <div className="p-2.5">
        <p className="truncate font-mono text-xs text-neutral-600">
          {photo.filename}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs text-neutral-400">
          {photo.usage}
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`mt-2 flex w-full items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${
            uploaded
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-neutral-200 text-neutral-600 hover:bg-neutral-100"
          } disabled:opacity-50`}
        >
          {uploading ? (
            <>
              <Loader2 size={12} className="animate-spin" />
              Upload...
            </>
          ) : uploaded ? (
            <>
              <Check size={12} />
              Remplace !
            </>
          ) : (
            <>
              <Upload size={12} />
              Remplacer
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default function PhotosTab() {
  const [preview, setPreview] = useState<PhotoItem | null>(null);

  const totalPhotos = PHOTO_GROUPS.reduce(
    (sum, g) => sum + g.photos.length,
    0
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-3xl font-bold text-neutral-900">
          Bibliotheque photos
        </h1>
        <p className="mt-1 text-neutral-500">
          {totalPhotos} images utilisees sur le site — cliquez sur
          &laquo;&nbsp;Remplacer&nbsp;&raquo; pour modifier une image
        </p>
      </div>

      {PHOTO_GROUPS.map((group) => (
        <div
          key={group.label}
          className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="border-b border-neutral-100 px-6 py-4">
            <h2 className="font-heading text-base font-semibold text-neutral-900">
              {group.label}
            </h2>
            <p className="mt-0.5 text-xs text-neutral-500">
              {group.photos.length} photo
              {group.photos.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {group.photos.map((photo) => (
              <PhotoCard
                key={photo.path}
                photo={photo}
                onPreview={setPreview}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Preview Modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setPreview(null)}
              className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/70 hover:text-white"
            >
              <X size={16} />
              Fermer
            </button>
            <div className="relative overflow-hidden rounded-xl bg-neutral-900">
              <div className="flex aspect-video w-full items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview.path}
                  alt={preview.filename}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-white/10 px-4 py-3 backdrop-blur-sm">
              <p className="font-mono text-sm text-white/90">{preview.path}</p>
              <p className="mt-0.5 text-xs text-white/60">{preview.usage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
