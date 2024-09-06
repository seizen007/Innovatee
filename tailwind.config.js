/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: "2rem",
			},
			backgroundImage: {
				hero: "url(/src/assets/bgShape.png)",
				integrationbg: "url(/src/assets/integrationbg.png)",
				factbg: "url(/src/assets/factbg.png)",
			},
			fontFamily: {
				dmSan: ["DM Sans", "sans-serif"],
				chivo: ["Chivo", "sans-serif"],
			},
		},
	},
	plugins: [],
};
