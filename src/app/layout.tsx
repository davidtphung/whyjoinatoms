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
  title: "I Didn't Wait — David T Phung for ATOMS Construction PM",
  description:
    "Built a kitchen. Built a platform. Found 25 cities. Created the metric. Ready to build for ATOMS.",
  openGraph: {
    title: "I Didn't Wait — David T Phung for ATOMS Construction PM",
    description:
      "Built a kitchen. Built a platform. Found 25 cities. Created the metric. Ready to build for ATOMS.",
    url: "https://whyjoinatoms.davidtphung.com",
    type: "website",
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
