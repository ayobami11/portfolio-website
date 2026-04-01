import { MetadataRoute } from 'next'

const BASE_URL = 'https://ayobami-tunwase.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/resume`, lastModified: new Date() },
  ]
}
