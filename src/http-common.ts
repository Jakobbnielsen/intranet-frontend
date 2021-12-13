import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
	baseURL: "https://lait-intranet-backend.herokuapp.com",
	headers: {
		"Content-type": "application/json",
	},
});

export default apiClient;
