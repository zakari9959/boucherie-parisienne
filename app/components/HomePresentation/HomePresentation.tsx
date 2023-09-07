import React from "react";
import Image from "next/image";
import "./HomePresentation.css";
export default function HomePresentation(): JSX.Element {
  return (
    <div className="presentation">
      <Image
        src="/assets/presentation.webp"
        alt="Logo de La Boucherie Parisienne"
        width={425}
        height={425}
        className="presentation__img"
      />
      <h2>Découvrez l&apos;excellence de la Boucherie Parisienne</h2>
      <p>
        La Boucherie Parisienne vous propose une vaste sélection de produits de
        qualité, soigneusement sélectionnés par notre artisan boucher. Vous
        aurez la possibilité de choisir des pièces de viandes, ainsi que des
        produits traiteur et des charcuteries fait maison. Nous travaillons le
        boeuf, le veau et l&apos;agneau, tous issues de l&apos;agriculture
        française. Plongez dans l&apos;univers de nos produits et explorez
        l&apos;art artisanal de la boucherie.
      </p>
      <Image
        src="/assets/devanture.webp"
        alt="Photo de la devanture de La Boucherie Parisienne"
        width={425}
        height={259}
      />
      <p>
        Situés sur la charmante Rue de Paris à Douai, nous vous offrons
        l&apos;avantage d&apos;une proximité avec de nombreux autres commerces,
        créant ainsi une expérience de shopping complète et pratique.
        N&apos;hésitez pas à aller voir la liste sur
        <a href="https://www.douaicommerce.com/#R">douaicommerce.com</a> ou le
        site de commande regroupant de tous les commerces de Douai sur
        <a href="https://www.acheteradouai.fr/promotions">acheteradouai.fr</a>
      </p>
    </div>
  );
}
