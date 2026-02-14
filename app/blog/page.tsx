import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import directus, { cachedRequest } from "@/lib/directus";
import { readItems } from "@directus/sdk";

export const revalidate = 3600; // Cache the blog list for 1 hour

export const metadata: Metadata = {
    title: "Hukuk Rehberi | Güncel Makaleler | EK Hukuk",
    description: "Hukuki gelişmeleri, uzman makalelerini ve yargı kararlarını takip edin.",
};

export default async function Page() {
    let posts: any[] = [];

    try {
        posts = await cachedRequest('blog-posts', 
            readItems('posts', {
                fields: ['id', 'slug', 'title', 'seo_description', 'date_created', 'category'],
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
