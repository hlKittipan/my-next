/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}", "./src/**/*"],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
