import './globals.css';

import { Metadata } from 'next';

import { Josefin_Sans, Roboto_Slab, Montserrat } from 'next/font/google';

import { AppContextWrapper } from '@/contexts/app';

export const metadata: Metadata = {
  title: 'Ayobami Tunwase',
  description: '',
  applicationName: 'Ayobami',
  keywords: ['Next.js', 'React', 'JavaScript', 'Portfolio', 'Web development', 'Frontend web developer'],
  authors: [{ name: 'Ayobami Tunwase', url: 'https://github.com/ayobami11' }],
  colorScheme: 'dark',
  openGraph: {
    title: 'Ayobami Tunwase',
    description: '',
    siteName: 'Ayobami Tunwase',
    // url: '',
    locale: 'en-US',
    type: 'website'
  }
}

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '700'],
  variable: '--font-josefin-sans',
  subsets: ['latin'],
  fallback: ['sans-serif']
});


const robotoSlab = Roboto_Slab({
  weight: ['400', '600', '700'],
  variable: '--font-roboto-slab',
  subsets: ['latin'],
  fallback: ['sans-serif']
});


const montserrat = Montserrat({
  weight: ['300', '400', '700'],
  variable: '--font-tertiary',
  subsets: ['latin'],
  fallback: ['sans-serif']
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /* supressHydrationWarning prop is necessary for next-themes library to work properly

    Source: https://github.com/pacocoursey/next-themes#with-app
  */

  return (
    <html lang='en' className={`${josefinSans.variable} ${robotoSlab.variable} ${montserrat.variable} scroll-smooth scroll-pt-32`} suppressHydrationWarning>
      <body>
        <AppContextWrapper>
          {children}
        </AppContextWrapper>
      </body>
    </html>
  )
}
