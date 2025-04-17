/** @type {import('tailwindcss').Config} */
module.exports = {
       content: [
         './src/app/**/*.{js,ts,jsx,tsx}',
         './src/components/**/*.{js,ts,jsx,tsx}',
       ],
       theme: {
         extend: {
           colors: {
             gray: {
               850: '#1a202c', // Custom gray-850
             },
           },
         },
       },
       plugins: [],
     };