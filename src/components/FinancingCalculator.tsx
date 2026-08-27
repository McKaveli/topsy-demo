'use client'

import { useState } from 'react'
import { getDemoPaymentSummary } from '@/data/vehicles'

function formatGHS(n:number){return `GH₵ ${n.toLocaleString()}`}

export default function FinancingCalculator({ initialPrice=100000 }:{ initialPrice?: number }){
  const [price,setPrice]=useState(initialPrice)
  const [deposit,setDeposit]=useState(Math.round(initialPrice * 0.2))
  const [term,setTerm]=useState(36)
  const [rate,setRate]=useState(12)

  const summary = getDemoPaymentSummary(price, deposit, term, rate)

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-[#e9dfd2] bg-[#0d1724] p-5 text-white shadow-[0_30px_80px_rgba(12,23,36,0.35)] md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#d7ae5a]">Illustrative estimate</p>
          <h4 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white">Estimate your plan</h4>
        </div>
        <span className="rounded-full border border-[#d7ae5a]/30 bg-[#d7ae5a]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-[#f5ebd7]">Demo</span>
      </div>

      <p className="text-sm leading-6 text-slate-300">
        Demo estimate only. Actual financing terms are subject to approval and official Topsy Drive2Own terms.
      </p>

      <div className="mt-6 space-y-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Vehicle price</label>
            <span className="text-sm font-medium text-[#f7efe3]">{formatGHS(price)}</span>
          </div>
          <input type="range" min={10000} max={1000000} step={1000} value={price} onChange={e=>setPrice(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-[#d7ae5a]" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center justify-between gap-3">
            <label className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Deposit</label>
            <span className="text-sm font-medium text-[#f7efe3]">{formatGHS(deposit)}</span>
          </div>
          <input type="range" min={0} max={price} step={1000} value={deposit} onChange={e=>setDeposit(Number(e.target.value))} className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-[#d7ae5a]" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
            <label className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Duration</label>
            <select value={term} onChange={e=>setTerm(Number(e.target.value))} className="mt-2 w-full border-0 bg-transparent text-base font-medium text-white outline-none">
              <option value={12} className="bg-[#0d1724]">12 months</option>
              <option value={24} className="bg-[#0d1724]">24 months</option>
              <option value={36} className="bg-[#0d1724]">36 months</option>
              <option value={48} className="bg-[#0d1724]">48 months</option>
            </select>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
            <label className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Demo rate</label>
            <input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} className="mt-2 w-full border-0 bg-transparent text-base font-medium text-white outline-none [appearance:textfield] placeholder:text-slate-400 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>
        </div>

        <div className="rounded-[1.35rem] bg-[#f7efe3] p-4 text-[#0d1724]">
          <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Estimated payment</div>
          <div className="mt-2 text-3xl font-semibold tracking-[-0.06em]">{formatGHS(Math.round(summary.monthlyPayment))}<span className="ml-2 text-lg font-medium text-slate-600">/ month</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Amount financed</div>
            <div className="mt-2 font-semibold text-white">{formatGHS(summary.amountFinanced)}</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Total repayment</div>
            <div className="mt-2 font-semibold text-white">{formatGHS(Math.round(summary.totalRepayment))}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
