import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Header.css";
import HeaderLink from "./HeaderLink";

export default function Header(): JSX.Element {
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
          <HeaderLink />
        </nav>
      </header>
    </>
  );
}
