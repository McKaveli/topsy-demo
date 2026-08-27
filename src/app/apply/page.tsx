'use client'

import { Suspense } from 'react'
import ApplicationForm from '@/components/ApplicationForm'
import { useSearchParams } from 'next/navigation'

function ApplyPageContent() {
  const params = useSearchParams()
  const vehicle = params?.get('vehicle') || undefined

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Drive2Own Application</h1>
      <p className="text-sm text-gray-600 mt-2">Complete the application and our demo team will review your request.</p>

      <div className="mt-6">
        <ApplicationForm />
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-12 text-sm text-gray-500">Loading application…</div>}>
      <ApplyPageContent />
    </Suspense>
  )
}
