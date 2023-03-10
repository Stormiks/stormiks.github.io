$(document).ready(function () {
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
				url: 'base/register-user.php',
				data: f,
				success: function (data) {
					// Если сервер вернул ответ
					alert('Success! Данные прошли проверку');
					let r = document.getElementById('result-register');
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