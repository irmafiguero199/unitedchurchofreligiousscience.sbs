/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        accent: {
          50: '#fdf8e8',
          100: '#f9edc0',
          200: '#f5e197',
          300: '#f0d56e',
          400: '#ecc945',
          500: '#c9a227',
          600: '#a68420',
          700: '#836619',
          800: '#614812',
          900: '#3e2b0b',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e3ebe3',
          200: '#c7d9c7',
          300: '#a3c2a3',
          400: '#7a9e7e',
          500: '#5d8261',
          600: '#48664b',
          700: '#384f3a',
          800: '#28382a',
          900: '#18211a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
