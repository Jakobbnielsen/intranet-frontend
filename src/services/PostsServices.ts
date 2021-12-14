import http from "@/http-common";

class PostsServices {
	getAll(): Promise<any> {
		return http.get("/posts");
	}

	create(data: any): Promise<any> {
		return http.post("/posts", data);
	}
}

export default new PostsServices();
