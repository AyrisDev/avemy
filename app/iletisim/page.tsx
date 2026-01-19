import { Metadata } from "next";
import IletisimClient from "./IletisimClient";

export const metadata: Metadata = {
    title: "İletişim | EK Hukuk Muğla Marmaris",
    description: "Muğla Marmaris'teki ofisimiz için adres, telefon ve iletişim bilgilerimiz. Profesyonel hukuki danışmanlık randevusu için hemen ulaşın.",
    alternates: {
        canonical: "https://aveminakarabudak.com/iletisim",
    },
};

export default function Page() {
    return <IletisimClient />;
}
