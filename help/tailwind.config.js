const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'app-dark': 'theme(colors.gray.800)',
        'app--dark': 'theme(colors.gray.900)',
        'app-light': 'theme(colors.gray.100)',
        'app--light': 'theme(colors.gray.300)',
        'app-primary': 'theme(colors.orange.600)',
        'app--primary': 'theme(colors.orange.300)',
      },

      fontFamily: {
        Cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
});