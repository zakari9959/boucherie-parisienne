import React from "react";
import Image from "next/image";
import "./ProduitsRotisserie.css";

export default function ProduitsRotisserie() {
  return (
    <div className="produitsrotisserie">
      <h2>La Rôtisserie</h2>
      <p>
        Nous vous proposons un service rôtisserie tout les dimanches midi,
        pensez à réserver avant
      </p>
      <Image
        src="/assets/rotisserie1.webp"
        alt="Poulêt fermier rôti les dimanches, pensez à réserver"
        width={425}
        height={540}
      />
    </div>
  );
}
