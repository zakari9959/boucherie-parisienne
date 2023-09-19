import React from "react";
import Image from "next/image";
import "./ProduitsTraiteur.css";

export default function ProduitsTraiteur() {
  const traiteur = [
    { id: 1, src: "/assets/traiteur1.webp" },
    { id: 2, src: "/assets/traiteur2.webp" },
    { id: 3, src: "/assets/traiteur3.webp" },
    { id: 4, src: "/assets/traiteur4.webp" },
    { id: 5, src: "/assets/traiteur5.webp" },
    { id: 6, src: "/assets/traiteur6.webp" },
    { id: 7, src: "/assets/traiteur7.webp" },
    { id: 8, src: "/assets/traiteur8.webp" },
    { id: 9, src: "/assets/traiteur9.webp" },
    { id: 10, src: "/assets/traiteur10.webp" },
    { id: 11, src: "/assets/traiteur11.webp" },
    { id: 12, src: "/assets/traiteur12.webp" },
  ];
  return (
    <div className="produitstraiteur">
      <h3>Créations Fait Maison</h3>
      <div className="produitstraiteur__list">
        {traiteur.map((trait, index) => (
          <Image
            key={trait.id}
            src={trait.src}
            alt={`Plats traiteur ${trait.id}`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}
