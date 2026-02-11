import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aveminakarabudak.com"),
  title: {
    default: "Av. Emina KARABUDAK | EK Hukuk & Danışmanlık | Muğla Marmaris Avukat",
    template: "%s | Av. Emina KARABUDAK | EK Hukuk"
  },
  description: "Av. Emina KARABUDAK liderliğindeki EK Hukuk, Muğla Marmaris merkezli olarak Ceza, Aile, Gayrimenkul ve Ticaret hukuku alanlarında uzman avukat kadrosuyla profesyonel danışmanlık sunar.",
  keywords: ["Muğla Ceza Avukatı", "Marmaris Ceza Avukatı", "Emina Karabudak", "Marmaris Avukat", "Muğla Avukat", "Marmaris Boşanma Avukatı", "Muğla Boşanma Avukatı", "Gayrimenkul Hukuku Muğla", "EK Hukuk"],
  authors: [{ name: "Av. Emina KARABUDAK" }],
  creator: "EK Hukuk",
  publisher: "EK Hukuk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://aveminakarabudak.com",
    siteName: "EK Hukuk & Danışmanlık",
    title: "Av. Emina KARABUDAK | EK Hukuk & Danışmanlık | Marmaris Muğla Avukat",
    description: "Muğla Marmaris'te Av. Emina KARABUDAK eşliğinde profesyonel hukuki çözümler. Ceza, Aile ve Gayrimenkul hukuku uzmanlığı.",
    images: [
      {
        url: "/ek_logo_og.png",
        width: 1200,
        height: 630,
        alt: "EK Hukuk & Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EK Hukuk & Danışmanlık | Muğla Marmaris Hukuk Bürosu",
    description: "Türkiye genelinde profesyonel hukuki çözümler.",
    images: ["/ek_logo_og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-id", // User should replace this
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Script
          defer
          src="https://insight.ayris.tech/script.js"
          data-website-id="01ce1f67-349d-4df9-b120-593f7edc5572"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
