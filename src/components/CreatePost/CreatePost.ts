import PostsServices from "@/services/PostsServices";
import Posts from "@/types/Posts";
import ResponseData from "@/types/ResponseData";
import { defineComponent } from "vue";

export default defineComponent({
	name: "CreatePost",
	data() {
		return {
			Posts: {
				id: null,
				author: "",
				message: "",
				uploadedDate: new Date(),
				title: "",
			} as Posts,
			submitted: false,
		};
	},
	methods: {
		saveTutorial() {
			const data = {
				author: this.Posts.author,
				title: this.Posts.title,
				message: this.Posts.message,
				uploadedDate: this.Posts.uploadedDate,
			};

			PostsServices.create(data)
				.then((response: ResponseData) => {
					this.Posts.id = response.data.id;
					console.log(response.data);
					this.submitted = true;
				})
				.catch((e: Error) => {
					console.log(e);
				});
			this.$router.go(0);
		},

		newTutorial() {
			this.submitted = false;
			this.Posts = {} as Posts;
		},
	},
});
