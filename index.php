<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>LINGO</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="words-nl.js"></script>
	<script type="text/javascript" src="index.js"></script>
</head>
<body>
	<h1>Lingo</h1>
	<p>Hallo en welkom bij lingo. Om te beginnen kies u eerst het aantal letters. Vervolgens klikt u op start om te beginnen.</p>
	<div class="letter_block">
		<span>Kies hier het aantal letters!</span>
		<br/>
		<input type="radio" name="letterAmount" value="5">5
		<br/>
		<input type="radio" name="letterAmount" value="6">6
		<br/>
		<input type="radio" name="letterAmount" value="7">7
		<br/>
		<input type="radio" name="letterAmount" value="8">8
		<br/>
		<br/>
		<button onclick="letterAmount();createTable();" id="letter">start</button>
		<br/>
		<br/>
	</div>

	<table id="lingo_table"></table>

	<input id="antwoord" type="text" placeholder="Vul hier uw antwoord in..." /><button onclick="checkLetters()">antwoord</button>
</body>
</html>