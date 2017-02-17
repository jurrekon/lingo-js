var currentRow = 1;
var row = 1;
var rand;

function randomWord(){
	rand = words[Math.floor(Math.random() * words.length)];
	console.log(rand);
}
randomWord();

function giveFirstLetter(){
	var letterAnswer = rand.split("");
	document.getElementById("1.1").innerHTML = letterAnswer[0].toUpperCase();
}
window.onload = giveFirstLetter;

function checkLetters(){
	var currentLetter = 1;
	var input = document.getElementById("antwoord").value;
	var letterInput = input.split("");
	var letterAnswer = rand.split("");
	var copyLetterInput = letterInput;
	var copyletterAnswer = letterAnswer;

	if (input.length != 5) {
		alert("Vul 5 letters in alstublieft!");
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

	for (i = 0; i < 5; i++) {
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
		for (i = 0; i < 5; i++) {
			if(copyletterAnswer.includes(copyLetterInput[i])) {
				document.getElementById(currentRow + '.' + currentLetter).style.background = "#FFE600";
				for (y = 0; y < 5; y++) {
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
	for(currentRow = 1; currentRow < 6; currentRow++) {
		for(currentLetter = 1; currentLetter < 6; currentLetter++) {
			document.getElementById(currentRow + '.' + currentLetter).innerHTML = "";
			document.getElementById(currentRow + '.' + currentLetter).style.background = "#78C2FF";
		}
	}
	randomWord();
	giveFirstLetter();
	currentRow = 1;
}