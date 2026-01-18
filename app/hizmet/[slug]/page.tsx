import { Metadata } from "next";
import HizmetClient from "./HizmetClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const response = await directus.request(
            readItems('services', {
                fields: ['Title', 'Short_Description'],
                filter: { Slug: { _eq: params.slug }, status: { _eq: 'published' } },
                limit: 1
            })
        );
        const service = response?.[0] as any;
        return {
            title: service ? `${service.Title} | EK Hukuk` : "Hizmet Bulunamadı | EK Hukuk",
            description: service?.Short_Description || "Profesyonel hukuk çözümleri.",
        };
    } catch (error) {
        return { title: "Hizmetlerimiz | EK Hukuk" };
    }
}

export default async function Page({ params }: { params: { slug: string } }) {
    let service = null;
    try {
        const response = await directus.request(
            readItems('services', {
                fields: ['*', { faqs: ['question', 'answer'] }, { features: ['title', 'description'] }],
                filter: {
                    Slug: { _eq: params.slug },
                    status: { _eq: 'published' }
                },
                limit: 1
            })
        );
        if (response && response.length > 0) {
            service = response[0];
        }
    } catch (error) {
        console.error("Error fetching service on server:", error);
    }

    return <HizmetClient params={params} initialService={service as any} />;
}
