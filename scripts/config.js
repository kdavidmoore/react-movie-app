// define the endpoints for the config info and now playing movies
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";
const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";

// go to the config endpoint and retrieve the base url for poster images
var imgBaseUrl;
$.getJSON(CONFIG_URL + API_KEY, function(data) {
	imgBaseUrl = data.images.base_url;
});