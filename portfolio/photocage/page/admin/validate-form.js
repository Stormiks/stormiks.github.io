$(document).ready(function () {
	$('#login').on('submit', function () {
		let f = $('#login').serialize();
		if (f == 'name=&pass=') {
			alert("Пустая форма");
			return;
		} else {
			$.ajax({
				type: 'GET',
				url: 'page/admin/base/validate-user.php',
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
});