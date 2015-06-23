var subjects = [
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
				"my eyes are",
				"the DLC is",
				"the commentators are",
				"the music was",
				"Final Destination is",
				"Reggie Fils-Aim\u00e9 is",
				"the venue is",
				"my skills were",
				"the stream was",
				"Sakurai was",
				"Brawl is",
				"Melee is",
				"reddit is"
];

var problems = [
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
				"making me SD",
				"upside-down",
				"violating the rules",
				"too smelly for me",
				"totally spooking me out",
				"unnecessarily rude",
				"making funny faces at me",
				"trash-talking mid-match",
				"running a company for 16 hours a day",
				"making excuses",
				"spamming projectiles",
				"not fair",
				"way better than my character",
				"speaking Japanese",
				"too bright",
				"nerfed",
				"garbage",
				"not good enough",
				"busy making a gfycat",
				"too small",
				"on a bad day",
				"sandbagging",
				"using custom moves",
				"reminding me of my ex",
				"really annoying",
				"tired"
];

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

document.getElementById("button").addEventListener("click", generate);

function generate() {
	var finalSubject = subjects[getRandInt(0,subjects.length-1)]
	var finalProblem = problems[getRandInt(0,problems.length-1)]
	
	if (Math.random() > 0.0125) {
		document.getElementById("text").innerHTML = "I lost because " + finalSubject + " " +  finalProblem + ".";
	}
}

generate();