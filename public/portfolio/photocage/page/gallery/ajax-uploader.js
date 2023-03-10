"use strict"
var $ = jQuery.noConflict();
$('#uploaded-files').hide();

$(document).ready(function () {
	jQuery.event.props.push('dataTransfer'); // В dataTransfer помещаются изображения которые перетащили в область div
	var maxFiles = 1;
	var errMessage = 0; // Оповещение по умолчанию
	var defaultUploadBtn = $('#files'); // Кнопка выбора файлов
	var dataArray = []; // Массив для всех изображений
	$('#drop-files').on('drop', function (e) {
		var files = e.dataTransfer.files;
		if (files.length <= maxFiles) {
			loadInView(files);
		} else {
			alert('Вы не можете загружать больше ' + maxFiles + ' изображений!');
			files.length = 0;
			return;
		}
		e.preventDefault();
	});

	// При нажатии на кнопку выбора файлов
	defaultUploadBtn.on('change', function () {
		var files = $(this)[0].files; // Заполняем массив выбранными изображениями
		if (files.length <= maxFiles) {
			loadInView(files);
		} else {
			alert('Вы не можете загружать больше ' + maxFiles + ' изображений!');
			files.length = 0;
		}
	});

	// Функция загрузки изображений на предросмотр
	function loadInView(files) {
		$('#uploaded-holder').show();
		$.each(files, function (index, file) {
			if (!files[index].type.match('image/jpeg')) {
				if (errMessage == 0) {
					$('#drop-files p').html('Эй! только изображения!');
					++errMessage
				} else if (errMessage == 1) {
					$('#drop-files p').html('Стоп! Загружаются только изображения!');
					++errMessage
				} else if (errMessage == 2) {
					$('#drop-files p').html("Не умеешь читать? Только изображения!");
					++errMessage
				} else if (errMessage == 3) {
					$('#drop-files p').html("Хорошо! Продолжай в том же духе");
					errMessage = 0;
				}
				return false;
			}
			if ((dataArray.length + files.length) <= maxFiles) {
				$('#upload-button').css({
					'display': 'block'
				});
			} else {
				alert('Вы не можете загружать больше ' + maxFiles + ' изображений!');
				return;
			}
			var fileReader = new FileReader();
			fileReader.onloadend = (function (file) {
				return function (e) {
					// Помещаем URI изображения в массив
					dataArray.push({
						name: file.name,
						value: this.result
					});
					addImage((dataArray.length - 1));
				};

			})(files[index]);
			fileReader.readAsDataURL(file); // Производим чтение картинки по URI
		});
		return false;
	}

	// Процедура добавления эскизов на страницу
	function addImage(ind) {
		let start, end;
		if (ind < 0) {
			start = 0;
			end = dataArray.length;
		} else {
			start = ind;
			end = ind + 1;
		}
		// Оповещения о загруженных файлах
		if (dataArray.length == 0) {
			// Если пустой массив скрываем кнопки и всю область
			$('#upload-button').hide();
			$('#uploaded-holder').hide();
		} else if (dataArray.length == 1) {
			$('#upload-button span').html("Был выбран 1 файл");
		} else {
			$('#upload-button span').html(dataArray.length + " файлов были выбраны");
		}
		// Цикл для каждого элемента массива
		for (let i = start; i < end; i++) {
			if ($('#dropped-files > .image').length <= maxFiles) {
				$('#dropped-files').append('<div id="img-' + i + '" class="image" style="background: url(' + dataArray[i].value + '); background-size: cover; background-repeat: no-repeat; width="700px"> <a href="#" id="drop-' + i + '" class="drop-button">Удалить изображение</a></div>');
			}
		}
		return false;
	}

	// Функция удаления всех изображений
	function restartFiles() {
		$('#loading-bar .loading-color').css({
			'width': '0%'
		});
		$('#loading').css({
			'display': 'none'
		});
		$('#loading-content').html(' ');
		$('#upload-button').hide();
		$('#dropped-files > .image').remove();
		$('#uploaded-holder').hide();
		dataArray.length = 0; // Очищаем массив
		return false;
	}

	// Удаление только выбранного изображения 
	$("#dropped-files").on("click", "a[id^='drop']", function () {
		var elid = $(this).attr('id'); // получаем название id
		var temp = new Array(); // создаем массив для разделенных строк
		temp = elid.split('-'); // делим строку id на 2 части
		dataArray.splice(temp[1], 1); // получаем значение после тире тоесть индекс изображения в массиве
		$('#dropped-files > .image').remove(); // Удаляем старые эскизы
		addImage(-1); // Обновляем эскизи в соответсвии с обновленным массивом
	});
	$('#dropped-files #upload-button .delete').click(restartFiles);

	// Загрузка изображений на сервер
	$('#upload-button .upload').click(function () {
		$("#loading").show();
		var totalPercent = 100 / dataArray.length,
			x = 0; // переменные для работы прогресс бара
		$('#loading-content').html('Загружен ' + dataArray[0].name);

		var data = new FormData();
		$.each(dataArray, function (index, file) {
			// загружаем страницу и передаем значения, используя HTTP POST запрос 
			$.post('gallery/upload.php', dataArray[index], function (data) {

				var fileName = dataArray[index].name;
				++x;

				// Изменение бара загрузки
				$('#loading-bar .loading-color').css({
					'width': totalPercent * (x) + '%'
				});
				if (totalPercent * (x) == 100) {
					$('#loading-content').html('Загрузка завершена!');

					// Вызываем функцию удаления всех изображений после задержки 1 секунда
					setTimeout(restartFiles, 1000);
				} else if (totalPercent * (x) < 100) {
					$('#loading-content').html('Загружается ' + fileName);
				}

				// Формируем в виде списка все загруженные изображения
				// data формируется в upload.php
				var dataSplit = data.split(':');
				if (dataSplit[1] == 'загружен успешно') {
					$('#uploaded-files').append('<li><a href="users/gallery-img/' + dataSplit[0] + '">' + fileName + '</a> загружен успешно</li>');
					console.log(fileName);
				} else {
					$('#uploaded-files').append('<li><a href="users/gallery-img/' + data + '. Имя файла: ' + dataArray[index].name + '</li>');
				}

			});
		});
		$('#uploaded-files').show();
		return false;
	});
});