var part1, part2, part3, part4, part5;

var greeting = ["Hey", "Sup", "Hello", "Yo", "Greetings", "ayy"];

var adressment = ["babe", "girl", "female", "m'lady", "strager", "honeybuns", "bub", "Satan"];

var noun1 = ["a pile of leaves", "ded", "an angel", "roadkill", "Jesus", "a calculator", "my basement", "my creepy uncle", "the garbage man", "in jail", "my pants", "a judge of the Supreme Court", "a rancid banana", "actually male", "Moses", "the Ebola virus", "a busy six-year-old", "above 1200 pounds", "lacking in vitamins", "a drug dealer", "a truck", "babby", "in MLG"];

var noun2 =	["your muscles", "my father", "Jesus", "my love", "the American flag", "the doorframe", "this portable toilet", "my bottle cap collection", "a drug addict", "that Nigerian prince", "a spooky ghost", "an estranged noodle", "that disgruntled midget", "Barack Obama", "the angry Russian man", "your spooky skeltal", "this Christian pastor", "my controller", "Vladmir Putin"];

var desc = ["is decidedly puny", "is going to explode", "is uncontrollably guzzling pickles", "is actually the Illuminati ", "is vibrating violently", "is a shower curtain", "is travelling to France", "is over 9000", "is obviously racist", "is slowly growing a cat", "is suggestively expanding", "is literally Hitler", "is a lobotomised penguin", "is spying on the NSA", "is impersonating Morgan Freeman", "is on drugs", "is in a vegetative state", "is a Satanic priest", "is hella swole", "is a massive radish", "is absurdly high", "is admittedly illegal", "is tingling", "is a filthy casual", "is gonna become a new dank meme", "is illegal in the UK", "is ded", "is worryingly missing", "is diabetic", "is triggering me", "shouting \"ALLAHU AKBAR\"",];

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