(async () => {
    await loadCSS("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css");
	await loadCSS("https://cdn.bootcdn.net/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css");
	await loadCSS("/css/style.css");

    await loadJS("https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js");
	await loadJS("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.min.js");
	await loadJS("https://cdn.bootcdn.net/ajax/libs/jquery_lazyload/1.9.7/jquery.lazyload.js");
	await loadJS("https://cdn.bootcdn.net/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js");
	await loadJS("/js/masonry.min.js");
	await loadJS("/js/script.js");
})();