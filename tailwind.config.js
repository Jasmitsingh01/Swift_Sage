/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#3498db',
        secondary:'#f1c40f',
        dark:'#333',
        light:'#f7f7f7'


      }
    },
  },
  plugins: [
    
  ],
}
