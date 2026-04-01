import type { Metadata } from "next";
import { DM_Serif_Display, Source_Serif_4, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "David T Phung | Construction Project Manager",
  description:
    "Construction PM with 7+ years managing commercial projects. Commercial kitchen MEP specialist. Built a kitchen from the ground up, then ran the operation inside it.",
  openGraph: {
    title: "David T Phung | Construction Project Manager",
    description:
      "7+ years commercial construction. Kitchen MEP specialist. Built a kitchen and ran the operation.",
    url: "https://whyjoinatoms.davidtphung.com",
    type: "website",
    images: [
      {
        url: "https://whyjoinatoms.davidtphung.com/poster-physical-dynamism.jpg",
        width: 1280,
        height: 720,
        alt: "David T Phung, Construction Project Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David T Phung | Construction Project Manager",
    description:
      "7+ years commercial construction. Kitchen MEP specialist. Built a kitchen and ran the operation.",
    images: ["https://whyjoinatoms.davidtphung.com/poster-physical-dynamism.jpg"],
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
      className={`${dmSerif.variable} ${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
