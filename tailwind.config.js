/** @type {import('tailwindcss').Config} */
import { plugin } from "postcss"
import serviceBackground from "./src/assets/"
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "aakash": "fira code",
        "google": "Work Sans"
      },
      backgroundImage: {
        'service': "url('./src/assets/city2.jpg')",
        'hero': "url('https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676')",
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        press: 'press 2s ease-in-out infinite',
        moveToIcons: 'moveToIcons 3s ease-in-out infinite',
      },
      keyframes: {
        moveToIcons: {
          '0%, 100%': { transform: 'translateX(-8rem)' }, // Facebook icon
          '33%': { transform: 'translateX(0)' },          // WhatsApp icon
          '66%': { transform: 'translateX(8rem)' },       // Instagram icon
        },
        press: {
          '0%, 100%': { transform: 'translateY(-2rem)' },
          '50%': { transform: 'translateY(0)' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugin: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}