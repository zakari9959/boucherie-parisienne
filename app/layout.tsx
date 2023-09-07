import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boucherie Parisienne - HALAL - Douai",
  description:
    "Venez découvrir nos produits régionaux hauts de gamme choisi par votre boucher. Nous vous proposons une large gamme de produits halal de qualité allant de la boucherie au charcuterie.",

  openGraph: {
    type: "website",
    locale: "fr",
    url: "https://boucherieparisiennedouai.com",
    title: "Boucherie Parisienne - HALAL - Douai",
    description:
      "Venez découvrir nos produits régionaux hauts de gamme choisi par votre boucher. Nous vous proposons une large gamme de produits halal de qualité allant de la boucherie au charcuterie.",
    images: [
      {
        url: "https://boucherieparisiennedouai.com/assets/devanture.webp",
        width: 800,
        height: 600,
        alt: "Boucherie Parisienne - Douai - HALAL",
      },
    ],
  },
  twitter: {
    title: "Boucherie Parisienne - HALAL - Douai",
    site: "@boucherieparisiennedouai",
    description:
      "Venez découvrir nos produits régionaux hauts de gamme choisi par votre boucher. Nous vous proposons une large gamme de produits halal de qualité allant de la boucherie au charcuterie.",
    images: [
      {
        url: "https://boucherieparisiennedouai.com/assets/devanture.webp",
        width: 800,
        height: 600,
        alt: "Boucherie Parisienne - Douai - HALAL",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
