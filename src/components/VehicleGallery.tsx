'use client'

import Image from 'next/image'
import { useEffect, useState, useCallback, useRef } from 'react'

export default function VehicleGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const [animIn, setAnimIn] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const openAt = (i: number) => { setIndex(i); setOpen(true); setTimeout(()=>setAnimIn(true),20) }
  const close = () => { setAnimIn(false); setTimeout(()=>setOpen(false), 180) }

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next])

  // touch handlers for lightbox swipe
  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const t = e.changedTouches[0]
    const dx = t.clientX - (touchStartX.current ?? 0)
    const dy = t.clientY - (touchStartY.current ?? 0)
    touchStartX.current = null
    touchStartY.current = null

    // ignore mostly-vertical swipes
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) prev()
      else next()
    }

    // swipe down to close
    if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx) && dy > 0) {
      close()
    }
  }

  return (
    <div>
      <div className="relative w-full h-72 md:h-[540px] bg-gray-100 rounded-[1.25rem] overflow-hidden">
        {images[0] ? (
          <button onClick={() => openAt(index)} className="relative block w-full h-full">
            <Image src={images[index]} alt={`Vehicle image ${index+1}`} fill sizes="(max-width: 768px) 100vw, 75vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="pointer-events-none absolute left-6 bottom-6 rounded-xl bg-black/45 px-3 py-2 text-sm text-white backdrop-blur-sm">
              <span>Image {index + 1} of {images.length}</span>
            </div>
          </button>
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      <div className="mt-4 flex gap-3">
        {images.map((src, i) => (
          <button key={src} onClick={() => setIndex(i)} className={`relative h-16 w-28 overflow-hidden rounded-lg border ${i === index ? 'ring-2 ring-[#d7ae5a]' : 'border-transparent'} focus:outline-none`}>
            <Image src={src} alt={`thumb-${i}`} fill sizes="(max-width: 768px) 25vw, 10vw" className="object-cover" />
          </button>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
          <div className={`absolute inset-0 transition-opacity ${animIn ? 'opacity-100' : 'opacity-0'}`} onClick={close} />

          <button onClick={close} className="absolute right-6 top-6 z-20 rounded-full bg-black/40 p-2 text-white">Close</button>
          <button onClick={prev} className="absolute left-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white">‹</button>

          <div className={`relative mx-auto h-[80vh] w-[90vw] max-w-[1300px] rounded-lg overflow-hidden transform transition-all ${animIn ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image src={images[index]} alt={`Lightbox ${index+1}`} fill sizes="100vw" className="object-contain bg-black" />
          </div>

          <button onClick={next} className="absolute right-6 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white">›</button>
        </div>
      )}
    </div>
  )
}
