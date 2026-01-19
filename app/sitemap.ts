import { MetadataRoute } from 'next'
import { defaultPractices } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aveminakarabudak.com'

    // Main pages
    const routes = [
        '',
        '/hakkimizda',
        '/hizmetlerimiz',
        '/makaleler',
        '/iletisim',
        '/kvkk',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic service pages
    const serviceRoutes = defaultPractices.map((service) => ({
        url: `${baseUrl}/hizmetlerimiz/${service.Slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...serviceRoutes]
}
