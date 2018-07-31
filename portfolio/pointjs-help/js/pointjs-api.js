// var glb = {
// 	'var pjs = new PointJS' : {}
// };


// var stopArr = [
// 	'cnv', 'ctx', 'read', 'flip',
// 	'children', 'canvas', 'context'
// ];

// var Objects = {
// 	'Level' : pjs.levels.newEmptyLevel(),
// 	'BaseObject' : pjs.game.newBaseObject({}),
// 	'TextObject' : pjs.game.newTextObject({}),
// 	'RectObject' : pjs.game.newRectObject({}),
// 	'RoundRectObject' : pjs.game.newRoundRectObject({}),
// 	'CircleObject' : pjs.game.newCircleObject({}),
// 	'TriangleObject' : pjs.game.newTriangleObject({}),
// 	'EllipsObject' : pjs.game.newEllipsObject({}),
// 	'PolygonObject' : pjs.game.newPolygonObject({}),
// 	'ImageObject' : pjs.game.newImageObject({file : 'img.png'}),
// 	'AnimationObject' : pjs.game.newAnimationObject({}),
// 	'Mesh' : pjs.game.newMesh({}),
// 	'Audio' : pjs.audio.newAudio({}),
// 	'WAudio' : pjs.wAudio.newAudio('aud.wav'),

// 	'Layer' : pjs.layers.newLayer(1),
// 	'BackgroundObject' : pjs.game.newBackgroundObject({w : 1, h : 1, file : 'img.png'})
// };

// var altNames = {
// 	'constructor' : 'Создание объекта'
// };

