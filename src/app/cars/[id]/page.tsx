import { notFound } from 'next/navigation'
import { vehicles } from '@/data/vehicles'
import VehicleGallery from '@/components/VehicleGallery'
import FinancingCalculator from '@/components/FinancingCalculator'
import Link from 'next/link'

export default async function VehicleDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const vehicle = vehicles.find(v => v.id === id)
  if (!vehicle) return notFound()

  const estimatedMonthly = Math.round((vehicle.price - (vehicle.price * 0.1)) / 36)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <VehicleGallery images={vehicle.images} />
          <div className="mt-6 bg-white p-6 rounded-sm shadow">
            <h1 className="text-2xl font-semibold">{vehicle.make} {vehicle.model} — {vehicle.year}</h1>
            <div className="text-sm text-gray-600 mt-2">{vehicle.mileage.toLocaleString()} km • {vehicle.transmission} • {vehicle.fuelType}</div>
            <p className="mt-4 text-gray-700">{vehicle.description}</p>

            <div className="mt-6">
              <h4 className="font-semibold">Features</h4>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                {vehicle.features.map(f=> <li key={f}>• {f}</li>)}
              </ul>
            </div>

            <div className="mt-6 flex space-x-3">
              <Link href={`/test-drive?vehicle=${vehicle.id}`} className="px-4 py-2 border rounded">Book Test Drive</Link>
              <a href={`https://wa.me/?text=I'm%20interested%20in%20${encodeURIComponent(vehicle.make+' '+vehicle.model)}`} className="px-4 py-2 bg-green-600 text-white rounded">WhatsApp</a>
            </div>
          </div>
        </div>

        <aside className="md:col-span-1">
          <div className="sticky top-6 space-y-4">
            <div className="bg-white p-6 rounded-sm shadow">
              <div className="text-sm text-gray-500">Cash price</div>
              <div className="text-2xl font-semibold mt-1">GH₵ {vehicle.price.toLocaleString()}</div>
              <div className="mt-3 text-sm text-gray-600">Estimated from:</div>
              <div className="text-xl font-semibold text-gray-900">GH₵ {estimatedMonthly.toLocaleString()} / month</div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <Link href={`/apply?vehicle=${vehicle.id}`} className="px-3 py-2 bg-gray-900 text-white text-center rounded">Apply for This Vehicle</Link>
                <button className="px-3 py-2 border rounded">Calculate My Payment</button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-sm shadow">
              <h4 className="font-semibold">Financing estimator</h4>
              <div className="mt-3"> 
                <FinancingCalculator initialPrice={vehicle.price} />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* sticky bottom CTA for mobile */}
      <div className="fixed bottom-4 left-0 right-0 px-4 md:hidden">
        <div className="max-w-3xl mx-auto flex gap-3">
          <Link href={`/apply?vehicle=${vehicle.id}`} className="flex-1 px-4 py-3 bg-gray-900 text-white text-center rounded">Apply</Link>
          <a href={`https://wa.me/?text=I'm%20interested%20in%20${encodeURIComponent(vehicle.make+' '+vehicle.model)}`} className="px-4 py-3 bg-green-600 text-white rounded">WhatsApp</a>
        </div>
      </div>
    </div>
  )
}
