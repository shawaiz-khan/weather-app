/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#3ABFF8',
        'cloud-white': '#F5F7FA',
        'sunset-orange': '#FF6B6B',
        'cool-gray': '#6B7280',
        'night-blue': '#1E3A8A',
        'storm-gray': '#4B5563',
        'pastel-green': '#10B981',
        'bright-yellow': '#FBBF24',
        'light-mode-text': '#111827',
        'dark-mode-text': '#F9FAFB',
      },
    },
  },
  plugins: [],
}