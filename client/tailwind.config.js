/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // This tells Tailwind to scan all your components
    "./public/index.html"          // Optional: include static HTML if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
