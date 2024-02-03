/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./css/style.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "var(--soft-blue)",
        cyan: "var(--cyan)",
        "very-dark-blue-main-bg": "var(--very-dark-blue-main-bg)",
        "very-dark-blue-card-bg": "var(--very-dark-blue-card-bg)",
        "very-dark-blue-line": "var(--very-dark-blue-line)",
        white: "var(--white)",
      },
      fontFamily: {
        outfit: "var(--outfit)",
      },
      boxShadow: {
        "custom-1": "rgba(0, 0, 0, 0.3) 0px 5px 15px 0px",
      },
    },
  },
  plugins: [],
};
