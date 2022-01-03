import http from "@/http-common";
import Events from "@/types/Events";

class EventsServices {
	getAll(): Promise<Events> {
		return http.get("/events");
	}
}

export default new EventsServices();
