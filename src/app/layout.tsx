import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIDH SALES – SKF & NTN Bearing Supplier | Industrial Hardware, Baddi H.P.",
  description:
    "SIDH SALES – Trusted industrial bearing supplier in Baddi, Himachal Pradesh since 2008. SKF bearings, NTN bearings, hydraulic hose pipes, V-belts, power tools, maintenance products. Fast delivery for pharma, packaging & manufacturing industries.",
  keywords: [
    "SKF bearing supplier Baddi",
    "NTN bearing supplier Himachal Pradesh",
    "industrial hardware supplier Baddi",
    "industrial bearing supplier",
    "pharma industrial supplier",
    "emergency industrial supply",
    "industrial maintenance products",
    "fast delivery industrial supplier",
    "SIDH SALES Baddi",
    "bearing supplier H.P.",
  ],
  openGraph: {
    title: "SIDH SALES – Industrial Bearing & Maintenance Supply Partner",
    description:
      "SKF & NTN bearing specialist serving pharma, packaging and manufacturing industries since 2008. Based in Baddi, H.P.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
