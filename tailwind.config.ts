import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-primary': 'linear-gradient(90deg, #2CE97A 0%, #D9D314 100%)',
				'gradient-secondary': 'linear-gradient(90deg, #D9D314 0%, #2CE97A 90%)',
			},
			colors: {
					black: {
						900: "#04060C",
						800: "#0e161f",
						700: "#181a1f",
						600: "#13151b",
						500: "#212931",
						400: "#282c34",
						300: "#262d35",
						100: "#fff"
					},
					green: "#56cd55"


			},
			fontFamily: {
				'ztc-font1': [
					'Figtree',
					'sans-serif'
				],
				'ztc-font2': [
					'Playfair',
					'serif'
				]
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
