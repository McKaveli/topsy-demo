import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter, Playfair_Display } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700'], variable: '--font-heading', display: 'swap' })

export const metadata = {
  title: 'Topsy Ventures — Drive2Own Ghana (Demo)',
  description: 'Find your next vehicle and explore flexible Drive2Own options designed to make car ownership easier.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
