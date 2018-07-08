document.getElementById("t-t_btn").addEventListener('click', function () {
	let floatingContent = document.getElementById("floating-content");
	let hFloatingContent = document.getElementById("floating-content").scrollHeight;
	if (hFloatingContent != floatingContent.style.height) {
		console.dir(hFloatingContent);
		floatingContent.style.transition = "all .5s ease-in-out 0s";
		floatingContent.style.height = hFloatingContent + "px";
		floatingContent.style.opacity = 1;
		console.dir(document.getElementById("floating-content"));
	}
});