import http from "@/http-common";

class EmployeesServices {
	getAll(): Promise<any> {
		return http.get("/employees");
	}
}

export default new EmployeesServices();
