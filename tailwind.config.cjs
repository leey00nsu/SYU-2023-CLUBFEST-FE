/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "500px",
    },
    extend: {
      colors: {
        "clubfest-bgBlue": "#0a1240",
        "clubfest-blue": "#0D1C57",
        "clubfest-gray": "#101010",
        "clubfest-deepgray": "#8C8C8C",
        "clubfest-lightgray": "#D9D9D9",
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
