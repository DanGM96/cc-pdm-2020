import axios from "axios";

const api = axios.create({
	// https://www.reddit.com/.json
	baseURL: "https://www.reddit.com/r/",
});

export default api;
