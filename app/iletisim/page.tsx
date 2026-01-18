import { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
    title: "İletişim | Güçlü Temsil, Uzman Danışmanlık | Prestige Law",
    description: "Hukuki süreçlerinizi başlatmak veya profesyonel danışmanlık almak için bizimle iletişime geçin.",
};

export default function Page() {
    return <IletisimClient />;
}
