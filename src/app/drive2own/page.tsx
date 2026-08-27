import Link from 'next/link'

export default function Drive2OwnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Drive2Own</p>
          <h1 className="mt-2 text-4xl font-semibold text-brand-900 md:text-5xl">Drive Today. Own Tomorrow.</h1>
          <p className="mt-4 max-w-lg text-gray-700">This demonstration explains the concept and process behind a Drive2Own arrangement. All financing details are placeholder estimates only until formal terms are confirmed.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/apply" className="premium-button inline-flex items-center bg-brand-900 px-5 py-3 text-sm font-semibold text-white rounded-xl">Apply Now</Link>
            <Link href="/cars" className="premium-button inline-flex items-center border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-brand-900 rounded-xl">Browse vehicles</Link>
          </div>
        </div>
        <div className="card-shell rounded-3xl p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {['Choose Your Car', 'Apply', 'Approval Process', 'Drive Away'].map((item, index) => (
              <div key={item} className="rounded-2xl border border-gray-200 bg-white p-4">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-brand-900">0{index + 1}</div>
                <div className="font-semibold text-brand-900">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {[
          ['01','Choose Your Car','Pick the vehicle that fits your lifestyle and budget.'],
          ['02','Apply','Share your basic information, preferred vehicle, and financing preference.'],
          ['03','Approval Process','Our demo team reviews the request and confirms next steps.'],
          ['04','Drive Away','Complete the handoff and start your next chapter in the driver’s seat.']
        ].map(([index, title, description]) => (
          <div key={index} className="card-shell rounded-2xl p-5">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">{index}</div>
            <h3 className="mt-3 text-2xl font-semibold text-brand-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
