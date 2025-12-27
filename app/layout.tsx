import type { Metadata } from "next";
import { Allura, Cormorant_Garamond } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

export const script = Allura({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Lucia e Davide",
  description: "Matrimonio di Lucia e Davide",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${script.variable} ${serif.variable}`}>
      <body className="bg-background text-text font-serif">{children}</body>
    </html>
  );
}
