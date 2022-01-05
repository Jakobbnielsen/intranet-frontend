import PostsServices from "@/services/PostsServices";
import Posts from "@/types/Posts";
import ResponseData from "@/types/ResponseData";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { defineComponent } from "vue";

export default defineComponent({
	name: "PostsFeed",
	data() {
		return {
			Posts: [] as Posts[],
			counter: 0,
			dayjs,
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
					this.Posts = this.Posts.sort(function (a: any, b: any) {
						return b.id - a.id;
					});
					console.log(response.data);
				})
				.catch((e: Error) => {
					console.log(e);
				});
		},
	},
});
