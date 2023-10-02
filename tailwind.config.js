/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'title-grey': '#F9F9F9',
        'ble-50': '#EBF4F9',
        'ble-100': '#D7E8F4',
        'ble-200': '#AFD2E9',
        'ble-300': '#88BBDD',
        'ble-400': '#60A4D2',
        'ble-500': '#398EC7',
        'ble-600': '#2D719F',
        'ble-700': '#225577',
        'ble-900': '#0B1C28',
        
      },
    },
  },
  plugins: [],
}
