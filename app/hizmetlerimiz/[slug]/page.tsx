import { Metadata } from "next";
import HizmetClient from "./HizmetClient";
import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

import { defaultPractices } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    try {
        const response = await directus.request(
            readItems('services', {
                fields: ['Title', 'Short_Description'],
                filter: { Slug: { _eq: slug }, status: { _eq: 'published' } },
                limit: 1
            })
        );
        let service = response?.[0] as any;

        if (!service) {
            service = defaultPractices.find(p => p.Slug === slug);
        }

        const title = service ? `${service.Title} | EK Hukuk Marmaris` : "Hizmet Bulunamadı";
        const description = service?.Short_Description || "Marmaris EK Hukuk bünyesinde sunulan uzman avukatlık ve hukuki danışmanlık hizmeti.";

        return {
            title,
            description,
            alternates: {
                canonical: `https://aveminakarabudak.com/hizmetlerimiz/${slug}`,
            },
            openGraph: {
                title,
                description,
                url: `https://aveminakarabudak.com/hizmetlerimiz/${slug}`,
            }
        };
    } catch (error) {
        return { title: "Hizmetlerimiz | EK Hukuk" };
    }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let service = null;
    try {
        const response = await directus.request(
            readItems('services', {
                fields: ['*', { faqs: ['question', 'answer'] }, { features: ['title', 'description'] }],
                filter: {
                    Slug: { _eq: slug },
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

    if (!service) {
        service = defaultPractices.find(p => p.Slug === slug);
    }

    return <HizmetClient params={{ slug }} initialService={service as any} />;
}
