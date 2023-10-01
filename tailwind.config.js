"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: "",
	important: false,
	separator: ":",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './styles/**/*.{css,scss}',
  ],
  theme: {
	  screens: {
		  sm: "640px",
		  md: "768px",
		  sl: "992px",
		  lg: "1024px",
		  xl: "1280px",
	  },
	  colors: {
		  contactUs: "#DA291C",
		  tint: "#D80032",
		  tintLight: "#FF95AD",
		  tintBright: "#F0243C",
		  tintDark: "#C9002F",
		  tintExtraDark: "#B4012A",
		  white: "#fff",
		  "white-80": "rgba(255,255,255,0.8)",
		  "white-50": "rgba(255,255,255,0.5)",
		  "white-20": "rgba(255,255,255,0.2)",
		  ground: "#F9F9FB",
		  coolHint: "#6b7480",
		  figure: "#665F61",
		  coolBlack: "#2C2F33",
		  coolExtraBlack: "#181A1C",
		  black: "#231F20",
		  extraBlack: "#000",
		  linkDefault: "#007db5",
		  focusColor: "#3fb6f2",
		  transparent: "transparent",
		  ruleGray: "rgba(0,0,0,.08)",
		  coolShade: "rgba(0,34,64,.06)",
		  shade: "rgba(0,34,64,.025)",
		  greige: "#EFEBE7",
		  
		  inherit: "inherit",
		  
		  contrast: {
			  100: "#ffffff",
			  200: "rgba(0,0,0,.02)",
			  300: "rgba(0,34,64,.06)",
			  400: "rgba(102,95,97,1)",
			  500: "rgba(44,47,51,1)",
		  },
		  
		  // Tailwind Default Colors
		  gray: {
			  100: "#f5f5f5",
			  200: "#eeeeee",
			  300: "#e0e0e0",
			  400: "#bdbdbd",
			  500: "#9e9e9e",
			  600: "#757575",
			  700: "#616161",
			  800: "#424242",
			  900: "#212121",
		  },
	  },
    extend: {
	    maxWidth: {
		    sl: "992px",
	    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
	corePlugins: {
		container: false,
		preflight: false,
	},
  plugins: [],
};
