import { Metadata } from "next";
import MakalelerListClient from "./MakalelerListClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const metadata: Metadata = {
    title: "Akademik Makaleler & Hukuki Analizler | Prestige Law",
    description: "Hukuk dünyasındaki güncel gelişmeleri, derinlemesine analizleri ve çözüm önerilerini içeren akademik makalelerimiz.",
};

export default async function Page() {
    let articles: any[] = [];
    try {
        // Fetching from 'posts' but we can filter by a category if needed. 
        // For now, fetching all and we'll label them as articles.
        articles = await directus.request(
            readItems('posts', {
                fields: ['id', 'slug', 'title', 'seo_description', 'date_created', 'featured_image', 'category'],
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
