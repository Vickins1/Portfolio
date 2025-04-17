import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Kelvin Thuo | Full-Stack Developer Portfolio',
  description: 'Portfolio of Kelvin Thuo, a passionate full-stack developer specializing in Next.js, React, and modern web solutions.',
  keywords: ['Kelvin Thuo', 'full-stack developer', 'Next.js', 'React', 'portfolio'],
  authors: [{ name: 'Kelvin Thuo' }],
  openGraph: {
    title: 'Kelvin Thuo | Full-Stack Developer Portfolio',
    description: 'Explore the projects and skills of Kelvin Thuo, a full-stack developer.',
    url: 'https://kelvinthuo.com', // Replace with actual URL
    siteName: 'Kelvin Thuo Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add an OG image in public/
        width: 1200,
        height: 630,
        alt: 'Kelvin Thuo Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Thuo | Full-Stack Developer Portfolio',
    description: 'Explore the projects and skills of Kelvin Thuo, a full-stack developer.',
    images: ['/og-image.jpg'], // Add an OG image in public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}