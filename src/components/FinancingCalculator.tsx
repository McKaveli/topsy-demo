import { useState } from 'react'

function formatGHS(n:number){return `GH₵ ${n.toLocaleString()}`}

export default function FinancingCalculator({ initialPrice=100000 }:{ initialPrice?: number }){
  const [price,setPrice]=useState(initialPrice)
  const [deposit,setDeposit]=useState(10000)
  const [term,setTerm]=useState(24)
  const [rate,setRate]=useState(10)

  const amountFinanced = Math.max(0, price - deposit)
  const monthlyRate = rate/100/12
  const monthlyPayment = monthlyRate===0 ? amountFinanced/term : (amountFinanced * monthlyRate) / (1 - Math.pow(1+monthlyRate, -term))
  const totalRepayment = monthlyPayment * term + deposit

  return (
    <div className="bg-white shadow rounded-sm p-4">
      <h4 className="font-semibold">Financing estimator</h4>
      <p className="text-sm text-gray-500">Calculations shown are estimates for demonstration purposes only and do not constitute an official financing quote.</p>

      <div className="mt-4 space-y-3">
        <div>
          <label className="text-sm">Vehicle price</label>
          <input type="range" min={10000} max={1000000} step={1000} value={price} onChange={e=>setPrice(Number(e.target.value))} />
          <div className="text-lg font-semibold mt-1">{formatGHS(price)}</div>
        </div>

        <div>
          <label className="text-sm">Deposit</label>
          <input type="range" min={0} max={price} step={1000} value={deposit} onChange={e=>setDeposit(Number(e.target.value))} />
          <div className="text-sm">{formatGHS(deposit)}</div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="text-sm">Duration (months)</label>
            <select value={term} onChange={e=>setTerm(Number(e.target.value))} className="w-full">
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
              <option value={48}>48</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Interest rate (annual %)</label>
            <input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="text-sm">Estimate</label>
            <div className="text-right font-semibold">{formatGHS(Math.round(monthlyPayment))}/month</div>
          </div>
        </div>

        <div className="pt-3 border-t">
          <div className="text-sm text-gray-600">Amount financed: <span className="font-semibold">{formatGHS(amountFinanced)}</span></div>
          <div className="text-sm text-gray-600">Estimated total repayment: <span className="font-semibold">{formatGHS(Math.round(totalRepayment))}</span></div>
        </div>
      </div>
    </div>
  )
}
