import React from "react";
import Image from "next/image";
import "./Hours.css";

export default function Hours() {
  return (
    <Image
      className="hours__img"
      src="/assets/horaires.webp"
      alt="logo"
      width={350}
      height={300}
      priority={true}
    />
  );
}
