/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'expand-x': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        }
      },
      animation: {
        'expand-x': 'expand-x 150ms ease-in-out forwards'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true
    }),
    function ({ addUtilities }) {
      addUtilities({
        '.flex-center-all': {
          'display': 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      })
    }
  ],
}

