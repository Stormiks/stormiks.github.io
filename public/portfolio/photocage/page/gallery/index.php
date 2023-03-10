<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html">
	<title>Фотогаллерея</title>
	<link rel="stylesheet" href="../assets/css/style.css">
	<link rel="stylesheet" href="../assets/css/section-gallery.css">
</head>
<body class="body">
	<div class="wrapper">
		<header class="header">
			<div class="head">
				<h1><span>Фотогаллерея</span></h1>
			</div>
			<nav class="nav">
				<div class="list-item link1"><a href="../"><img src="../assets/bar-img/home.png" alt="#">Главная</a></div>
				<div class="list-item link2"><a href="#"><img src="../assets/bar-img/gallery.png" alt="gallery">Галлерея</a></div>
				<div class="list-item link3"><a href="../my-about.html"><img src="../assets/bar-img/my-info.png" alt="my">Обо мне</a></div>
			</nav>
		</header>
		<main class="main">
			<section class="main__col-2 block-gallery">
				<div class="coll-2__block-gallery gallery">
					<?php
						$wimage = "";
						$fimg = "";
						$path = 'users/skin-img/'; // задаем путь до сканируемой папки с изображениями
						$pathImg = 'users/gallery-img/';
						$images = scandir($path); // сканируем папку
						if ($images !== false) { // если нет ошибок при сканировании
							$images = preg_grep("/\.(?:png|gif|jpe?g)$/i", $images); // через регулярку создаем массив только изображений
							if (is_array($images)) { // если изображения найдены
								foreach($images as $image) { // делаем проход по массиву
									$fimg .= "<article class='gallery-post'>";
									$fimg .= "<figure class='image'>";
									$fimg .= "<a rel='_blank' target='_blank' href='".$pathImg.htmlspecialchars(urlencode($image))."'>";
									$fimg .= "<img src='".$path.htmlspecialchars(urlencode($image))."' alt='".$image."' class='img'>";
									$fimg .= "</a>";
									$fimg .= "<figcaption class='title-img'><p>'".basename($image, '.jpg')."'</p></figcaption>";
									$fimg .= "</figure>";
									$fimg .= "<div class='text-post'>";
									$fimg .= "<p class='text-img'>Detailed description</p>";
									$fimg .= "</div>";
									$fimg .= "<hr>";
									$fimg .= "<div class='share-icon'>Will be added later: Icons share social</div>";
									$fimg .= "</article>";
								}
								$wimage .= $fimg;
							} else { // иначе, если нет изображений
						    $wimage .= "<div style='text-align:center'>Не обнаружено изображений в директории!</div>\n";
						  }
						} else { // иначе, если директория пуста или произошла ошибка
						    $wimage .= "<div style='text-align:center'>Директория пуста или произошла ошибка при сканировании.</div>";
						}
						echo $wimage;
					?>
				</div><!--coll-2__block-gallery-->
			</section><!--main__col-2-->
		</main><!--main-->
		<footer class="footer">
			<div class="footer-info">
				<p class="copy">&copy; 2017 Сайт сделан <a href="http://skylinkertu.github.io">Skylinker</a></p>
			</div>
		</footer>
	</div>
</body>
</html>
