import React from "react";
import ProduitsViandes from "../components/ProduitsViandes/ProduitsViandes";
import ProduitsTraiteur from "../components/ProduitsTraiteur/ProduitsTraiteur";
import ProduitsRotisserie from "../components/ProduitsRotisserie/ProduitsRotisserie";
import "./Produits.css";
export default function Produits(): JSX.Element {
  return (
    <main className="produits">
      <h2>Produits</h2>
      <div className="produits__list">
        <ProduitsViandes />
        <ProduitsTraiteur />
        <ProduitsRotisserie />
      </div>
    </main>
  );
}
