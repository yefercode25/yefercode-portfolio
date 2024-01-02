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
  category: 'Portfolio',
  keywords: ['Portfolio', 'Portafolio', 'Yefercode', 'Yeferson Camilo Zaque', 'Yeferson Zaque', 'Yeferson Camilo', 'Yeferson', 'Zaque', 'Yefercode Portfolio', 'Yefercode Portafolio', 'Yefercode Yeferson Camilo Zaque', 'Yefercode Yeferson Zaque', 'Yefercode Yeferson Camilo', 'Yefercode Yeferson', 'Yefercode Zaque'],
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
