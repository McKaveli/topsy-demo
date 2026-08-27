'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#e7ddd0] bg-[#f9f6f1]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f1f2f] via-[#18304a] to-[#d7ae5a] text-lg font-bold text-white shadow-[0_12px_30px_rgba(12,24,38,0.26)] transition-transform group-hover:scale-105">
              T
            </div>
            <div className="hidden sm:block">
              <div className="font-heading text-lg font-semibold tracking-[-0.03em] text-[#0d1724]">Topsy Ventures</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Drive2Own Ghana</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <Link href="/cars" className="text-slate-700 hover:text-[#0d1724]">Cars</Link>
            <Link href="/drive2own" className="text-slate-700 hover:text-[#0d1724]">Drive2Own</Link>
            <Link href="/how-it-works" className="text-slate-700 hover:text-[#0d1724]">How It Works</Link>
            <Link href="/about" className="text-slate-700 hover:text-[#0d1724]">About</Link>
            <Link href="/contact" className="text-slate-700 hover:text-[#0d1724]">Contact</Link>
            <Link href="/apply" className="premium-button ml-2 inline-flex items-center rounded-full bg-[#0d1724] px-4 py-2.5 text-white shadow-[0_10px_22px_rgba(13,23,36,0.18)] hover:bg-[#162b3d]">
              Apply Now
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7ddd0] bg-white/80 text-slate-800 shadow-sm"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#e7ddd0] bg-[#fffefb] md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 text-sm">
            <Link href="/cars" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-[#f5efe7]">Cars</Link>
            <Link href="/drive2own" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-[#f5efe7]">Drive2Own</Link>
            <Link href="/how-it-works" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-[#f5efe7]">How It Works</Link>
            <Link href="/about" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-[#f5efe7]">About</Link>
            <Link href="/contact" className="block rounded-xl px-3 py-2.5 text-slate-700 hover:bg-[#f5efe7]">Contact</Link>
            <Link href="/apply" className="mt-2 block rounded-xl bg-[#0d1724] px-3 py-2.5 text-center font-semibold text-white">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
