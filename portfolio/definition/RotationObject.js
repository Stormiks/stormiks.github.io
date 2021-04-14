var val;
var uO = document.getElementById("userOtvet"); // Получаем блок для вывода сообщений

function onsubmits () {
	val = window.document.getElementById('n').value; // Получаем значение поле ввода
	console.log(val);
	if(val) {
		uO.innerHTML = 'Ваше имя: ' + val;
		words();
	}
	if(val === undefined || val === '' || val === ' ') {
		uO.innerHTML = 'Пустое поле';
	} 
}

function words () {
	var words = ["птица", "лес", "небо", "огонь", "механика", "хобби"];
	var randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase(); // Выбираем слчайное слово и приводим к верхнему регистру
	document.getElementById('wordRandom').innerHTML = randomWord; // Выводим его юзеру
}
