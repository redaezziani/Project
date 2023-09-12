const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {

    extend: {

      colors: {
        'app-dark': 'theme(colors.blue-gray.900)',
        'app--dark': 'theme(colors.blue-gray.600)',
        'app-light': 'theme(colors.yellow.50)',
        'app--light': 'theme(colors.yellow.100)',
        'app-primary': 'theme(colors.teal.400)',
        'app--primary': 'theme(colors.teal.200)',
      },
      
    },

  },
  plugins: [],
});