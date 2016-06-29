var imgBaseUrl;

$.getJSON(CONFIG_URL + API_KEY, function(data) {
	imgBaseUrl = data.images.base_url;
});