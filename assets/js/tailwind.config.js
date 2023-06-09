tailwind.config = {
   theme: {
      screens: {
         sm: "480px",
         md: "768px",
         lg: "976px",
         xl: "1300px",
      },
      extend: {
         fontFamily: {
            arimo: ["Arimo", "sans-serif"],
            kanit: ["Kanit", "sans-serif"],
         },
         colors: {
            transparent: 'transparent',
            current: 'currentColor',

            // Branding
            primary: {
               '50': '#edf9ff',
               '100': '#d6efff',
               '200': '#b5e4ff',
               '300': '#83d5ff',
               '400': '#48bdff',
               '500': '#1e9aff',
               '600': '#067bff',
               '700': '#005ce5',
               '800': '#084ec5',
               '900': '#0d469b',
               '950': '#0e2b5d',
            },
            dark: {
               '50': '#fdfdfd',
               '100': '#e3e3e3',
               '200': '#c8c8c8',
               '300': '#a4a4a4',
               '400': '#818181',
               '500': '#666666',
               '600': '#515151',
               '700': '#434343',
               '800': '#383838',
               '900': '#313131',
               '950': '#1b1b1b',
            },
            white: "#ffffff",
            black: "#000000",
            red: "#ff0000",
            purple: "#ea2fa6",
            blueGradient: "linear-gradient(to right, red 0%, blue 100%)"
         },

      },
   }
};