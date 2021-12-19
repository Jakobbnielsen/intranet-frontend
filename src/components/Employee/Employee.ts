import EmployeesServices from "@/services/EmployeesServices";
import Employees from "@/types/Employees";
import ResponseData from "@/types/ResponseData";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
	name: "Employee",
	setup() {
		const searchText = ref("");
		const list = ref<Employees[]>();
		const getEmployees = async () => {
			await EmployeesServices.getAll().then((response) => {
				if (response.data != null) {
					list.value = response.data;
				}
			});
		};

		onMounted(() => {
			getEmployees();
		});

		function filteredList() {
			if (list.value != undefined) {
				return list.value.filter((item) =>
					item.fullName.toLowerCase().includes(searchText.value.toLowerCase())
				);
			}
		}

		return { searchText, filteredList, list };
	},
	data() {
		return {
			Employees: [] as Employees[],
		};
	},

	mounted() {
		this.retrieveEmployees();
	},
	methods: {
		retrieveEmployees() {
			EmployeesServices.getAll()
				.then((response: ResponseData) => {
					this.Employees = response.data;
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
	},
});
