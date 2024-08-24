/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightest-slate': '#ccd6f6',
        'slate': '#8892b0',
        'green' : '#64ffda',
      },
      lineHeight:{
        'h2-line-height': '1.1',
        'h3-line-height': '0.9',
        'p-line-height': '1.3',
      },
      maxWidth: {
        'p-width' : '540px',
        'section-max' : '1000px',
        'about-max' : '900px',
      },
      fontSize: {
        'greeting' : 'clamp( 14px, 5vw, 16px )'
      },
      backgroundColor: {
        'main-bg-color' : '#0a192f',
      },
    },
  },
  plugins: [],
}