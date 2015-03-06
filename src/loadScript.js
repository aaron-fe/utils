function loadScript (url, callback) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	if (script.readyState) {
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" || script.readyState == "complete") {
				script.onreadystatechange = null;
				callback && callback();
			}
		}
	} else {
		script.onload = function () {
			callback && callback();
		}
	}
	script.src = url + '?t=' + (new Date().getTime());
	document.getElementsByTagName("head")[0].appendChild(script);
}
