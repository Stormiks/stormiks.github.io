document.write('<input id="mw-btn" type="button" name="mw-btn">\n' +
	'<div id="mwc" class="modal-window--container">\n' +
	'<div class="mw--inner-box">\n' +
	'<iframe class="modal__iframe" src="Modal_Window.html"></iframe>\n' +
	'</div>\n' +
	'</div>\n');
document.getElementById("mw-btn").addEventListener('click', function () {
	document.getElementById("mwc").classList.toggle('show');
	// let mwc = document.getElementById('mwc').style;
	// if (mwc.display === "" || mwc.display === "none") {
	// 	mwc.display = "block";
	// } else {
	// 	mwc.display = "none";
	// }
});