/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animate: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        blob: {
          '0%, 100%': {
            borderRadius: '50% 30% 40% 60% / 50% 40% 60% 60%',
          },
          '50%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
      },
      animation: {
        animate: 'animate 5s infinite',
        blob: 'animate 5s infinite',
      },
      fontFamily: {
        'qwitcher': ['Qwitcher Grypen', 'cursive'],
      },
    },
  },
  plugins: [],
}