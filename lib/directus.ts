import { createDirectus, rest, staticToken } from '@directus/sdk';
import { unstable_cache } from 'next/cache';

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://directus-qs8okkwwg80s8cwwo4oo44kk.65.109.236.58.sslip.io';
const DIRECTUS_TOKEN = process.env.DIRECTUS_TOKEN;

let client = createDirectus(DIRECTUS_URL).with(rest());

if (DIRECTUS_TOKEN) {
    client = client.with(staticToken(DIRECTUS_TOKEN));
}

// Cached request helper with proper generic type
export const cachedRequest = <T>(key: string, request: any): Promise<T> => 
    unstable_cache(
        async () => client.request(request),
        [key],
        { revalidate: 3600, tags: [key] }
    )() as Promise<T>;

// Function to get image URL
export const getDirectusImage = (id: string) => {
    if (!id) return null;
    return `${DIRECTUS_URL}/assets/${id}`;
};

export default client;
