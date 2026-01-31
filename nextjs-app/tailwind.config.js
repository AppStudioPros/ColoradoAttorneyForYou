/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#13263b',
          light: '#1e3a5c',
        },
        accent: {
          DEFAULT: '#1ea6a3',
          hover: '#189694',
        },
        background: '#f5f8fb',
        muted: '#6b7280',
      },
      borderRadius: {
        card: '18px',
      },
    },
  },
  plugins: [],
}
