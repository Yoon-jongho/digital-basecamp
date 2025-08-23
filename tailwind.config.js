/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7E9EFC", // 파스텔 블루 (기존)
        secondary: "#FAA1A1", // 소프트 코랄 (기존)
        accent: "#5CC97B", // 민트 그린 (기존)
        "pastel-blue": "#7E9EFC",
        "soft-coral": "#FAA1A1",
        "mint-green": "#5CC97B",
        "coral-50": "#FEFBFB",
      },
      fontFamily: {
        pretendard: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-mesh":
          "radial-gradient(circle at 20% 50%, rgba(126, 158, 252, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(250, 161, 161, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(92, 201, 123, 0.3) 0%, transparent 50%)",
      },
      animation: {
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
        "gradient-shift-reverse":
          "gradientShiftReverse 10s ease-in-out infinite",
        "gradient-text": "gradientText 6s ease-in-out infinite",
        "float-slow": "floatSlow 6s ease-in-out infinite",
        "float-medium": "floatMedium 4s ease-in-out infinite",
        "float-fast": "floatFast 3s ease-in-out infinite",
        "float-geometric": "floatGeometric 5s ease-in-out infinite",
        "float-particle": "floatParticle 8s linear infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        "gentle-spin": "gentleSpin 30s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(180deg) scale(1.1)" },
        },
        gradientShiftReverse: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "50%": { transform: "rotate(-180deg) scale(0.9)" },
        },
        gradientText: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-15px) rotate(-180deg)" },
        },
        floatFast: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-25px) rotate(90deg)" },
        },
        floatGeometric: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.1)" },
        },
        floatParticle: {
          "0%": { transform: "translateY(0px)", opacity: "0.7" },
          "50%": { transform: "translateY(-100px)", opacity: "1" },
          "100%": { transform: "translateY(-200px)", opacity: "0" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        gentleSpin: {
          "from": { transform: "rotateX(-10deg) rotateY(0deg)" },
          "to": { transform: "rotateX(-10deg) rotateY(360deg)" },
        },
        fadeIn: {
          "from": { opacity: "0", transform: "translateY(10px)" },
          "to": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 20px 40px rgba(0, 0, 0, 0.1)",
        "soft-hover": "0 25px 50px rgba(0, 0, 0, 0.15)",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        "1000": "1000px",
        "2000": "2000px",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      addUtilities({
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".animation-delay-0": {
          animationDelay: "0ms",
        },
        ".animation-delay-100": {
          animationDelay: "100ms",
        },
        ".animation-delay-200": {
          animationDelay: "200ms",
        },
      });
    },
  ],
};
