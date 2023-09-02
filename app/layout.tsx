import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boucherie Parisienne - HALAL - Douai",
  description:
    "Venez découvrir nos produits régionaux hauts de gamme choisi par votre boucher. Nous vous proposons une large gamme de produits halal de qualité allant de la boucherie au charcuterie.",
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
      </body>
    </html>
  );
}
