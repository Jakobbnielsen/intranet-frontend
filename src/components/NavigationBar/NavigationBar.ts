export default {
	name: "NavigationBar",

	setup() {
		return {
			navLinks: [
				{
					url: "/",
					text: "Hjem",
					icon: "fas fa-home",
					showOnlyMobile: false,
				},
				{
					url: "/ansatte",
					text: "Ansatte",
					icon: "fas fa-users",
					showOnlyMobile: false,
				},
				// {
				// 	url: "/dokumenter",
				// 	text: "Dokumenter",
				// 	icon: "far fa-file-alt",
				// 	showOnlyMobile: false,
				// },
				// {
				// 	url: "/virksomhed",
				// 	text: "Company Page",
				// 	icon: "far fa-building",
				// 	showOnlyMobile: false,
				// },
			],
		};
	},
};
