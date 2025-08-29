import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { Footer } from "./components";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Vault",
  description: "A curated gems for design and engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
