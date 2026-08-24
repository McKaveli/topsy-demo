'use client'

import { useState } from 'react'
import { vehicles } from '@/data/vehicles'
import toast from 'react-hot-toast'

type AppState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  nationalId?: string
  vehicleId?: string
  deposit?: number
  term?: number
  rate?: number
  employmentStatus?: string
  employer?: string
  monthlyIncome?: number
}

function saveApplication(obj:any){
  try{
    const key='demo_applications'
    const cur = JSON.parse(localStorage.getItem(key)||'[]')
    cur.unshift(obj)
    localStorage.setItem(key, JSON.stringify(cur))
    // also expose to window for quick demo access
    try{ (window as any)._demoApplications = cur } catch {}
  }catch(e){ console.error(e) }
}

export default function ApplicationForm(){
  const [step,setStep] = useState(1)
  const [state,setState] = useState<AppState>({ firstName:'', lastName:'', email:'', phone:'' , deposit:0, term:24, rate:10 })
  const [submitting,setSubmitting] = useState(false)

  const selectedVehicle = vehicles.find(v=>v.id===state.vehicleId)

  function next(){
    // simple validation per step
    if(step===1){
      if(!state.firstName || !state.lastName || !state.email || !state.phone){
        toast.error('Please fill your personal details')
        return
      }
    }
    if(step===2){
      if(!state.vehicleId){ toast.error('Select a vehicle or choose "No preference"'); return }
    }
    setStep(s=>Math.min(5,s+1))
  }
  function back(){ setStep(s=>Math.max(1,s-1)) }

  function submit(){
    setSubmitting(true)
    const app = {
      id: 'app_' + Date.now(),
      applicant: `${state.firstName} ${state.lastName}`,
      contact: { email: state.email, phone: state.phone },
      vehicle: state.vehicleId ? (vehicles.find(v=>v.id===state.vehicleId) ? vehicles.find(v=>v.id===state.vehicleId)!.id : 'no-preference') : 'no-preference',
      financingPreference: { deposit: state.deposit, term: state.term, rate: state.rate },
      employmentInfo: { status: state.employmentStatus, employer: state.employer, income: state.monthlyIncome },
      status: 'New',
      createdAt: new Date().toISOString(),
    }
    // simulate async
    setTimeout(()=>{
      saveApplication(app)
      setSubmitting(false)
      setStep(5)
      toast.success('Application submitted (demo)')
    },800)
  }

  if(step===5){
    return (
      <div className="bg-white p-8 rounded-sm shadow text-center">
        <h3 className="text-xl font-semibold">Application Received</h3>
        <p className="mt-3 text-gray-600">Thank you. Your application has been received. Our team will review your information and contact you with the next steps.</p>
        <div className="mt-6">
          <button onClick={()=>{ setStep(1); setState({ firstName:'', lastName:'', email:'', phone:'', deposit:0, term:24, rate:10 }) }} className="px-4 py-2 border rounded">Start new application</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-sm shadow">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">Step {step} of 5</div>
        <div className="text-sm font-semibold">Drive2Own Application</div>
      </div>

      <div className="mt-4">
        {step===1 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input className="border p-2" placeholder="First name" value={state.firstName} onChange={e=>setState(s=>({ ...s, firstName: e.target.value }))} />
              <input className="border p-2" placeholder="Last name" value={state.lastName} onChange={e=>setState(s=>({ ...s, lastName: e.target.value }))} />
            </div>
            <input className="border p-2 w-full" placeholder="Email" value={state.email} onChange={e=>setState(s=>({ ...s, email: e.target.value }))} />
            <input className="border p-2 w-full" placeholder="Phone" value={state.phone} onChange={e=>setState(s=>({ ...s, phone: e.target.value }))} />
            <input className="border p-2 w-full" placeholder="National ID (optional)" value={state.nationalId||''} onChange={e=>setState(s=>({ ...s, nationalId: e.target.value }))} />
          </div>
        )}

        {step===2 && (
          <div className="space-y-3">
            <label className="text-sm">Choose vehicle (optional)</label>
            <select className="w-full border p-2" value={state.vehicleId||''} onChange={e=>setState(s=>({ ...s, vehicleId: e.target.value || undefined }))}>
              <option value="">No preference</option>
              {vehicles.map(v=> <option key={v.id} value={v.id}>{v.make} {v.model} — {v.year} — GH₵ {v.price.toLocaleString()}</option>)}
            </select>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="text-sm">Deposit (GH₵)</label>
                <input type="number" className="border p-2 w-full" value={state.deposit||0} onChange={e=>setState(s=>({ ...s, deposit: Number(e.target.value) }))} />
              </div>
              <div>
                <label className="text-sm">Duration (months)</label>
                <select className="w-full border p-2" value={state.term} onChange={e=>setState(s=>({ ...s, term: Number(e.target.value) }))}>
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                  <option value={48}>48</option>
                </select>
              </div>
              <div>
                <label className="text-sm">Interest rate (%)</label>
                <input type="number" className="border p-2 w-full" value={state.rate||10} onChange={e=>setState(s=>({ ...s, rate: Number(e.target.value) }))} />
              </div>
            </div>

            {selectedVehicle && (
              <div className="mt-3 p-3 bg-gray-50 rounded">Selected: <strong>{selectedVehicle.make} {selectedVehicle.model}</strong></div>
            )}
          </div>
        )}

        {step===3 && (
          <div className="space-y-3">
            <label className="text-sm">Employment status</label>
            <select className="w-full border p-2" value={state.employmentStatus||''} onChange={e=>setState(s=>({ ...s, employmentStatus: e.target.value }))}>
              <option value="">Select</option>
              <option>Employed</option>
              <option>Self-employed</option>
              <option>Unemployed</option>
              <option>Student</option>
            </select>
            <input className="border p-2 w-full" placeholder="Employer (if applicable)" value={state.employer||''} onChange={e=>setState(s=>({ ...s, employer: e.target.value }))} />
            <input className="border p-2 w-full" placeholder="Monthly income (GH₵)" type="number" value={state.monthlyIncome||''} onChange={e=>setState(s=>({ ...s, monthlyIncome: Number(e.target.value) }))} />
          </div>
        )}

        {step===4 && (
          <div className="space-y-3">
            <h4 className="font-semibold">Review your application</h4>
            <div className="text-sm text-gray-700">
              <div><strong>Name:</strong> {state.firstName} {state.lastName}</div>
              <div><strong>Contact:</strong> {state.email} • {state.phone}</div>
              <div><strong>Vehicle:</strong> {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : 'No preference'}</div>
              <div><strong>Deposit:</strong> GH₵ {state.deposit}</div>
              <div><strong>Term:</strong> {state.term} months</div>
              <div><strong>Employment:</strong> {state.employmentStatus} • {state.employer} • GH₵ {state.monthlyIncome}</div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <div>
          {step>1 && <button onClick={back} className="px-4 py-2 border rounded mr-2">Back</button>}
        </div>
        <div>
          {step<4 && <button onClick={next} className="px-4 py-2 bg-gray-900 text-white rounded">Next</button>}
          {step===4 && <button onClick={submit} disabled={submitting} className="px-4 py-2 bg-green-600 text-white rounded">{submitting? 'Submitting...' : 'Submit Application'}</button>}
        </div>
      </div>
    </div>
  )
}
