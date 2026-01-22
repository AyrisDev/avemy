import { Metadata } from "next";
export const revalidate = 0;
import MakalelerListClient from "./MakalelerListClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const metadata: Metadata = {
    title: "Makaleler & Hukuki Analizler | EK Hukuk Akademik",
    description: "Güncel hukuki gelişmeler, yargıtay kararları ve akademik analizlerimizi içeren makalelerimizi inceleyin.",
    alternates: {
        canonical: "https://aveminakarabudak.com/makaleler",
    },
};

export default async function Page() {
    let articles: any[] = [];
    try {
        // Fetching from 'posts' but we can filter by a category if needed. 
        // For now, fetching all and we'll label them as articles.
        articles = await directus.request(
            readItems('makale', {
                fields: ['id', 'slug', 'title', 'seo_description', 'date_created', 'category'],
                sort: ['-date_created'],
                filter: {
                    status: { _eq: 'published' }
                }
            })
        );
    } catch (error) {
        console.error("Directus articles fetch error on server:", error);
    }

    return <MakalelerListClient initialArticles={articles as any} />;
}
