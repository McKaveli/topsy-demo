'use client'

import { useMemo, useState } from 'react'
import { vehicles as allVehicles } from '@/data/vehicles'
import VehicleCard from '@/components/VehicleCard'
import CarFilters from '@/components/CarFilters'

export default function CarsPage() {
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<any>({})
  const [sort, setSort] = useState('newest')

  const filtered = useMemo(() => {
    let list = allVehicles.slice()

    if (query) {
      const q = query.toLowerCase()
      list = list.filter((v) => `${v.make} ${v.model}`.toLowerCase().includes(q))
    }

    if (filters.make) list = list.filter((v) => v.make === filters.make)
    if (filters.body) list = list.filter((v) => v.bodyType === filters.body)
    if (filters.minYear) list = list.filter((v) => v.year >= filters.minYear)
    if (filters.maxPrice) list = list.filter((v) => v.price <= filters.maxPrice)
    if (filters.drive2own === 'yes') list = list.filter((v) => v.drive2OwnAvailable)
    if (filters.drive2own === 'no') list = list.filter((v) => !v.drive2OwnAvailable)

    if (sort === 'newest') list.sort((a, b) => b.year - a.year)
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)

    return list
  }, [query, filters, sort])

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Browse Vehicles</h1>
        <div className="w-80">
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search make or model" className="w-full border rounded p-2" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <CarFilters vehicles={allVehicles} onChange={(f: any) => setFilters(f)} />
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">{filtered.length} vehicles</div>
            <div>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded p-2">
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
              </select>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => <VehicleCard key={v.id} v={v} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
