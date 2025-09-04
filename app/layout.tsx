import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import { Footer } from "@/src/components";

import "./globals.css";

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Vault",
  description: "A curated resources for designers and engineers",
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
        <main className="min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main> 
      </body>
    </html>
  );
}
