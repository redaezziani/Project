const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'app-dark': 'theme(colors.gray.800)',
        'app--dark': 'theme(colors.gray.900)',
        'app-light': 'theme(colors.gray.50)',
        'app--light': 'theme(colors.gray.200)',
        'app-primary': 'theme(colors.green.400)',
        'app--primary': 'theme(colors.green.200)',
      },

      fontFamily: {
        Cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
});