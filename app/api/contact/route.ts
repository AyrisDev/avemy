import { createDirectus, rest, staticToken, createItem } from '@directus/sdk';
import { NextResponse } from 'next/server';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || '';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN || '';

const client = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(DIRECTUS_TOKEN));

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Map the form data to Directus field names
        const directusData = {
            ad_soyad: data.name,
            email: data.email,
            telefon: data.phone || "",
            topic: data.subject,
            mesaj: data.message,
            okundu_mu: false
        };

        const result = await client.request(createItem('mail', directusData));

        return NextResponse.json({ success: true, data: result });
    } catch (error: any) {
        console.error('Directus API Error:', error);
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to send message' },
            { status: 500 }
        );
    }
}
