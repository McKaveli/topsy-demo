'use client'

import { useState } from 'react'
import { vehicles } from '@/data/vehicles'
import toast from 'react-hot-toast'

function saveTestDrive(obj:any){
  try{
    const key='demo_testdrives'
    const cur = JSON.parse(localStorage.getItem(key)||'[]')
    cur.unshift(obj)
    localStorage.setItem(key, JSON.stringify(cur))
    try{ (window as any)._demoTestDrives = cur } catch {}
  }catch(e){ console.error(e) }
}

export default function TestDriveForm(){
  const [state,setState] = useState({ name:'', phone:'', email:'', vehicle:'', date:'', time:'', message:'' })
  const [submitted,setSubmitted] = useState(false)

  function submit(e?:any){
    e?.preventDefault()
    if(!state.name || !state.phone || !state.vehicle || !state.date || !state.time){
      toast.error('Please complete required fields')
      return
    }
    const obj = {
      id: 'td_' + Date.now(),
      customer: state.name,
      contact: { phone: state.phone, email: state.email },
      vehicle: state.vehicle,
      preferredDate: state.date,
      preferredTime: state.time,
      message: state.message,
      status: 'New',
      createdAt: new Date().toISOString(),
    }
    saveTestDrive(obj)
    setSubmitted(true)
    toast.success('Test drive request submitted (demo)')
  }

  if(submitted){
    return (
      <div className="bg-white p-6 rounded-sm shadow text-center">
        <h3 className="text-lg font-semibold">Test Drive Requested</h3>
        <p className="mt-2 text-gray-600">Thank you. We received your test drive request and will contact you to confirm the details.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="bg-white p-6 rounded-sm shadow">
      <h4 className="font-semibold">Book a Test Drive</h4>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <input className="border p-2" placeholder="Name" value={state.name} onChange={e=>setState(s=>({ ...s, name: e.target.value }))} />
        <input className="border p-2" placeholder="Phone" value={state.phone} onChange={e=>setState(s=>({ ...s, phone: e.target.value }))} />
        <input className="border p-2" placeholder="Email (optional)" value={state.email} onChange={e=>setState(s=>({ ...s, email: e.target.value }))} />
        <select className="border p-2" value={state.vehicle} onChange={e=>setState(s=>({ ...s, vehicle: e.target.value }))}>
          <option value="">Select vehicle</option>
          {vehicles.map(v=> <option key={v.id} value={v.id}>{v.make} {v.model} — {v.year}</option>)}
        </select>
        <input type="date" className="border p-2" value={state.date} onChange={e=>setState(s=>({ ...s, date: e.target.value }))} />
        <input type="time" className="border p-2" value={state.time} onChange={e=>setState(s=>({ ...s, time: e.target.value }))} />
      </div>
      <textarea className="border p-2 mt-3 w-full" placeholder="Message (optional)" value={state.message} onChange={e=>setState(s=>({ ...s, message: e.target.value }))} />
      <div className="mt-3 text-right">
        <button type="submit" className="px-4 py-2 bg-gray-900 text-white rounded">Request Test Drive</button>
      </div>
    </form>
  )
}
