import EventsServices from "@/services/EventsServices";
import Events from "@/types/Events";
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
				.then((response: any) => {
					this.Events = response.data;
					console.log(response);
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
	},
});
