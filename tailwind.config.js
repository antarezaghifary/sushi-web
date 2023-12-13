/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
      },
      colors: {
        tes: "#5D5E5F",
        btn_orange: "#F45D48",
        btn_green: "#078080",
        bg_hero: "#F8F5F2",
      },
    },
  },
  plugins: [],
};
