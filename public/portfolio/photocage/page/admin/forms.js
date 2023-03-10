$(document).ready(function () {
	document.getElementById('register-user').onclick = function () {
		document.getElementById('validate-form').style.display = "none";
		document.getElementById('register-form').style.display = "block";
	}
	document.getElementById('validate-user').onclick = function () {
		document.getElementById('validate-form').style.display = "block";
		document.getElementById('register-form').style.display = "none";
	}

	$('#validate-form').on('submit', function () {
		let f = $('#validate-form').serialize();
		if (f == 'name=&pass=') {
			alert("Пустая форма");
			return;
		} else {
			$.ajax({
				type: 'GET',
				url: 'page/admin/base/data-users.php',
				data: f,
				success: function (data) {
					let ress = document.getElementById('results');
					// Если всё успешно, то выведем сообщение, после перенаправим на страницу сайта
					if (data != "") {
						alert("Success!");
						if (data.length > 25) { // В случае возрата ошибки сервера
							return alert(data);
						} else if (data.length < 10) { // В случае возврата логина
							alert("Привет, " + data + "!");
							ress.style.display = "block";
							setInterval(function () {
								ress.style.display = "none";
								window.location.href = "page/";
							}, 2000);
						}
					} else { // Если сервер вернул несовпадения
						return alert("Неверный логин или пароль");
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					// Если ошибка аякса, то выведем её
					alert(xhr.status);
					alert(thrownError);
				}
			});
			return false;
		}
	});

	$('#register-form').on('submit', function () {
		let f = $('#register-form').serialize();
		// Если пустые данные
		if (f == 'login=&password1=&password2=') {
			alert('Пустая форма');
			return;
		} else {
			let l = document.getElementById('lgn').value.length;
			console.log(l);
			if (l > 10) {
				return alert("Логин больше 10 символов запрещён!");
			}
			$.ajax({
				type: 'POST',
				url: 'page/admin/base/data-users.php',
				data: f,
				success: function (data) {
					// Если сервер вернул ответ
					alert('Success! Данные прошли проверку');
					let r = document.getElementById('results');
					if (data) {
						alert("Пользователь " + data + " успешно зарегистрирован\nТеперь вы можете войти под своими данными.");
						r.style.display = "block";
						setTimeout(function () {
							r.style.display = "none";
						}, 3000);
					} else if (!data) {
						r.innerHTML = "Пароли не совпадают или такой логин уже существует";
						r.style.display = "block";
						setTimeout(function () {
							r.style.display = "none";
						}, 3000);
					} else {
						alert(data);
					}
				},
				error: function (xhr, ajaxOptions, thrownError) {
					// Если ошибка аякса, то выведем её
					console.log(xhr.status);
					console.log(thrownError);
				}
			});
			return false;
		}
	});
});