import { Metadata } from "next";
import ServicesListClient from "./ServicesListClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | Marmaris Hukuki Danışmanlık & Avukatlık",
    description: "Ticaret hukuku, aile hukuku, gayrimenkul ve ceza hukuku alanlarında Marmaris merkezli profesyonel avukatlık hizmetleri.",
    alternates: {
        canonical: "https://ekhukuk.com/hizmetlerimiz",
    },
};

export default async function Page() {
    let services: any[] = [];
    try {
        services = await directus.request(
            readItems('services', {
                fields: ['id', 'Slug', 'Title', 'Short_Description', 'Icon'],
                sort: ['sort'],
                filter: {
                    status: { _eq: 'published' }
                }
            })
        );
    } catch (error) {
        console.error("Directus services fetch error on server:", error);
    }

    return <ServicesListClient initialServices={services as any} />;
}
