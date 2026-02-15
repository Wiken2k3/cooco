/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        'primary-light': '#FFFFFF',
        'bg-light': '#F5F5F7',
        'card-light': '#FFFFFF',
        'header-bg': '#F4F4F4',
        'text-primary': '#000000',
        'text-secondary': '#7D7D7D',
        'button-bg': '#D1EPF8',
        'button-color': '#18BAF8',
        'button-hover': '#18BAF8',
        'border-light': '#E5E5EA',
        
        // Dark Mode
        'bg-dark': '#1C1C1E',
        'card-dark': '#2C2C2E',
        'text-dark': '#FFFFFF',
        'text-dark-secondary': '#A1A1A6',
        'border-dark': '#404041',
      },
      spacing: {
        'safe': 'env(safe-area-inset-bottom)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
    },
  },
  plugins: [],
}
