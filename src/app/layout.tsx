import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { physicianSchema } from "@/lib/schema";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBookingCTA from "@/components/layout/StickyBookingCTA";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Suha Riyaz — Consultant Psychiatrist | Confidential Psychiatric Care",
  description:
    "Dr. Suha Riyaz is a Consultant Psychiatrist (MBBS, MD Psychiatry, MRCPsych) offering compassionate, confidential psychiatric care for individuals and families. Private consultations available in-clinic and online.",
  keywords: [
    "psychiatrist",
    "consultant psychiatrist",
    "mental health",
    "anxiety treatment",
    "depression treatment",
    "couples therapy",
    "psychiatrist Tumkur",
    "psychiatrist Karnataka",
    "online psychiatrist India",
    "Dr Suha Riyaz",
  ],
  openGraph: {
    title: "Dr. Suha Riyaz — Consultant Psychiatrist",
    description:
      "Compassionate, confidential psychiatric care for individuals and families seeking lasting change.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianSchema),
          }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyBookingCTA />
      </body>
    </html>
  );
}
