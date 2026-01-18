import { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
    title: "Hakkımızda | Prestij ve Mükemmeliyet | EK Hukuk",
    description: "EK Hukuk & Danışmanlık'ın hikayesi, değerleri ve hukuk sektöründeki eşsiz vizyonu.",
};

export default function Page() {
    return <HakkimizdaClient />;
}
