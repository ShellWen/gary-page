/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,js,jsx,ts,tsx,vue}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        // ----------------------------------------------------------------
        // generated from https://javisperez.github.io/tailwindcolorshades/?primary=94bade&secondary=476e8f&tertiary=d95d51
        primary: {
          50: '#F7FBFC',
          100: '#F5FAFC',
          200: '#E4F1F7',
          300: '#D3E8F2',
          400: '#B3D2E8',
          500: '#94bade',
          600: '#779EC7',
          700: '#5378A6',
          800: '#355685',
          900: '#1E3763',
          950: '#0C1D40',
        },
        secondary: {
          50: '#F5F9FA',
          100: '#E9F2F5',
          200: '#C8DBE3',
          300: '#A7C4D1',
          400: '#7298B0',
          500: '#476e8f',
          600: '#395E80',
          700: '#28486B',
          800: '#1A3457',
          900: '#0E2240',
          950: '#061229',
        },
        tertiary: {
          50: '#FCF9F5',
          100: '#FCF5ED',
          200: '#F5DFCE',
          300: '#F0CAB4',
          400: '#E69681',
          500: '#d95d51',
          600: '#C44C41',
          700: '#A3362E',
          800: '#82231D',
          900: '#611610',
          950: '#400A07',
        },
        // ----------------------------------------------------------------
      },
      fontFamily: {
        'sans-serif': ['"Noto Serif SC"', 'sans-serif'],
        'sans': ['"Noto Sans SC Variable"', 'sans'],
      }
    },
  },
  plugins: [],
}
