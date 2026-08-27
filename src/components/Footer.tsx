export default function Footer() {
  return (
    <footer className="bg-[#091827] text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
        <div className="max-w-md">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#d7ae5a] via-[#b88a3e] to-[#12304c] text-lg font-bold text-white shadow-lg">
              T
            </div>
            <div>
              <div className="font-heading text-xl font-semibold text-white">Topsy Ventures</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">Drive2Own Ghana</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            This demo website is for presentation purposes only. All commercial details are demonstrations unless otherwise specified.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7ae5a]">Explore</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/cars" className="hover:text-white">Cars</a></li>
            <li><a href="/drive2own" className="hover:text-white">Drive2Own</a></li>
            <li><a href="/how-it-works" className="hover:text-white">How It Works</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7ae5a]">Contact</h4>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            Demo contact placeholders only. Replace with official details when available.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-500">© {new Date().getFullYear()} Topsy Ventures — Demo</div>
      </div>
    </footer>
  )
}
