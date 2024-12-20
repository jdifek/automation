/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'bg-indigo-100',
    'bg-green-100',
    'bg-purple-100',
    'bg-yellow-100',
    'text-indigo-600',
    'text-green-600',
    'text-purple-600',
    'text-yellow-600',
  ],
};