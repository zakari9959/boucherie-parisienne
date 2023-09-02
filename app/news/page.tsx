import React from "react";
import NewsFb from "../components/NewsFb/NewsFb";
import Script from "next/script";
export default function Produits(): JSX.Element {
  return (
    <main>
      <Script src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0&appId=1735998496831620&autoLogAppEvents=1" />
      <NewsFb width="400" height="400" />
    </main>
  );
}
