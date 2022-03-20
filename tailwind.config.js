module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        'primary': '#6675FF',
        'theme-dark': '#212936'
      }
    },
  },
  plugins: [],
}
