"use client";
import React from "react";
import Link from "next/link";
import { Page } from "../../types";
import { usePathname } from "next/navigation";

export default function HeaderLink() {
  const currentRoute = usePathname();
  const pages: Page[] = [
    { path: "/", title: "Accueil" },
    { path: "/produits", title: "Produits" },
    { path: `/news`, title: "Actualités" },
    { path: `/contact`, title: "Réservation" },
    { path: `/horaires`, title: "Horaires" },
  ];
  return (
    <ul className="navbar">
      {pages.map((page) => (
        <li key={page.path}>
          <Link
            href={page.path}
            className={currentRoute === page.path ? "link--active" : ""}
          >
            {page.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
