import React from "react";
import ProduitsViandes from "../components/ProduitsViandes/ProduitsViandes";
import ProduitsTraiteur from "../components/ProduitsTraiteur/ProduitsTraiteur";
import ProduitsRotisserie from "../components/ProduitsRotisserie/ProduitsRotisserie";
import "./Produits.css";
export default function Produits(): JSX.Element {
  return (
    <main>
      <div className="produits">
        <ProduitsViandes />
        <ProduitsTraiteur />
        <ProduitsRotisserie />
      </div>
    </main>
  );
}