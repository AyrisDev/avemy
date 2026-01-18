import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const metadata: Metadata = {
    title: "Hukuk Rehberi | Güncel Makaleler | AVEMY",
    description: "Hukuki gelişmeleri, uzman makalelerini ve yargı kararlarını takip edin.",
};

export default async function Page() {
    let posts: any[] = [];
    try {
        posts = await directus.request(
            readItems('posts', {
                fields: ['id', 'slug', 'title', 'seo_description', 'date_created', 'featured_image'],
                sort: ['-date_created'],
                filter: {
                    status: { _eq: 'published' }
                }
            })
        );
    } catch (error) {
        console.error("Directus fetch error on server:", error);
    }

    return <BlogListClient initialPosts={posts as any} />;
}
