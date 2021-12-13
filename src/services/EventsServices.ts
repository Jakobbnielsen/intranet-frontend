import http from "@/http-common";

class EventsServices {
	getAll(): Promise<any> {
		return http.get("/events");
	}
}

export default new EventsServices();
