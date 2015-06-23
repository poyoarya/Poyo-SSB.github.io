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
				"reddit is",
				"the ledge was",
				"my foot is",
				"the C-stick was",
				"my Wii U is",
				"my Wii is",
				"my GameCube is",
				"my N64 is",
				"my Wiimotes are",
				"my A button is",
				"my B button is",
				"my X button is",
				"my analogue stick is",
				"my D-Pad is",
				"my girlfriend from Canada is",
				"Project M is",
				"your shoes are",
				"the hotel is",
				"my Playstation is",
				"my mother's basement is",
				"USA is",
				"my IQ is",
				"the posts on Miiverse are",
				"tap jump was"
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
				"too big",
				"on a bad day",
				"sandbagging",
				"using custom moves",
				"reminding me of my ex",
				"really annoying",
				"tired",
				"a big gimmick",
				"kinda sweaty",
				"drunk",
				"only using one move",
				"not listening to me",
				"sleeping",
				"cheap",				"terrible for my character",				"rated a 7.8 on IGN",				"using infinite combos",				"not DIing the way I want",				"taunting",				"cheating",				"different because of the update",				"using glitches",				"edgeguarding",				"not broken enough",				"not what I meant to hit",				"a timed match",				"using better moves than me",				"using motion controls",				"sitting slightly closer to the screen",				"not wearing his glasses",				"sober",				"using items",				"not letting me grab him",				"shielding too much",				"air dodging",				"rolling",				"pausing mid-match",				"saving replays",				"ethically superior to me",				"only using the A button",				"only using the B button",				"Reggie Fils-Aim\u00e9",				"picking stages that I don't like",				"bad and should feel bad",				"low on batteries",				"cold",				"sticky",				"blocking the screen",				"walking in front of the screen",				"tangling my controller cable",				"incapable of melting steel beams",				"spitting on the disc",				"too attractive",				"too fast",				"using an ugly alternative costume",				"using counters too much",				"spamming PK Fire",
				"my b"
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