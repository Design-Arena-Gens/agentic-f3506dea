import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comparatif Casques Audio Premium",
  description: "Comparaison complète des meilleurs casques audio haut de gamme pour l'écosystème Apple et PC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
