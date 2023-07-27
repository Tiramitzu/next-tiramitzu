import colors from "tailwindcss/colors";

module.exports = {
	darkMode: "class",
	content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				mobile: { max: "768px" }
			},
			colors: {
				primary: "#ffffff",
				secondary: colors.neutral[300],
				tertiary: colors.neutral[900],
				quaternary: colors.neutral[800]
			},
			transitionProperty: {
				height: "height"
			},
			opacity: {
				90: ".9"
			},
			keyframes: {
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-100px)"
					},
					"1%": {
						opacity: "0"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				}
			},
			animation: {
				"fade-in-down-1": "fade-in-down 1s ease-out",
				"fade-in-down-2": "fade-in-down 1.25s ease-out"
			}
		}
	},
	corePlugins: {
		container: false
	}
};
