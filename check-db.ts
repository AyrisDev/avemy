import { createDirectus, rest, readCollections } from '@directus/sdk';

const directus = createDirectus('http://directus-qs8okkwwg80s8cwwo4oo44kk.65.109.236.58.sslip.io').with(rest());

async function checkCollections() {
    try {
        const collections = await directus.request(readCollections());
        console.log("Collections:", collections.map(c => c.collection));
    } catch (e: any) {
        console.error("Error connecting to Directus:", e.message || e);
    }
}

checkCollections();
