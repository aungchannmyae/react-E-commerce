/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
import daisyui from './node_modules/daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
    flowbite.plugin(),
    require('flowbite/plugin')
  ],
}


