import Link from 'next/link'
import { Vehicle, getDemoPaymentSummary } from '@/data/vehicles'
import Image from 'next/image'

function formatGHS(n: number) {
  return `GH₵ ${n.toLocaleString()}`
}

export default function VehicleCard({ v }: { v: Vehicle }) {
  const demoSummary = getDemoPaymentSummary(v.price, v.price * 0.2, 36, 12)

  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] fade-up transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_36px_90px_rgba(11,17,28,0.18)]">
      <Link href={`/cars/${v.id}`} className="relative block h-[360px] overflow-hidden rounded-t-[1.5rem]">
        {v.images[0] ? (
          <Image src={v.images[0]} alt={`${v.make} ${v.model}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="h-full bg-gray-200" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute left-6 bottom-6 w-[calc(100%-48px)] rounded-xl bg-black/50 px-4 py-3 text-white backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-lg font-semibold tracking-[-0.02em]">{v.make} {v.model}</div>
              <div className="mt-1 text-sm text-white/80">{v.year} • {v.mileage.toLocaleString()} km</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-semibold">{formatGHS(v.price)}</div>
              <div className="mt-1 text-[11px] text-white/80">From GH₵ {Math.round(demoSummary.monthlyPayment).toLocaleString()} / mo</div>
            </div>
          </div>
        </div>

        {v.drive2OwnAvailable && (
          <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-[#0d1724]/65 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#f7efe3] backdrop-blur-sm">
            Drive2Own
          </span>
        )}
      </Link>

      <div className="p-5 bg-white/90 rounded-b-[1.5rem] border-t border-[#ece0d0]">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#0d1724]">{v.make} {v.model}</h3>
            <div className="mt-1 text-sm text-slate-600">{v.transmission} • {v.fuelType}</div>
          </div>
          <Link href={`/cars/${v.id}`} className="premium-button inline-flex items-center rounded-xl bg-[#0d1724] px-3.5 py-2.5 text-sm font-medium text-white hover:bg-[#132b42]">
            View Vehicle
          </Link>
        </div>
      </div>
    </article>
  )
}
