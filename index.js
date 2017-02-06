function randomWord(){
	var rand = words[Math.floor(Math.random() * words.length)];
	console.log(rand);
	return rand;
}

var count = 1;
var letterAnswer = randomWord().split("");
console.log(letterAnswer[0]);

function check(){
	var input = document.getElementById("antwoord").value;
	var letterInput = input.split("");
	for (i = 0; i < 5; i++) {
		if (letterAnswer[i] === letterInput[i]) {
			console.log(letterAnswer[i] + "=" + letterInput[i]);
			letterAnswer[i].appendTo(".row" + count + " .letter" + i);
		}
		else {
			console.log(letterAnswer[i] + "!=" + letterInput[i]);
		}
	}
}