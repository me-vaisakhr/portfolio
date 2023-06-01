/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      logo: ["Cinzel Decorative", "cursive"],
      default: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        primary: "#242424",
      },

      backgroundSize: {
        400: "400%",
      },
      transitionProperty: {
        translate: "translate",
      },
      animation: {
        logo: "loading 4s ease-in-out infinite",
        typing: "typing 2s steps(20) alternate, blink .7s infinite",
        "blink-bg": "blinkBg .7s infinite",
        "slide-up": "slideUp .7s ease-in",
        "delayed-slide-up": "slideUp .7s ease-in 0.5s",
        "slide-down": "slideDown .7s ease-in",
        "slide-right": "slideRight .7s ease-in",
        "fade-in": "fadeIn .5s ease-in",
      },
      keyframes: {
        loading: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blinkBg: {
          "50%": {
            backgroundColor: "transparent",
          },
          "100%": {
            backgroundColor: "initial",
          },
        },
        slideUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(16px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        slideDown: {
          "0%": {
            opacity: 0,
            transform: "translateY(-16px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        fadeIn: {
          "0%": {
            filter: "blur(10px)",
            opacity: 0,
          },
          "100%": {
            filter: "blur(0px)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
