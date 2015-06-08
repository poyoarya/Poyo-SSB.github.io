var part1, part2, part3, part4, part5;

var term1 = [
					"my controller is",
					"the sun was",
					"my hands were",
					"everyone was",
					"the TV is",
					"the crowd was",
					"my opponent was",
					"my chair is",
					"his controller is",
					"Meta Knight is",
					"Roy's wavedash is",
					"my mother is",
					"my brain is",
					"my 3DS is",
					"Nintendo was",
					"my Twitter followers were",
					"my eyes are"
];

var term2 = [
					"in my eyes",
					"broken",
					"laggy",
					"hacked",
					"too loud",
					"uncomfortable",
					"OP", 
					"fraudulent",
					"disturbing me",
					"is a total scrub",
					"prevented me from winning",
					"upside-down",
					"violating the rules",
					"too smelly for me",
					"totally spooking me out"
];

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("button").addEventListener("click", generate);

function generate() {
	var part1 = term1[getRandInt(0,term1.length-1)]
	var part2 = term2[getRandInt(0,term2.length-1)]
	
	document.getElementById("text").innerHTML = "I lost because " + part1 + " " +  part2 + ".";
}

generate();