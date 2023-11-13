import axios from "axios";
// const API_KEY = "ed6f703d0e9f91008dbdcbc89334b381";

axios.defaults.baseURL = "https://2btc.7buh.online/kw_api/custom";
axios.defaults.headers.common["Authorization"] = "";

export const getTrendingMovies = async () => {
	const trendingMovies = `/trending/movie/day?api_key=${API_KEY}`;
	return get(trendingMovies);
};

export const postFormData = async formData => {
	return post(formData);
};

const get = async query => {
	try {
		const { data } = await axios.get(query);
		return data;
	} catch (error) {
		console.log(`Request to ${query} threw an error`);
		console.log(`Error: `, error);
	}
};

const post = async formDataObject => {
	try {
		const { data } = await axios.post("/btc.mobile_datas", formDataObject, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log(data);
		return data;
	} catch (error) {
		console.log(`Request to server threw an error`);
		console.log(`Error: `, error);
	}
};
