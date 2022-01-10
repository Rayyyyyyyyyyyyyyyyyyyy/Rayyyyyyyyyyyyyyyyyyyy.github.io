module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#A8DADC",
          light: "#457B9D",
          dark: "#1D3557",
        },
        secondary: {
          DEFAULT: "#898989",
          light: "#f4f4f4",
          medium: "#d1d1d1",
          dark: "#000",
          inputBG: "#f0f1fd",
        },
        hr: "#e8e8e8",
        font: {
          DEFAULT: "#050505",
          light: "#fff",
          dark: "#050505",
          placeholder: "#8b939d",
        },
        bg: {
          DEFAULT: "#F1FAEE",
        },
        GroupBorder: {
          DEFAULT: "#f1f1f1",
        },
        success: {
          DEFAULT: "#5aa22e",
        },
        error: {
          DEFAULT: "#E63946",
        },
        warning: {
          DEFAULT: "#e2ab00",
          dark: "#f0b90b",
          light: "#f8da79",
        },
      },
      fontFamily: {
        lexend: [
          "Lexend",
          "-apple-system",
          "BlinkMacSystemFont",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        DEFAULT: "0 2px 7px 0 rgba(29, 29, 29, 0.05)",
      },
      borderRadius: {
        DEFAULT: "5px",
      },
      minWidth: {
        0: "0",
        "1/3": "33.3%",
        "3-12": `${(300 / 12)}%`,

        "1/24": "4.1666666%",
        "2/24": "8.3333333%",
        "3/24": "12.5%",
        "4/24": "16.6666666%",
        "5/24": "20.8333333%",
        "6/24": "25%",
        "7/24": "29.1666666%",
        "8/24": "33.3333333%",
        "9/24": "37.5%",
        "10/24": "41.6666666%",
        "11/24": "45.8333333%",
        "12/24": "50%",
        "13/24": "54.1666666%",
        "14/24": "58.3333333%",
        "15/24": "62.5%",
        "16/24": "66.6666666%",
        "17/24": "70.8333333%",
        "18/24": "75%",
        "19/24": "79.1666666%",
        "20/24": "83.3333333%",
        "21/24": "87.5%",
        "22/24": "91.6666666%",
        "23/24": "95.8333333%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".primary-gradient": {
          background: `linear-gradient(to right, ${theme(
            "colors.primary.light",
          )}, ${theme("colors.primary.DEFAULT")})`,
        },
        ".warning-gradient": {
          background: `linear-gradient(to right, ${theme(
            "colors.warning.light",
          )}, ${theme("colors.warning.dark")})`,
        },
      });
    },
  ],
};
