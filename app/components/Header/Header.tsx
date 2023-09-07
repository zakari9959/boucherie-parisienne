import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import { Page } from "../../types";

export default function Header(): JSX.Element {
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
        <Link href="/">
          <Image
            className="logo"
            src="/assets/logo.webp"
            alt="Boucherie Parisienne - Douai - HALAL"
            width={200}
            height={200}
            priority={true}
          />
        </Link>
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
