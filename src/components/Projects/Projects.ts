import IntranetDataServices from "@/services/IntranetDataServices";
import Projects from "@/types/Projects";
import ResponseData from "@/types/ResponseData";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Projects",
	data() {
		return {
			Projects: [] as Projects[],
		};
	},
	mounted() {
		this.retrieveTutorials();
	},
	methods: {
		retrieveTutorials() {
			IntranetDataServices.getAll()
				.then((response: ResponseData) => {
					this.Projects = response.data;
					console.log(response.data);
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
	},
});
