/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 1.5s infinite", // Use linear for a constant flow
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }, // Smooth linear motion
        },
      },
    },
  },
  plugins: [],
};
