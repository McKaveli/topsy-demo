export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Contact</p>
      <h1 className="mt-2 text-4xl font-semibold text-brand-900 md:text-5xl">Talk to the team</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="card-shell rounded-2xl p-6">
          <div className="font-semibold text-brand-900">Demo contact details</div>
          <p className="mt-2 text-sm text-gray-700">These contact details are placeholders only. Replace them with official Topsy Ventures details when available.</p>
          <div className="mt-4 text-sm text-gray-600 space-y-2">
            <div>Email: hello@topsyventures-demo.com</div>
            <div>Phone: +233 00 000 0000</div>
            <div>Address: Demo showroom location, Ghana</div>
          </div>
        </div>
        <div className="card-shell rounded-2xl p-6">
          <div className="font-semibold text-brand-900">Need help?</div>
          <p className="mt-2 text-sm text-gray-700">Use the application or test drive flows to simulate customer interactions and lead generation in this demo.</p>
        </div>
      </div>
    </div>
  )
}
