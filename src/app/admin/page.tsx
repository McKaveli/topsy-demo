'use client'

import { useEffect, useState } from 'react'
import { vehicles } from '@/data/vehicles'

type Application = any
type TestDrive = any

function readApps(){
  try{ return JSON.parse(localStorage.getItem('demo_applications')||'[]') }catch{ return [] }
}
function readTD(){
  try{ return JSON.parse(localStorage.getItem('demo_testdrives')||'[]') }catch{ return [] }
}

export default function AdminPage(){
  const [apps,setApps] = useState<Application[]>([])
  const [tds,setTds] = useState<TestDrive[]>([])

  useEffect(()=>{ setApps(readApps()); setTds(readTD()) },[])

  function setStatusApp(id:string, status:string){
    const updated = apps.map(a=> a.id===id ? { ...a, status } : a)
    setApps(updated)
    localStorage.setItem('demo_applications', JSON.stringify(updated))
  }

  function setStatusTD(id:string, status:string){
    const updated = tds.map(a=> a.id===id ? { ...a, status } : a)
    setTds(updated)
    localStorage.setItem('demo_testdrives', JSON.stringify(updated))
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Admin Dashboard (Demo)</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-sm shadow">
          <h4 className="font-semibold">Metrics</h4>
          <div className="mt-3 text-sm text-gray-600">Total Vehicles: {vehicles.length}</div>
          <div className="text-sm text-gray-600">Drive2Own Vehicles: {vehicles.filter(v=>v.drive2OwnAvailable).length}</div>
          <div className="text-sm text-gray-600">New Applications: {apps.filter(a=>a.status==='New').length}</div>
          <div className="text-sm text-gray-600">Test Drive Requests: {tds.length}</div>
        </div>

        <div className="md:col-span-2">
          <div className="bg-white p-4 rounded-sm shadow mb-6">
            <h4 className="font-semibold">Applications</h4>
            {apps.length===0 && <div className="text-sm text-gray-500 mt-3">No applications yet (demo)</div>}
            {apps.map(a=> (
              <div key={a.id} className="mt-3 border-t pt-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{a.applicant}</div>
                    <div className="text-sm text-gray-600">{a.contact?.phone} • {new Date(a.createdAt).toLocaleString()}</div>
                    <div className="text-sm">Vehicle: {a.vehicle}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm">Status: <strong>{a.status}</strong></div>
                    <div className="flex space-x-2 mt-2">
                      <button onClick={()=>setStatusApp(a.id,'Reviewing')} className="px-2 py-1 border rounded text-sm">Reviewing</button>
                      <button onClick={()=>setStatusApp(a.id,'Approved')} className="px-2 py-1 bg-green-600 text-white rounded text-sm">Approve</button>
                      <button onClick={()=>setStatusApp(a.id,'Rejected')} className="px-2 py-1 border rounded text-sm">Reject</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 rounded-sm shadow">
            <h4 className="font-semibold">Test Drive Requests</h4>
            {tds.length===0 && <div className="text-sm text-gray-500 mt-3">No requests yet</div>}
            {tds.map(t=> (
              <div key={t.id} className="mt-3 border-t pt-3 flex justify-between">
                <div>
                  <div className="font-semibold">{t.customer}</div>
                  <div className="text-sm text-gray-600">{t.contact?.phone} • {t.preferredDate} {t.preferredTime}</div>
                  <div className="text-sm">Vehicle: {t.vehicle}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm">Status: <strong>{t.status}</strong></div>
                  <div className="flex space-x-2 mt-2">
                    <button onClick={()=>setStatusTD(t.id,'Contacted')} className="px-2 py-1 border rounded text-sm">Contacted</button>
                    <button onClick={()=>setStatusTD(t.id,'Confirmed')} className="px-2 py-1 bg-green-600 text-white rounded text-sm">Confirm</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
