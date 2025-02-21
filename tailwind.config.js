/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        120: "480px",
      },
    },
  },
  plugins: [],
};
