import React from "react";
import Image from "next/image";
import "./HomeProducts.css";
export default function HomeProducts(): JSX.Element {
  return (
    <div className="homeproducts">
      <div className="homeproducts__img">
        <Image
          src="/assets/produits-etal1.webp"
          alt="Certification viande Charolaise AVS"
          width={425}
          height={440}
        />
        <Image
          src="/assets/produits-etal2.webp"
          alt="Certification viande Charolaise AVS"
          width={425}
          height={440}
        />
      </div>
      <h2>
        Cliquez ici pour trouver toutes une sélection de produits de qualité
        afin de vous aider dans votre choix
      </h2>
    </div>
  );
}
