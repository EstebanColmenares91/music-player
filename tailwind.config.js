/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modules/**/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        spotify: {
          black: "#191414",
          green: {
            DEFAULT: "#1DB954",
            100: "#1ED760", // hover state
            200: "#1AA34A", // pressed state
          },
          white: "#FFFFFF",
          gray: {
            50: "#F8F8F8",
            100: "#E5E5E5",
            200: "#B3B3B3", // secondary text
            300: "#535353", // inactive icons
            400: "#282828", // cards
            500: "#181818", // darker elements
            600: "#121212", // darkest background
          },
        },
      },
      spacing: {
        nav: "4rem", // Spotify's navigation bar height
        "now-playing": "5rem", // Now playing bar height
      },
      borderRadius: {
        "spotify-sm": "4px",
        "spotify-md": "8px",
        "spotify-lg": "12px",
        "spotify-xl": "24px",
        "spotify-full": "500px", // for pills and circular elements
      },
      fontSize: {
        "spotify-xs": ["10px", "12px"],
        "spotify-sm": ["12px", "16px"],
        "spotify-base": ["14px", "20px"],
        "spotify-md": ["16px", "24px"],
        "spotify-lg": ["24px", "28px"],
        "spotify-xl": ["28px", "32px"],
        "spotify-2xl": ["32px", "36px"],
      },
    },
  },
  plugins: [],
};
