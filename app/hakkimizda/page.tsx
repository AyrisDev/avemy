import { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
    title: "Kurumsal | EK Hukuk & Danışmanlık",
    description: "EK Hukuk Marmaris'in kuruluşu, uzman avukat kadromuzun vizyonu ve şeffaf hukuk anlayışımız hakkında bilgi edinin.",
    alternates: {
        canonical: "https://aveminakarabudak.com/hakkimizda",
    },
};

export default function Page() {
    return <HakkimizdaClient />;
}
