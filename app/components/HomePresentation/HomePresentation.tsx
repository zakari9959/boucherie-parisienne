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
        qualité supérieure, soigneusement sélectionnés par notre boucher
        expérimenté. Notre gamme variée comprend une multitude de viandes issues
        de boeuf, de veau et d&apos;agneau. Plongez dans l&apos;univers de nos
        produits et explorez l&apos;art artisanal de la boucherie.
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
        <a href="https://www.acheteradouai.fr/promotions">acheteraDouai.fr</a>
      </p>
    </div>
  );
}
