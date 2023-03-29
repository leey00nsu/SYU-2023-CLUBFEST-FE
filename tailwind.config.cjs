/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "clubfest-blue": "#0D1C57",
        "clubfest-gray": "#101010",
      },
      fontFamily: {
        PyeongChangPeaceBold: ["PyeongChangPeace-Bold", "Arial"],
        PyeongChangPeace: ["PyeongChangPeace", "Arial"],
        PyeongChang: ["PyeongChang", "Arial"],
      },
    },
  },
  plugins: [],
};
