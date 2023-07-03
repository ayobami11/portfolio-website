import './globals.css';

import { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { AppContextWrapper } from './contexts/app';

export const metadata: Metadata = {
  title: 'Ayobami Tunwase',
  description: 'This project is a collaboration between Frontendmentor, Scrimba, and Kevin Powell, by Ayobami Tunwase.',
  applicationName: 'Ayobami',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio', 'Web development', 'Frontend web developer'],
  authors: [{ name: 'Ayobami Tunwase', url: 'https://github.com/ayobami11' }],
  colorScheme: 'dark',
  openGraph: {
    title: 'Ayobami Tunwase',
    description: 'This project is a collaboration between Frontendmentor, Scrimba, and Kevin Powell, by Ayobami Tunwase.',
    siteName: 'Ayobami Tunwase',
    // url: '',
    locale: 'en-US',
    type: 'website'
  }
}

const inter = Inter({
  weight: ['400', '700'],
  variable: '--font-inter',
  subsets: ['latin'],
  fallback: ['sans-serif']
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <AppContextWrapper>
          {children}
        </AppContextWrapper>
      </body>
    </html>
  )
}
