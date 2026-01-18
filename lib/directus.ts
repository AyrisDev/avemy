import { createDirectus, rest, staticToken } from '@directus/sdk';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

const client = createDirectus(DIRECTUS_URL).with(rest());

if (DIRECTUS_TOKEN) {
    client.with(staticToken(DIRECTUS_TOKEN));
}

// Function to get image URL
export const getDirectusImage = (id: string) => {
    if (!id) return null;
    return `${DIRECTUS_URL}/assets/${id}`;
};

export default client;
