// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-red': '#ff2a6d',
        'cyber-red-dark': '#cc2157',
        'cyber-cyan': '#05d9e8',
        'cyber-cyan-dark': '#01b7c5',
        'cyber-bg': '#1a1a1a',
        'cyber-bg-dark': '#0f0f0f',
        'cyber-text': '#d1f7ff',
        'cyber-border': '#005e7c',
      },
      animation: {
        'pulse-cyan': 'pulse-cyan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-cyan': {
          '0%, 100%': {
            'box-shadow': '0 0 #05d9e833',
          },
          '50%': {
            'box-shadow': '0 0 15px #05d9e866',
          },
        },
      },
    },
  },
  plugins: [],
}