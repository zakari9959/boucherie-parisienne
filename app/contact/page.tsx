import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Contact.css";

export default function Contact(): JSX.Element {
  return (
    <main className="contact">
      <h2>Réservation</h2>
      <p>
        Pour toute demande d&apos;information ou de réservation, veuillez
        simplement saisir votre adresse e-mail et ajouter votre message afin que
        nous puissions vous contacter et répondre à votre requête.
      </p>
      <ContactForm />
    </main>
  );
}