var api = {

	'var pjs = new PointJS' : {
		name     : 'API для PointJS версии 0.2.0.0 и выше',
		type     : 'GLOBAL Object',
		api      : '(width, height, style);',
		note     : 'width - ширина канваса >\
		height - высота канваса >\
		style - объект { свойство : значение } >',
		example  : 'var pjs = new PointJS(640, 480, {backgroundColor : "black", border : "1px solid"});',
		returned : 'Object > PointJS'
	},


	// system
	'pjs.system.log' : {
		name     : 'Аналог console.log',
		type     : 'function',
		api      : '(message);',
		note     : 'Сообщение в консоль',
		example  : 'pjs.system.log("Этот текст отобразится в консоли");',
		returned : ''
	},

	'pjs.system.setTitle' : {
		name     : 'Установить заголовок окна (вкладки)',
		type     : 'function',
		api      : '(title);',
		note     : 'title - string, загоовок окна браузера',
		example  : 'pjs.system.setTitle("Этот текст отобразится в названии");',
		returned : ''
	},

	'pjs.system.consoleLog' : {
		name     : 'Использовать стандартный console.log для отладки командой system.log',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, true - использовать, false - не использовать',
		example  : 'pjs.system.consoleLog(true); // будет использовать console.log',
		returned : ''
	},

	'pjs.system.setSmoothing' : {
		name     : 'Включение/отключение сглаживания',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, флаг > true - включить сглаживание > false - отключить сглаживание > \
 							Функцию не желательно вызывать слишком частo',
		example  : 'pjs.system.setSmoothing(false); // отключить сглаживание',
		returned : ''
	},

	'pjs.system.getContext' : {
		name     : 'Получение доступа напрямую к контексту',
		type     : 'function',
		api      : '();',
		note     : 'Вернет ссылку на объект контекста',
		example  : 'var ctx = pjs.system.getContext(); > ctx.fillRect(0, 0, 10, 10);',
		returned : ''
	},

	'pjs.system.getCanvas' : {
		name     : 'Получить основной канвас',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var cnv = pjs.system.setStyle( );',
		returned : 'HTMLCanvas'
	},

	'pjs.system.setStyle' : {
		name     : 'Установить стиль канвасу',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор CSS стилей',
		example  : 'pjs.system.setStyle( { backgroundColor : "black" } );',
		returned : ''
	},

	'pjs.system.resize' : {
		name     : 'Установить новую высоту и ширину',
		type     : 'function',
		api      : '(w, h);',
		note     : 'w - number, новая ширина сцены > h - number, новая высота сцены',
		example  : 'pjs.system.resize( 840, 480 );',
		returned : ''
	},

	'pjs.system.setSettings' : {
		name     : 'Установка настроек',
		type     : 'function',
		api      : '(settings);',
		note     : 'settings = {\
 		>`isShowError : true, // Отображать ошибки в консоли\
 		>`isStopForError : true, // Останавливать выполнение игры при ошибках\
 		>`isAutoClear : false, // автоматическая очистка сцены\
 		>}',
		example  : 'pjs.system.setSettings({isAutoClear : true});',
		returned : ''
	},

	'pjs.system.setDefaultSettings' : {
		name     : 'Установка стандартных настроек канваса',
		type     : 'function',
		api      : '(settings);',
		note     : 'settings = {\
 			>`набор свойств, доступных канвасу\
 			>}',
		example  : 'pjs.system.setDefaultSettings({>`fillStyle : "#CF2C2C">});',
		returned : ''
	},

	'pjs.system.delEvent' : {
		name     : 'Удаление системного события',
		type     : 'function',
		api      : '(evt, key);',
		note     : 'evt = группа событий >key = имя пользовательского события',
		example  : 'pjs.system.delEvent("onload", "myEvent");',
		returned : ''
	},

	'pjs.system.addEvent' : {
		name     : 'Добавление системного события',
		type     : 'function',
		api      : '(evt, key, func);',
		note     : 'evt = группа событий >\
 			key = имя пользовательского события >\
 			func = функция обработчик',
		example  : 'pjs.system.addEvent("onload", "myEvent", function () {>`alert("Страница загружена полностью");>});',
		returned : ''
	},

	'pjs.system.removeDOM' : {
		name     : 'Удаление объекта из DOM дерева',
		type     : 'function',
		api      : '(HTMLObject);',
		note     : 'HTMLObject - любой созданный функцией createElement объект',
		example  : 'pjs.system.removeDOM(myDIV); // удалит элемент myDIV',
		returned : ''
	},

	'pjs.system.attachDOM' : {
		name     : 'Прикрепление объекта к DOM дереву',
		type     : 'function',
		api      : '(HTMLObject);',
		note     : 'HTMLObject - любой созданный функцией createElement объект',
		example  : 'var myDIV = document.createElement("div"); >\
 			myDIV.innerHTML = "Новый элемент"; >\
 			pjs.system.attachDOM(myDIV);',
		returned : ''
	},

	'pjs.system.initFullPage' : {
		name     : 'Развертывание игры на всю страницу',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Разворачивает канвас по высоте и ширине браузера',
		example  : 'pjs.system.initFullPage();',
		returned : ''
	},

	'pjs.system.initFullScreen' : {
		name     : 'Развертывание игры на весь экран',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Разворачивает канвас по высоте и ширине экрана, устанавливает полноэкранный режим',
		example  : 'pjs.system.initFullScreen();',
		returned : ''
	},

	'pjs.system.exitFullScreen' : {
		name     : 'Вернуть исходный размер',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'вернет канвас к исходному размеру',
		example  : 'pjs.system.exitFullScreen();',
		returned : ''
	},

	'pjs.system.isFullScreen' : {
		name     : 'Проверить, включен ли полноэкранный режим',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'var isFullScreen = pjs.system.isFullScreen();',
		returned : 'boolean > true - Полноэкранный режим включен > false - выключен'
	},

	'pjs.system.exitFullPage' : {
		name     : 'Вернуть исходный размер',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'вернет канвас к исходному размеру',
		example  : 'pjs.system.exitFullPage();',
		returned : ''
	},

	'pjs.system.initFullScale' : {
		name     : 'Растягивание игры на всю страницу',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Растягивает канвас по высоте и ширине браузера',
		example  : 'pjs.system.initFullScale();',
		returned : ''
	},

	'pjs.system.exitFullScale' : {
		name     : 'Вернуть исходный размер',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Растягивает канвас по высоте и ширине браузера',
		example  : 'pjs.system.exitFullScale();',
		returned : ''
	},

	'pjs.system.getWH' : {
		name     : 'Получить размер доступной области браузера',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Получение ширины и высоты доступной для использования области окна браузера',
		example  : 'pjs.system.getWH();',
		returned : ' .size() > Размеры области браузера'
	},

	'pjs.system.getInfo' : {
		name     : 'Получить информацию о движке',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Получение информации о движке, авторах, версии',
		example  : 'pjs.system.getInfo();',
		returned : 'object > Информацию о версии движка'
	},

	'pjs.system.initFPSCheck' : {
		name     : 'Инициализация счетчика FPS',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Требуется вызвать перед запуском игры, чтобы иметь доступ к статистике по FPS игры',
		example  : 'pjs.system.initFPSCheck();',
		returned : ''
	},

	'pjs.system.getFPS' : {
		name     : 'Получить значение FPS',
		type     : 'function',
		api      : '(без аргументов);',
		note     : 'Поучение текущего количества кадров в секунду',
		example  : 'pjs.system.getFPS();',
		returned : 'number > Значение FPS'
	},


	// vector

	'pjs.vector.getAngle2Points' : {
		name     : 'Получить угол между двумя точками',
		type     : 'function',
		api      : '(p1, p2);',
		note     : 'p1 - .point(), первая точка > \
														p2 - .point(), вторая точка > \
														Функция возвращает угол, который указывает на направление первой точки на вторую',
		example  : 'var angle = pjs.vector.getAngle2Points( .point(0, 0), .point(100, 150) );',
		returned : 'number > Угол между двумя точками'
	},

	'pjs.vector.newStaticBox' : {
		name     : 'Создать staticBox из значений',
		type     : 'function',
		api      : '(x, y, w, h);',
		note     : 'x, y - координаты в пространстве. > \
														w, h - размеры статической области > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var staticBox = pjs.vector.newStaticBox(0, 0, 100, 100);',
		returned : 'staticBox > Статическая область'
	},

	'pjs.vector.newDynamicBoxRect' : {
		name     : 'Создать dynamicBox из значений',
		type     : 'function',
		api      : '(x, y, w, h);',
		note     : 'x, y - координаты в пространстве. > \
														w, h - размеры статической области > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var dynamicBox = pjs.vector.newDynamicBoxRect(0, 0, 100, 100);',
		returned : 'dynamicBox > Динамическая область'
	},

	'pjs.vector.moveCollision' : {
		name     : 'Двигать объект с учетом столкновений',
		type     : 'function',
		api      : '(player, walls, speed[, onCollision]);',
		note     : 'speed - .point(), скорость перемещения. > \
								player - объект, который требуется двигать > \
								walls - array, массив объектов, при столкновении с которыми сработает событие onCollision, а player остановится >\
								onCollision - обработчик столкновения, принимает два аргумента: player, wall',
		example  : 'var myRect = game.newRectObject... >pjs.vector.moveCollision(myRect, walls, point(1, 0)); // двигать обхект myRect вправо на скорости 1 и сталкиваться с массивом walls',
		returned : ''
	},


	'pjs.vector.moveCollisionAngle' : {
		name     : 'Двигать объект с учетом столкновений и поворота',
		type     : 'function',
		api      : '(player, walls, speed[, onCollision, angle]);',
		note     : 'speed - number, скорость перемещения > \
								player - объект, который требуется двигать > \
								walls - array, массив объектов, при столкновении с которыми сработает событие onCollision, а player остановится >\
								onCollision - обработчик столкновения, принимает два аргумента: player, wall > \
								angle - number, угол поворота, который можно задать для движения принудительно, если не задан, берется угол поворота объекта player',
		example  : 'var myRect = game.newRectObject... >pjs.vector.moveCollisionAngle(myRect, walls, 1); // двигать обхект myRect с учетом его поворота на скорости 1 и сталкиваться с массивом walls',
		returned : ''
	},

	'pjs.vector.point' : {
		name     : 'Точка в 2D пространстве',
		type     : 'function',
		api      : '(x, y);',
		note     : 'x, y - координаты в пространстве. > \
		Функция является конструктором, может быть присвоена переменной. >\
		Полученный объект имеет набор методов (все они возвращают .point()): >\
		`abs() - абсолютные координаты>\
		`invert() - инвертированные координаты>\
		`plus(pnt) - складывает координаты с точкой pnt>\
		`minus(pnt) - вычитает координаты из текущей точки>\
		`inc(pnt) - перемножает координаты>\
		`div(pnt) - поделить координаты текущей точки>\
		`pnt - .point(), точка',
		example  : 'var myPoint = pjs.vector.point(50, 45); // x - 50, y - 45',
		returned : 'object > Координаты в пространстве > Доступ к свойствам: > `myPoint.x, myPoint.y'
	},

	'pjs.vector.v2d' : {
		name     : 'Смотрите pjs.vector.point',
		type     : 'function',
	},

	'pjs.vector.size' : {
		name     : 'Ширина и высота',
		type     : 'function',
		api      : '(w, h);',
		note     : 'w, h - ширина и высота в пространстве. > \
		Функция является конструктором, может быть присвоена переменной.',
		example  : 'var mySize = pjs.vector.size(50, 45); // width - 50, height - 45',
		returned : 'object > Ширина и высота > Доступ к свойствам: > `mySize.w, mySize.h'
	},

	'pjs.vector.getPointAngle' : {
		name     : 'Получение новых координат точки после вращения',
		type     : 'function',
		api      : '(point, center, angle);',
		note     : 'point - vector.point() >\
		center - vector.point() > \
		angle - угол в градусах',
		example  : 'var newPoint = pjs.vector.getPointAngle( .point(10, 20), 45 ); // x - 50, y - 45, angle - 45',
		returned : ' .point()'
	},

	'pjs.vector.isPointIn' : {
		name     : 'Проверка вхождения точки в область, построенную на основе массива point() объектов',
		type     : 'function',
		api      : '(point, area);',
		note     : 'point - vector.point() >\
		area - массив .point() объектов',
		example  : 'pjs.vector.isPointIn( .point(10, 20), [ .point(0,0), .point(50,0), .point(50,50) ] );',
		returned : 'boolean > true - входит, > false - не входит'
	},

	'pjs.vector.pointMinus' : {
		name     : 'Получение новых координат после вычитания векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.point()',
		example  : 'var newPoint = pjs.vector.pointMinus( .point(10, 20), .point(5, 5) );',
		returned : ' .point()'
	},

	'pjs.vector.pointPlus' : {
		name     : 'Получение новых координат после сложения векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.point()',
		example  : 'var newPoint = pjs.vector.pointPlus( .point(10, 20), .point(5, 5) );',
		returned : ' .point()'
	},

	'pjs.vector.pointInc' : {
		name     : 'Получение новых координат после умножения векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.point()',
		example  : 'var newPoint = pjs.vector.pointInc( .point(10, 20), .point(5, 5) );',
		returned : ' .point()'
	},

	'pjs.vector.pointDiv' : {
		name     : 'Получение новых координат после деления векторов',
		type     : 'function',
		api      : '(point, vector2D);',
		note     : 'point - vector.point() >\
		vector2D - vector.point()',
		example  : 'var newPoint = pjs.vector.pointDiv( .point(10, 20), .point(5, 5) );',
		returned : ' .point()'
	},

	'pjs.vector.pointAbs' : {
		name     : 'Получение абсолютных координат',
		type     : 'function',
		api      : '(point);',
		note     : 'point - vector.point()',
		example  : 'var newPoint = pjs.vector.pointAbs( .point(10, -20) );',
		returned : ' .point()'
	},

	'pjs.vector.getMidPoint' : {
		name     : 'Получение средней точки (середины отрезка)',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var midPoint = pjs.vector.getMidPoint( .point(10, -20), .point(100, 15) );',
		returned : ' .point()'
	},

	'pjs.vector.getDistance' : {
		name     : 'Получение расстояния между двумя точками',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var dist = pjs.vector.getDistance( .point(10, -20), .point(100, 15) );',
		returned : 'number > Расстояние между точками'
	},

	'pjs.vector.isSame' : {
		name     : 'Проверка совпадения точек',
		type     : 'function',
		api      : '(pointA, pointB);',
		note     : 'pointA, pointB - vector.point()',
		example  : 'var midPoint = pjs.vector.isSame( .point(10, -20), .point(100, 15) );',
		returned : 'boolean > true - совпадают > false - не совпадают'
	},

	'pjs.math.toZiro' : {
		name     : 'Смещение значения числа по модулю в сторону нуля',
		type     : 'function',
		api      : '(numb, step);',
		note     : 'numb - number, исходное значение, step - number, скорость смещения к нулю > число numb может быть как положительным, так и отрицательным',
		example  : 'var speed = pjs.math.toZiro( speed, 0.1 ); // Уменьшение переменной speed к нулю',
		returned : 'number > уменьшенное число'
	},

	'pjs.math.sign' : {
		name     : 'Получение знака числа',
		type     : 'function',
		api      : '(numb);',
		note     : 'numb - number',
		example  : 'var sign = pjs.math.sign( -12.6 ); // -1',
		returned : 'number > 1 - число больше нуля > -1 - число меньше нуля'
	},

	'pjs.math.limit' : {
		name     : 'Ограничение числа по модулю',
		type     : 'function',
		api      : '(numb, max);',
		note     : 'numb - number > \
		max - number',
		example  : 'var newNumb = pjs.math.limit( 10, 8 ); // 8 > \
		var newNumb = pjs.math.limit( -5, -4 ); // -4',
		returned : 'number'
	},

	'pjs.math.a2r' : {
		name     : 'Перевод градусов в радианы',
		type     : 'function',
		api      : '(angle);',
		note     : 'angle - number',
		example  : 'var rad = pjs.math.a2r( 45 );',
		returned : 'number > Значение в радианах'
	},

	'pjs.math.random' : {
		name     : 'Получение псевдослучайного числа',
		type     : 'function',
		api      : '(min, max[, bool]);',
		note     : 'min - number, начальная граница > \
		max - number, конечная граница, > \
		bool - boolean, если true - исключается 0 (ноль)',
		example  : 'var randNum = pjs.math.random( -4, 4, true );',
		returned : 'number > Случайное число в заданных границах'
	},

	'pjs.math.toInt' : {
		name     : 'Конвертация вещественного числа в целочисленное',
		type     : 'function',
		api      : '(num);',
		note     : 'num - number, число, которому требуется отбросить дробную часть',
		example  : 'var num = pjs.math.toInt( 5,5 ); // вернет 5',
		returned : 'number > Целое число'
	},

	'pjs.math.uid' : {
		name     : 'Генерация уникального ID',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var uid = pjs.math.uid(  ); // вернет уникальное значение',
		returned : 'number > Уникальное значение'
	},


	'pjs.keyControl.getKeyList' : {
		name     : 'Получение доступных для использования клавиш',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'console.log(pjs.keyControl.getKeyList());',
		returned : 'array > массив наименований клавиш'
	},

	'pjs.keyControl.getCountKeysDown' : {
		name     : 'Получить количество зажатых клавиш',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'console.log(pjs.keyControl.getCountKeysDown());',
		returned : 'number > Количество зажатых клавиш'
	},

	'pjs.keyControl.getAllKeysDown' : {
		name     : 'Получить массив зажатых клавиш',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'console.log(pjs.keyControl.getAllKeysDown());',
		returned : 'array > Массив зажатых клавиш'
	},

	'pjs.keyControl.getLastKeyPress' : {
		name     : 'Получить последнюю нажатую клавишу',
		type     : 'function',
		api      : '(без аргументов);',
		note     : '',
		example  : 'console.log(pjs.keyControl.getLastKeyPress());',
		returned : 'string > Последняя нажатая клавиша'
	},

	'pjs.keyControl.isDown' : {
		name     : 'Проверка удерживания клавиши нажатой',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(pjs.keyControl.isDown("LEFT"));',
		returned : 'boolean > true - клавиша зажата > false - клавиша не зажата'
	},

	'pjs.keyControl.isUp' : {
		name     : 'Проверка отпускания клавиши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(pjs.keyControl.isUp("A"));',
		returned : 'boolean > true - клавиша была отпущена > false - клавиша не была отпущена'
	},

	'pjs.keyControl.isPress' : {
		name     : 'Проверка нажатия клавиши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, наименование клавиши (см. .getKeyList())',
		example  : 'console.log(pjs.keyControl.isPress("SPACE"));',
		returned : 'boolean > true - клавиша была нажата > false - клавиша не была нажата'
	},

	'pjs.keyControl.getInputKey' : {
		name     : 'Получение клавиши, вводимой с клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'Вернет текстовое представление клавиши в режиме InputMode (Например: "W" или "SPACE").',
		example  : 'console.log(pjs.keyControl.getInputKey());',
		returned : 'boolean > false - никакой символ в данный момент не вводится > \
		string > Текстовое представление клавиши'
	},

	'pjs.keyControl.getInputChar' : {
		name     : 'Получение вводимого с клавиатуры символа',
		type     : 'function',
		api      : '();',
		note     : 'Вернет вводимый символ только при включенном режиме InputMode',
		example  : 'console.log(pjs.keyControl.getInputChar());',
		returned : 'boolean > false - никакой символ в данный момент не вводится > \
		char > введенный символ'
	},

	'pjs.keyControl.setInputMode' : {
		name     : 'Включение / отключение режима чтения клавиатуры',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, включение или отключение режима чтения символов с клавиатуры',
		example  : 'console.log(pjs.keyControl.setInputMode( true ));',
		returned : ''
	},

	'pjs.keyControl.isInputMode' : {
		name     : 'Проверка, включен ли режим чтения клавиатуры',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'console.log(pjs.keyControl.isInputMode());',
		returned : 'boolean > true - Режим чтения клавиатуры включен > false - Отключен'
	},

	'pjs.keyControl.exitKeyControl' : {
		name     : 'Отключение режима перехвата клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'После отключения режима перехвата клавиатуры события клавиатуры не будут обрабатываться движком.',
		example  : 'console.log(pjs.keyControl.exitKeyControl());',
		returned : ''
	},

	'pjs.keyControl.initKeyControl' : {
		name     : 'Включение режима перехвата клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'Включает режим перехвата клавиатуры. Не используется внутри игрового цикла.',
		example  : 'console.log(pjs.keyControl.initKeyControl());',
		returned : ''
	},

	'pjs.keyControl.initControl' : {
		name     : 'Включение режима перехвата клавиатуры',
		type     : 'function',
		api      : '();',
		note     : 'Включает режим перехвата клавиатуры. Не используется внутри игрового цикла.',
		example  : 'console.log(pjs.keyControl.initControl());',
		returned : ''
	},

	'pjs.mouseControl.getPositionS' : {
		name     : 'Получение локальной позиции курсора',
		type     : 'function',
		api      : '();',
		note     : 'Вернет локальные координаты курсора мыши',
		example  : 'console.log(pjs.mouseControl.getPositionS());',
		returned : ' .point() > Локальная позиция курсора'
	},

	'pjs.mouseControl.getPosition' : {
		name     : 'Получение глобальной позиции курсора с учетом смещения камеры',
		type     : 'function',
		api      : '();',
		note     : 'Вернет глобальные координаты курсора мыши',
		example  : 'console.log(pjs.mouseControl.getPosition());',
		returned : ' .point() > Глобальная позиция курсора'
	},

	'pjs.mouseControl.setCursorImage' : {
		name     : 'Замена стандартного курсора каким-либо изображением',
		type     : 'function',
		api      : '(img);',
		note     : 'img - string, путь к картинке',
		example  : 'pjs.mouseControl.setCursorImage("img/cursor.png");',
		returned : ''
	},

	'pjs.mouseControl.setVisible' : {
		name     : 'Скрытие / отображение курсора',
		type     : 'function',
		api      : '(bool);',
		note     : 'bool - boolean, true - показать, false - скрыть',
		example  : 'pjs.mouseControl.setVisible( false );',
		returned : ''
	},

	'pjs.mouseControl.isVisible' : {
		name     : 'Проверка видимости курсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.mouseControl.isVisible();',
		returned : 'boolean > true - курсор видимый > false - курсор не видимый'
	},

	'pjs.mouseControl.isDown' : {
		name     : 'Проверка удержания кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(pjs.mouseControl.isDown("LEFT"));',
		returned : 'boolean > true - кнопка зажата > false - кнопка не зажата'
	},

	'pjs.mouseControl.isUp' : {
		name     : 'Проверка отпускания кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(pjs.mouseControl.isUp("LEFT"));',
		returned : 'boolean > true - кнопка отпущена > false - кнопка не отпущена'
	},

	'pjs.mouseControl.isPress' : {
		name     : 'Проверка нажатия кнопки мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - string, обозрачение кнопки > LEFT, RIGHT, MIDDLE',
		example  : 'console.log(pjs.mouseControl.isPress("MIDDLE"));',
		returned : 'boolean > true - кнопка нажата > false - кнопка не нажата'
	},

	'pjs.mouseControl.isMove' : {
		name     : 'Проверка движения мыши',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'console.log(pjs.mouseControl.isMove());',
		returned : 'boolean > true - мышь двигается > false - мышь не двигается'
	},

	'pjs.mouseControl.isInStatic' : {
		name     : 'Проверка попадания курсора мыши в StaticBox',
		type     : 'function',
		api      : '(box);',
		note     : 'box - StaticBox, прямоугольная область (см. object.getStaticBox())',
		example  : 'pjs.mouseControl.isInStatic( object.getStaticBox() );',
		returned : 'boolean > true - курсор попадает в область > false - курсор не попадает в область'
	},

	'pjs.mouseControl.isInDynamic' : {
		name     : 'Проверка попадания курсора мыши в DynamicBox',
		type     : 'function',
		api      : '(box);',
		note     : 'box - DynamicBox, область из точек (см. object.getDynamicBox())',
		example  : 'pjs.mouseControl.isInDynamic( object.getDynamicBox() );',
		returned : 'boolean > true - курсор попадает в область > false - курсор не попадает в область'
	},

	'pjs.mouseControl.isInObject' : {
		name     : 'Проверка попадания курсора мыши в объект',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, проверяется попадание курсора в негo',
		example  : 'pjs.mouseControl.isInObject( object );',
		returned : 'boolean > true - курсор попадает на объект > false - курсор не попадает на объект'
	},

	'pjs.mouseControl.isWheel' : {
		name     : 'Проверка события колесика мыши',
		type     : 'function',
		api      : '(key);',
		note     : 'key - направление вращения > UP, DOWN',
		example  : 'pjs.mouseControl.isWheel( "UP" );',
		returned : 'boolean > true - колесико вращается > false - колесико не вращается'
	},

	'pjs.mouseControl.initMouseLock' : {
		name     : 'Включение режима захвата курсора мыши',
		type     : 'function',
		api      : '();',
		note     : 'Включает захват курсора. Вызывается вне игрового цикла',
		example  : 'pjs.mouseControl.initMouseLock();',
		returned : ''
	},

	'pjs.mouseControl.exitMouseLock' : {
		name     : 'Отключение режима захвата курсора мыши',
		type     : 'function',
		api      : '();',
		note     : 'Выключает захват курсора полностью',
		example  : 'pjs.mouseControl.exitMouseLock();',
		returned : ''
	},

	'pjs.mouseControl.unlockMouse' : {
		name     : 'Временно разблокирует захваченные курсор',
		type     : 'function',
		api      : '();',
		note     : 'Отобразит курсор мыши до следующего клика по канвасу',
		example  : 'pjs.mouseControl.unlockMouse();',
		returned : ''
	},

	'pjs.mouseControl.isMouseLock' : {
		name     : 'Проверить захвачен курсор или нет',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.mouseControl.isMouseLock();',
		returned : 'boolean > true - курсор захвачен > false - курсор не захвачен'
	},

	'pjs.mouseControl.getSpeed' : {
		name     : 'Получить скорость перемещения курсора по осям',
		type     : 'function',
		api      : '();',
		note     : 'Получение скорости курсора',
		example  : 'pjs.mouseControl.getSpeed();',
		returned : ' .point() > x - скорость перемещения по X > y - скорость перемещения по Y'
	},

	'pjs.mouseControl.isPeekStatic' : {
		name     : 'Проверить клик по статической области',
		type     : 'function',
		api      : '(key, box);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > box - StaticBox, область, в которой проверяется клик',
		example  : 'pjs.mouseControl.isPeekStatic( object.getStaticBox() );',
		returned : 'boolean > true - клик по области, false - клик не по области, отсутствие клика'
	},

	'pjs.mouseControl.isPeekDynamic' : {
		name     : 'Проверить клик по динамической области',
		type     : 'function',
		api      : '(key, box);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > box - DynamicBox, область, в которой проверяется клик',
		example  : 'pjs.mouseControl.isPeekDynamic( object.getDynamicBox() );',
		returned : 'boolean > true - клик по области, false - клик не по области, отсутствие клика'
	},

	'pjs.mouseControl.isPeekObject' : {
		name     : 'Проверить клик по объекту',
		type     : 'function',
		api      : '(key, obj);',
		note     : 'key - string, кнопка LEFT, RIGHT, MIDDLE > obj - объект, по которому проверяется клик',
		example  : 'pjs.mouseControl.isPeekObject( "LEFT", object );',
		returned : 'boolean > true - клик по объекту, false - клик не по объекту, отсутствие клика'
	},

	'pjs.mouseControl.initMouseControl' : {
		name     : 'Включение режима перехвата событий мыши',
		type     : 'function',
		api      : '();',
		note     : 'Обработчик событий мыши. Вызывает вне игрового цикла',
		example  : 'pjs.mouseControl.initMouseControl();',
		returned : ''
	},

	'pjs.mouseControl.initControl' : {
		name     : 'Включение режима перехвата событий мыши',
		type     : 'function',
		api      : '();',
		note     : 'Обработчик событий мыши. Вызывает вне игрового цикла',
		example  : 'pjs.mouseControl.initControl();',
		returned : ''
	},

	'pjs.mouseControl.exitMouseControl' : {
		name     : 'Выключение режима перехвата событий мыши',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.mouseControl.exitMouseControl();',
		returned : ''
	},

	'pjs.touchControl.isTouchSupported' : {
		name     : 'Проверить, поддерживается ли сенсорный экран на устройстве',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.touchControl.isTouchSupported();',
		returned : 'true - сенсорные экран поддерживается > false - не поддерживается'
	},

	'pjs.touchControl.isMobileDevice' : {
		name     : 'Проверить, мобильный браузер запущен или нет',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.touchControl.isMobileDevice();',
		returned : 'true - мобильный > false - десктоп'
	},

	'pjs.touchControl.getSpeed' : {
		name     : 'Получить скорость перемещения прикосновения по осям',
		type     : 'function',
		api      : '();',
		note     : 'Получение скорости прикосновения',
		example  : 'pjs.touchControl.getSpeed();',
		returned : ' .point() > x - скорость перемещения по X > y - скорость перемещения по Y'
	},

	'pjs.touchControl.isInObject' : {
		name     : 'Проверка попадания прикосновения мыши в объект',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, проверяется попадание прикосновения в негo',
		example  : 'pjs.touchControl.isInObject( object );',
		returned : 'boolean > true - касание попадает на объект > false - касание не попадает на объект'
	},

	'pjs.touchControl.initTouchControl' : {
		name     : 'Включение перехвата сенсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.touchControl.initTouchControl();',
		returned : ''
	},

	'pjs.touchControl.initControl' : {
		name     : 'Включение перехвата сенсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.touchControl.initControl();',
		returned : ''
	},

	'pjs.touchControl.getFixPositionS' : {
		name     : 'Получение локальных координат фиксатора касания',
		type     : 'function',
		api      : '();',
		note     : 'Фиксатор касания - это позиция первоначального прикосновения к сенсору.',
		example  : 'var fixPos = pjs.touchControl.getFixPositionS();',
		returned : ' .point() > Позиция касания'
	},

	'pjs.touchControl.getFixPosition' : {
		name     : 'Получение глобальных координат фиксатора касания',
		type     : 'function',
		api      : '();',
		note     : 'Фиксатор касания - это позиция первоначального прикосновения к сенсору.',
		example  : 'var fixPos = pjs.touchControl.getFixPosition();',
		returned : ' .point() > Позиция касания'
	},

	'pjs.touchControl.getRun' : {
		name     : 'Получение расстояния по осям от фиксатора',
		type     : 'function',
		api      : '();',
		note     : 'Возвращает расстояние по осям, пройденное жестом от фиксатора.',
		example  : 'var run = pjs.touchControl.getRun();',
		returned : ' .point() > x - расстояние по оси X > y : расстояние по оси Y'
	},

	'pjs.touchControl.getVector' : {
		name     : 'Получение вектора направления жеста по осям',
		type     : 'function',
		api      : '();',
		note     : 'Возвращает вектор направления движения жеста.',
		example  : 'var vector = pjs.touchControl.getVector();',
		returned : ' .point() > x - вектор по оси X. Если больше 0 - движение вправо, иначе - влево > \
																								y : вектор по оси Y. Если больше 0 - движение вниз, иначе - вверх'
	},

	'pjs.touchControl.isDown' : {
		name     : 'Проверка удерживания касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var down = pjs.touchControl.isDown();',
		returned : 'boolean > true - прикосновение удерживается > false - прикосновения нет'
	},

	'pjs.touchControl.isPress' : {
		name     : 'Проверка однократного касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var press = pjs.touchControl.isPress();',
		returned : 'boolean > true - прикосновение есть > false - прикосновения нет'
	},

	'pjs.touchControl.isUp' : {
		name     : 'Проверка завершения касания',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var up = pjs.touchControl.isUp();',
		returned : 'boolean > true - прикосновение завершено (палец убран) > false - прикосновения нет или палец не убран'
	},

	'pjs.touchControl.getPosition' : {
		name     : 'Получение координат прикосновения в абсолютных координатах',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var point = pjs.touchControl.getPosition();',
		returned : ' .point() > Координаты прикосновения'
	},

	'pjs.touchControl.getPositionS' : {
		name     : 'Получение локальных координат прикосновения',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var point = pjs.touchControl.getPositionS();',
		returned : ' .point() > Координаты прикосновения'
	},

	'pjs.touchControl.isPeekStatic' : {
		name     : 'Тач (касание) по статической области',
		type     : 'function',
		api      : '(StaticBox);',
		note     : '',
		example  : 'var peek = pjs.touchControl.isPeekStatic( obj.getStaticBox() );',
		returned : 'boolean > true - касание попало в статическую область > false - не попало'
	},

	'pjs.touchControl.isPeekDynamic' : {
		name     : 'Тач (касание) по динамической области',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : '',
		example  : 'var peek = pjs.touchControl.isPeekDynamic( obj.getDynamicBox() );',
		returned : 'boolean > true - касание попало в динамическую область > false - не попало'
	},

	'pjs.touchControl.isPeekObject' : {
		name     : 'Тач (касание) по динамической области',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, проверяемый на сенсорное касание',
		example  : 'var peek = pjs.touchControl.isPeekObject( object );',
		returned : 'boolean > true - касание попало в объект > false - не попало'
	},

	'pjs.touchControl.isInStatic' : {
		name     : 'Проверка попадания прикосновения в статическую область StaticBox',
		type     : 'function',
		api      : '(StaticBox);',
		note     : '',
		example  : 'var bool = pjs.touchControl.isInStatic( obj.getStaticBox() );',
		returned : 'boolean > true - касание попало в статическую область > false - не попало'
	},

	'pjs.touchControl.isInDynamic' : {
		name     : 'Проверка попадания прикосновения в динамическую область DynamicBox',
		type     : 'function',
		api      : '(DynamicBox);',
		note     : '',
		example  : 'var bool = pjs.touchControl.isInDynamic( obj.getDynamicBox() );',
		returned : 'boolean > true - касание попало в динамическую область > false - не попало'
	},

	'pjs.touchControl.getTouches' : {
		name     : 'Получение стандартного массива прикосновений',
		type     : 'function',
		api      : '();',
		note     : 'Функция возвращает массив с координатами прикосновений и их характеристиками. > ',
		example  : 'var arr = pjs.touchControl.getTouches();',
		returned : 'array > массив с координатами прикосновений'
	},

	'pjs.touchControl.exitTouchControl' : {
		name     : 'Отключение режима перехвата сенсора',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'pjs.touchControl.exitTouchControl(  );',
		returned : ''
	},

	'pjs.colors.rgb' : {
		name     : 'Генерация непрозрачного цвета',
		type     : 'function',
		api      : '(r, g, b);',
		note     : 'r - int [0-255], красный цвет > \
		g - int [0-255], зеленый цвет > \
		b - int [0-255], синий цвет',
		example  : 'pjs.colors.rgb(255, 0, 0);',
		returned : 'string > строка, содержащая цвет'
	},

	'pjs.colors.rgba' : {
		name     : 'Генерация цвета с возможностью указать прозрачность',
		type     : 'function',
		api      : '(r, g, b, a);',
		note     : 'r - int [0-255], красный цвет > \
		g - int [0-255], зеленый цвет > \
		b - int [0-255], синий цвет > \
		a - float [0-1], прозрачность',
		example  : 'pjs.colors.rgba(255, 0, 0, 0.5);',
		returned : 'string > строка, содержащая цвет'
	},

	'pjs.colors.hex2rgb' : {
		name     : 'Генерация цвета из его шестнадцатеричного представления',
		type     : 'function',
		api      : '(hex);',
		note     : 'hex - цвет в формате #FFFFFF (обязательно полная запись в 7 знаков)',
		example  : 'pjs.colors.hex2rgb("#B35E5E");',
		returned : 'string > строка, содержащая цвет'
	},

	'pjs.colors.hex2rgba' : {
		name     : 'Генерация цвета из его шестнадцатеричного представления с прозначностью',
		type     : 'function',
		api      : '(hex, a);',
		note     : 'hex - цвет в формате #FFFFFF (обязательно полная запись) > \
		a - float [0-1], прозрачность',
		example  : 'pjs.colors.hex2rgba("#B35E5E", 0.5);',
		returned : 'string > строка, содержащая цвет'
	},

	'pjs.colors.randomColor' : {
		name     : 'Генерация случайного цвета в заданных рамках',
		type     : 'function',
		api      : '(min, max, alpha);',
		note     : 'nim - нижняя граница цвета > \
														max - верхняя граница цвета > \
														alpha - float [0-1], прозрачность',
		example  : 'pjs.colors.randomColor(100, 255);',
		returned : 'string > строка, содержащая цвет'
	},

	'pjs.OOP.runCode' : {
		name     : 'Запустить произвольный код',
		type     : 'function',
		api      : '(code);',
		note     : 'code - string, строка кода',
		example  : 'pjs.OOP.runCode("var x = 10; log(x);"); // ',
		returned : ''
	},

	'pjs.OOP.include' : {
		name     : 'Подключить файл в асинхронном режиме',
		type     : 'function',
		api      : '(file, onincluded);',
		note     : 'file - string, путь к файлу > onincluded - function, обработчик после подключения файла> \
								Подключение выполняется в асинхронном режиме',
		example  : 'pjs.OOP.include("js/myscript.js", function () {> `log("myscript.js подкючен"); >});',
		returned : ''
	},

	'pjs.OOP.includeSync' : {
		name     : 'Подключить файл в синхронном режиме',
		type     : 'function',
		api      : '(file);',
		note     : 'file - string, путь к файлу > Подключение выполняется в синхронном режиме',
		example  : 'pjs.OOP.includeSync("js/myscript.js");',
		returned : ''
	},

	'pjs.OOP.extractArrElement' : {
		name     : 'Извлечь элемент из массива с удалением',
		type     : 'function',
		api      : '(arr, index);',
		note     : 'arr - массив, из которого требуется извлечь элемент> \
														index - ключ или индекс массива',
		example  : 'var element = pjs.OOP.extractArrElement([5, 15, 45], 1); // после выполнения в массиве останутся 5 и 45, элемент 15 с индексом 1 будет извлечен и сохранен в переменной',
		returned : ''
	},

	'pjs.OOP.extractRandArrElement' : {
		name     : 'Извлечь случайный элемент из массива с удалением',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - массив, из которого требуется извлечь элемент',
		example  : 'var element = pjs.OOP.extractRandArrElement([5, 15, 45]); // после выполнения в массиве останутся два элемента, а третий случайным образом будет сохранен в переменной',
		returned : ''
	},

	'pjs.OOP.sendGETSync' : {
		name     : 'Отправить синхронный GET запрос на адрес',
		type     : 'function',
		api      : '(link, params);',
		note     : 'link - string, ссылка, по которой требуется отправить запрос, > \
								params - object, объект с параметрами, которые требуется передать, > \
								Функция возвращает ответ сервера',
		example  : 'var data = pjs.OOP.sendGETSync("https://mysite.ru/script.php", { name : "Иван", age : 48 }); > \
								console.log("Ответ сервера: " + data);',
		returned : ''
	},

	'pjs.OOP.sendPOSTSync' : {
		name     : 'Отправить синхронный POST запрос на адрес',
		type     : 'function',
		api      : '(link, params);',
		note     : 'link - string, ссылка, по которой требуется отправить запрос, > \
								params - object, объект с параметрами, которые требуется передать, > \
								Функция возвращает ответ сервера',
		example  : 'var data = pjs.OOP.sendPOSTSync("https://mysite.ru/script.php", { name : "Иван", age : 48 }); > \
								console.log("Ответ сервера: " + data);',
		returned : ''
	},

	'pjs.OOP.sendGET' : {
		name     : 'Отправить GET запрос на адрес',
		type     : 'function',
		api      : '(link, params, func);',
		note     : 'link - string, ссылка, по которой требуется отправить запрос, > \
								params - object, объект с параметрами, которые требуется передать, > \
								func - function, функция обработчик, которая принимает ответ сервера',
		example  : 'pjs.OOP.sendGET("https://mysite.ru/script.php", { name : "Иван", age : 48 }, function (data) {> `console.log("Ответ сервера: " + data); >});',
		returned : ''
	},

	'pjs.OOP.sendPOST' : {
		name     : 'Отправить POST запрос на адрес',
		type     : 'function',
		api      : '(link, params, func);',
		note     : 'link - string, ссылка, по которой требуется отправить запрос, > \
								params - object, объект с параметрами, которые требуется передать, > \
								func - function, функция обработчик, которая принимает ответ сервера',
		example  : 'pjs.OOP.sendPOST("https://mysite.ru/script.php", { name : "Иван", age : 48 }, function (data) {> `console.log("Ответ сервера: " + data); >});',
		returned : ''
	},

	'pjs.OOP.sendPOSTScreen' : {
		name     : 'Отправить снимок игры POST запросом на адрес',
		type     : 'function',
		api      : '(link, name, func);',
		note     : 'link - string, ссылка, по которой требуется отправить запрос, > \
								name - string, имя переменной, которая будет содержать изображение, > \
								func - function, функция обработчик, которая принимает ответ сервера > \
								ВАЖНО! На сервер отправляются данные в base64 виде. Формат изображения - PNG',
		example  : 'pjs.OOP.sendPOSTScreen("https://mysite.ru/script.php", "png_image", function (data) {> `console.log("Ответ сервера: " + data); >});',
		returned : ''
	},

	'pjs.OOP.clearArr' : {
		name     : 'Очистить массив объектов',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - массив, который требуется очистить',
		example  : 'pjs.OOP.clearArr(objects); // очистить массив с объектами',
		returned : ''
	},

	'pjs.OOP.delObject' : {
		name     : 'Удалить объект из массива',
		type     : 'function',
		api      : '(arr, obj);',
		note     : 'arr - массив, в котором находится объект, > \
								obj - object, удаляемый объект, > ',
		example  : 'pjs.OOP.delObject(arr, myObject); // удалить myObject из массива arr',
		returned : ''
	},

	'pjs.OOP.newAJAXListener' : {
		name     : 'Создать "слушатель" сервера',
		type     : 'function',
		api      : '(link, func);',
		note     : 'link - string, адрес, который требуется "слушать", > \
								func - function, функция обработчик, > \
								Вернет объект "AJAXListener", который обладает следующими методами: >\
								`start() - запуск "прослушки" сервера >\
								`setSID(sid) - указать пользователь индетификатор сессии >\
								`setTime(time) - указать время задержки между запросами к серверу >\
								`stop() - остановить "прослушивание" >\
								`isActive() - проверка, производится ли "прослушка"',
		example  : 'pjs.OOP.newAJAXListener("http://pjs.ru/server/test.php", function (answer) {> `log(answer); >}); // слушаем сервер и помещаем результат в консоль',
		returned : ''
	},

	'pjs.OOP.fillArr' : {
		name     : 'Заполнить массив объектами',
		type     : 'function',
		api      : '(arr, count, func);',
		note     : 'arr - массив, который требуется очистить, > \
								count - количество элементов, > \
								func - функция, результат работы которой будет помещен в массив в новый элемент, > \
								Принимает два параметра: порядковый номер итерации и прошлый результат функции > \
								ВАЖНО! Функция должна содержать команду return и возвращать что-либо для помещения в массив',
		example  : 'pjs.OOP.fillArr(arr, 5, function (i) {> `return i; >});',
		returned : ''
	},

	'pjs.OOP.clone' : {
		name     : 'Клонировать объект',
		type     : 'function',
		api      : '(originalObject, func);',
		note     : 'originalObject - объект, который требуется склонировать > \
								func - function, обработчик, срабатывающий (при наличии) после клонирования объекта. >\
								Метод func действует в контексте нового объекта, допущено использовать this.',
		example  : 'var newObject = pjs.OOP.clone(oldObject, function () {> `this.fillColor = "red"; // клонированный объект будет закрашен новым цветом >});',
		returned : 'Object > склонированный объект'
	},

	'pjs.OOP.drawEach' : {
		name     : 'Отрисовать объект объектов',
		type     : 'function',
		api      : '(obj[, ondraw]);',
		note     : 'obj - объект, по которому требуется проход, должен содержать элементы, наследующие BaseObject > \
								ondraw - function, обработчик, срабатывающий (при наличии) в момент отрисовки объекта',
		example  : 'pjs.OOP.drawEach(objects, function (object) {> `// your code >}); // отрисовать объект с объектами',
		returned : ''
	},

	'pjs.OOP.drawArr' : {
		name     : 'Отрисовать массив объектов',
		type     : 'function',
		api      : '(arr[, ondraw]);',
		note     : 'arr - массив, по которому требуется проход, должен содержать элементы, наследующие BaseObject > \
								ondraw - function, обработчик, срабатывающий (при наличии) в момент отрисовки объекта',
		example  : 'pjs.OOP.drawArr(objects, function (object) {> `// your code >}); // отрисовать массив с объектами',
		returned : ''
	},

	'pjs.OOP.forArr' : {
		name     : 'Цикл по элементам массива (только массива)',
		type     : 'function',
		api      : '(arr, func);',
		note     : 'arr - массив, по которому требуется проход > \
														func - function, функция обработчик, принимает три параметра: > \
														value - значение элемента массива > \
														index - ключ или индекс массива > \
														arr - ссылка на исходный массив',
		example  : 'pjs.OOP.forArr([5, 15, 45], function (val, i, arr) { > \
														`console.log("Исходный массив: ", arr, "Текущий ключ: ", i, "Текущее значение: ", val); > \
														});',
		returned : ''
	},

	'pjs.OOP.forEach' : {
		name     : 'Цикл по элементам массива или объекта',
		type     : 'function',
		api      : '(arr, func);',
		note     : 'arr - массив или объект, по которому требуется проход > \
														func - function, функция обработчик, принимает три параметра: > \
														value - значение элемента массива > \
														index - ключ или индекс массива или объекта > \
														arr - ссылка на исходный массив или объект',
		example  : 'pjs.OOP.forEach([5, 15, 45], function (val, i, arr) { > \
														`console.log("Исходный массив: ", arr, "Текущий ключ: ", i, "Текущее значение: ", val); > \
														});',
		returned : ''
	},

	'pjs.OOP.forXY' : {
		name     : 'Цикл с определенным количеством повторений по двум осям',
		type     : 'function',
		api      : '(countX, countY, func);',
		note     : 'countX - number, количество повторений по оси X > countY - number, количество повторений по оси Y > func - function, функция, которую нужно выполнить > \
														Функция func принимает два параметр - порядковый номер итерации по X и по Y',
		example  : 'pjs.OOP.forXY(10, 10, function (x, y) {>\
															`console.log("Текущая итерация по X: "+x, "Текущая итерация по Y: "+y); >\
														});',
		returned : ''
	},

	'pjs.OOP.forInt' : {
		name     : 'Цикл с определенным количеством повторений',
		type     : 'function',
		api      : '(count, func);',
		note     : 'count - number, количество повторений > func - function, функция, которую нужно выполнить > \
														Функция func принимает один параметр - порядковый номер текущей итерации',
		example  : 'pjs.OOP.forInt(10, function (i) {>\
															`console.log("Текущая итерация: ", i); >\
														});',
		returned : ''
	},

	'pjs.OOP.readJSON' : {
		name     : 'Прочитать JSON данные из файла или по ссылке',
		type     : 'function',
		api      : '(path, func);',
		note     : 'path - string, путь к JSON данным > func - function, обработчик данных > Функция func принимает в качестве \
														параметра объект, который будет создан из JSON данных',
		example  : 'pjs.OOP.readJSON("data/level1.json", function(obj) { >`console.log(obj); > }); // ',
		returned : ''
	},

	'pjs.OOP.readJSONSync' : {
		name     : 'Прочитать JSON данные из файла или по ссылке синхронным запросом',
		type     : 'function',
		api      : '(path);',
		note     : 'path - string, путь к JSON данным > Данные в формате JSON будут преобразованы в объект.',
		example  : 'var obj = pjs.OOP.readJSONSync("data/level1.json"); > console.log(obj);',
		returned : ''
	},

	'pjs.OOP.isDef' : {
		name     : 'Проверка существования объекта, свойства объекта, переменной',
		type     : 'function',
		api      : '(variable);',
		note     : 'variable - проверяемое значение > Имейте ввиду, что NaN считается значением, для него используйте "isNaN()"',
		example  : 'pjs.OOP.isDef(myObj.level); // проверка существования myObj.level',
		returned : 'boolean > true - совйство|объект|переменная существует > false - не существует'
	},

	'pjs.OOP.isSet' : {
		name     : 'Проверка объявления переменной',
		type     : 'function',
		api      : '(variable);',
		note     : 'variable - проверяемое значение',
		example  : 'pjs.OOP.isSet(myObj.level); // проверка существования и наличия значения в myObj.level',
		returned : 'boolean > true - совйство|объект|переменная существует и объявлена > false - не существует или не объявлена'
	},

	'pjs.OOP.randArrElement' : {
		name     : 'Получить случайный элемент из массива',
		type     : 'function',
		api      : '(arr);',
		note     : 'arr - array, массив, из которого нужен рандомный элемент',
		example  : 'pjs.OOP.randArrElement( [5, 10, 15, 26] ); // Например, 10',
		returned : 'elemnt > Рандомный элемент массива'
	},

	'pjs.OOP.toString' : {
		name     : 'Преобразование объекта в строку',
		type     : 'function',
		api      : '(obj[, convertNumberToInt]);',
		note     : 'obj - object, объект для конвертации > \
		convertNumberToInt - boolean, флаг, отвечающий за конвертацию числовых значений в объекте в целый тип.',
		example  : 'pjs.OOP.toString( {x : 15, name : "my name"} );',
		returned : 'string > Конвертированный в строку объект'
	},

	'pjs.game.setFPS' : {
		name     : 'Задать количество кадров в секунду',
		type     : 'function',
		api      : '(fps);',
		note     : 'fps - number, новое значение FPS',
		example  : 'pjs.game.setFPS(35); // После этой команды игровой цикл будет выполняться на скорости 35 fps',
		returned : ''
	},

	'pjs.game.getFPS' : {
		name     : 'Получить количество FPS, присовенное командой setFPS()',
		type     : 'function',
		api      : '();',
		note     : 'Функция вернет не фактическое количество кадров в секунду, а то, что было присвоено функцией setFPS',
		example  : 'var fps = pjs.game.getFPS();',
		returned : 'number > Количество FPS, заданное разработчиком'
	},


	'pjs.game.getDT' : {
		name     : 'Получение delta-time значения',
		type     : 'function',
		api      : '(mls);',
		note     : 'mls - number, значение в милисекундах, которое станет коэффициентом деления значения delta \
														> По умолчанию равняется 1000',
		example  : 'var dt = pjs.game.getDT();',
		returned : 'number > Delta-Time'
	},

	'pjs.game.getTime' : {
		name     : 'Получение метки времени',
		type     : 'function',
		api      : '();',
		note     : 'Вернет timestamp текущего времени в милисекундах',
		example  : 'var time = pjs.game.getTime();',
		returned : 'number > Временная метка'
	},

	'pjs.game.newLoop' : {
		name     : 'Создание игрового цикла',
		type     : 'function',
		api      : '(name, update[, entry, exit]);',
		note     : 'name - string, наименование игрового состояния > \
		update - function, функция, описывающая логику и поведение в игровом цикле > \
		entry - function, функция, которая выполняется при входе в игровой цикл > \
		exit - function, функция, которая выполняется при выходе из игрового цикла',
		example  : 'pjs.game.newLoop( "myGame", function () {> `/*игровой цикл*/ >} );',
		returned : ''
	},

	'pjs.game.newLoopFromClassObject' : {
		name     : 'Создание игрового цикла из объекта',
		type     : 'function',
		api      : '(name, classObject);',
		note     : 'name - string, наименование игрового состояния > \
		classObject - объект, содержащий в себе следующие фукнции: > \
		update - функция игрового цикла > \
		entry - функция, срабатывающая при входе в игровой цикл > \
		exit - функция, срабатывающая при выходе из игрового цикла',
		example  : 'function GameLoop = function () { \
		 >`var text = game.newTextObject({ > \
		 ``text : "Привет, Мир!", > \
		 ``size : 30, > \
		 ``color : red > \
		 `}); > >\
			`this.update = function () {> \
			 ``text.draw(); \
			 >`}\
		>} > >\
		pjs.game.newLoopFromClassObject( "myGame", new GameLoop() );',
		returned : ''
	},

	'pjs.game.newLoopFromConstructor' : {
		name     : 'Создание игрового цикла из функции-конструктора',
		type     : 'function',
		api      : '(name, constructor);',
		note     : 'name - string, наименование игрового состояния > \
		constructor - функция-конструктор, содержащий в себе следующие фукнции: > \
		update - функция игрового цикла > \
		entry - функция, срабатывающая при входе в игровой цикл > \
		exit - функция, срабатывающая при выходе из игрового цикла',
		example  : 'function GameLoop = function () { \
		 >`var text = game.newTextObject({ > \
		 ``text : "Привет, Мир!", > \
		 ``size : 30, > \
		 ``color : red > \
		 `}); > >\
			`this.update = function () {> \
			 ``text.draw(); \
			 >`}\
		>} > >\
		pjs.game.newLoopFromClassObject( "myGame", GameLoop);',
		returned : ''
	},


	'pjs.zList.add' : {
		name     : 'Добавить объект для отрисовки',
		type     : 'function',
		api      : '(obj);',
		note     : 'Добавит объект в список объектов для отрисовки',
		example  : 'var myRect = game.newRectObject... >pjs.zList.add(myRect); // добавить объект',
		returned : ''
	},

	'pjs.zList.init' : {
		name     : 'Инициализация менеджера отрисовки',
		type     : 'function',
		api      : '([arr]);',
		note     : 'arr - array, массив объектов, которые нужно добавить для отрисовки [не обязателен]',
		example  : '//myArr - массив каких-нибудь объектов, >pjs.zList.init(myArr); // добавить объекты',
		returned : ''
	},

	'pjs.zList.update' : {
		name     : 'Обновить порядок отрисовки',
		type     : 'function',
		api      : '();',
		note     : 'Необходимо вызвать перед отрисовкой, если расположение объектов изменилось, и их требуется отсортировать заново',
		example  : 'zList.update();',
		returned : ''
	},

	'pjs.zList.draw' : {
		name     : 'Отрисовать объекты в соответствии с отрисовкой',
		type     : 'function',
		api      : '();',
		note     : 'Смотрите пример использования zList в разделе примеров',
		example  : 'pjs.zList.draw(); // отрисовать объекты',
		returned : ''
	},

	'pjs.zList.del' : {
		name     : 'Удалить объект из списка отрисовки',
		type     : 'function',
		api      : '(obh);',
		note     : 'obj - object, объект из списка',
		example  : 'pjs.zList.del(myRect); // удалить объект (не будет рисоваться)',
		returned : ''
	},




	'pjs.game.getWH' : {
		name     : 'Получить размеры игровой сцены',
		type     : 'function',
		api      : '();',
		note     : 'Получение фактических размеров игровой сцены',
		example  : 'var wh = pjs.game.getWH();',
		returned : ' object > w - ширина сцены > h - высота сцены > w2 - центр сцены по X > h2 - центр сцены по Y'
	},

	'pjs.game.getWH2' : {
		name     : 'Получить размеры половины игровой сцены',
		type     : 'function',
		api      : '();',
		note     : 'Получение фактических размеров половины игровой сцены',
		example  : 'var wh = pjs.game.getWH2();',
		returned : ' object > w - ширина > h - высота'
	},

	'pjs.game.getResolution' : {
		name     : 'Получить резолюцию экрана',
		type     : 'function',
		api      : '();',
		note     : 'Получение коэффициента из соотношения ширины к высоте',
		example  : 'var res = pjs.game.getResolution();',
		returned : 'number - коэффициент'
	},


	'pjs.game.setLoop' : {
		name     : 'Задать активный игровой цикл',
		type     : 'function',
		api      : '(name);',
		note     : 'name - string, наименование игрового состояния',
		example  : 'pjs.game.setLoop( "myGame" );',
		returned : ''
	},

	'pjs.game.setLoopSound' : {
		name     : 'Установить плейлист для фонового проигрывания',
		type     : 'function',
		api      : '(gameLoop, arrAudio);',
		note     : 'gameLoop - string, наименования игрового состояния > \
														arrAudio - массив .Audio() или .WAudio() файлов',
		example  : 'pjs.game.setLoopSound( [audio1, audio2, ... , audioN] );',
		returned : ''
	},

	'pjs.game.start' : {
		name     : 'Запустить активный игровой цикл',
		type     : 'function',
		api      : '([fps]);',
		note     : 'fps - number, скорость работы игрового состояния',
		example  : 'pjs.game.start( 60 );',
		returned : ''
	},

	'pjs.game.startLoop' : {
		name     : 'Активировать игровой цикл и стартовать игру',
		type     : 'function',
		api      : '(gameLoop);',
		note     : 'gameLoop - string, название игрового цикла > \
														Аналогично, что выполнить "setLoop" и затем "start"',
		example  : 'pjs.game.startLoop("my_game");',
		returned : ''
	},




	'pjs.game.stop' : {
		name     : 'Остановить выполнение',
		type     : 'function',
		api      : '();',
		note     : 'Выполнение останавливается, но можно продолжить функцией resume()',
		example  : 'pjs.game.stop();',
		returned : ''
	},

	'pjs.game.fill' : {
		name     : 'Залить контекст',
		type     : 'function',
		api      : '(color);',
		note     : 'color - string, цвет заливки',
		example  : 'pjs.game.fill("#E1C8C8");',
		returned : ''
	},

	'pjs.OOP.getTextWidth' : {
		name     : 'Узнать ширину текста в пикселях',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, объект со свойствами \
														{ > \
														`text - string, текст, ширину которого нужно получить > \
														`style - string, стилевое оформление текста > \
														`size - number, размер текста > \
														`font - string, шрифт текста > \
														}',
		example  : 'pjs.OOP.getTextWidth({> `text : "Привет, Мир!", > `size : 15, > `font : "serif" >});',
		returned : 'number > Ширина текста в пикселях'
	},

	'pjs.OOP.once' : {
		name     : 'Однократное выполнение функции',
		type     : 'function',
		api      : '(name, func);',
		note     : 'name - string, наименование функции > \
														func - function, исполняемая функция > \
														Используется, если требуется выполнить какой-то набор команд лишь раз за игровой цикл',
		example  : 'pjs.OOP.once("myFunction", function () {> `log("Функция выполнена"); >});',
		returned : ''
	},

	'pjs.OOP.newRever' : {
		name     : 'Создание реверсивного счетчика',
		type     : 'function',
		api      : '(min, max, step);',
		note     : 'min - number, минимальная граница > \
														max - number, максимальная граница > \
														step - number, шаг, на который значение счетчика будет изменяться > \
														newRever вернет объект, содержащий следующие методы: > \
														`update() - изменить значение реверсивного счетчика на один шаг (функция возвращает старое значение перед обновлением) > \
														`getValue() - получить текущее значение счетчика > \
														`setValue(value) - задать принудительно новое значение счетчика > \
														`setStep(step) - установить новое значение шага > \
														`getStep() - получить текущее значение шага > \
														Все эти функции можно выполнять в игровом цикле.',
		example  : 'var rever = pjs.OOP.newRever(0, 10, 1); // последовательность изменения: 0,1,2..10,9,8..0 > \
														> // где-то в игровом цикле > > \
														console.log("Значение счетчика: "+rever.getValue()); > rever.update(); >> // или > console.log("Значение счетчика: "+rever.update()) ',
		returned : ''
	},

	'pjs.OOP.newTimer' : {
		name     : 'Создание таймера (триггера)',
		type     : 'function',
		api      : '(time, func);',
		note     : 'time - number, задержка перед выполнением функции func > \
														func - function, событие, которое будет выполнено по истечению времени time > \
														newTimer вернет объект, содержащий следующие методы: > \
														`start() - запустить отсчет времени > \
														`end() - выполнить функцию принудительно и остановить таймер > \
														`stop() - остановить таймер без выполнения функции > \
														`restart([newTime]) - перезапустить таймер, можно указать новое время > \
														Все эти функции можно выполнять в игровом цикле. > \
														restart() выполнится только по истечению времени таймера, что не повлечет за собой многократное выполнение функции',
		example  : 'var timer = pjs.OOP.newTimer(5000, function () { > `log("Ok!"); >}); > \
														> // где-то в игровом цикле > > \
														if (pjs.mouseControl.isPress("LEFT")) > `timer.start(); // запустить отсчет времени',
		returned : ''
	},

	'pjs.system.setContextSettings' : {
		name     : 'Предварительная настройка контекста',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, объект, содержаний настройки в формате ключ : значение',
		example  : 'pjs.system.setContextSettings({> `globalAlpha : 0.2, > `strokeStyle : "red" >});',
		returned : ''
	},

	'pjs.system.newDOM' : {
		name     : 'Создание HTML элемента по тегу',
		type     : 'function',
		api      : '(tag[, lock=false]);',
		note     : 'tag - string, название тега (напр. "div") > \
								lock - заблокировать события, если нужно использовать свои',
		example  : 'var myDIV = pjs.system.newDOM("div"); > myDIV.innerHTML = "Мой блочный элемент";',
		returned : 'DOMElement > DOM элемент'
	},

	'pjs.system.defaultSettings' : {
		name     : 'Восстановление дефолтных настроек контекста',
		type     : 'function',
		api      : '();',
		note     : 'Вернет настройки, присовенные функцией setDefaultSettings()',
		example  : 'pjs.system.defaultSettings();',
		returned : ''
	},

	'pjs.game.resume' : {
		name     : 'Продолжить выполнение игры',
		type     : 'function',
		api      : '();',
		note     : 'Выполнение продолжается, если было ранее остановлено функцией stop()',
		example  : 'pjs.game.resume();',
		returned : ''
	},

	'pjs.game.newBackgroundObject' : {
		name     : 'Создать объект типа BackgroundObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, смещение по X > \
														`y - number, смещение по Y > \
														`w - number, ширина тайла > \
														`h - number, высота тайла > \
														`read - object, параметры считывания области >\
														``{ >\
														```x - number, начало считывания по X >\
														```y - number, начало считывания по Y >\
														```w - number, ширина считывания области >\
														```h - number, высота считывания области >\
														``} >\
														`countX - number, количество тайлов по горизонтали > \
														`countY - number, количество тайлов по вертикали > \
														`file - string, путь к файла тайла > \
														}',
		example  : 'var obj = game.newBackgroundObject( \
														{ > \
														`x : 0, > \
														`y : 0, > \
														`w : 50, > \
														`h : 50, > \
														`countX : 10, > \
														`countY : 10, > \
														`file : "images/trava.png", > \
														});',
		returned : ' .BackgroundObject() > Объект заднего фона'
	},

	'pjs.game.newBaseObject' : {
		name     : 'Создать объект типа BaseObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, позиция по X > \
														`y - number, позицию по Y > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														`scale - number, коэффициент масштабирования > \
														`size - .size(), размер объекта > \
														`sizeC - .size(), размер объекта с учетом центра > \
														`position - .point(), позиция нового объекта (если задан, x и y проигнорируются) > \
														`positionC - .point(), позиция центра нового объекта (если задан, x и y проигнорируются) > \
														`fillColor - string, цвет заливки объекта > \
														`strokeColor - string, цвет обводки объекта > \
														`strokeWidth - number, ширина линии обводки > \
														`angle - number, угол наклона в градусах > \
														`alpha - number, степень прозрачности объекта [0..1] > \
														`center - .point(), смещение центра объекта (по умолчанию 0,0) > \
														`box - object, смещение и размер Bounding-box объекта > \
														`{ > \
														``offset - .point(), смещение Bounding-box > \
														``size - .size(), размер Bounding-box > \
														`} > \
														`userData - object, набор дополнительных свойств. Аналог вызова setUserData() > \
														`visible - boolean, видимость объекта > \
														`ondraw - function, функция обработчик, срабатывает при отрисовке объекта > \
														} > Все параметры не являются обязательными',
		example  : 'var obj = game.newBaseObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F" > \
														});',
		returned : ' .BaseObject() > Базовый объект'
	},

	'pjs.game.newTextObject' : {
		name     : 'Создать объект типа TextObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`text - string, однострочный текст > \
														`size - number, высота текста в пикселях > \
														`color - string, цвет текста > \
														`padding - number, отступ вокруг текста > \
														`strokeColorText - string, цвет обводки текст > \
														`strokeWidthText - number, ширина линии обводки текста > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newTextObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`text : "Привет, мир!", > \
														`size : 20, > \
														`padding : 10, > \
														`color : "#000000", > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														});',
		returned : ' .TextObject() > объект "Текст"'
	},

	'pjs.game.newTriangleObject' : {
		name     : 'Создать объект типа TriangleObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newRectObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														});',
		returned : ' .TriangleObject() > объект "Треугольник"'
	},

	'pjs.game.newRectObject' : {
		name     : 'Создать объект типа RectObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newRectObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														});',
		returned : ' .RectObject() > объект "Прямоугольник"'
	},

	'pjs.game.newRoundRectObject' : {
		name     : 'Создать объект типа RoundRectObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														`radius - number, радиус скругления углов > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newRoundRectObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`radius : 10, > \
														`fillColor : "#FBFE6F", > \
														});',
		returned : ' .RoundRectObject() > объект "Округленный прямоугольник"'
	},

	'pjs.game.newCircleObject' : {
		name     : 'Создать объект типа CircleObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`radius - number, радиус окружности > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newCircleObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`radius : 10, > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .CircleObject() > объект "Окружность"'
	},

	'pjs.game.newEllipsObject' : {
		name     : 'Создать объект типа EllipsObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newEllipsObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .EllipsObject() > объект "элипс"'
	},

	'pjs.game.newPolygonObject' : {
		name     : 'Создать объект типа PolygonObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`points - array .point() объектов, набор точек > \
														`pointColor - string, цвет вершин > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newPolygonObject( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], > \
														`pointColor : "#343DE4", > \
														`fillColor : "#FBFE6F", > \
														`strokeColor : "#DA4848", > \
														`strokeWidth : 2, > \
														});',
		returned : ' .PolygonObject() > объект "Прямоугольник"'
	},

	'pjs.game.newImageObject' : {
		name     : 'Создать объект типа ImageObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`file - string, путь к изображению, > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														`scale - number[0..1], масштабирование изрбражения (только если w и h не заданы)> \
														`onload - function, функция, срабатывающая сразу после загрузки изображения\
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newImageObject( \
														{ > \
														`file : "images/ball.png", > \
														`x : 100, > \
														`y : 100, > \
														`w : 50, > \
														`h : 50, > \
														`//scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота> \
														});',
		returned : ' .ImageObject() > объект "Изображение"'
	},

	'pjs.game.newAnimationObject' : {
		name     : 'Создать объект типа AnimationObject',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`animation - .Animation(), объект анимации > \
														`delay - number, замедление анимации (в FPS) > \
														`w - number, ширина объекта > \
														`h - number, высота объекта > \
														} > Все параметры не являются обязательными > \
														Данный объект наследует .BaseObject() и все его свойства, тут указаны лишь уникальные для этого объекта',
		example  : 'var obj = game.newAnimationObject( \
														{ > \
														`animation : tiles.newImage("images/human.png").getAnimation(0, 0, 20, 40, 5), > \
														`x : 100, > \
														`y : 100, > \
														`w : 20, > \
														`h : 40, > \
														`angle : 0, > \
														`alpha : 1, > \
														`visible : true > \
														});',
		returned : ' .AnimationObject() > объект "Анимация"'
	},

	'pjs.game.newMesh' : {
		name     : 'Создать объект типа Mesh',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`x - number, позиция по X > \
														`y - number, позицию по Y > \
														`angle - number, угол наклона в градусах > \
														`add - array, массив объектов, наследующих .BaseObject() > \
														} > Все параметры не являются обязательными',
		example  : 'var obj = game.newMesh( \
														{ > \
														`x : 100, > \
														`y : 100, > \
														`angle : 0, > \
														`add : [obj1, obj2] > \
														});',
		returned : ' .Mesh() > объект "Mesh"'
	},



	'pjs.layers.newLayer' : {
		name     : 'Создать новый слой для отрисовки',
		type     : 'function',
		api      : '(z[, styles])',
		note     : 'z - number, смещение нового слоя относительно основного слоя. > Отрицательное значение смещает его назад, а положительное - вперед. > \
								styles - object, набор пользовательских предустановок: > \
								`backgroundColor - цвет фона, > \
								`alpha - прозрачность слоя',
		example  : 'var myLayer = pjs.layers.newLayer(-1); // Создание слоя позади основного слоя',
		returned : '.Layer() > Объект слоя'
	},






	'pjs.camera.follow' : {
		name     : 'Следить за объектом',
		type     : 'function',
		api      : '(obj, slowSpeed);',
		note     : 'obj - .BaseObject(), объект для слежки > \
								slowSpeed - скорость замедления',
		example  : 'pjs.camera.follow( myObj, 10 );',
		returned : ''
	},


	'pjs.camera.move' : {
		name     : 'Двигать камеру в направлении',
		type     : 'function',
		api      : '(vector2D);',
		note     : 'vector2D - .point(), направление движения камеры',
		example  : 'pjs.camera.move( .point(1, 0) );',
		returned : ''
	},

	'pjs.camera.moveTime' : {
		name     : 'Двигать камеру к точке за время',
		type     : 'function',
		api      : '(point, time);',
		note     : 'point - .point(), точка,  куда надо двигать камеру > \
														time - number, время, за которое требуется пройти путь',
		example  : 'pjs.camera.moveTime( .point(100, 200), 10 );',
		returned : ''
	},

	'pjs.camera.circling' : {
		name     : 'Двигать камеру по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает камеру по окружности вокруг точки',
		example  : 'camera.circling( .point(100, 200), 10, 1 );  // Двигать камеру вокруг точки по радиусу 10 и скорости 1',
		returned : ''
	},

	'pjs.camera.circlingC' : {
		name     : 'Двигать центр камеры по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает камеру по окружности вокруг точки с учетом центра',
		example  : 'camera.circlingC( .point(100, 200), 10, 1 );  // Двигать камеру вокруг точки по радиусу 10 и скорости 1 с учетом центра',
		returned : ''
	},

	'pjs.camera.motion' : {
		name     : 'Двигать камеру по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает камеру по элипсоиду вокруг точки',
		example  : 'camera.motion( .point(100, 100), size(50, 10), 1 );'
	},

	'pjs.camera.motionC' : {
		name     : 'Двигать центр камеры по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает камеру по элипсоиду вокруг точки',
		example  : 'camera.motionC( .point(100, 100), size(50, 10), 1 );'
	},

	'pjs.camera.moveTimeC' : {
		name     : 'Двигать центр камеры к точке за время',
		type     : 'function',
		api      : '(point, time);',
		note     : 'point - .point(), точка,  куда надо двигать камеру > \
														time - number, время, за которое требуется пройти путь',
		example  : 'pjs.camera.moveTimeC( .point(100, 200), 10 );',
		returned : ''
	},

	'pjs.camera.getStaticBox' : {
		name     : 'Получение StaticBox камеры. статический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от DynamicBox тем, что его использование целесообразно там, где объекты не \
		подразумевается вращать. > \
		!! StaticBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var staticBox = camera.getStaticBox();',
		returned : 'object > x - Позиция по X > y - Позиция по Y > w : Ширина прямоугольника > h : Высота прямоугольника'
	},

	'pjs.camera.getDynamicBox' : {
		name     : 'Получение DynamicBox камеры. динамический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от StaticBox тем, что его использование целесообразно там, где объекты \
		подразумевается вращать. > \
		!! DynamicBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var dynamicBox = camera.getDynamicBox();',
		returned : 'object > DynamicBox'
	},

	'pjs.camera.scale' : {
		name     : 'Масштабировать камеру',
		type     : 'function',
		api      : '(scale);',
		note     : 'scale - point, коэффициент масштабирования по осям > \
								Если коэффициент будет меньше единицы - произойдет уменьшение зума, если больше - увеличение',
		example  : 'pjs.camera.scale( point(2,2) ); // увеличение изображения в два раза',
		returned : ''
	},

	'pjs.camera.scaleC' : {
		name     : 'Масштабировать камеру с учетом центра (beta)',
		type     : 'function',
		api      : '(scale);',
		note     : 'scale - point, коэффициент масштабирования по осям > \
								Если коэффициент будет меньше единицы - произойдет уменьшение зума, если больше - увеличение',
		example  : 'pjs.camera.scaleC( point(2,2) ); // увеличение изображения в два раза',
		returned : ''
	},

	'pjs.camera.setPosition' : {
		name     : 'Установить камеру в позицию',
		type     : 'function',
		api      : '(point);',
		note     : 'point - .point(), позиция, в которую нужно установить камеру',
		example  : 'pjs.camera.setPosition( .point(100, 100) );',
		returned : ''
	},

	'pjs.camera.setPositionC' : {
		name     : 'Установить камеру в позицию с учетом центра',
		type     : 'function',
		api      : '(point);',
		note     : 'point - .point(), позиция, в которую нужно установить центр камеры',
		example  : 'pjs.camera.setPositionC( .point(100, 100) );',
		returned : ''
	},

	'pjs.camera.getPositionC' : {
		name     : 'Получить позицию центра камеры',
		type     : 'function',
		api      : '();',
		note     : '',
		example  : 'var camPosC = pjs.camera.getPositionC();',
		returned : ' .point() > Позиция центра камеры'
	},

	'pjs.camera.getPosition' : {
		name     : 'Получить позицию камеры',
		type     : 'function',
		api      : '(format);',
		note     : 'format - number, формат получаемой позиции > \
														0 или отсутствует - верхний левый угол камеры > \
														1 - центр камеры',
		example  : 'var camPos = pjs.camera.getPosition(1);',
		returned : ' .point() > Позиция камеры'
	},

	'pjs.game.clear' : {
		name     : 'Очистить все, что было отрисовано',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается перед новыми отрисовками, иначе игрок ничего не увидит',
		example  : 'pjs.game.clear();',
		returned : ''
	},

	'pjs.game.tick' : {
		name     : 'Выполнять функцию только в определенный кадр',
		type     : 'function',
		api      : '(frame, func);',
		note     : 'frame - number, кадр (0-59), > func - function, функция, которую требуется выполнять только в указанный кадр',
		example  : 'pjs.game.tick(25, function () {> log("frame 25"); >});',
		returned : ''
	},

	'pjs.game.skip' : {
		name     : 'Выполнять функцию с пропуском кадров',
		type     : 'function',
		api      : '(id, frames, func);',
		note     : 'id - string, идентификатор события, может быть любым, > frames - number, количество пропускаемых до следующего выполнения кадров, > func - function, функция, которую требуется выполнять',
		example  : 'pjs.game.tick("skip25", 25, function () {> log("yes, 25 frames skiped"); >});',
		returned : ''
	},

	'pjs.resources.isLoaded' : {
		name     : 'Проверить, что загружены все внешние ресурсы',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается в любом месте проекта, вернет результат проверки полной загрузки внешних файлов',
		example  : 'var loaded = pjs.resources.isLoaded();',
		returned : 'boolean > true - все ресурсы загружены > false - ресурсы еще не загружены'
	},

	'pjs.resources.getProgress' : {
		name     : 'Получить процент загрузки внешних объектов',
		type     : 'function',
		api      : '();',
		note     : 'Вызывается в любом месте проекта, вернет количество загруженных объектов в процентах',
		example  : 'var progress = pjs.resources.getProgress();',
		returned : 'number > процент загрузки в диапазоне от 0 (ничего не загружено) до 100 (все загружено)'
	},



	// tiles
	'pjs.tiles.newImage' : {
		name     : 'Новое изображение',
		type     : 'function',
		api      : '(path);',
		note     : 'path - string, путь к файлу изображения > \
														Создает новый объект Image, который можно в дальнейшем использовать для построения анимации',
		example  : 'pjs.tiles.newImage();',
		returned : ' .Image() > Изображение'
	},

	'pjs.tiles.newDrawImage' : {
		name     : 'Новое пустое изображение',
		type     : 'function',
		api      : '(width, height);',
		note     : 'width - number, ширина изображения > height - number, высота изображения > \
														Создает новый объект Image, который можно в дальнейшем использовать для построения анимации',
		example  : 'pjs.tiles.newDrawImage();',
		returned : ' .Image() > Изображение'
	},

	'pjs.tiles.newAnimation' : {
		name     : 'Создать анимацию с подгрузкой изображения',
		type     : 'function',
		api      : '(file, width, height, count);',
		note     : 'file - string, путь к изображению > \
													 width - number, ширина одного кадра > \
													 height - number, высота одного кадра > \
													 count - number, количество кадров\
														Создает новый объект Animation',
		example  : 'pjs.tiles.newAnimation();',
		returned : ' .Animation() > Изображение'
	},



	'pjs.levels.forStringArray' : {
		name     : 'Проход по массиву строк с посимвольной обработкой (генератор)',
		type     : 'function',
		api      : '(obj, onSymbol);',
		note     : 'obj - исходный объект с данными > onSymbol - обработчик, срабатывающий на каждом символе, кроме пробела>\
		Обработчик принимает следующие параметры: > symbol - string, символ > \
		x - number, позиция по X >\
		y - number, позиция по Y >\
		w - number, ширина объекта >\
		h - number, высота объекта >\
		Сам же исходный объект выглядит следующим образом: >\
		`{ >\
		``offset - .point() - смещение карты >\
		``source - array, массив строк>\
		``w - number, ширина объекта>\
		``h - number, высота объекта\
		>`}',
		example  : 'pjs.levels.forStringArray({w : 20, h : 20, source : ["0000", "0  0", "0  0", "0000"]}, function (symbol) >{> `log(symbol); >});',
		// returned : ' .Level() > Объект уровня'
	},

	'pjs.levels.newLevelFromJSON' : {
		name     : 'Создать уровень из JSON строки',
		type     : 'function',
		api      : '(JSONData);',
		note     : 'JSONData - string, JSON строка специального формата ',
		example  : 'pjs.levels.newLevelFromJSON(JSONData);',
		returned : ' .Level() > Объект уровня'
	},

	'pjs.levels.newEmptyLevel' : {
		name     : 'Создать пустой уровень',
		type     : 'function',
		api      : '();',
		note     : 'Создаст пустой объект уровня, который моэно будет наполнить оъектами вручную',
		example  : 'pjs.levels.newEmptyLevel();',
		returned : ' .Level() > Объект уровня'
	},





	'pjs.brush.drawPolygon' : {
		name     : 'Отрисовать полигон',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], // array, набор вершин полигона > \
			`[fillColor : "red",] // string, цвет заливки> \
			`[strokeColor : "black",] // string, цвет отрисовки ребер > \
			`[strokeWidth : 2,] // number, ширина отрисованных граней (линий)> \
			`[pointColor : "white"] // цвет отрисовки вершин (точек)> \
		}',
		example  : 'pjs.brush.drawPolygon({> `points : [ .point(0, 0), .point(10, 0), .point(10, 10), .point(0, 10) ], >`pointColor : "red" >});',
		returned : ''
	},

	'pjs.brush.drawMultiText' : {
		name     : 'Отрисовать многострочный текст',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Hello, World!", // текст, который нужно отрисовать. Перенос на новую строку - \\n > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'pjs.brush.drawMultiText({> `text : "Привет \\nвсем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawMultiTextS' : {
		name     : 'Отрисовать многострочный текст в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Hello, World!", // текст, который нужно отрисовать. Перенос на новую строку - \\n > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
		}',
		example  : 'pjs.brush.drawMultiTextS({> `text : "Привет \\nвсем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawText' : {
		name     : 'Отрисовать текст',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Hello, World!", // текст, который нужно отрисовать > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
			`[strokeColor] - string, цвет обводки > \
			`[strokeWidth] - number, ширина линии > \
		}',
		example  : 'pjs.brush.drawText({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawTextS' : {
		name     : 'Отрисовать текст в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`text : "Hello, World!", // текст, который нужно отрисовать > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
			`[strokeColor] - string, цвет обводки > \
			`[strokeWidth] - number, ширина линии > \
		}',
		example  : 'pjs.brush.drawTextS({> `text : "Привет всем!", > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawTextLines' : {
		name     : 'Отрисовать многострочный текст',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`lines : [ "Hello, World!", "New Line!" ], // массив сторк, новый элемент - новая строка > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
			`[strokeColor] - string, цвет обводки > \
			`[strokeWidth] - number, ширина линии > \
		}',
		example  : 'pjs.brush.drawTextLines({> `lines : ["Привет", "всем!"], > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawTextLinesS' : {
		name     : 'Отрисовать многострочный текст в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`lines : [ "Hello, World!", "New Line!" ], // массив сторк, новый элемент - новая строка > \
			`[color : "red",] // string, цвет заливки > \
			`[size : 13,] // number, размер шрифта > \
			`[style : "bold italic",] // string, стиль текста > \
			`[align : "left",] // string, выравнивание по X координате, по умолчанию left > \
			`[font : "serif",] // string, шрифт текста > \
			`[strokeColor] - string, цвет обводки > \
			`[strokeWidth] - number, ширина линии > \
		}',
		example  : 'pjs.brush.drawTextLinesS({> `lines : ["Привет", "всем!"], > `x : 20, y : 20, >`color : "black" >});',
		returned : ''
	},

	'pjs.brush.drawRoundRect' : {
		name     : 'Отрисовать скругленный прямоугольник',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 5, // number, радиус скругления > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawRoundRect({> `x : 20, y : 20, > `radius : 10, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawRoundRectS' : {
		name     : 'Отрисовать скругленный прямоугольник в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 5, // number, радиус скругления > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawRoundRectS({> `x : 20, y : 20, > `radius : 10, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawTriangleS' : {
		name     : 'Отрисовать треугольник в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawTriangleS({> `x : 20, y : 20, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawTriangle' : {
		name     : 'Отрисовать треугольник',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawTriangle({> `x : 20, y : 20, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawRect' : {
		name     : 'Отрисовать прямоугольник',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawRect({> `x : 20, y : 20, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawRectS' : {
		name     : 'Отрисовать прямоугольник в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`w : 20, // number, ширина прямоугольника > \
			`h : 10, // number, высота прямоугольника  > \
			`[fillColor : "red",] // string, цвет заливки > \
			`[strokeColor : "white",] // string, цвет линии обводки > \
			`[strokeWidth : 2] // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawRectS({> `x : 20, y : 20, > `w : 40, h : 20, >`fillColor : "black" >});',
		returned : ''
	},

	'pjs.brush.drawPoint' : {
		name     : 'Отрисовать точку',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`fillColor : "red", // string, цвет точки > \
		}',
		example  : 'pjs.brush.drawPoint({> `x : 20, y : 20, > `fillColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawPointS' : {
		name     : 'Отрисовать точку в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`fillColor : "red", // string, цвет точки > \
		}',
		example  : 'pjs.brush.drawPointS({> `x : 20, y : 20, > `fillColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawCircle' : {
		name     : 'Отрисовать окружность',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 10, // number, радиус окружности > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawCircle({> `x : 20, y : 20, > `radius : 10, > `fillColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawCircleS' : {
		name     : 'Отрисовать окружность в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция по X > \
			`y : 50, // number, позиция по Y > \
			`radius : 10, // number, радиус окружности > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		}',
		example  : 'pjs.brush.drawCircleS({> `x : 20, y : 20, > `radius : 10, > `fillColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawLine' : {
		name     : 'Отрисовать линию',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x1, y1; > x2, y2 рассчитываются относительнo начальной точки',
		example  : 'pjs.brush.drawLine({> `x1 : 20, y1 : 20, > `x2 : 50, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawLineAngle' : {
		name     : 'Отрисовать линию в направлении угла',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`length : 100, // number, длина линии > \
			`angle : 45, // number, угол, в который следует направить линию > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x, y, и будет направлена в соответствии с углом angle',
		example  : 'pjs.brush.drawLineAngle({> `x : 20, y : 20, > `length : 100, > `angle : 145, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawLineAngleS' : {
		name     : 'Отрисовать линию в направлении угла в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`length : 100, // number, длина линии > \
			`angle : 45, // number, угол, в который следует направить линию > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x, y, и будет направлена в соответствии с углом angle в локальных координатах',
		example  : 'pjs.brush.drawLineAngle({> `x : 20, y : 20, > `length : 100, > `angle : 145, > `strokeColor : "green" >});',
		returned : ''
	},


	'pjs.brush.drawLineS' : {
		name     : 'Отрисовать линию в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в позиции x1, y1; > x2, y2 рассчитываются относительнo начальной точки',
		example  : 'pjs.brush.drawLineS({> `x1 : 20, y1 : 20, > `x2 : 50, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawLineA' : {
		name     : 'Отрисовать линию',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в абсолютных координатах x1, y1, x2, y2',
		example  : 'pjs.brush.drawLineA({> `x1 : 20, y1 : 20, > `x2 : 100, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawLineAS' : {
		name     : 'Отрисовать линию в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x1 : 10, // number, позиция начала по X > \
			`y1 : 50, // number, позиция начала по Y > \
			`x2 : 10, // number, позиция конца по X > \
			`y2 : 50, // number, позиция конца по Y > \
			`strokeColor : "white", // string, цвет линии > \
			`strokeWidth : 2, // number, ширина линии > \
		} > \
		Линия отрисовывается в локальных координатах x1, y1, x2, y2',
		example  : 'pjs.brush.drawLineAS({> `x1 : 20, y1 : 20, > `x2 : 100, y2 : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawEllips' : {
		name     : 'Отрисовать эллипс',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		} >',
		example  : 'pjs.brush.drawEllips({> `x : 20, y : 20, > `w : 50, h : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawEllipsS' : {
		name     : 'Отрисовать эллипс в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`fillColor : "red", // string, цвет заливки > \
			`strokeColor : "white", // string, цвет линии обводки > \
			`strokeWidth : 2, // number, ширина линии обводки > \
		} >',
		example  : 'pjs.brush.drawEllipsS({> `x : 20, y : 20, > `w : 50, h : 50, > `strokeColor : "green" >});',
		returned : ''
	},

	'pjs.brush.drawImage' : {
		name     : 'Отрисовать изображение',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`file : "images/image.png", // string, путь к изображению > \
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`scale : 0.5, // number, масштабирование (больше 0 - увеличение, меньше 0 - уменьшение) > \
		} >',
		example  : 'pjs.brush.drawImage({> `file : "images/car.png", > `x : 20, y : 20, > `w : 50, h : 50 >});',
		returned : ''
	},

	'pjs.brush.drawImageS' : {
		name     : 'Отрисовать изображение в локальных координатах',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор свойств >\
		{ >\
			`file : "images/image.png", // string, путь к изображению > \
			`x : 10, // number, позиция начала по X > \
			`y : 50, // number, позиция начала по Y > \
			`w : 10, // number, ширина > \
			`h : 50, // number, высота > \
			`scale : 0.5, // number, масштабирование (больше 0 - увеличение, меньше 0 - уменьшение) > \
		} > Функция отрисует изображение в локальных координатах',
		example  : 'pjs.brush.drawImageS({> `file : "images/car.png", > `x : 20, y : 20, > `w : 50, h : 50 >});',
		returned : ''
	},

	'pjs.brush.getPixelColor' : {
		name     : 'Получить цвет пикселя',
		type     : 'function',
		api      : '(x, y);',
		note     : 'x - number, координата по X > y - number, координата по Y',
		example  : 'var color = pjs.brush.getPixelColor(60, 10);',
		returned : 'string > Цвет пикселя в координатах x, y'
	},

	'pjs.brush.setPixelColor' : {
		name     : 'Задать цвет пикселя',
		type     : 'function',
		api      : '(x, y, pixel);',
		note     : 'x - number, координата по X > y - number, координата по Y > \
														pixel - object, параметра пикселя: > \
														{>` r : 255, // красный >` g : 255, // зеленый >` b : 255, // синий >` a : 255 // Альфа-канал > } > \
														Все свойства являются необязательными',
		example  : 'pjs.brush.setPixelColor(60, 10 { r : 100, g : 100 }); // установить пикселю значения красного и зеленого, остальные не будут затронуты',
		returned : ''
	},

	'pjs.brush.onPixel' : {
		name     : 'Выполнить операцию с пикселем',
		type     : 'function',
		api      : '(x, y, function(pixel) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > \
														function(pixel) {/*обработка*/} - функция обработчик пикселя',
		example  : 'pjs.brush.onPixel(100, 100, function(pixel) { >  \
														`// инвертирование цвета пикселя > \
														`pixel.r = 255 - pixel.r; > \
														`pixel.g = 255 - pixel.g; > \
														`pixel.b = 255 - pixel.b; > });',
		returned : ''
	},

	'pjs.brush.onPixels' : {
		name     : 'Выполнить операцию с прямоугольником пикселей',
		type     : 'function',
		api      : '(x, y, w, h, function(pixel) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > w - number, ширина прямоугольника > h - number, высота прямоугольника > \
														function(pixel) {/*обработка*/} - функция обработчик пикселя > \
														Функция циклически применится ко всем пикселям, попадающим в прямоугольник > \
														В качестве аргумента принимает пиксель, изменяемый в цикле',
		example  : 'pjs.brush.onPixels(100, 100, 50, 50, function(pixel) { >  \
														`// инвертирование цвета пикселя > \
														`pixel.r = 255 - pixel.r; > \
														`pixel.g = 255 - pixel.g; > \
														`pixel.b = 255 - pixel.b; > });',
		returned : ''
	},

	'pjs.brush.onRawPixels' : {
		name     : 'Выполнить операцию с массивом пикселей',
		type     : 'function',
		api      : '(x, y, w, h, function(data, length) {/*обработка*/});',
		note     : 'x - number, координата по X > y - number, координата по Y > w - number, ширина прямоугольника > h - number, высота прямоугольника > \
														function(data, length) {/*обработка*/} - функция обработчик массива пикселей > \
														Функция передает обработчику массив пикселей контекста и его длину > \
														В качестве аргумента принимает массив data и числовое значение его длины - length',
		example  : 'pjs.brush.onRawPixels(100, 100, 50, 50, function(data, length) { > \
														`// циклический проход по массиву пикселей > \
														`var i = 0; > \
														`for (; i < length; i++) { > \
															``data[i] = 255; // красный > \
															``data[i+1] = 255; // зеленый > \
															``data[i+2] = 255; // синий > \
															``data[i+3] = 255; // прозрачность  > \
															`} > \
														 });',
		returned : ''
	},

	// audio
	'pjs.audio.newAudio' : {
		name     : 'Новый аудио объект',
		type     : 'function',
		api      : '(file, volume);',
		note     : 'file - string, путь к файлу аудио, либо array - массив разных форматов файла > \
														volume - number, громкость [0-1]',
		example  : 'var music = pjs.audio.newAudio("audio/music.mp3", 0.5); // загрузка файла формата mp3 > \
														var music = pjs.audio.newAudio(["audio/music.mp3", "audio/music.ogg"], 0.5); // загрузка многоформатного аудио',
		returned : ' .Audio() '
	},

	// wAudio
	'pjs.wAudio.newAudio' : {
		name     : 'Новый WEBAudio объект',
		type     : 'function',
		api      : '(file, volume);',
		note     : 'file - string, путь к файлу аудио',
		example  : 'var music = pjs.wAudio.newAudio("audio/music.mp3", 0.5); // загрузка файла формата mp3 >',
		returned : ' .WAudio() '
	},




	// memory

	'pjs.memory.temp' : {
		name     : 'Хранилище временной памяти',
		type     : 'property',
		api      : '.{ save(), load(), loadAsNumber() }',
		note     : 'Хранилище временной памяти, хранит информацию, пока приложение запущено. > \
		Содержит три метода для манипулирования данными: > \
		`save(key, value) - сохранение данных во временну память > \
		`load(key) - получение данных из временной памяти > \
		`loadAsNumber(key) - получение числового значения из временной памяти',
		example  : 'pjs.memory.temp.save("myVar", "Тестовый текст"); // сохранит строку в ячейку myVar > \
														> // чтобы прочесть данные из временной памяти > \
														var myVar = pjs.memory.temp.load("myVar"); // Вернет сохраненной значение',
		returned : ''
	},

	'pjs.memory.local' : {
		name     : 'Хранилище постоянной памяти',
		type     : 'property',
		api      : '.{ clear(), save(), saveAsObject, load(), loadAsNumber(), loadAsObject() }',
		note     : 'Хранилище постоянной памяти, хранит информацию даже после выхода из приложения. > \
		Содержит следующие методы для манипулирования данными: > \
		`save(key, value) - сохранение данных в память > \
		`saveAsObject(key, object) - сохранение объекта в память > \
		`load(key) - получение данных из памяти > \
		`loadAsNumber(key) - получение числового значения из памяти > \
		`loadAsObject(key) - получение объекта из памяти > \
		`clear() - очистка всей памяти, удаление всех ключей',
		example  : 'pjs.memory.local.save("myVar", "Тестовый текст"); // сохранит строку в ячейку myVar > \
														> // чтобы прочесть данные из временной памяти > \
														var myVar = pjs.memory.local.load("myVar"); // Вернет сохраненной значение',
		returned : ''
	},



};




var OApi = {};


var Layer = OApi.Layer = {
	'on' : {
		name     : 'Выполнение команд отрисовки в контексте слоя',
		type     : 'function',
		api      : '(func)',
		note     : 'func - function, функция, внутри которой любые команды рисования будут осуществляться на текущем слое',
		example  : 'var myLayer = pjs.layers.newLayer(1); // Создание слоя >myLayer.on(function () {>`myObj.draw();// Рисуем объект на слое myLayer>});',
		returned : ''
	},

	'clear' : {
		name     : 'Очистка текущего слоя',
		type     : 'function',
		api      : '()',
		note     : 'Очищает нарисованные ранее объекты',
		example  : 'var myLayer = pjs.layers.newLayer(1); // Создание слоя >myLayer.clear(); // очистка слоя',
		returned : ''
	}

};


var Level = OApi.Level = {

	'reload' : {
		name     : 'Пересоздание игровых объектов на основе исходных данных уровня',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >myLevel.reload(); // пересоздать уровень',
		returned : ''
	},

	'del' : {
		name     : 'Удаление объекта',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, любой объект, наслеующий BaseObject',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >myLevel.del(obj); // удалить объект',
		returned : ''
	},

	'delById' : {
		name     : 'Удаление объекта по его ID',
		type     : 'function',
		api      : '(id)',
		note     : 'id - string, id любого объекта, наслеующий BaseObject',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >myLevel.delById("id12"); // удалить объект ',
		returned : ''
	},

	'getObjectById' : {
		name     : 'Получение объекта по его ID',
		type     : 'function',
		api      : '(id)',
		note     : 'id - string, name любого объекта, наслеующий BaseObject',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >var player = myLevel.getObjectById("id223"); // получить объект ',
		returned : 'object > .BaseObject()'
	},

	'getLevelAsJSON' : {
		name     : 'Получение строки в формате JSON - которая хранить информацию об уровне',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); >// Загрузка какого-то уровня >// Какие-то манипуляции с уровнем >var level = myLevel.getLevelAsJSON(); // получить уровень в формате JSON ',
		returned : 'string > Уровень в формате JSON'
	},

	'getObjectByName' : {
		name     : 'Получение объекта по его name',
		type     : 'function',
		api      : '(name)',
		note     : 'name - string, name любого объекта, наслеующий BaseObject',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >var player = myLevel.getObjectByName("player"); // получить объект ',
		returned : 'object > .BaseObject()'
	},

	'getObjects' : {
		name     : 'Получить массив всех объектов уровня',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >var list = myLevel.getObjects(); // получить все объекты ',
		returned : 'array > массив объектов'
	},

	'add' : {
		name     : 'Добавить объект в уровень',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, любой объект, наслеующий BaseObject',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >myLevel.add(myRect); // добавить объект в уровень',
		returned : ''
	},


	'clear' : {
		name     : 'Очистка уровня',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var myLevel = pjs.levels.newLevelFromJSON(..jsonData..); // Загрузка какого-то уровня >myLevel.clear(); // Очистка уровня (удаление всех объектов)',
		returned : ''
	}
};



var BaseObject = OApi.BaseObject = {
	'flip' : {
		type     : 'hidden',
	},

	'children' : {
		type     : 'hidden',
	},

	'box' : {
		type     : 'hidden',
	},

	'shadowColor' : {
		type     : 'hidden',
	},

	'shadowBlur' : {
		type     : 'hidden',
	},

	'shadowX' : {
		type     : 'hidden',
	},

	'shadowY' : {
		type     : 'hidden',
	},

	'type' : {
		name     : 'Тип объекта',
		type     : 'property',
		api      : '',
		note     : ' .BaseObject(), .RectObject(), .CircleObject(), .ImageObject(), .TextObject(), .EllipsObject(), .AnimationObject(), .TriangleObject()',
		example  : '',
		returned : 'string > Тип объекта'
	},

	'id' : {
		name     : 'Уникальный идентификатор объекта',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'ondraw' : {
		name     : 'Функция обработчик',
		type     : 'property',
		api      : ' = function () {/* код */};',
		note     : 'Срабатывает при отрисовке объекта',
		example  : '',
		returned : ''
	},

	'parent' : {
		name     : 'Ссылка на родителя объекта',
		type     : 'property',
		api      : '',
		note     : 'По умолчанию имеет значение false, если родитель не указан',
		example  : '',
		returned : ''
	},

	'children' : {
		name     : 'Массив дочерних объектов',
		type     : 'property',
		api      : '',
		note     : 'По умолчанию пустой массив, если объекту не добавлены дочерние объекты',
		example  : '',
		returned : ''
	},

	'x' : {
		name     : 'Позиция по X',
		type     : 'property',
		api      : '',
		note     : 'Позиция объекта по оси X, начальная позиция отрисовки',
		example  : '',
		returned : 'number > Позиция по X'
	},

	'y' : {
		name     : 'Позиция по Y',
		type     : 'property',
		api      : '',
		note     : 'Позиция объекта по оси Y, начальная позиция отрисовки',
		example  : '',
		returned : 'number > Позиция по Y'
	},

	'w' : {
		name     : 'Ширина объекта',
		type     : 'property',
		api      : '',
		note     : 'Ширина объекта',
		example  : '',
		returned : 'number > Ширина объекта'
	},

	'h' : {
		name     : 'Высота объекта',
		type     : 'property',
		api      : '',
		note     : 'Высота объекта',
		example  : '',
		returned : 'number > Ширина объекта'
	},

	'fillColor' : {
		name     : 'Цвет заливки',
		type     : 'property',
		api      : '',
		note     : 'Цвет заливки объекта',
		example  : '',
		returned : 'string > Цвет'
	},

	'strokeColor' : {
		name     : 'Цвет обводки',
		type     : 'property',
		api      : '',
		note     : 'Цвет обводки (рамки) объекта',
		example  : '',
		returned : 'string > Цвет'
	},

	'strokeWidth' : {
		name     : 'Ширина линии обводки',
		type     : 'property',
		api      : '',
		note     : 'Ширина линии обводки (рамки) объекта',
		example  : '',
		returned : 'number > Ширина линии'
	},

	'angle' : {
		name     : 'Угол поворота объекта',
		type     : 'property',
		api      : '',
		note     : 'Угол поворота (наклона) объекта в градусах',
		example  : '',
		returned : 'number > Угол поворота'
	},

	'alpha' : {
		name     : 'Прозрачность объекта',
		type     : 'property',
		api      : '',
		note     : 'Прозрачность объекта. Задается в пределах от 0 (прозрачный) до 1 (непрозрачный)',
		example  : '',
		returned : 'number > Прозрачность'
	},

	'center' : {
		name     : 'Смещение центра объекта',
		type     : 'property',
		api      : ' - объект .point(0, 0) по умолчанию',
		note     : 'По умолчанию имеет координаты [0,0], то есть центр объекта. > \
		Можно сместить по x и / или y оси',
		example  : ' BaseObject.center.x = 5; // сместить на 5 пикселей вправо относильено центра объекта',
		returned : ' .point() > Смещение центра'
	},

	'visible' : {
		name     : 'Видимость объекта',
		type     : 'property',
		api      : '',
		note     : 'boolean > true - видимый, > false - невидимый',
		example  : '',
		returned : 'boolean > Видимость объекта'
	},

	'resize' : {
		name     : 'Изменить размеры объекта',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .size(), новые размеры объекта',
		example  : 'obj.resize(size(50, 50)); // изменить размеры',
		returned : ''
	},

	'setShadow' : {
		name     : 'Указать объекту возможность отбрасывать тень',
		type     : 'function',
		api      : '(obj);',
		note     : 'obj - object, набор предустановок к создаваемому объекту > \
														{ > \
														`shadowColor - string, цвет тени > \
														`shadowBlur - number, степень размытия > \
														`shadowX - number, смещение по X > \
														`shadowY - number, смещение по Y > \
														} > Все параметры не являются обязательными',
		example  : 'obj.setShadow( \
														{ > \
														`shadowColor : "red", > \
														`shadowBlur : 3, > \
														`shadowX : 5, > \
														`shadowY : 5 > \
														});',
		returned : ''
	},

	'delParent' : {
		name     : 'Удалить родительский объект',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj2.delParent(); // obj2 больше не подчиняется своему родителю',
		returned : ''
	},

	'delChild' : {
		name     : 'Удалить дочерний объект',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, ссылка на объект, который необходимо удалить',
		example  : 'obj.delChild(obj2); // obj2 больше не подчиняется obj',
		returned : ''
	},

	'addChild' : {
		name     : 'Добавить дочерний объект',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, ссылка на объект, который необходимо подчинить',
		example  : 'obj.addChild(obj2); // obj2 подчиняется obj',
		returned : ''
	},

	'getParent' : {
		name     : 'Получить ссылку на родитель объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var parent = obj.getParent();',
		returned : 'object > ссылка на объект'
	},

	'isArrIntersect' : {
		name     : 'Проверка столкновения с массивом объектов',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массоив объектов > Функция проверяет динамические столкновения',
		example  : 'var intersect = obj.isArrIntersect( [obj1, obj2, ... objN] );',
		returned : 'object > ссылка на объект, с которым обнаружено пересечение'
	},

	'isArrInside' : {
		name     : 'Проверка полного вхождения объекта в какой-либо объект из массива',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массоив объектов',
		example  : 'var inside = obj.isArrInside( [obj1, obj2, ... objN] );',
		returned : 'object > ссылка на объект, в который попал текущий объект'
	},

	'isIntersect' : {
		name     : 'Проверить пересечение с объектом',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, объект, с которым проверяется пересечение. > \
														При установленном флаге видимости в ложь (setVisible(false)) пересечение не произойдет',
		example  : 'if (obj1.isIntersect(obj2)) > `log("Пересечение произошло");',
		returned : 'boolean > true - есть пересечение > false - нет пересечения'
	},

	'getID' : {
		name     : 'Получить уникальный идентификатор объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет уникальный ID объекта',
		example  : '',
		returned : 'number > ID объекта'
	},

	'getType' : {
		name     : 'Получить тип объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет тип объекта',
		example  : '',
		returned : 'string > Тип объекта'
	},

	'getNearest' : {
		name     : 'Получить ближайший объект',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массив объектов',
		example  : 'var nearest = obj.getNearest( [obj1, obj2, ... , objN] ); > nearest.drawDynamicBox(); // подсветить объект',
		returned : 'object > Ссылка на ближайший объект'
	},

	'setUserData' : {
		name     : 'Установка пользовательских свойств объекту',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - объект свойств, которые требуется инициализировать в объекте > \
		{ > `property : value, > `property2 : value2, > ```... > `propertyN : valueN > } > \
		Удобство фуннкции в том, что если вы не знаете каких-то системных, и случайно укажите их, \
		система их не перезапишет, используя только нестандартные свойства.',
		example  : 'obj.setUserData( { > `speed : 5, > `level : 1 > } );',
		returned : ''
	},

	'setFlip' : {
		name     : 'Установить объекту инверсию по осям',
		type     : 'function',
		api      : '(invX, invY)',
		note     : 'invX - boolean, инвертировать отрисовку по оси X > \
														invY - boolean, инвертировать отрисовку по оси Y > \
														Функция влияет на отрисовку изображений',
		example  : 'obj.setFlip(true, false); // или setFlip(1, 0)',
		returned : ''
	},

	'getDynamicBox' : {
		name     : 'Получить набор точек динамического обрамления',
		type     : 'function',
		api      : '()',
		note     : 'Получение массива из .point() объектов, составляющих обрамление объекта Bounding-box',
		example  : 'var points = obj.getDynamicBox();',
		returned : 'array > Набор .point() объектов с координатами точек'
	},

	'isDynamicIntersect' : {
		name     : 'Пересечение динамической обалсти с другой динамической областью',
		type     : 'function',
		api      : '(dynamicBox)',
		note     : 'dynamicBox - array, набор .point() точек, составляющих область. > \
		Минимальное количество точек в массиве - 3. > \
		Примером такой области является .getDynamicBox() - Bounding-box объекта',
		example  : 'console.log(obj.isDynamicIntersect( obj.getDynamicBox() )',
		returned : 'boolean > true - области пересекаются > false - области не пересекаются'
	},

	'isDynamicInside' : {
		name     : 'Проверка вхождения одной области внутрь другой',
		type     : 'function',
		api      : '(dynamicBox)',
		note     : 'dynamicBox - array, набор .point() точек, составляющих область. > \
		Минимальное количество точек в массиве - 3. > \
		Примером такой области является .getDynamicBox() - Bounding-box объекта',
		example  : 'console.log(obj.isDynamicInside( obj.getDynamicBox() )',
		returned : 'boolean > true - область входит внутрь dynamicBox > false - область не входит в dynamicBox'
	},

	'drawDynamicBox' : {
		name     : 'Отрисовать Bounding-box объекта',
		type     : 'function',
		api      : '(strokeColor)',
		note     : 'strokeColor - цвет отрисовки dynamicBox, рисуются только грани.',
		example  : 'obj.drawDynamicBox();',
		returned : ''
	},

	'drawStaticBox' : {
		name     : 'Отрисовать статический Bounding-box объекта',
		type     : 'function',
		api      : '(strokeColor)',
		note     : 'strokeColor - цвет отрисовки dynamicBox, рисуются только грани.',
		example  : 'obj.drawStaticBox();',
		returned : ''
	},

	'isStaticIntersect' : {
		name     : 'Проверка пересечения объекта со StaticBox',
		type     : 'function',
		api      : '(staticBox)',
		note     : 'staticBox - Прямоугольник, обрамляющий все не вращающиеся объекты',
		example  : 'obj.isStaticIntersect( obj.getStaticBox() );',
		returned : ''
	},

	'getStaticBox' : {
		name     : 'Получение staticBox объекта. статический Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Отличается от dynamicBox тем, что его использование целесообразно там, где объекты не \
		подразумевается вращать. > \
		!! staticBox нельзя передавать арзументом в функции, принимающие dynamicBox !!',
		example  : 'var staticBox = obj.getStaticBox();',
		returned : 'object > x - Позиция по X > y - Позиция по Y > w : Ширина прямоугольника > h : Высота прямоугольника'
	},

	'transparent' : {
		name     : 'Плавно изменить прозрачность',
		type     : 'function',
		api      : '(step)',
		note     : 'step - number, степень изменения.',
		example  : 'obj.transparent(-0.05); // плавно скроет объект',
		returned : ''
	},

	'setAlpha' : {
		name     : 'Установить прозрачность',
		type     : 'function',
		api      : '(alpha)',
		note     : 'alpha - number, степень прозрачности. > 0 - прозрачный, 1 - непрозрачный',
		example  : 'obj.setAlpha(0.5);',
		returned : ''
	},

	'getAlpha' : {
		name     : 'Получить прозрачность',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.getAlpha(0.5);',
		returned : 'number > Степень прозрачности'
	},

	'rotate' : {
		name     : 'Повернуть объект в направлении точки или вектора',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .point(), вектор',
		example  : '// Повернуть объект в сторону другого объекта > obj.rotate( obj.getPosition() );',
		returned : 'number > Степень прозрачности'
	},

	'setCenter' : {
		name     : 'Сместить центр объекта',
		type     : 'function',
		api      : '(vector2D)',
		note     : 'vector2D - .point(), вектор смещения',
		example  : 'obj.setCenter( .point(10, 0) ); // сместить центр объекта на 10 пикселей по X (вправо)',
		returned : ''
	},

	'setBox' : {
		name     : 'Установить смещение и размеры Bounding-box',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, набор свойств объекта: { > \
														`offset - .point(), смещение Bounding-box > \
														`size - .size(), размер Bounding-box > \
													}',
		example  : 'obj.setBox({> `offset : point(5, 5), > `size : size(-10, -10) > });',
		returned : ''
	},

	'getBox' : {
		name     : 'Получить смещение и размеры Bounding-box',
		type     : 'function',
		api      : '()',
		note     : 'Функция вернет объект с двумя свойствами: > offset - смещение Bounding-box > size : размер Bounding-box',
		example  : 'var box = obj.getBox(); >> console.log(box.offset)',
		returned : 'object > Смещение и размер Bounding-box'
	},

	'nullCenter' : {
		name     : 'Сместить центр объекта в его (объекта) верхний левый угол',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.nullCenter();',
		returned : ''
	},

	'getCenter' : {
		name     : 'Получить смещенный центр объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет центр объекта, по умолчанию .point(0, 0)',
		example  : 'var point = obj.getCenter( .point(10, 0) );',
		returned : ' .point() > Центр объекта'
	},

	'move' : {
		name     : 'Двигать объект в направлении',
		type     : 'function',
		api      : '(vector2D)',
		note     : 'vector2D - .point(), направление движения',
		example  : 'obj.move( .point(1, 0) ); // двигать вправо на 1 пиксель',
		returned : ''
	},

	'scale' : {
		name     : 'Увеличиывть объект',
		type     : 'function',
		api      : '(size)',
		note     : 'size - number, коэффициент увелиения',
		example  : 'obj.scale( 2 ); // увеличивать в 2 раза',
		returned : ''
	},

	'scaleC' : {
		name     : 'Увеличиывть объект относильено центра',
		type     : 'function',
		api      : '(size)',
		note     : 'size - number, коэффициент увелиения > \
								При масштабировании центр сохраняется',
		example  : 'obj.scaleC( 2 ); // увеличивать в 2 раза',
		returned : ''
	},

	'getPositionS' : {
		name     : 'Получение позиции объекта в локальных координатах',
		type     : 'function',
		api      : '()',
		note     : 'Вернет экранные координаты левого верхнего угла объекта',
		example  : 'var point = obj.getPositionS();',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},

	'getPositionCS' : {
		name     : 'Получение позиции центра объекта в локальных координатах',
		type     : 'function',
		api      : '()',
		note     : 'Вернет экранные координаты центра объекта',
		example  : 'var point = obj.getPositionCS();',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},


	'getPosition' : {
		name     : 'Получение позиции объекта',
		type     : 'function',
		api      : '([format])',
		note     : 'format - number, тип позиции, которую требуется получить. > \
		0 или отсутствует - координаты верхнего левого угла > \
		1 - позиция с учетом смещенного центра объекта (рекомендуется) > \
		2 - позиция центра фигуры (с учетом вращения). > \
		Рекомендуется использовать format = 1 для получения центра объекта с учетом смещения и поворота.',
		example  : 'var point = obj.getPosition( 1 );',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},

	'getPositionC' : {
		name     : 'Получение позиции центра объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет позицию центра объекта',
		example  : 'var point = obj.getPositionC();',
		returned : ' .point() > x : Позиция по X > y - Позиция по Y'
	},

	'setPosition' : {
		name     : 'Установить объект в позицию',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .point(), вектор',
		example  : 'obj.setPosition( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y',
		returned : ''
	},

	'setPositionS' : {
		name     : 'Установить объект в позицию локальных координат',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .point(), вектор',
		example  : 'obj.setPositionS( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y относилельно экрана',
		returned : ''
	},

	'rotateForAngle' : {
		name     : 'Поворачивать объект для выравнивания угла',
		type     : 'function',
		api      : '(angle, speed)',
		note     : 'angle - number, требуемый угол > speed - number, скорость поворота',
		example  : 'obj.rotateForAngle(45, 1); // Поворачивать объект пока его угол не станет 45 градусов на скорости 1',
		returned : ''
	},

	'rotateForPoint' : {
		name     : 'Поворачивать объект в отношении точки',
		type     : 'function',
		api      : '(point, speed)',
		note     : 'point - .point(), точка, на которую стоит повернуться > speed - number, скорость поворота',
		example  : 'obj.rotateForPoint(mouse.getPosition(), 1); // Поворачивать объект на мышь на скорости 1',
		returned : ''
	},

	'rotateForObject' : {
		name     : 'Поворачивать объект в отношении объекта',
		type     : 'function',
		api      : '(obj, speed)',
		note     : 'obj - .BaseObject(), объект, в сторону которого стоит повернуться > speed - number, скорость поворота',
		example  : 'obj.rotateForPoint(obj2, 1); // Поворачивать объект на obj2 на скорости 1',
		returned : ''
	},

	'setPositionC' : {
		name     : 'Установить объект в позицию c учетом центра',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .point(), вектор  > \
		Функция установит объект с учетом его смещенного центра и поворота.',
		example  : 'obj.setPositionC( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y',
		returned : ''
	},

	'setPositionCS' : {
		name     : 'Установить объект в позицию c учетом центра в локальных координатах',
		type     : 'function',
		api      : '(point || vector2D)',
		note     : 'point - .point(), точка в пространстве > vector2D - .point(), вектор  > \
		Функция установит объект с учетом его смещенного центра и поворота.',
		example  : 'obj.setPositionCS( .point(100, 100) ); // Поместить в позицию 100 по X и 100 по Y относительнo экрана',
		returned : ''
	},

	'getSize' : {
		name     : 'Получить размер объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var size = obj.getSize();',
		returned : ' .size() > w - Ширина объекта > h - Высота объекта'
	},

	'setSize' : {
		name     : 'Задать размер объекта',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .size() - новый размер объекта',
		example  : 'obj.setSize( .size(10, 50) );',
		returned : ''
	},

	'setSizeC' : {
		name     : 'Задать размер объекта с учетом центра',
		type     : 'function',
		api      : '(size)',
		note     : 'size - .size() - новый размер объекта > \
		При задании объекту нового размера его центр сохраняется',
		example  : 'obj.setSizeC( .size(10, 50) );',
		returned : ''
	},

	'turn' : {
		name     : 'Вращать объект',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, значение поворота, которое будет прибавлено к текущему повороту > \
		Положительное значение вращает по часовой стрелке, > \
		Отрицательное значение вращает против часовой стрекли',
		example  : 'obj.turn( 1 );  // вращать на 1 градус по часовой стрелке',
		returned : ''
	},

	'moveTo' : {
		name     : 'Двигать объект к точке на указанной скорости',
		type     : 'function',
		api      : '(pos, speed)',
		note     : 'pos - .point(), позиция, к которой следует двигаться > \
														speed - number, скорость движения. > \
		Функция не учитывает направление объекта.',
		example  : 'obj.moveTo( obj2.getPosition(), 2 );  // Двигать в направлении obj2 на скорости 2 пиксель',
		returned : ''
	},

	'moveToC' : {
		name     : 'Двигать объект к точке на указанной скорости с учетом центра',
		type     : 'function',
		api      : '(pos, speed)',
		note     : 'pos - .point(), позиция, к которой следует двигаться > \
														speed - number, скорость движения. > \
		Функция не учитывает направление объекта.',
		example  : 'obj.moveToC( obj2.getPositionC(), 2 );  // Двигать в направлении obj2 на скорости 2 пиксель',
		returned : ''
	},

	'moveAngle' : {
		name     : 'Двигать объект в соответствии с направлением',
		type     : 'function',
		api      : '(speed [, angle])',
		note     : 'speed - number, скорость движения. > \
														angle - number, угол, в котором следует двигаться > \
														Функция учитывает направление объекта, если не задан угол angle.',
		example  : 'obj.moveAngle( 1 );  // Двигать в направлении поворота на скорости 1 пиксель > \
														obj.moveAngle( 1, 45 ); // Двигать объект в направлении 45 градусов на скорости 1 пиксель',
		returned : ''
	},

	'circling' : {
		name     : 'Двигать объект по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает объект по окружности вокруг точки',
		example  : 'obj.circling( mouse.getMousePositionA(), 10, 1 );  // Двигать объект вокруг курсора по радиусу 10 и скорости 1',
		returned : ''
	},

	'circlingC' : {
		name     : 'Двигать объект по окружности вокруг точки',
		type     : 'function',
		api      : '(point, radius, speed)',
		note     : 'point - .point(), центр вращения > \
		radius - number, радиус окружности > \
		speed - number, скорость движения > \
		Функция двигает объект по окружности вокруг точки > \
		Функция учитывает центр объекта',
		example  : 'obj.circlingC( mouse.getMousePositionA(), 10, 1 );  // Двигать объект вокруг курсора по радиусу 10 и скорости 1',
		returned : ''
	},

	'motion' : {
		name     : 'Двигать объект по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает объект по элипсоиду вокруг точки',
		example  : 'obj.motion( mouse.getMousePositionA(), size(50, 10), 1 );  // Двигать объект вокруг курсора по радиусу 50x10 и скорости 1',
		returned : ''
	},

	'motionC' : {
		name     : 'Двигать объект по элипсоиду вокруг точки',
		type     : 'function',
		api      : '(point, size, speed)',
		note     : 'point - .point(), центр вращения > \
		size - .size(), ширина/высота элипсоида > \
		speed - number, скорость движения > \
		Функция двигает объект по элипсоиду вокруг точки > \
		Функция учитывает центр объекта',
		example  : 'obj.motionC( mouse.getMousePositionA(), size(50, 10), 1 );  // Двигать объект вокруг курсора по радиусу 50x10 и скорости 1',
		returned : ''
	},

	'getAngle' : {
		name     : 'Получить угол вращения объекта в градусах',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'obj.getAngle();',
		returned : 'number > Угол в градусах'
	},

	'setAngle' : {
		name     : 'Установить угол вращения объекта в градусах',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол в градусах. > В отличии от команды turn(), эта команда не прибавляет угол, а перезаписывает его.',
		example  : 'obj.setAngle(45);',
		returned : ''
	},

	'moveTime' : {
		name     : 'Двигать объект к точке за указанные время',
		type     : 'function',
		api      : '(point, time)',
		note     : 'point - ,point(), точка > time - number, время, требуемое для движения',
		example  : 'obj.moveTime(mouse.getMousePositionA(), 5);',
		returned : ''
	},

	'moveTimeC' : {
		name     : 'Двигать объект к точке за указанные время',
		type     : 'function',
		api      : '(point, time)',
		note     : 'point - ,point(), точка > time - number, время, требуемое для движения > \
														Функция учитывает центр объекта',
		example  : 'obj.moveTimeC(mouse.getMousePositionA(), 5);',
		returned : ''
	},

	'getDistance' : {
		name     : 'Получить расстояние до точки',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), точка, до которой нужно рассчитать расстояние',
		example  : 'obj.getDistance( obj2.getPosition(2) ); // Получить расстояние до объектa obj2',
		returned : ''
	},

	'getDistanceC' : {
		name     : 'Получить расстояние до точки c учетом центра',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), точка, до которой нужно рассчитать расстояние > \
		Функция учитывает центр объекта и отсчет начинается от него.',
		example  : 'obj.getDistanceC( obj2.getPosition(1) ); // Получить расстояние до объектa obj2',
		returned : ''
	},

	'setVisible' : {
		name     : 'Установить видимость объекту',
		type     : 'function',
		api      : '(bool)',
		note     : 'bool - boolean > true - видимый объект > false - невидимый > \
		Невидимые объекты не реагируют на столкновения и события',
		example  : 'obj.setVisible( false ); // Сделать объект невидимым',
		returned : ''
	},

	'isVisible' : {
		name     : 'Проверить флаг видимости объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isVisible();',
		returned : 'boolean > true - объект видимый > false - объект не видим'
	},

	'isInCamera' : {
		name     : 'Проверить видит ли объект камера (игрок). Универсальный метод',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCamera();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'isInCameraStatic' : {
		name     : 'Проверить видит ли статический объект камера (игрок)',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCameraStatic();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'isInCameraDynamic' : {
		name     : 'Проверить видит ли динамический объект камера (игрок)',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var visible = obj.isInCameraDynamic();',
		returned : 'boolean > true - объект в пределах видимости > false - объект за пределами, камера его не видит'
	},

	'onCollision' : {
		name     : 'Ограничить движения при столкновении с объектом',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - object, объект, проверяемый на столкновения',
		example  : 'obj.onCollision( obj2 );',
		returned : ''
	},

	'onArrCollision' : {
		name     : 'Ограничить движения при столкновении с массивом объектов',
		type     : 'function',
		api      : '(arr)',
		note     : 'arr - array, массив объектов, с которыми проверяется столкновение',
		example  : 'obj.onArrCollision( [obj1, obj2, obj3 ... objN] );',
		returned : ''
	},


	'draw' : {
		name     : 'Отрисовать объект',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},



};














var RectObject = OApi.RectObject = {
	'draw' : {
		name     : 'Отрисовать прямоугольник',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

};




var RoundRectObject = OApi.RoundRectObject = {

	'constructor' : {
		name     : 'Создание объекта',
		type     : 'function',
		api      : '(params)',
		note     : 'params > набор праметров',
		example  : 'var obj = pjs.game.newRoundRectObject({>`/*параметры*/>})',
		returned : 'RoundRectObject'
	},

	'radius' : {
		name     : 'Радиус скругления углов',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'draw' : {
		name     : 'Отрисовать прямоугольник',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},


};













var BackgroundObject = OApi.BackgroundObject = {

	'file' : {
		name     : 'Путь к файлу тайла',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'countX' : {
		name     : 'Размножение тайла по X (горизонтали)',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'countY' : {
		name     : 'Размножение тайла по Y (вертикали)',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'fullW' : {
		type     : 'hidden',
	},

	'fullH' : {
		type     : 'hidden',
	},

	'cnv' : {
		type     : 'hidden',
	},

	'ctx' : {
		type     : 'hidden',
	},


	'loaded' : {
		name     : 'Сгенерирован ли тайл',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},



	'draw' : {
		name     : 'Отрисовать фон',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает фон',
		example  : 'backgr.draw();',
		returned : ''
	},

	'getSize' : {
		name     : 'Получить размер фонового объекта',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var bSize = backgr.getSize();',
		returned : ' .size() > Размер фонового объекта'
	},




};























var TextObject = OApi.TextObject = {

	'textDY' : {
		type : 'hidden'
	},

	'align' : {
		type : 'hidden'
	},

	'color' : {
		name     : 'Цвет текста',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'text' : {
		name     : 'Текст внутри объекта',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'size' : {
		name     : 'Высота текста',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'font' : {
		name     : 'Шрифт текста',
		type     : 'property',
		api      : '',
		note     : 'Например: "serif"',
		example  : '',
		returned : ''
	},

	'style' : {
		name     : 'Стиль текста',
		type     : 'property',
		api      : '',
		note     : 'Указывается через пробел. > Например: "bold italic"',
		example  : '',
		returned : ''
	},

	'padding' : {
		name     : 'Отступ текста от краев',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'strokeColorText' : {
		name     : 'Цвет обводки текста',
		type     : 'property',
		api      : '',
		note     : 'Обводка текста, а не рамки',
		example  : '',
		returned : ''
	},

	'strokeWidthText' : {
		name     : 'Ширина линии обводки текста',
		type     : 'property',
		api      : '',
		note     : 'Ширина линии обводки текста, а не рамки',
		example  : '',
		returned : ''
	},

	'reStyle' : {
		name     : 'Преобразовать объект',
		type     : 'property',
		api      : '(obj)',
		note     : 'obj - объект со свойствами > \
														{ > \
														`text - string, однострочный текст > \
														`size - number, высота текста в пикселях > \
														`color - string, цвет текста > \
														`font - string, шрифт > \
														`style - string, стиль текста > \
														`padding - number, отступ вокруг текста > \
														`fillColor - string, цвет заливки объекта > \
														`strokeColor - string, цвет обводки объекта > \
														`strokeWidth - number, ширина линии обводки > \
														`strokeColorText - string, цвет обводки текст > \
														`strokeWidthText - number, ширина линии обводки текста > \
														} > Все параметры не являются обязательными > \
														',
		example  : '',
		returned : ''
	},


	'setText' : {
		name     : 'Изменить текст',
		type     : 'function',
		api      : '(text)',
		note     : 'text - string, строка текста',
		example  : 'obj.setText("Новый текст");',
		returned : ''
	},

	'getText' : {
		name     : 'Получить текст',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var text = obj.getText();',
		returned : 'string > Текст'
	},

	'draw' : {
		name     : 'Отрисовать текст',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

};





















var ImageObject = OApi.ImageObject = {
	'forOnLoad' : {
		name     : '',
		type     : 'hidden',
	},

	'draw' : {
		name     : 'Отрисовать изображение',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},

	'simpleDraw' : {
		name     : 'Отрисовать копию изображения в позиции',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), позиция отрисовки',
		example  : 'obj.simpleDraw( .point(100, 100) );',
		returned : ''
	},

	'setImage' : {
		name     : 'Установить объекту новое изображение',
		type     : 'function',
		api      : '(file[, onload])',
		note     : 'file - string, путь к файлу изображения > \
								onload - function, функция обработчик. Выполнится, когда изображение будет полностью загружено в память',
		example  : 'obj.setImage( "images/image.png" );',
		returned : ''
	},

	'getImage' : {
		name     : 'Получить ссылку на изображение',
		type     : 'function',
		api      : '()',
		note     : 'Вернет ссылку на изображение',
		example  : 'var img = obj.getImage(); > obj2.setImage(img);',
		returned : 'string > Путь к файлу изображения'
	},

	'loaded' : {
		name     : 'Статус загрузки',
		type     : 'property',
		api      : '',
		note     : 'Статус загруженности изображения',
		example  : '',
		returned : 'boolean > true - изображение загружено > false - изображение не загружено'
	},

	'file' : {
		name     : 'Файл изображения',
		type     : 'property',
		api      : '',
		note     : 'Путь к файлу изображения',
		example  : '',
		returned : ''
	}

};


















var AnimationObject = OApi.AnimationObject = {
	'step' : {
		type     : 'hidden',
	},

	'toFrameStep' : {
		type     : 'hidden',
	},


	'difStep' : {
		type     : 'hidden',
	},

	'anim' : {
		type     : 'hidden',
	},

	'getFrame' : {
		name     : 'Получить текущий кадр',
		type     : 'function',
		api      : '()',
		note     : 'Текущий кадр в проигрываемой анимации',
		example  : 'var frame = obj.getFrame();',
		returned : ''
	},

	'setFrame' : {
		name     : 'Задать текущий кадр',
		type     : 'function',
		api      : '(frame)',
		note     : 'frame - number, нужный кадр',
		example  : 'obj.setFrame(15); // задать 15 кадр',
		returned : ''
	},

	'getLastFrame' : {
		name     : 'Получить последний кадр',
		type     : 'function',
		api      : '()',
		note     : 'Последний кадр в проигрываемой анимации',
		example  : 'var lastFrame = obj.getLastFrame();',
		returned : ''
	},

	'getAnimation' : {
		name     : 'Получить анимацию объекта',
		type     : 'function',
		api      : '()',
		note     : 'Вернет анимацию объекта',
		example  : 'var anim = obj.getAnimation(); > obj2.setAnimation(anim);',
		returned : ' .Animation() > Объект с параметрами анимации'
	},

	'setAnimation' : {
		name     : 'Присвоить анимацию объекту',
		type     : 'function',
		api      : '(anim)',
		note     : 'anim -  .Animation(), объект с параметрами анимации',
		example  : 'var anim = obj.setAnimation(); > obj2.setAnimation(anim);',
		returned : ''
	},

	'draw' : {
		name     : 'Отрисовать всю анимацию',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовка всех кадров анимации. > Для задания замедления анимации используется параметр delay > \
														delay - number, замедление анимации',
		example  : 'obj.draw();',
		returned : ''
	},

	'drawFrame' : {
		name     : 'Отрисовать один кадр',
		type     : 'function',
		api      : '(frame)',
		note     : 'frame - number, кадр, который требуется отрисивать (кадры нумеруются с нуля)',
		example  : 'obj.drawFrame(4);',
		returned : ''
	},

	'drawReverFrames' : {
		name     : 'Реверсивная покадровая анимация',
		type     : 'function',
		api      : '(start, end)',
		note     : 'start - number, начальный кадр > \
														end - конечный кадр > \
														Анимация будет происходить от кадра start к кадру end и обратно',
		example  : 'obj.drawReverFrames(0, 15);',
		returned : ''
	},

	'drawToFrame' : {
		name     : 'Воспроизводить анимацию вплоть до кадра',
		type     : 'function',
		api      : '(frame)',
		note     : 'frame - number, кадр, который требуется отрисивать (кадры нумеруются с нуля) > \
														При этом кадр будет отрисован не сразу, анимация "дойдет" до него и замрет на нем > \
														Работает в обе стороны',
		example  : 'obj.drawToFrame(5);',
		returned : ''
	},

	'drawFrames' : {
		name     : 'Отрисовать последовательность кадров',
		type     : 'function',
		api      : '(frame_start, frame_end)',
		note     : 'frame_start - number, начальный кадр > frame_end - number, конечный кадр',
		example  : 'obj.drawFrames(1, 5); // воспроизведение анимации с 1 по 5 кадр, нулевой кадр будет пропущен',
		returned : ''
	},

	'setDelay' : {
		name     : 'Установить замедление анимации',
		type     : 'function',
		api      : '(delay)',
		note     : 'delay - number, задержка',
		example  : 'obj.setDelay(10); // пропускать 10fps перед следующим кадром',
		returned : ''
	},

	'getDelay' : {
		name     : 'Получить замедление анимации',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var delay = obj.getDelay(); // получить замедление',
		returned : 'number > Зарежка (в FPS)'
	},



};

















var CircleObject = OApi.CircleObject = {
	'scale' : {
		name     : 'Увеличивать радиус окружности',
		type     : 'function',
		api      : '(num)',
		note     : 'num - number, коэффициент увелиения.',
		example  : 'obj.scale(2); // Увеличение в 2 раза',
		returned : ''
	},

	'scaleC' : {
		name     : 'Увеличивать радиус окружности с учетом центра',
		type     : 'function',
		api      : '(num)',
		note     : 'num - number, коэффициент увелиения. > \
								При увеличении радиуса окружности центр остается на месте',
		example  : 'obj.scaleC(0.5); // уменьшение объекта в 2 раза',
		returned : ''
	},

	'getRadius' : {
		name     : 'Получить радиус окружности',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var radius = obj.getRadius();',
		returned : 'number > Радиус окружности'
	},

	'setRadius' : {
		name     : 'Установить радиус окружности',
		type     : 'function',
		api      : '(radius)',
		note     : 'radius number, Радиус окружности',
		example  : 'obj.setRadius(10);',
		returned : ''
	},

	'radius' : {
		name     : 'Pадиус окружности',
		type     : 'property',
		api      : '',
		note     : 'Радиус окружности',
		example  : '',
		returned : ''
	},



};





















var Image = OApi.Image = {
	'file' : {
		type     : 'hidden',
	},

	'toLoad' : {
		type     : 'hidden',
	},

	'loaded' : {
		name     : 'Состояние загруженности изображения',
		type     : 'property',
		api      : '',
		note     : 'true - Изображение загружено > false - изображение не загружено',
		example  : '',
		returned : ''
	},

	'onContext' : {
		name     : 'Низкоуровневый доступ к контекст',
		type     : 'function',
		api      : '(func)',
		note     : 'func - function, функция обработчик > \
														Принимает три параметра: > \
														context - Контекст, на котором можно рисовать > \
														width - Ширина холста > \
														height - Высота холста',
		example  : 'obj.onContext(function (ctx) {> `ctx.fillStyle = "red"; > `ctx.fillRect(0, 0, 20, 20); >});',
		returned : ''
	},

	'getCanvas' : {
		name     : 'Получить промежуточный холст',
		type     : 'function',
		api      : '()',
		note     : 'Возвращает промежуточный контекст, на который отрисован объект',
		example  : 'obj.getCanvas( );',
		returned : 'HTMLCanvas > Промежуточный холст'
	},

	'getTile' : {
		name     : 'Извлечь часть изображения в тайл',
		type     : 'function',
		api      : '(x, y, w, h)',
		note     : 'x - координата X > y - координата Y > w - ширина > h - высота > \
														Будет извлечен прямоугольник из изображения',
		example  : 'obj.getTile( 10, 10, 50, 50 );',
		returned : ' .tile() > Фрагмент изображения. Тайл'
	},

	'getAnimation' : {
		name     : 'Извлечь последовательность фреймов (кадров, тайлов) для анимирования',
		type     : 'function',
		api      : '(x, y, w, h, count)',
		note     : 'x - координата X > y - координата Y > w - ширина > h - высота > \
														count - количество кадров по ГОРИЗОНТАЛИ > \
														Будет извлечена последовательность кадров для анимации',
		example  : 'obj.getAnimation( 10, 10, 50, 50, 5 );',
		returned : ' .Animation() > Анимации'
	},

};


















var Audio = OApi.Audio = {
	'vol' : {
		type     : 'hidden',
	},

	'audio' : {
		type     : 'hidden',
	},

	'nextPlay' : {
		type     : 'hidden',
	},

	'playing' : {
		name     : 'Состояние воспроизведения',
		type     : 'property',
		api      : '',
		note     : 'true - Музыка воспроизводится > false - Музыка не воспроизводится',
		example  : '',
		returned : ''
	},

	'loaded' : {
		name     : 'Состояние загруженности аудио',
		type     : 'property',
		api      : '',
		note     : 'true - Аудиофайл загружен > false - Аудиофайл не загружен',
		example  : '',
		returned : ''
	},

	'play' : {
		name     : 'Воспроизвести аудио',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание продолжится с места остановки',
		example  : 'Audio.play();',
		returned : ''
	},

	'playPause' : {
		name     : 'Воспроизвести аудио, если остановлено, приостановить, если играет',
		type     : 'function',
		api      : '()',
		note     : 'Если воспроизведение происходит, оно приостановится, иначе - продолжится',
		example  : 'Audio.playPause();',
		returned : ''
	},

	'replay' : {
		name     : 'Воспроизвести аудио сначала',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание все равно начнется сначала > \
														Если на момент вызова функции файл воспроизводится, воспроизведение начнется сначала',
		example  : 'Audio.replay();',
		returned : ''
	},

	'stop' : {
		name     : 'Полная остановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Останавливает воспроизведение аудио',
		example  : 'Audio.stop();',
		returned : ''
	},

	'pause' : {
		name     : 'Приостановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Приостанавливает воспроизведение аудио > Продолжить воспроизведение можно функцией play()',
		example  : 'Audio.pause();',
		returned : ''
	},

	'setNextPlay' : {
		name     : 'Установить следующий файл воспроизведения',
		type     : 'function',
		api      : '(audio)',
		note     : 'audio - .Audio() или .WAudio(), аудио, которое будет воспроизведено сразу после того, как закончится текущий файл.',
		example  : 'audio1.setNextPlay( audio2 );',
		returned : ''
	},

	'setVolume' : {
		name     : 'Установить громкость воспроизведения',
		type     : 'function',
		api      : '(volume)',
		note     : 'volume - number, громкость воспроизведения > 0 - полная тишина, 1 - полная громкость',
		example  : 'audio1.setVolume( 0.5 ); // Половина громкости',
		returned : ''
	},

	'getVolume' : {
		name     : 'Получить громкость воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var volume = audio1.getVolume(); // 0.5',
		returned : 'number > Громкость воспроизведения'
	},




};


var WAudio = OApi.wAudio = {
	'vol' : {
		type     : 'hidden',
	},

	'audio' : {
		type     : 'hidden',
	},

	'nextPlay' : {
		type     : 'hidden',
	},

	'loadPLay' : {
		type     : 'hidden',
	},

	'startTime' : {
		type     : 'hidden',
	},

	'duration' : {
		type     : 'hidden',
	},

	'pausedTime' : {
		type     : 'hidden',
	},

	'playing' : {
		name     : 'Состояние воспроизведения',
		type     : 'property',
		api      : '',
		note     : 'true - Музыка воспроизводится > false - Музыка не воспроизводится',
		example  : '',
		returned : ''
	},

	'loaded' : {
		name     : 'Состояние загруженности аудио',
		type     : 'property',
		api      : '',
		note     : 'true - Аудиофайл загружен > false - Аудиофайл не загружен',
		example  : '',
		returned : ''
	},

	'play' : {
		name     : 'Воспроизвести аудио',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание продолжится с места остановки',
		example  : 'WAudio.play();',
		returned : ''
	},

	'playPause' : {
		name     : 'Воспроизвести аудио, если остановлено, приостановить, если играет',
		type     : 'function',
		api      : '()',
		note     : 'Если воспроизведение происходит, оно приостановится, иначе - продолжится',
		example  : 'WAudio.playPause();',
		returned : ''
	},

	'replay' : {
		name     : 'Воспроизвести аудио сначала',
		type     : 'function',
		api      : '([volume])',
		note     : 'volume - number, громкость > Если воспроизведение остановили функцией pause(), проигрывание все равно начнется сначала > \
														Если на момент вызова функции файл воспроизводится, воспроизведение начнется сначала',
		example  : 'WAudio.replay();',
		returned : ''
	},

	'stop' : {
		name     : 'Полная остановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Останавливает воспроизведение аудио',
		example  : 'WAudio.stop();',
		returned : ''
	},

	'pause' : {
		name     : 'Приостановка воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Приостанавливает воспроизведение аудио > Продолжить воспроизведение можно функцией play()',
		example  : 'WAudio.pause();',
		returned : ''
	},

	'setNextPlay' : {
		name     : 'Установить следующий файл воспроизведения',
		type     : 'function',
		api      : '(audio)',
		note     : 'audio - .WAudio(), или .Audio(), которое будет воспроизведено сразу после того, как закончится текущий файл.',
		example  : 'audio1.setNextPlay( audio2 );',
		returned : ''
	},

	'setVolume' : {
		name     : 'Установить громкость воспроизведения',
		type     : 'function',
		api      : '(volume)',
		note     : 'volume - number, громкость воспроизведения > 0 - полная тишина, 1 - полная громкость',
		example  : 'audio1.setVolume( 0.5 ); // Половина громкости',
		returned : ''
	},

	'getVolume' : {
		name     : 'Получить громкость воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var volume = audio1.getVolume(); // 0.5',
		returned : 'number > Громкость воспроизведения'
	},

	'getProgress' : {
		name     : 'Получить позицию воспроизведения',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'var progress = audio1.getProgress(); // например, 1.12312312333',
		returned : 'number > Позиция воспроизведения'
	},

	'setSide' : {
		name     : 'Установить баланс воспроизведения',
		type     : 'function',
		api      : '(side)',
		note     : 'side - number, уровень баланса. Значение дробное от -1 до 1 > \
														-1 - левая сторона > 0 - по центру > 1 - правая сторона > \
														Функция "перемещает" испочник воспроизведения к левой или правой стороне',
		example  : 'audio1.setSide(0.8);',
		returned : ''
	},

	'getSide' : {
		name     : 'Получить баланс воспроизведения',
		type     : 'function',
		api      : '()',
		note     : 'Вернет баланс воспроизведения в диапазоне от - 1 до 1',
		example  : 'var side = audio1.getSide(); // например, 0.8 - Близко к правому краю, но едва слышно и в левом',
		returned : 'number > Баланс воспроизведения > -1 - левая сторона > 0 - по центру > 1 - правая сторона > Значение может быть дробным'
	},



};










var EllipsObject = OApi.EllipsObject = {
	'draw' : {
		name     : 'Отрисовать элипс',
		type     : 'function',
		api      : '()',
		note     : 'Отрисовывает объект на сцене.',
		example  : 'obj.draw();',
		returned : ''
	},
};















var PolygonObject = OApi.PolygonObject = {
	'dX' : {
		type     : 'hidden',
	},

	'dY' : {
		type     : 'hidden',
	},

	'points' : {
		type     : 'hidden',
	},

	'pointColor' : {
		name     : 'Цвет вершин для отрисовки',
		type     : 'property',
		api      : '',
		note     : 'Цвет вершин',
		example  : '',
		returned : ''
	},

	'addPoint' : {
		name     : 'Добавить новую вершину в полигон',
		type     : 'function',
		api      : '(point)',
		note     : 'point - .point(), вершина для добавления > Координаты будут отсчитаны относительно позиции объекта',
		example  : 'PolygonObject.addPoint( .point(10, 10) ); // добавить точку в объект',
		returned : ''
	},

	'delPoint' : {
		name     : 'Удалить вершину из полигона',
		type     : 'function',
		api      : '(N)',
		note     : 'N - порядковый номер точки, которую требуется удалить. > Отсчет начинается с нуля.',
		example  : 'PolygonObject.delPoint( 2 ); // Удалить вторую точку из полигона',
		returned : ''
	},

	'clearPoints' : {
		name     : 'Удалить все вершины',
		type     : 'function',
		api      : '()',
		note     : 'Очистка всех вершин',
		example  : 'PolygonObject.clearPoints(); // Удалить все вершины',
		returned : ''
	},

	'getPoints' : {
		name     : 'Получить все вершины',
		type     : 'function',
		api      : '()',
		note     : 'Получить все вершины полигона',
		example  : 'PolygonObject.getPoints();',
		returned : 'array > Список .point() объектов с координатами точек'
	},

	'getCount' : {
		name     : 'Получить количество вершин в полигоне',
		type     : 'function',
		api      : '()',
		note     : 'Получить количество всех вершин',
		example  : 'PolygonObject.getCount();',
		returned : 'number > Количество вершин'
	},

	'getPoint' : {
		name     : 'Обратиться к точке',
		type     : 'function',
		api      : '(N)',
		note     : 'Обратиться к точке с номером N',
		example  : 'PolygonObject.getPoint(2); // обратиться к точке с порядковым номером 2',
		returned : ' .point() > Координаты точки'
	},







};









var GUIObject = {

};











var Mesh = OApi.Mesh = {
	'x' : {
		name     : 'Смещение группы по X',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'y' : {
		name     : 'Смещение группы по Y',
		type     : 'property',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'count' : {
		name     : 'Количество объектов в группе',
		type     : 'hidden',
		api      : '',
		note     : '',
		example  : '',
		returned : ''
	},

	'getCount' : {
		name     : 'Количество объектов в группе',
		type     : 'function',
		api      : '',
		note     : '',
		example  : '',
		returned : 'number > Количество объектов'
	},

	'getObjects' : {
		name     : 'Получить список объектов в группе',
		type     : 'function',
		api      : '',
		note     : 'Вернет массив объектов',
		example  : 'var objects = pjs.Mesh.getObjects();',
		returned : 'array > Список объектов'
	},

	'draw' : {
		name     : 'Отрисовать объекты в группе',
		type     : 'function',
		api      : '()',
		note     : '',
		example  : 'Mesh.draw();',
		returned : ''
	},

	'objs' : {
		name     : 'Массив объектов',
		type     : 'hidden',
		api      : '',
		note     : '',
		example  : '',
		returned : 'array > Массив объектов'
	},

	'add' : {
		name     : 'Добавить объект в группу',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - Object, любой объект, наследующий .BaseObject(), который требуется добавить в Mesh',
		example  : 'Mesh.add( .BaseObject() );',
		returned : ''
	},

	'del' : {
		name     : 'Удалить объект из группы',
		type     : 'function',
		api      : '(obj)',
		note     : 'obj - Object, любой объект, наследующий .BaseObject(), который находится в .Mesh()',
		example  : 'Mesh.del( .BaseObject() );',
		returned : ''
	},

	'move' : {
		name     : 'Двигать группу объектов',
		type     : 'function',
		api      : '( point )',
		note     : 'point - .point(), позиция смещения',
		example  : 'Mesh.move( .point(1, 0) ); // двигать вправо на 1 пиксель за итерацию',
		returned : ''
	},

	'setPosition' : {
		name     : 'Установить позицию группе объектов',
		type     : 'function',
		api      : '(position)',
		note     : 'position - .point(), позиция',
		example  : 'Mesh.setPosition( .point(100, 100) );',
		returned : ''
	},

	'turn' : {
		name     : 'Вращать группу объектов',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол вращения',
		example  : 'Mesh.turn( 3 ); // вращение на скорости 3 градуса за итерацию',
		returned : ''
	},

	'setAngle' : {
		name     : 'Установить угол поворота группе объектов',
		type     : 'function',
		api      : '(angle)',
		note     : 'angle - number, угол вращения',
		example  : 'Mesh.setAngle( 3 ); // вращение на скорости 3 градуса за итерацию',
		returned : ''
	},




};




















