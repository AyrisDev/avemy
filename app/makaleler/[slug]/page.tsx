import { Metadata } from "next";
import MakaleDetailClient from "./MakaleDetailClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const response = await directus.request(
            readItems('makale', {
                fields: ['title', 'seo_description'],
                filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
                limit: 1
            })
        );
        const post = response?.[0] as any;
        return {
            title: post ? `${post.title} | EK Hukuk` : "Makale Bulunamadı | EK Hukuk",
            description: post?.seo_description || "Hukuki analiz ve makale.",
        };
    } catch (error) {
        return { title: "Makaleler | EK Hukuk" };
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post = null;
    try {
        const response = await directus.request(
            readItems('makale', {
                fields: ['id', 'slug', 'title', 'content', 'seo_description', 'date_created', 'category'],
                filter: {
                    slug: { _eq: slug },
                    status: { _eq: 'published' }
                },
                limit: 1
            })
        );
        if (response && response.length > 0) {
            post = response[0];
        }
    } catch (error) {
        console.error("Error fetching article on server:", error);
    }

    return <MakaleDetailClient params={{ slug }} initialPost={post as any} />;
}
