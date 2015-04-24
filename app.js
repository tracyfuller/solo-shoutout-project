var quotesArray = [];

var ShoutoutArray = [
	"Shout Out 1",
	"Shout Out 2", 
	"Shout Out 3",
	"Shout Out 4"
];

$(document).ready(function(){
	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	};

	$(".textBox").on("click", function(){
		var indexPicker = quotesArray[randomNumber(0, (quotesArray.length-1))];
		$(this).hide("explode", {pieces: 100}, 600).text(indexPicker).fadeIn("slow");
	});
	
});