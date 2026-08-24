export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent text-white flex items-center justify-center font-bold rounded-sm">T</div>
            <div>
              <div className="font-heading font-semibold">Topsy Ventures</div>
              <div className="text-sm text-gray-400">Drive2Own Ghana — Demo</div>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm max-w-md">This demo website is for presentation purposes only. All commercial details are demonstrations unless otherwise specified.</p>
        </div>

        <div>
          <h4 className="font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>Cars</li>
            <li>Drive2Own</li>
            <li>How It Works</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-3 text-sm text-gray-400">Demo contact placeholders only. Replace with official details when available.</p>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">© {new Date().getFullYear()} Topsy Ventures — Demo</div>
      </div>
    </footer>
  )
}
