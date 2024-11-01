/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
};
