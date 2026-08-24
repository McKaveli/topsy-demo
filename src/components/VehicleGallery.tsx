import Image from 'next/image'
import { useState } from 'react'

export default function VehicleGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0)
  return (
    <div>
      <div className="relative w-full h-72 md:h-96 bg-gray-100 rounded-sm overflow-hidden">
        {images[0] ? (
          <Image src={images[index]} alt={`Vehicle image ${index+1}`} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="mt-3 flex gap-2">
        {images.map((src, i) => (
          <button key={src} onClick={() => setIndex(i)} className={`w-20 h-12 rounded-sm overflow-hidden border ${i===index? 'border-gray-900':'border-transparent'}`}>
            <div className="relative w-full h-full">
              <Image src={src} alt={`thumb-${i}`} fill className="object-cover" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
