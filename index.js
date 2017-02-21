var currentRow = 1;
var row = 1;
var rand;
var amountOfLetters;
var radios = document.getElementsByName('letterAmount');

function letterAmount(){
	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        amountOfLetters = radios[i].value;
	        break;
	    }
	}
}

function createTable(){
	for (i = 1; i < 6; i++) {
		var extraRow = document.createElement("TR");
		extraRow.id = i;
		document.getElementById("lingo_table").appendChild(extraRow);
		for (d = 1; d <= amountOfLetters; d++) {
			var extraLetter = document.createElement("TD");
			extraLetter.id = i + "." + d;
			document.getElementById(i).appendChild(extraLetter);
		}
	}
	randomWord();
	giveFirstLetter();
	document.getElementById("letter").disabled = true;
}

function randomWord(){
	if (amountOfLetters == 5) {
		rand = words_5[Math.floor(Math.random() * words_5.length)];
		console.log(rand);
	} else if (amountOfLetters == 6) {
		rand = words_6[Math.floor(Math.random() * words_6.length)];
		console.log(rand);
	} else if (amountOfLetters == 7) {
		rand = words_7[Math.floor(Math.random() * words_7.length)];
		console.log(rand);
	}  else if (amountOfLetters == 8) {
		rand = words_8[Math.floor(Math.random() * words_8.length)];
		console.log(rand);
	}
}

function giveFirstLetter(){
	var letterAnswer = rand.split("");
	document.getElementById("1.1").innerHTML = letterAnswer[0].toUpperCase();
}

function checkLetters(){
	var currentLetter = 1;
	var input = document.getElementById("antwoord").value;
	var letterInput = input.split("");
	var letterAnswer = rand.split("");
	var copyLetterInput = letterInput;
	var copyletterAnswer = letterAnswer;

	if (input.length != amountOfLetters) {
		alert("Vul " + amountOfLetters + " letters in alstublieft!");
		return;
	}

	setTimeout(function () {   
        if(rand === input){
			alert("U heeft het woord goed geraden! Gefeliciteerd! Begin opnieuw.");
			resetBoard();
			return;
		}
	}, 500)

	setTimeout(function () {   
        if (currentRow === 6) {
			alert("U heeft al uw beurten gebruikt. Het juist woord was: " + rand.toUpperCase() + "! U begint nu opnieuw.");
			resetBoard();
			return;
		}
	}, 500)

	for (i = 0; i < amountOfLetters; i++) {
		document.getElementById(currentRow + '.' + currentLetter).innerHTML = letterInput[i].toUpperCase();
		if (letterAnswer[i] === letterInput[i]) {
			document.getElementById(currentRow + '.' + currentLetter).style.background = "#FF492B";
			copyLetterInput[i] = "!";
			copyletterAnswer[i] = "?";
		}
		currentLetter++;
	}

	setTimeout(function () { 
		currentLetter = 1;
		for (i = 0; i < amountOfLetters; i++) {
			if(copyletterAnswer.includes(copyLetterInput[i])) {
				document.getElementById(currentRow + '.' + currentLetter).style.background = "#FFE600";
				for (y = 0; y < amountOfLetters; y++) {
					if(copyLetterInput[i] === copyletterAnswer[y]) {
						copyletterAnswer[y] = "?";
						break;
					}
				}
			}
			currentLetter++;
		}
	}, 10)
	
	setTimeout(function () { 
		currentRow++;
	}, 100)

	document.getElementById("antwoord").value = "";
	document.getElementById("antwoord").select();
}

function resetBoard(){
	document.getElementById("lingo_table").innerHTML = "";
	currentRow = 1;
	document.getElementById("letter").disabled = false;
}