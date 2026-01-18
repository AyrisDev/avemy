import { Metadata } from "next";
import HakkimizdaClient from "./HakkimizdaClient";

export const metadata: Metadata = {
    title: "Hakkımızda | Prestij ve Mükemmeliyet | Prestige Law",
    description: "Prestige Law International'ın hikayesi, değerleri ve hukuk sektöründeki eşsiz vizyonu.",
};

export default function Page() {
    return <HakkimizdaClient />;
}
