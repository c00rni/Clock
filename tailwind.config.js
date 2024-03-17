/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-day': "url('../public/starter-code/assets/desktop/bg-image-daytime.jpg')",
        'desktop-night': "url('../public/starter-code/assets/desktop/bg-image-nighttime.jpg')",
      },
      backgroundColor: {
        "dark": "#303030",
      },
      textColor: {
        "dark": "#303030"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.2rem',
        mb: '1.5rem',
        xl: '1.8rem',
        'h1': '20rem',
        'h2': '5.6rem',
        'h3': '2.4rem',
        'h4': '2rem',
      },
      letterSpacing: {
        h6: "3px",
        button: "3.75px",
        mb: "2px",
        mb2: "2.6px"
      },
    },
  },
  plugins: [],
}

