import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const RobotoCondensed = Roboto_Condensed({
  weight: ["400", "900"],
});

export const metadata: Metadata = {
  title: "Qr Codes by SM",
  description: "Générateur de QR code by Samuel Marone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${RobotoCondensed.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
