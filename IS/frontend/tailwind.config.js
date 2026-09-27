// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // root HTML
    "./src/**/*.{js,jsx,ts,tsx}"  // all React components in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
