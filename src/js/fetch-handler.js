const axios = require("axios").default;
const BASE_URL = "https://bond.ua/landing/asset/";
const BONDS_URL = "?asset_type=0";
const EUROBONDS = "?asset_type=2";
const CORPORATE = "?asset_type=3";

async function getBondsQuotes(assetType) {
	const response = await axios.get(`${BASE_URL}${assetType}`);
	console.log(response.data.results);
	return response.data.results;
}

getBondsQuotes(BONDS_URL);

// const axios = require("axios").default;
// const KEY = "8d41be39d2696eeff12b89d916a6c984";
// const api_key = `?api_key=${KEY}`;
// const BASE_URL = "https://api.themoviedb.org/3/";

// export async function getTrailersByMovieId(movieID) {
// 	const response = await axios.get(
// 		`${BASE_URL}movie/${movieID}/videos${api_key}`,
// 	);
// 	console.log(response.data);
// 	const result = response.data.results.filter(
// 		value => value.type === "Trailer" && value.site === "YouTube",
// 	);
// 	return result;
// }

// getTrailersByMovieId("693134");
