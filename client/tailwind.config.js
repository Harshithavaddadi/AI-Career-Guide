/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-primary': '#7C3AED',
        'custom-secondary': '#06B6D4',
        'custom-bg': '#0F172A',
        'custom-card': '#1E293B',
        'custom-text': '#F8FAFC',
        'custom-accent': '#38BDF8',
      }
    },
  },
  plugins: [],
}