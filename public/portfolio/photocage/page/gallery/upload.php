<?php
$path = 'users/gallery-img/'; // Оригинал
$scrin_path = 'users/skin-img/'; // Скрины
// Вытаскиваем необходимые данные
$file = $_POST['value'];
$name = $_POST['name'];
$q = 100;
$w = 190;
$h = 160;
// Получаем расширение файла
$getMime = explode('.', $name);
$mime = end($getMime);
$data = explode(',', $file); // Выделим данные
// Декодируем данные, закодированные алгоритмом MIME base64
$encodedData = str_replace(' ','+',$data[1]);
$decodedData = base64_decode($encodedData);

if (!isset($q)) $q = 100;
$src = imagecreatefromjpeg($_POST['value']);
$w_src = imagesx($src);
$h_src = imagesy($src);

if ($h_src == $w_src) {
	$ratio = $w_src/$w;
	$w_dest = round($w_src/$ratio);
	$h_dest = round($h_src/$ratio);
	$dest = imagecreatetruecolor($w_dest, $h_dest);
	imagecopyresampled($dest, $src, 0, 0, 0, 0, $w_dest, $h_dest, $w_src, $h_src);
	imagejpeg($dest, $scrin_path.$name, $q);
	imagedestroy($dest);
	imagedestroy($src);
} elseif ($w_src > $h_src) {
	if ($w_src != $w) {
		$ratio = $w_src/$w;
		$w_dest = round($w_src/$ratio);
		$h_dest = round($h_src/$ratio);
		$dest = imagecreatetruecolor($w_dest, $h_dest);
		imagecopyresampled($dest, $src, 0, 0, 0, 0, $w_dest, $h_dest, $w_src, $h_src);
		imagejpeg($dest, $scrin_path.$name, $q);
		imagedestroy($dest);
		imagedestroy($src);
	}
} else {
	if ($h_src != $h) {
		$ratio = $h_src/$h;
		$w_dest = round($w_src/$ratio);
		$h_dest = round($h_src/$ratio);
		$dest = imagecreatetruecolor($w_dest, $h_dest);
		imagecopyresampled($dest, $src, 0, 0, 0, 0, $w_dest, $h_dest, $w_src, $h_src);
		imagejpeg($dest, $scrin_path.$name, $q);
		imagedestroy($dest);
		imagedestroy($src);
	}
}
file_put_contents($path.$name, $decodedData);
echo $name.':загружен успешно';
