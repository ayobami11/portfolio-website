import './globals.css';

import { Metadata } from 'next';
import { Josefin_Sans, Roboto_Slab, Poppins, Space_Mono } from 'next/font/google';
import { AppContextWrapper } from '@/contexts/app';

const BASE_URL = 'https://ayobami-tunwase.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Ayobami Tunwase — Frontend Web Developer',
    template: '%s | Ayobami Tunwase',
  },
  description: 'Frontend Web Developer based in Lagos, Nigeria, crafting performant, accessible web experiences with React & Next.js. Open to new opportunities.',
  applicationName: 'Ayobami Tunwase',
  keywords: [
    'Frontend Web Developer', 'React Developer', 'Next.js Developer',
    'TypeScript Developer', 'Portfolio', 'Lagos Nigeria', 'Ayobami Tunwase',
    'Web Developer Nigeria', 'Tailwind CSS', 'JavaScript Developer',
  ],
  authors: [{ name: 'Ayobami Tunwase', url: BASE_URL }],
  creator: 'Ayobami Tunwase',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Ayobami Tunwase — Frontend Web Developer',
    description: 'Frontend Web Developer based in Lagos, Nigeria, crafting performant, accessible web experiences with React & Next.js.',
    url: BASE_URL,
    siteName: 'Ayobami Tunwase',
    locale: 'en-US',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ayobami Tunwase — Frontend Web Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayobami Tunwase — Frontend Web Developer',
    description: 'Frontend Web Developer based in Lagos, Nigeria, crafting performant, accessible web experiences with React & Next.js.',
    creator: '@TunwaseAyobami',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '700'],
  variable: '--font-josefin-sans',
  subsets: ['latin'],
});

const robotoSlab = Roboto_Slab({
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto-slab',
  subsets: ['latin'],
});

const poppins = Poppins({
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
});

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  variable: '--font-space-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      className={`${josefinSans.variable} ${robotoSlab.variable} ${poppins.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Ayobami Tunwase',
              jobTitle: 'Frontend Web Developer',
              url: BASE_URL,
              email: 'ayobami.tunwase@gmail.com',
              address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
              sameAs: [
                'https://github.com/ayobami11',
                'https://linkedin.com/in/ayobami-tunwase',
                'https://x.com/TunwaseAyobami',
              ],
              knowsAbout: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Web Development'],
            }),
          }}
        />
        <AppContextWrapper>
          {children}
        </AppContextWrapper>
      </body>
    </html>
  );
}
