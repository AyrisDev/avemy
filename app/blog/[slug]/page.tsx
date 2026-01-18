import { Metadata } from "next";
import BlogClient from "./BlogClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const response = await directus.request(
            readItems('posts', {
                fields: ['title', 'excerpt'],
                filter: { slug: { _eq: params.slug }, status: { _eq: 'published' } },
                limit: 1
            })
        );
        const post = response?.[0] as any;
        return {
            title: post ? `${post.title} | AVEMY` : "Yazı Bulunamadı | AVEMY",
            description: post?.excerpt || "Hukuk rehberi makalesi.",
        };
    } catch (error) {
        return { title: "Hukuk Rehberi | AVEMY" };
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    let post = null;
    try {
        const response = await directus.request(
            readItems('posts', {
                fields: ['*', { category: ['name'] }],
                filter: {
                    slug: { _eq: params.slug },
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

    return <BlogClient params={params} initialPost={post as any} />;
}
