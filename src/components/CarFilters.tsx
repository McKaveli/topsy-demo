import { useState } from 'react'
import { Vehicle } from '@/data/vehicles'

export default function CarFilters({ onChange, vehicles }: { onChange: (filters: any)=>void, vehicles: Vehicle[] }){
  const makes = Array.from(new Set(vehicles.map(v=>v.make)))
  const bodyTypes = Array.from(new Set(vehicles.map(v=>v.bodyType)))
  const [make,setMake] = useState('')
  const [body,setBody] = useState('')
  const [minYear,setMinYear] = useState(0)
  const [maxPrice,setMaxPrice] = useState(0)
  const [drive2own,setDrive2Own] = useState('')

  function apply(){
    onChange({ make, body, minYear: Number(minYear) || undefined, maxPrice: Number(maxPrice) || undefined, drive2own })
  }

  return (
    <div className="bg-white p-4 rounded-sm shadow">
      <h4 className="font-semibold">Filters</h4>
      <div className="mt-3 space-y-3">
        <div>
          <label className="text-sm">Make</label>
          <select className="w-full mt-1" value={make} onChange={e=>setMake(e.target.value)}>
            <option value="">Any</option>
            {makes.map(m=> <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Body type</label>
          <select className="w-full mt-1" value={body} onChange={e=>setBody(e.target.value)}>
            <option value="">Any</option>
            {bodyTypes.map(b=> <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="text-sm">Minimum Year</label>
          <input type="number" className="w-full mt-1" value={minYear||''} onChange={e=>setMinYear(Number(e.target.value))} />
        </div>

        <div>
          <label className="text-sm">Max price (GH₵)</label>
          <input type="number" className="w-full mt-1" value={maxPrice||''} onChange={e=>setMaxPrice(Number(e.target.value))} />
        </div>

        <div>
          <label className="text-sm">Drive2Own</label>
          <select className="w-full mt-1" value={drive2own} onChange={e=>setDrive2Own(e.target.value)}>
            <option value="">Any</option>
            <option value="yes">Available</option>
            <option value="no">Not available</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button onClick={apply} className="px-4 py-2 bg-gray-900 text-white rounded">Apply</button>
          <button onClick={()=>{setMake('');setBody('');setMinYear(0);setMaxPrice(0);setDrive2Own(''); onChange({})}} className="px-4 py-2 border rounded">Reset</button>
        </div>
      </div>
    </div>
  )
}
