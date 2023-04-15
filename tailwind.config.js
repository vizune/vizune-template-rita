/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem'
      }
    },
    extend: {
      width: {
        '100': '28rem',
        '102': '31.25rem',
        '104': '32rem'
      }
    },
  },
  plugins: [],
}

