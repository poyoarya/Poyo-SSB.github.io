Array.prototype.contains = function(wordSet) {
	var input = [];
	for (i = 0; i < this.length; i++) {
		input[i] = this[i].toUpperCase();
	}
	var finalWordSet = wordSet.split(".");
	if (finalWordSet.length != 2) {
		throw "ADVENTUREError: wordSet must be two long";
		return;
	}
	for (i = 0; i < adventure.words[finalWordSet[0]][finalWordSet[1]].length; i++) {
		if (input.indexOf(adventure.words[finalWordSet[0]][finalWordSet[1]][i]) != -1) {
			return input.indexOf(adventure.words[finalWordSet[0]][finalWordSet[1]][i]);
		}
	}
}

Array.prototype.clean = function(deleteValue) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == deleteValue) {         
			this.splice(i, 1);
			i--;
		}
	}
	return this;
};

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}

var focus = setInterval(function() {
	if ($("#input").prop("disabled") == false) {
		$("#input").focus();
	}
}, 10);

$(window).keydown(function(e) {
	if (
		(e.keyCode == 38) &&
		($("#input").prop("disabled") == false)
	) {
		$("#input").prop("value", adventure.lastInputRaw)
	} else if (
		(e.keyCode == 13) &&
		($("#input").prop("disabled") == false)	&&
		($("#input").prop("value") != "")
	) {
		adventure.print(true, ">" + $("#input").val().trim(), "white");
		
		adventure.lastInputRaw = $("#input").val();
		
		adventure.lastInput = $("#input").val().trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ").clean("");
		$("#input").prop("value", "");
		
		//====================//
		
		if (adventure.lastInput.contains("commands.help") == 0) {
			adventure.newLine();
			adventure.print(true, "help", "cyan");
				adventure.print(false, " - Shows you a list of available commands.");
			adventure.print(true, "flex", "cyan");
				adventure.print(false, " - You flex.");
			adventure.print(true, "look", "cyan");
				adventure.print(false, " [object]", "green");
				adventure.print(false, " - You observe your surroundings.");
			adventure.print(true, "quit", "cyan");
				adventure.print(false, " - You try to leave the game.");
			adventure.newLine();
		} else if (adventure.lastInput.contains("commands.flex") == 0) {
			adventure.newLine();
			adventure.print(true, "You flex.");
			if (Math.random() > 0.90) {
				adventure.print(false, [
					" Your arm feels rather tired.",
					" You can feel the burn.",
					" It almost looks like your bicep has grown a little.",
					" You see a bead of sweat roll down your opponent's face.",
					" You hear the wind blowing through the grass.",
					" You wonder how long this game will last.",
					" You consider making a funny face."
				].randomElement());
			}
			adventure.print(true, "Opponent flexes.");
			adventure.newLine();
			adventure.print(true, "What will you do?");
			adventure.newLine();
		} else if (adventure.lastInput.contains("commands.look") == 0) {
			adventure.newLine();
			if (adventure.lastInput.contains("grammar.at") == 1) {
				adventure.grammarFlag = 2;
			} else {
				adventure.grammarFlag = 1;
			}
			if (adventure.lastInput.contains("objects.opponent") == adventure.grammarFlag) {
				adventure.print(true, "Your opponent is concentrated on you.");
				adventure.print(true, "You can see he's working hard.");
				adventure.print(true, "He waits for your next move.");
				adventure.newLine();
			} else if (adventure.lastInput.contains("objects.self") == adventure.grammarFlag) {
				adventure.print(true, "You look at yourself.");
				adventure.print(true, "Man, your arm looks reall good.");
				adventure.print(true, "...Well, you should concentrate on the battle.");
				adventure.newLine();
			} else if (adventure.lastInput.contains("objects.around") == adventure.grammarFlag) {
				adventure.print(true, "You and your opponent are in a generic, grassy field.");
				adventure.print(true, "The sun is burning rather bright, but it's not too hot.");
				adventure.print(true, "It's perfect weather for a flex-off.");
				adventure.newLine();
			} else {
				adventure.print(true, "You and your opponent are in a field.");
				adventure.print(true, "Both of you have one arm extended, poised to flex.");
				adventure.print(true, "Your opponent has his eyes locked on yours.");
				adventure.newLine();
			}
		} else if (adventure.lastInput.contains("commands.quit") == 0) {
			adventure.newLine();
			adventure.print(true, "You contemplate putting your arm down and leaving, but you decide against it.");
			adventure.print(true, [
					" Your honor is on the line.",
					" You're having too much fun.",
					" You've got at least 20 cents on this match."
				].randomElement());
			adventure.newLine();
		} else {
			adventure.newLine();
			adventure.print(true, "That's not a command I can recognise! Type \"help\" to see the available commands.");
			adventure.newLine();
			adventure.print(true, "What will you do?");
			adventure.newLine();
		}
		
		//====================//
	}
})

var adventure = {
	colors: {
		black: "#000000",
		darkRed: "#800000",
		darkGreen: "#008000",
		darkYellow: "#808000",
		darkBlue: "#000080",
		darkMagenta: "#800080",
		darkCyan: "#008080",
		gray: "#C0C0C0",
		darkGray: "#808080",
		red: "#ff0000",
		green: "#00ff00",
		yellow: "#ffff00",
		blue: "#0000ff",
		magenta: "#ff00ff",
		cyan: "#00ffff",
		white: "#ffffff"
	},
	
	print: function(isNewLine, text, color) {
		if (typeof color == 'undefined') {
			color = "gray";
		}
		if (isNewLine) {
			$("#console").append(
				$("<p style=\"color: " + adventure.colors[color] + ";\"></p>").text(text)
			);
		} else {
			$("#console").children().last().append(
				$("<span style=\"color: " + adventure.colors[color] + ";\"></span>").text(text)
			);
		}
	},
	
	newLine: function() {
		$("#console").append($("</br>"));
	},
	
	disableInput: function() {
		$("#arrow").hide()
		$("#input").prop("disabled", true)
	},
	
	enableInput: function() {
		$("#arrow").show()
		$("#input").prop("disabled", false)
	},
	
	lastInput: "",
	lastInputRaw: "",
	grammarFlag: 1,
	
	words: {
		commands: {
			help: [
				"HELP",
				"COMMANDS"
			],
			flex: [
				"FLEX",
				"SWOLE",
				"LIFT",
				"GAIN",
				"GAINS",
				"GAINZ",
				"PUMP",
				"MUSCLE",
				"IRON"
			],
			look: [
				"LOOK",
				"SEE",
				"WHAT",
				"AROUND",
				"SURROUNDING",
				"SURROUNDINGS"
			],
			quit: [
				"QUIT",
				"EXIT",
				"LEAVE",
				"SCREAM"
			]
		},
		objects: {
			opponent: [
				"OPPONENT",
				"RIVAL",
				"FRIEND",
				"FIEND",
				"FRAUD"
			],
			self: [
				"SELF",
				"ME",
				"I",
				"MYSELF",
				"BICEP"
			],
			around: [
				"AROUND",
				"LOCATION",
				"WHERE"
			],
		},
		grammar: {
			at: [
				"AT",
				"TO",
				"TOWARDS"
			]
		}
	}
}

function flex() {
	adventure.disableInput();
	
	adventure.print(true, "An opponent has challenged you to a game of ");
		adventure.print(false, "Ludicrous Swole!", "green");	
	adventure.print(true, "Opponent looks you in the eye.");
	adventure.print(true, "Opponent flexes.");
	adventure.newLine();
	adventure.print(true, "What will you do?");
	adventure.newLine();
	
	adventure.enableInput();
}