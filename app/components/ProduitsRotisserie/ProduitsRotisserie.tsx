import React from "react";
import Image from "next/image";
import "./ProduitsRotisserie.css";

export default function ProduitsRotisserie() {
  return (
    <div className="produitsrotisserie">
      <h3>La Rôtisserie</h3>
      <p>
        Nous vous proposons un service de rôtisserie tous les dimanches midi.
        Pensez à réserver à l&apos;avance.
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
