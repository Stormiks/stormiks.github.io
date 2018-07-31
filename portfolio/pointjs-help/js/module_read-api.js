class ReadApi {
	constructor() {
		// document.querySelector('.description-container').style.display = 'none';
		this._api;
		this.data = [];
		this._scan = false;
		this._completed = false;
	}

	get completed() {
		return this._scan === true ? "true" : "false";
	}

	get scan() {
		return this._scan === true ? "API scanned completed" : "API Scan Error";
	}

	set scan(value) {
		if (value !== undefined && typeof value === "boolean") {
			this._scan = value;
		} else {
			console.error('Error, specify API for analysis');
		}
	}

	scanApi(oApi) {
		let done = false;
		let temp = [];

		function getDone() {
			return done === true ? "List generation in the menu, completed successfully" : "Error generating list in menu";
		}

		function setDone(value) {
			if (value !== undefined && typeof value === "boolean") {
				done = value;
			} else {
				return console.log('Значение не boolean:' + value);
			}
		}

		function editMenu(arr) {
			let dataMenu = '';
			arr.forEach((str) => {
				dataMenu += '<li id="' + str + '" class="method">' + str + '</li>\n';
			});
			done = true;
			return dataMenu;
		}

		function addListByMenu(str) {
			document.querySelector('.navigation-methods').innerHTML = str;
			setDone(true);
		}

		if (typeof oApi === 'object') {
			for (let i in oApi) {
				if (typeof i !== 'string') {
					console.log("Значение не типа 'string'");
					continue;
				}
				temp.push(i);
				this.data.push(i);
			}
			this.scan = true;
			console.log(this.scan);
		}
		console.log('Идёт генерация списка в меню...');
		addListByMenu(editMenu(temp));
		if (!done) return alert(getDone());
		console.log(getDone());
	}

	searchOnApi(str) {
		if (str === '' || str === 'undefined') return;
		this.br = function (text) {
			if (!text) return '';
			text = text.replace(/(\s){1,}/gi, ' ');
			text = text.replace(/ ?\> ?/gi, '<br>');
			text = text.replace(/`/gi, '&nbsp;&nbsp;');
			return text;
		}

		this.inText = function (domEl, text) {
			document.querySelector(domEl).innerHTML = text;
		}

		this.outObjValue = function (obj, prefix) {
			this.inText('.object', prefix);
			this.inText('.name', obj.name);
			this.inText('.type', obj.type);
			this.inText('.context', obj.api);
			this.inText('.properties', this.br(obj.note));
			this.inText('.code', this.br(obj.example));
			this.inText('.returned', this.br(obj.returned));
		}

		function scrollToElement(theElement) {
			if (typeof theElement === "string") theElement = document.getElementById(theElement);
			// console.log(theElement);
			var selectedPosY = -90;

			while (theElement != null) {
				selectedPosY += theElement.offsetTop;
				theElement = theElement.offsetParent;
			}
			document.querySelector('.navigation-methods').scrollTo(0, selectedPosY);
		}


		if (this._api[str]) {
			scrollToElement(str);
			// let elem = document.getElementById(str);
			if (this._api[str].type === 'hidden') {
				return alert('У ' + str + ' нет описания');
			}
			if (typeof this._api[str] === 'object') {
				const v = this._api[str];
				this.outObjValue(v, str);
			}
		}
	}

	checkDataType(obj) {
		let typeObj = typeof obj;
		switch (typeObj) {
		case 'object':
			this._api = obj;
			this.scanApi(obj);
			break;
		case 'string':
			this.searchOnApi(obj);
			break;
		default:
			console.error(typeObj, obj);
			alert('Переданы неверные параметры, см. консоль\nCTRL+SHIFT+I');
			break;
		}
	}

	getInfoEngine() {
		document.querySelector('.engine-pointjs').innerHTML = pjs.system.getInfo().name;
		document.querySelector('.engine-version').innerHTML = 'v.' + pjs.system.getInfo().version;
	}

	run(obj) {
		this.getInfoEngine();
		this.checkDataType(obj);
		this._completed = true;
	}
}

let rApi = new ReadApi();
rApi.run(API);


document.querySelector('.navigation-methods').addEventListener("click", function (e) {
	if (rApi.completed === 'false') return;
	const ID = e.target.id;
	// document.querySelector('.description-container').style.display = 'flex';
	rApi.run(ID);
});

document.querySelector('.on-methods').addEventListener("change", function (e) {
	rApi.run(e.target.value);
});

// document.querySelector('.description-method').addEventListener("input", function (e) {
// 	console.log(e.target.value);
// });