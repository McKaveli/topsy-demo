'use client'

import { Suspense } from 'react'
import TestDriveForm from '@/components/TestDriveForm'
import { useSearchParams } from 'next/navigation'

function TestDrivePageContent() {
  const params = useSearchParams()
  const vehicle = params?.get('vehicle') || ''

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Book a Test Drive</h1>
      <p className="text-sm text-gray-600 mt-2">Let us know when you'd like to try a vehicle.</p>
      <div className="mt-6">
        <TestDriveForm />
      </div>
    </div>
  )
}

export default function TestDrivePage() {
  return (
    <Suspense fallback={<div className="max-w-3xl mx-auto px-4 py-12 text-sm text-gray-500">Loading form…</div>}>
      <TestDrivePageContent />
    </Suspense>
  )
}
