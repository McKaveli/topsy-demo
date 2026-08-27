export default function HowItWorksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.24em] text-accent">How it works</p>
      <h1 className="mt-2 text-4xl font-semibold text-brand-900 md:text-5xl">A simple path to ownership</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          ['01','Search & shortlist','Explore demo inventory and compare vehicles.'],
          ['02','Apply','Complete the Drive2Own application.'],
          ['03','Review','Our team reviews your details and next steps.'],
          ['04','Drive off','Complete the handoff and enjoy your new vehicle.']
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
