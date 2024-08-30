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
        seaBlue: {
          50: '#e0f7ff',
          100: '#b3e4ff',
          200: '#80caff',
          300: '#4daeff',
          400: '#1a94ff',
          500: '#0096d6',
          600: '#0078a0',
          700: '#005f79',
          800: '#004660',
          900: '#003147',
          950: '#001f34'
        },
        seaGreen: {
          50: '#e0f5f1',
          100: '#b3e1d8',
          200: '#80c5b2',
          300: '#4da89b',
          400: '#1a8e7a',
          500: '#00796b',
          600: '#005b54',
          700: '#004d47',
          800: '#003d36',
          900: '#002d26',
        }
      },
    },
  },
  plugins: [],
}