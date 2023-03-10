function nextLinkPage(id, page) {
	document.getElementById(id).onclick = function () {
		setTimeout(function () {
			window.location.href = page;
		}, 300);
	};
}
nextLinkPage("back", "photocage.html");