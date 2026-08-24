import Link from 'next/link'
import Image from 'next/image'
import { vehicles } from '@/data/vehicles'
import VehicleCard from '@/components/VehicleCard'
import FinancingCalculator from '@/components/FinancingCalculator'

export default function Home() {
  const featured = vehicles.slice(0, 6)
  return (
    <div>
      <section className="relative h-[70vh] md:h-[65vh] bg-gray-900 text-white overflow-hidden">
        <Image src="/images/hero-car.jpg" alt="Hero" fill className="object-cover opacity-80" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">YOUR CAR.<br/>YOUR PLAN.<br/>YOUR DRIVE.</h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl">Find your next vehicle and explore flexible Drive2Own options designed to make car ownership easier.</p>
          <div className="mt-8 flex space-x-4">
            <Link href="/cars" className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md">Browse Cars</Link>
            <Link href="/drive2own" className="px-6 py-3 border border-white text-white rounded-md">Explore Drive2Own</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Featured Vehicles</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(v => <VehicleCard key={v.id} v={v} />)}
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">Drive2Own — Drive Today. Own Tomorrow.</h3>
            <p className="mt-3 text-gray-600">Flexible payment options designed for Ghanaian drivers. Apply for Drive2Own and get a personalised plan.</p>
            <div className="mt-6">
              <Link href="/apply" className="px-5 py-3 bg-gray-900 text-white rounded-md">Apply Now</Link>
            </div>
          </div>
          <div>
            <FinancingCalculator initialPrice={120000} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold">Why Choose Topsy</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-sm shadow">
            <h4 className="font-semibold">Premium selection</h4>
            <p className="mt-2 text-sm text-gray-600">Curated vehicles with transparency and inspection reports.</p>
          </div>
          <div className="bg-white p-6 rounded-sm shadow">
            <h4 className="font-semibold">Flexible plans</h4>
            <p className="mt-2 text-sm text-gray-600">Drive2Own options tailored for affordability and convenience.</p>
          </div>
          <div className="bg-white p-6 rounded-sm shadow">
            <h4 className="font-semibold">Local expertise</h4>
            <p className="mt-2 text-sm text-gray-600">A Ghana-focused team who understand the local market.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
