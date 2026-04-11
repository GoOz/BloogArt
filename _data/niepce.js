// Niepce's configuration
// Read the wiki https://github.com/GoOz/Niepce/Wiki for more informations

export default {
	// WEBSITE INFORMATIONS
	title: "GoOz Photography",
	url: "https://gooz.photography",
	language: "en",
	locale: "en_US",
	description: "Miscellaneous photography by GoOz",
	author: {
		name: "GoOz",
		email: "gooz@foojin.com",
		url: "https://www.foojin.com",
	},

	// SPLASH SCREEN
	splash: {
		enabled: true,
		link: "Browse",
		line: "Take a look at my work…",
	},

	// THEME
	theme: "niepce",
	theme_variant: "auto", // "light" | "dark" | "auto"
	grid: "masonry", // "justified" | "instagrid" | "masonry" | "monocolumn"

	// THEME OPTIONS
	ignored_pages: {
		archives: false,
		contact: false,
		blogposts: true,
	},
	home: {
		last_items: {
			enabled: true,
			nb_items: 8,
		},
		categories: true,
		series: true,
		blogposts: {
			enabled: false,
			nb_items: 3,
		},
	},
	animations: true,
	logo: "/public/img/logo-inline.svg",
	exif: true,
	shop_link: "Buy a print",
	form_url:
		"https://api.postcatch.io/submit/d8389c77-e28e-4878-b318-6616d4ea199a",
	form_sent_page: "/thank-you/",

	// SOCIAL NETWORKS
	social_banner: "/img/banner.jpg",
	socials: {
		"500px": "",
		behance: "",
		deviantart: "",
		flickr: "",
		glass: "https://glass.photo/gooz",
		instagram: "https://www.instagram.com/gooz/",
		notos: "",
		pixelfed: "https://pixelfed.social/i/web/profile/422334934806983747",
		tumblr: "",
	},
}
