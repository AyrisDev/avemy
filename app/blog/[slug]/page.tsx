import { Metadata } from "next";
import BlogClient from "./BlogClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const response = await directus.request(
            readItems('posts', {
                fields: ['title', 'seo_description'],
                filter: { slug: { _eq: slug }, status: { _eq: 'published' } },
                limit: 1
            })
        );
        const post = response?.[0] as any;
        return {
            title: post ? `${post.title} | EK Hukuk` : "Yazı Bulunamadı | EK Hukuk",
            description: post?.seo_description || "Hukuk rehberi makalesi.",
        };
    } catch (error) {
        return { title: "Hukuk Rehberi | EK Hukuk" };
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post = null;
    try {
        const response = await directus.request(
            readItems('posts', {
                fields: ['*', { category: ['name'] }],
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
        console.error("Error fetching post on server:", error);
    }

    return <BlogClient params={{ slug }} initialPost={post as any} />;
}
