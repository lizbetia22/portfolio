/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark_1: 'var(--color-dark_1)',
        dark_2: 'var(--color-dark_2)',
        dark_3: 'var(--color-dark_3)',
        dark_4: 'var(--color-dark_4)',
        dark_5: 'var(--color-dark_5)',
        light_1: 'var(--color-light_1)',
        light_2: 'var(--color-light_2)',
        light_3: 'var(--color-light_3)',
        light_4: 'var(--color-light_4)',
        light_5: 'var(--color-light_5)',
        light_6: 'var(--color-light_6)',
        light_7: 'var(--color-light_7)',
      },
    },
  },
  plugins: [],
}
