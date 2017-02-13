function randomWord(){
	var rand = words[Math.floor(Math.random() * words.length)];
	console.log(rand);
	return rand;
}

var currentRow = 1;
var row = 1;
var letterAnswer = randomWord().split("");

function checkLetters(){
	var currentLetter = 1;
	var input = document.getElementById("antwoord").value;
	var letterInput = input.split("");

	if (currentRow === 6) {
		alert("stop");
		return;
	}

	for (i = 0; i < 5; i++) {
		document.getElementById(currentRow + '.' + currentLetter).innerHTML = letterInput[i];
		if (letterAnswer[i] === letterInput[i]) {
			document.getElementById(currentRow + '.' + currentLetter).style.background = "red";
		}
		else if(letterAnswer.includes(letterInput[i])) {
			document.getElementById(currentRow + '.' + currentLetter).style.background = "yellow";
		}
		currentLetter++;
	}
	currentRow++;
}

function resetBoard(){
	
}