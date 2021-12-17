import HighlightedPosts from "@/components/HighlightedPosts/HighlightedPosts.vue";
import PostsFeed from "@/components/PostsFeed/PostsFeed.vue";
import SideBar from "@/components/SideBar/SideBar.vue";
import Welcome from "@/components/Welcome/Welcome.vue";

export default {
	name: "Home",
	components: {
		SideBar,
		Welcome,
		HighlightedPosts,
		PostsFeed,
	},
};
