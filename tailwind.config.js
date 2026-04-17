/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0b0b0b",
        glow: "#00f2ff",
        accent: {
          purple: "#7000ff",
          cyan: "#00f2ff",
          lime: "#bfff00",
        }
      },
      animation: {
        'glow-pulse': 'glow 2s infinite alternate',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f2ff' },
          '100%': { boxShadow: '0 0 20px #00f2ff, 0 0 40px #00f2ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
