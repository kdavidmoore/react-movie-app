// define the endpoints to themoviedb.org API
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=";
const NOW_PLAYING_URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
const GENRES_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=";
const SEARCH_URL = "http://api.themoviedb.org/3/search/movie?api_key=";
// go to the config endpoint and retrieve the base url for poster images
var imgBaseUrl;
$.getJSON(CONFIG_URL + API_KEY, function(data) {
	imgBaseUrl = data.images.base_url;
});
// go to the genres endpoint and retrieve an array of movie genres and their ids
var genres;
$.getJSON(GENRES_URL + API_KEY, function(data) {
	genres = data.genres;
});
//SEARCH_URL + API_KEY + "&query=" + encodeURI(this.props.moviesToShow) + "&page=1"