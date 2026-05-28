import type { Metadata } from 'next';
import { Cormorant_Garamond, IBM_Plex_Mono } from 'next/font/google';
import JsonLd from './JsonLd';
import './globals.scss';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Freelance Web Designer & Developer UK | Elle Townsend',
  description:
    'Freelance web designer and developer based in the UK, helping small businesses get beautiful, conversion-focused websites and brand identities. Get in touch.',
  alternates: {
    canonical: 'https://elletownsend.co.uk/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Freelance Web Designer & Developer UK | Elle Townsend',
    description:
      'Beautiful, conversion-focused websites and brand identities for small businesses. Based in the UK.',
    url: 'https://elletownsend.co.uk',
    siteName: 'Elle Townsend',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: 'https://elletownsend.co.uk/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elle Townsend — Freelance Web Designer & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@builtbyelle',
    creator: '@builtbyelle',
    title: 'Freelance Web Designer & Developer UK | Elle Townsend',
    description:
      'Beautiful websites and brand identities for small businesses, built by Elle.',
    images: ['https://elletownsend.co.uk/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${ibmPlexMono.variable}`}>
      <body suppressHydrationWarning>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
