/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          green: 'var(--matrix-green)',
          dark: 'var(--matrix-dark)',
        }
      },
    },
  },
  plugins: [],
}