/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          900: 'var(--brand-900)',
          700: 'var(--brand-700)'
        },
        accent: 'var(--accent)',
        muted: 'var(--muted)'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        heading: ['var(--font-heading)', 'serif']
      },
      boxShadow: {
        'card-soft': '0 6px 18px rgba(11,17,29,0.06)'
      }
    }
  },
  plugins: [],
}
