import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

import { Services } from "./components/sections/Services";
import { Testimonials } from "./components/sections/Testimonials";
import { FloatingActions } from "./components/layout/FloatingActions";
import { Footer } from "./components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Av. Emina KARABUDAK | EK Hukuk | Muğla Marmaris Ceza & Boşanma Avukatı",
  description: "Av. Emina KARABUDAK yönetimindeki EK Hukuk, Muğla Marmaris'te ceza, aile, boşanma ve gayrimenkul hukuku alanlarında profesyonel hukuki danışmanlık sunar.",
  alternates: {
    canonical: "https://aveminakarabudak.com",
  },
};

export const revalidate = 3600; // Cache the page for 1 hour

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0A0A0A] selection:bg-gold selection:text-void">
      <Navbar />
      <Hero />

      <Services />
      <Testimonials />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "EK Hukuk & Danışmanlık",
            "image": "https://aveminakarabudak.com/ek_logo.png",
            "@id": "https://aveminakarabudak.com",
            "url": "https://aveminakarabudak.com",
            "telephone": "+905421458713",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Marmaris",
              "addressLocality": "Muğla",
              "postalCode": "48700",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.855,
              "longitude": 28.273
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
              ],
              "opens": "09:00",
              "closes": "18:30"
            }
          })
        }}
      />
      <FloatingActions />
    </main>
  );
}
