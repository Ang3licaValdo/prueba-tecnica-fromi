
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prueba Tecnica Neumatica Fromi',
  description: 'Prueba técnica para la empresa Neumatica Fromi',
  keywords: 'neumatica, fromi, prueba, interniship'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  )
}
