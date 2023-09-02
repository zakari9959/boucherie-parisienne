import React from "react";
import Image from "next/image";
import "./ProduitsViandes.css";
export default function ProduitsViandes() {
  const viandes = [
    { id: 1, src: "/assets/viande1.webp" },
    { id: 2, src: "/assets/viande2.webp" },
    { id: 3, src: "/assets/viande3.webp" },
    { id: 4, src: "/assets/viande4.webp" },
    { id: 5, src: "/assets/viande5.webp" },
    { id: 6, src: "/assets/viande6.webp" },
    { id: 7, src: "/assets/viande7.webp" },
    { id: 8, src: "/assets/viande8.webp" },
    { id: 9, src: "/assets/viande9.webp" },
  ];
  return (
    <div className="produitsviandes">
      <h2>Des Viandes d&apos;Exceptions</h2>
      <div className="produitsviandes__img">
        {viandes.map((viande, index) => (
          <Image
            key={viande.id}
            src={viande.src}
            alt={`Viande ${viande.id}`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
}
