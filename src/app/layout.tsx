import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "I Think in Blueprints. I Decide in Data. | David T Phung for ATOMS",
  description:
    "The Construction PM at the intersection of creative problem solving and data-driven process. Built the platform, ran the analysis, created the metric.",
  openGraph: {
    title: "I Think in Blueprints. I Decide in Data. | David T Phung for ATOMS",
    description:
      "The Construction PM at the intersection of creative problem solving and data-driven process. Built the platform, ran the analysis, created the metric.",
    url: "https://whyjoinatoms.davidtphung.com",
    type: "website",
    images: [
      {
        url: "https://whyjoinatoms.davidtphung.com/poster-day-one.png",
        width: 1280,
        height: 720,
        alt: "ATOMS — Day One. David T Phung for Construction PM.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "I Think in Blueprints. I Decide in Data. | David T Phung for ATOMS",
    description:
      "The Construction PM at the intersection of creative problem solving and data-driven process.",
    images: ["https://whyjoinatoms.davidtphung.com/poster-day-one.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
