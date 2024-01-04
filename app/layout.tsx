import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Yefercode | Portafolio',
  description: 'Conoce mis habilidades, experiencia y proyectos realizados en el mundo del desarrollo web.',
  authors: {
    name: "Yeferson Camilo Zaque",
  },
  robots: 'index, follow',
  category: 'Portfolio',
  keywords: ['Portfolio', 'Portafolio', 'Yefercode', 'Yeferson Camilo Zaque', 'Yeferson Zaque', 'Yeferson Camilo', 'Yeferson', 'Zaque', 'Yefercode Portfolio', 'Yefercode Portafolio', 'Yefercode Yeferson Camilo Zaque', 'Yefercode Yeferson Zaque', 'Yefercode Yeferson Camilo', 'Yefercode Yeferson', 'Yefercode Zaque'],
  openGraph: {
    locale: 'es_CO',
    type: 'website',
    url: 'https://yefercode.dev/',
    title: 'Yefercode | Portafolio',
    description: 'Conoce mis habilidades, experiencia y proyectos realizados en el mundo del desarrollo web.',
    images: [
      {
        url: 'https://yefercode.dev/img/og-image.png',
        width: 995,
        height: 900,
        alt: 'Yefercode | Portafolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    title: 'Yefercode | Portafolio',
    card: 'summary_large_image',
    creator: '@camilozaque',
    site: '@yefercode',
    description: 'Conoce mis habilidades, experiencia y proyectos realizados en el mundo del desarrollo web.',
    images: [
      {
        url: 'https://yefercode.up.railway.app/img/og-image.png',
        width: 995,
        height: 900,
        alt: 'Yefercode | Portafolio',
        type: 'image/png',
      },
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
