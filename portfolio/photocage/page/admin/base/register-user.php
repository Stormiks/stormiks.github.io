<?php
if ($_POST) {
	$pathUsersDB = "user/user.txt";
	$statReg = ["false", "true"];
	$login = trim($_POST['login']);
	$pass1 = trim($_POST['password1']);
	$pass2 = trim($_POST['password2']);

	function validLogin ($l) {
		global $pathUsersDB;
		$lg = false;
		$f = file($pathUsersDB, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
		for ($i = 0; $i < count($f); $i++) {
			$tmp = explode(" | ", $f[$i]);
			if ($tmp[0] === $l) {
				exit(1);
			}
		}
		return !$lg;
	}

	if ($pass1 === $pass2) {
		$stat = validLogin($login);
		if ($stat) {
			$fileUser = fopen($pathUsersDB, "a+") or exit("Невозможно открыть файл ($pathUsersDB)");
			fwrite($fileUser, $login." | ".$pass2."\n");
			fclose($fileUser);
			echo $login;
			exit(0);
		} else {
			exit(1);
		}
	} else {
		exit(1);
	}
} else {
	echo "Ошибка запроса к серверу, должен быть типа '/$/_POST'";
}
