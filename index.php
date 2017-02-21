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
	<p>Kies hier het aantal letters!</p>
	<input type="radio" name="letterAmount" value="5">5
	<br/>
	<input type="radio" name="letterAmount" value="6">6
	<br/>
	<input type="radio" name="letterAmount" value="7">7
	<br/>
	<input type="radio" name="letterAmount" value="8">8
	<br/>
	<br/>
	<button onclick="letterAmount();createTable();" id="letter">letters</button>
	<br/>

	<table id="lingo_table"></table>

	<input id="antwoord" type="text"/><button onclick="checkLetters()">antwoord</button>
</body>
</html>