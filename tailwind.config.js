/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(2px)' },
          '75%': { transform: 'translate(-2px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        shake: 'shake 1s ease-in-out infinite',
      },
    },
  },
};
