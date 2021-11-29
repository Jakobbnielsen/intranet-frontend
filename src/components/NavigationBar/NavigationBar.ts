export default {
	name: "NavigationBar",

	setup() {
		return {
			navLinks: [
				{
					url: "/",
					text: "Home",
					showOnlyMobile: false,
				},
				{
					url: "/CompanyPage",
					text: "Company Page",
					showOnlyMobile: false,
				},
				{
					url: "/DocumentsPage",
					text: "Documents",
					showOnlyMobile: false,
				},
				{
					url: "/EmployeePage",
					text: "Employees",
					showOnlyMobile: false,
				},
			],
		};
	},
};
