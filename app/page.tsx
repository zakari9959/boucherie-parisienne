import React from "react";
import Link from "next/link";
import "./Home.css";
import HomePresentation from "./components/HomePresentation/HomePresentation";
import HomeProducts from "./components/HomeProducts/HomeProducts";
import Script from "next/script";
import NewsFB from "./components/NewsFb/NewsFb";
import HomeHours from "./components/Hours/Hours";
import ContactForm from "./components/ContactForm/ContactForm";

export default function Home(): JSX.Element {
  return (
    <main>
      <h1>Boucherie Parisienne - Douai - HALAL</h1>
      <HomeHours />
      <Link href="/produits">
        <HomeProducts />
      </Link>
      <HomePresentation />
      <Script src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0&appId=1735998496831620&autoLogAppEvents=1" />
      <a href="https://www.facebook.com/boucherieparisiennedouai">
        <h2>
          Retrouvez toutes les actualités et nouveautés sur notre page Facebook
        </h2>
      </a>
      <NewsFB width="500" height="500" />
      <h3>
        Pour toute réservation ou demande d&apos;information, utilisez notre
        formulaire de contact
      </h3>
      <ContactForm />
    </main>
  );
}
