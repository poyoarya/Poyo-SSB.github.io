var part1, part2, part3, part4, part5;

var greeting = [
					"Hey", 
];

var adressment = [
					"babe", 
];

var noun1 = [
					"a pile of leaves", 
];

var noun2 =	[
					"your muscles are", 
					"the breadmen are",
					"the neatly arranged array of toilets are"
];

var desc = [
					"decidedly puny", 
];

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("button").addEventListener("click", generate);

function generate() {
	var part1 = greeting[getRandInt(0,greeting.length-1)]
	var part2 = adressment[getRandInt(0,adressment.length-1)]
	var part3 = noun1[getRandInt(0,noun1.length-1)]
	var part4 = noun2[getRandInt(0,noun2.length-1)]
	var part5 = desc[getRandInt(0,desc.length-1)]
	
	//console.log(part1 + " " + part2 + ", are you " + part3 + "? Because " + part4 + " " + part5 + ".")
	document.getElementById("text").innerHTML = part1 + " " + part2 + ", are you " + part3 + "? Because " + part4 + " " + part5 + ".";
}

generate();