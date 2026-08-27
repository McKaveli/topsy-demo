export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-accent">About</p>
      <h1 className="mt-2 text-4xl font-semibold text-brand-900 md:text-5xl">Built around confidence and convenience.</h1>
      <p className="mt-4 text-gray-700">Topsy Ventures is positioned here as a premium, customer-focused automotive brand serving Ghanaian buyers with a modern vehicle marketplace and flexible ownership options.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ['Customer-first', 'The experience is designed to make buying and financing easier and more transparent.'],
          ['Modern trade', 'A digital-first car-buying journey blends browsing, application, and lead management.'],
          ['Ghana-focused', 'The branding, experience, and vehicle selection are tuned for the local market context.']
        ].map(([title, text]) => (
          <div key={title} className="card-shell rounded-2xl p-5">
            <h3 className="font-heading text-2xl text-brand-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
