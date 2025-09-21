/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Figma dark theme tokens
        base: "#0f0f10",          // main page background
        surface: "#1a1b1e",       // cards & panels
        text: "#ffffff",          // primary text
        textMuted: "#a1a1aa",     // secondary / muted text
        // accent: "#3b82f6",        // example highlight (buttons, active states)
      },
    },
  },
  plugins: [],
};
