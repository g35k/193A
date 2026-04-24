function makeTextBigger() {
	alert("Hello, world!");
	document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
	var textArea = document.getElementById("textInput");
	var fancyRadio = document.getElementById("fancy");

	if (fancyRadio.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function mooText() {
	var textArea = document.getElementById("textInput");
	var text = textArea.value.toUpperCase();
	var sentences = text.split(".");

	for (var i = 0; i < sentences.length - 1; i++) {
		sentences[i] = sentences[i].trim() + "-MOO";
	}

	textArea.value = sentences.join(".");
}
