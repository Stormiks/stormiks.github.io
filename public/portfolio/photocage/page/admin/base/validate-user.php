<?php
if ($_GET) {
	$dirUserDB = "user/user.txt";
	$name = trim($_GET['name']);
	$password = trim($_GET['pass']);
	if ($name && $password) {
		if ($name == "" && $password == "") {
			$fileUser = fopen($dirUserDB, "a+") or exit("Невозможно открыть файл ($dirUserDB)");
			fwrite($fileUser, $name." | ".$password."\n");
			fclose($fileUser);
		} elseif ($name != "" && $password != "") {
			$f = file($dirUserDB, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) or exit("Ошибка чтения файла или отсутствие базы данных");
			if($f){
				for ($i = 0; $i < count($f); $i++) {
					$tmp = explode(" | ", $f[$i]);
					if ($tmp[0] == $name && $tmp[1] == $password) {
						echo $name;
					} else {
						exit(1);
					}
				}
				exit(0);
			}
		}
	} else {
		fclose($fileUser);
		exit("Вы ввели пустые данные или что-то другое");
	}
}
?>
