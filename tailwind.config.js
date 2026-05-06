/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1E1E',
          dark: '#CC0000',
          light: '#FF4D4D',
        },
        accent: {
          DEFAULT: '#F5B400',
          dark: '#C99000',
          light: '#FFD04D',
        },
        brand: {
          DEFAULT: '#0B1F3A',
          light: '#142d52',
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#111111',
          lighter: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(255, 30, 30, 0.4)',
        'glow-yellow': '0 0 20px rgba(245, 180, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
