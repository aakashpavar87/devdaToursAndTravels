/** @type {import('tailwindcss').Config} */
import { plugin } from "postcss"
import serviceBackground from "./src/assets/"
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
      }
    },
  },
  plugin: []
}