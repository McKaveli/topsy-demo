import Link from 'next/link'
import { Vehicle } from '@/data/vehicles'
import Image from 'next/image'

function formatGHS(n: number) {
  return `GH₵ ${n.toLocaleString()}`
}

export default function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <article className="bg-white shadow-lg rounded-sm overflow-hidden">
      <Link href={`/cars/${v.id}`} className="block relative h-48 md:h-40 lg:h-56">
        {v.images[0] ? (
          <Image src={v.images[0]} alt={`${v.make} ${v.model}`} fill className="object-cover" />
        ) : (
          <div className="bg-gray-200 h-full" />
        )}
      </Link>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{v.make} {v.model}</h3>
        <div className="text-sm text-gray-500">{v.year} • {v.mileage.toLocaleString()} km • {v.transmission}</div>
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <div className="text-xl font-semibold">{formatGHS(v.price)}</div>
            {v.drive2OwnAvailable && <div className="text-sm text-green-600">Drive2Own available</div>}
          </div>
          <div>
            <Link href={`/cars/${v.id}`} className="inline-flex items-center px-3 py-2 bg-gray-900 text-white rounded-md text-sm">View Vehicle</Link>
          </div>
        </div>
      </div>
    </article>
  )
}
