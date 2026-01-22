<?php include "data.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spina Fracta – Gothenburg Metal City</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>

<header>
    <h1>Spina Fracta</h1>
    <p>The birthplace of melodic death metal in Gothenburg</p>
</header>

<nav>
    <a href="#about">About</a>
    <a href="#bands">Bands</a>
    <a href="#places">Places</a>
</nav>

<section id="about">
    <h2>About the City</h2>
    <p><?= $about ?></p>
</section>

<section id="bands">
    <h2>Famous Bands</h2>
    <ul>
        <?php foreach ($bands as $band): ?>
            <li><?= $band ?></li>
        <?php endforeach; ?>
    </ul>
</section>

<section id="places">
    <h2>Places to Visit</h2>
    <button onclick="showPlace()">Show a random place</button>
    <p id="place"></p>
</section>

<footer>
    <p>School project – 10th grade | Live version hosted</p>
</footer>

</body>
</html>
