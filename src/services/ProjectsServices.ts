import http from "@/http-common";

class ProjectsServices {
	getAll(): Promise<any> {
		return http.get("/projects");
	}

	// get(id: any): Promise<any> {
	// 	return http.get(`/projects/${id}`);
	// }

	// create(data: any): Promise<any> {
	// 	return http.post("/projects", data);
	// }

	// update(id: any, data: any): Promise<any> {
	// 	return http.put(`/projects/${id}`, data);
	// }

	// delete(id: any): Promise<any> {
	// 	return http.delete(`/projects/${id}`);
	// }

	// deleteAll(): Promise<any> {
	// 	return http.delete(`/projects`);
	// }

	// findByTitle(title: string): Promise<any> {
	// 	return http.get(`/projects?title=${title}`);
	// }
}

export default new ProjectsServices();
