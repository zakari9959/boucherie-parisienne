import React from "react";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <Image
        src="/assets/horaires-footer2.webp"
        alt="Boucherie Parisienne - Douai - HALAL"
        width={200}
        height={200}
      />
      <Image
        src="/assets/horaires-footer.webp"
        alt="Boucherie Parisienne - Douai - HALAL"
        width={200}
        height={200}
      />
    </footer>
  );
}
