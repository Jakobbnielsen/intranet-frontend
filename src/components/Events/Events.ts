import EventsServices from "@/services/EventsServices";
import Events from "@/types/Events";
import ResponseData from "@/types/ResponseData";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Events",
	data() {
		return {
			Events: [] as Events[],
		};
	},
	mounted() {
		this.retrieveTutorials();
	},
	methods: {
		retrieveTutorials() {
			EventsServices.getAll()
				.then((response: ResponseData) => {
					this.Events = response.data;
					console.log(response.data);
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
	},
});
