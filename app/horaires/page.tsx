import React from "react";
import Hours from "../components/Hours/Hours";
import "./Horaires.css";

export default function Horaires(): JSX.Element {
  return (
    <main className="horaires">
      <h2>Horaires</h2>
      <Hours />
    </main>
  );
}
