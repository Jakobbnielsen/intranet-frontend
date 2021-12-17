import PostsServices from "@/services/PostsServices";
import Posts from "@/types/Posts";
import ResponseData from "@/types/ResponseData";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { defineComponent } from "vue";

export default defineComponent({
	name: "HighlightedPosts",
	data() {
		return {
			Posts: [] as Posts[],
			counter: 0,
			dayjs,
			relativeTime,
		};
	},
	mounted() {
		this.retrieveTutorials();
		dayjs.extend(relativeTime);
	},
	methods: {
		retrieveTutorials() {
			PostsServices.getAll()
				.then((response: ResponseData) => {
					this.Posts = response.data;
					console.log(response.data);
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
		next() {
			if (!(this.counter >= 1)) {
				this.counter += 1;
			}
		},
		prev() {
			if (!(this.counter <= 0)) {
				this.counter -= 1;
			}
		},
	},
});
