import { roboto } from './config/fonts'
import './globals.css'

export const metadata = {
  title: {
    default: 'E-Shop Pet',
    template: '%s | Fernando Cezar Vicari'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Desenvolvido por FCVicari',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
