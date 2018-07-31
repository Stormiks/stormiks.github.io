window.onload = (e) => {
	document.querySelector('.description-container').style.display = 'none';
	document.querySelector('.navigation-methods').onmouseover = (e) => {
		if (e.target.onmouseover ==  typeof 'function') {	
			console.log(e.target.id);
		}
	};
};