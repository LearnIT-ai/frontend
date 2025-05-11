/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(326deg, rgb(13, 17, 25) 0%, rgb(0, 102, 255) 100%)",
      },
      animation: {
        orbit: "orbit 40s linear infinite",
        "orbit-reverse": "orbit-reverse 40s linear infinite",
        "custom-bounce": "custom-bounce 0.5s ease-out forwards",
      },
      keyframes: {
        "custom-bounce": {
          "0%": { transform: "scale(1)" },
          "33%": { transform: "scale(0.95)" },
          "66%": { transform: "scale(1.02)" },
          "100%": { transform: "scale(1)" },
        },
      },
      backgroundImage: {
        "anastasia-img": "url('assets/images/team/anastasia.jpg')",
        "denis-img": "url('./assets/images/team/denis.jpg')",
        "ivanka-img": "url('assets/images/team/ivanka.jpg')",
        "roman-img": "url('assets/images/team/roman.jpg')",
        "khrystyna-img": "url('assets/images/team/khrystyna.jpg')",
        "maksym-img": "url('assets/images/team/maksym.png')",
        "daryna-img": "url('assets/images/team/daryna.png')",
        "liza-img": "url('assets/images/team/liza.jpg')",
        "svyat-img": "url('assets/images/team/svyat.jpg')",
        "oleksandr-img": "url('assets/images/team/oleksandr.jpg')",
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              fontSize: "16px",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
