import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { Page } from "../../types";

export default function Header(): JSX.Element {
  const title: JSX.Element = (
    <h1>
      Boucherie Parisienne
      <br /> - HALAL - <br />
      Douai
    </h1>
  );
  const pages: Page[] = [
    { path: "/", title: "Accueil" },
    { path: "/produits", title: "Produits" },
    { path: `/news`, title: "Actualités" },
    { path: `/contact`, title: "Réservation" },
    { path: `/horaires`, title: "Horaires" },
  ];

  return (
    <>
      <header>
        <Link href="/">{title}</Link>
        <Image
          className="logo"
          src="/assets/logo.webp"
          alt="logo"
          width={200}
          height={200}
        />
        <nav>
          <ul className="navbar">
            {pages.map((page) => (
              <li key={page.path}>
                <Link href={page.path}>{page.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
