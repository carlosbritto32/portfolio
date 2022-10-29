/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cinema: "url('/img/cinema.png')",
        hotel: "url('/img/hotels.png')",
        rickMorty: "url('/img/rickMorty.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
