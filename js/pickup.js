var part1, part2, part3, part4, part5;

var greeting = [
					"Hey", 					"Sup", 					"Hello", 					"Yo", 					"Greetings", 					"ayy"
];

var adressment = [
					"babe", 					"girl", 					"female", 					"m'lady", 					"stranger", 					"honeybuns", 					"bub", 					"Satan"
];

var noun1 = [
					"a pile of leaves", 					"ded", 					"an angel", 					"roadkill", 					"Jesus", 					"a calculator", 					"my basement", 					"my creepy uncle", 					"the garbage man", 					"in jail", 					"my pants", 					"a judge of the Supreme Court", 					"a rancid banana", 					"actually male", 					"Moses", 					"the Ebola virus", 					"a busy six-year-old", 					"above 1200 pounds", 					"lacking in vitamins", 					"a drug dealer", 					"a truck", 					"babby", 					"in MLG"
];

var noun2 =	[
					"your muscles are", 					"my father is", 					"Jesus is", 					"my love is", 					"the American flag is", 					"the doorframe is", 					"this portable toilet is", 					"my bottle cap collection is", 					"a drug addict is", 					"that Nigerian prince is", 					"a spooky ghost is", 					"an estranged noodle is", 					"that disgruntled midget is", 					"Barack Obama is", 					"the angry Russian man is", 					"your spooky skeltal is", 					"this Christian pastor is", 					"my controller is", 					"Vladmir Putin is",
					"the breadmen are",
					"the neatly arranged array of toilets are"
];

var desc = [
					"decidedly puny", 					"going to explode", 					"uncontrollably guzzling pickles", 					"actually the Illuminati", 					"vibrating violently", 					"a shower curtain", 					"travelling to France", 					"over 9000", 					"obviously racist", 					"slowly growing a cat", 					"suggestively expanding", 					"literally Hitler", 					"a lobotomised penguin", 					"spying on the NSA", 					"impersonating Morgan Freeman", 					"on drugs", 					"in a vegetative state", 					"a Satanic priest", 					"hella swole", 					"a massive radish", 					"absurdly high", 					"admittedly illegal", 					"tingling", 					"a filthy casual", 					"gonna become a new dank meme", 					"illegal in the UK", 					"ded", 					"worryingly missing", 					"diabetic", 					"triggering me", 					"shouting \"ALLAHU AKBAR\"",
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