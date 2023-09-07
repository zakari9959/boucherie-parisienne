import React from "react";
import NewsFb from "../components/NewsFb/NewsFb";
import Script from "next/script";
import "./News.css";
export default function News(): JSX.Element {
  return (
    <main className="news">
      <Script src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0&appId=1735998496831620&autoLogAppEvents=1" />
      <h2>Actualités</h2>
      <p>
        Toutes les nouveautés et actualités sont à retrouver sur notre page
        Facebook, avec notament les nouveaux arrivage ou les changements
        d&apos;horaires. Celle-ci est réguliérement mise à jour, n&apos;hésitez
        pas à vous abonnez afin de recevoir une notification.
      </p>
      <NewsFb width="700" height="400" />
    </main>
  );
}
