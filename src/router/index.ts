import CompanyPage from "@/views/CompanyPage/CompanyPage.vue";
import DocumentsPage from "@/views/DocumentsPage/DocumentsPage.vue";
import EmployeePage from "@/views/EmployeePage/EmployeePage.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home/Home.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/ansatte",
		name: "Ansatte",
		component: EmployeePage,
	},
	{
		path: "/dokumenter/:id",
		name: "Dokumenter",
		component: DocumentsPage,
	},
	{
		path: "/virksomhed",
		name: "Virksomhed",
		component: CompanyPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
