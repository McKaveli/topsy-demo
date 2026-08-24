import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-600 rounded-sm flex items-center justify-center text-white font-semibold">T</div>
              <div className="hidden sm:block">
                <div className="font-semibold text-lg text-gray-900 dark:text-white">Topsy Ventures</div>
                <div className="text-xs text-gray-500">Drive2Own Ghana</div>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/cars" className="text-gray-700 dark:text-gray-200 hover:text-gray-900">Cars</Link>
            <Link href="/drive2own" className="text-gray-700 dark:text-gray-200 hover:text-gray-900">Drive2Own</Link>
            <Link href="/how-it-works" className="text-gray-700 dark:text-gray-200 hover:text-gray-900">How It Works</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-gray-900">Contact</Link>
            <Link href="/apply" className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800">Apply Now</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-4 py-3 space-y-2">
            <Link href="/cars" className="block">Cars</Link>
            <Link href="/drive2own" className="block">Drive2Own</Link>
            <Link href="/how-it-works" className="block">How It Works</Link>
            <Link href="/about" className="block">About</Link>
            <Link href="/contact" className="block">Contact</Link>
            <Link href="/apply" className="block font-semibold">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
