import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Gauge, ShieldCheck, Sparkles } from 'lucide-react'
import { getDemoPaymentSummary, vehicles } from '@/data/vehicles'
import VehicleCard from '@/components/VehicleCard'
import FinancingCalculator from '@/components/FinancingCalculator'

export default function Home() {
  const featured = vehicles.slice(0, 6)
  const sampleVehicle = vehicles[0]
  const sampleFinance = getDemoPaymentSummary(sampleVehicle.price, sampleVehicle.price * 0.2, 36, 12)

  const heroStats = [
    { label: 'Curated vehicle collection', value: 'Demo inventory' },
    { label: 'Drive2Own planning', value: 'Illustrative' },
    { label: 'Customer journey', value: 'Digital' }
  ]

  const reasons = [
    { icon: Sparkles, title: 'Premium selection', text: 'A carefully curated collection of modern, reliable vehicles built for everyday confidence.' },
    { icon: Gauge, title: 'Flexible financing', text: 'Drive2Own options shaped around affordability and a simple digital journey.' },
    { icon: ShieldCheck, title: 'Clear process', text: 'From discovery to application, each step stays clear, simple, and easy to follow.' }
  ]

  return (
    <div>
      <section className="relative overflow-hidden bg-[#081826] text-white">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80" alt="Luxury SUV on a road" fill priority loading="eager" sizes="100vw" className="object-cover opacity-65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(215,174,90,0.22),_transparent_26%),linear-gradient(90deg,rgba(8,24,38,0.94),rgba(8,24,38,0.7),rgba(8,24,38,0.3))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-2xl fade-up">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-[#f6e7ca] backdrop-blur-sm">
                Premium Ghana mobility
              </div>

              <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-7xl">
                YOUR CAR.<br />YOUR PLAN.<br />YOUR DRIVE.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 md:text-lg">
                Find your next vehicle and explore flexible Drive2Own options designed to make car ownership easier.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/cars" className="premium-button inline-flex items-center justify-center rounded-full bg-[#f7efe3] px-6 py-3.5 text-sm font-semibold text-[#0d1724] hover:bg-white">
                  Browse Cars
                </Link>
                <Link href="/drive2own" className="premium-button inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                  Explore Drive2Own
                </Link>
              </div>
            </div>

            <div className="fade-up lg:justify-self-end">
              <div className="card-shell max-w-sm rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_20px_70px_rgba(5,11,19,0.35)] backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#d7ae5a]">Quick insight</span>
                  <span className="rounded-full border border-[#d7ae5a]/30 bg-[#d7ae5a]/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-[#f7efe3]">
                    Demo
                  </span>
                </div>

                <div className="space-y-4">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-[#0d1724]/45 p-4">
                      <div className="text-2xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-[#f7efe3] p-4 text-[#0d1724]">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-slate-500">From</div>
                    <span className="rounded-full bg-[#0d1724] px-2 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-[#f7efe3]">Drive2Own</span>
                  </div>
                  <div className="mt-2 text-3xl font-semibold tracking-[-0.06em]">GH₵ {Math.round(sampleFinance.monthlyPayment).toLocaleString()}<span className="text-lg font-medium text-slate-600"> / mo</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e9dfd2] bg-[#f9f6f1]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 text-sm text-slate-700 md:grid-cols-3 md:py-6">
          {['Curated demo inventory', 'Flexible financing pathways', 'Built for confident local buying'].map((item) => (
            <div key={item} className="flex items-center justify-center gap-3 rounded-full border border-[#e7ddd0] bg-white/70 px-4 py-3 text-center shadow-sm">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#d7ae5a]" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88a3e]">Featured inventory</p>
            <h2 className="mt-2 text-4xl tracking-[-0.05em] text-[#0d1724]">Featured Vehicles</h2>
          </div>
          <Link href="/cars" className="hidden items-center gap-2 text-sm font-semibold text-[#0d1724] md:inline-flex">
            View all cars <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((v) => <VehicleCard key={v.id} v={v} />)}
        </div>
      </section>

      <section className="bg-[#f0e9e1] py-14 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="fade-up">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88a3e]">Drive2Own</p>
            <h3 className="mt-3 text-4xl tracking-[-0.05em] text-[#0d1724]">Drive Today. Own Tomorrow.</h3>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-700">
              Flexible payment options designed for Ghanaian drivers. Apply for Drive2Own and get a plan built around your budget and goals.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/apply" className="premium-button inline-flex items-center rounded-full bg-[#0d1724] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1b2d43]">
                Apply Now
              </Link>
              <Link href="/drive2own" className="premium-button inline-flex items-center rounded-full border border-[#d7d2ca] bg-white px-5 py-3 text-sm font-semibold text-[#0d1724] hover:border-[#0d1724]">
                Learn More
              </Link>
            </div>

            <div className="mt-8 space-y-3">
              {['Transparent demo guidance', 'Easy application flow', 'Built for local market reality'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="text-[#b88a3e]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-float">
            <FinancingCalculator initialPrice={120000} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="mb-8 text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88a3e]">How it works</p>
          <h2 className="mt-2 text-4xl tracking-[-0.05em] text-[#0d1724]">Simple. Transparent. Flexible.</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {['Choose your vehicle', 'Share your details', 'Get reviewed', 'Drive away'].map((step, index) => (
            <div key={step} className="card-shell rounded-[1.5rem] p-6">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#0d1724] text-sm font-semibold text-[#f7efe3]">0{index + 1}</div>
              <h4 className="font-heading text-2xl leading-tight text-[#0d1724]">{step}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0d1724] py-14 text-white md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#d7ae5a]">Why choose topsy</p>
            <h2 className="mt-2 text-4xl tracking-[-0.05em] text-white">A clearer way to buy.</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7ae5a]/12 text-[#d7ae5a] ring-1 ring-[#d7ae5a]/15">
                  <Icon size={20} />
                </div>
                <h4 className="font-heading text-3xl leading-none text-white">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
        <div className="rounded-[2rem] bg-[#f6efe7] p-8 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#b88a3e]">Ready to begin</p>
              <h2 className="mt-2 text-4xl tracking-[-0.05em] text-[#0d1724]">Let’s find the right drive for you.</h2>
            </div>
            <Link href="/cars" className="premium-button inline-flex items-center justify-center rounded-full bg-[#0d1724] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1a2d43]">
              Explore Inventory
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
