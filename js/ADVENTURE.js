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

var focus = setInterval(function() {
	if ($("#input").prop("disabled") == false) {
		$("#input").focus();
	}
}, 10);

$(window).keydown(function(e) {
	if (
		(e.keyCode == 13) &&
		($("#input").prop("disabled") == false)	&&
		($("#input").prop("value") != "")
	) {
		adventure.print(true, ">" + $("#input").val().trim());
		
		adventure.lastInput = $("#input").val().trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
		$("#input").prop("value", "");
		
		//====================//
		
		if (adventure.isMainMenu == true) {
			if (adventure.lastInput.contains("menu.menuCreate") == 0) {
				alert("fine you stupid asshole")
			} else if (adventure.lastInput.contains("menu.menuLoad") == 0) {
				alert("2")
			} else if (adventure.lastInput.contains("menu.menuDelete") == 0) {
				alert("3")
			} else if (adventure.lastInput.contains("menu.menuOption") == 0) {
				alert("4")
			} else if (adventure.lastInput.contains("menu.menuQuit") == 0) {
				alert("5")
			}
		} else {
			alert("I'm sorry, there's been an error!");
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
	isMainMenu: true,
	
	words: {
		bool: {
			yes: [
				"YES",
				"YE",
				"Y",
				"YEAH",
				"YEA",
				"YA",
				"SI",
				"OUI",
				"TRUE"
			],
			no: [
				"NO",
				"N",
				"NAH",
				"NA",
				"NON",
				"FALSE"
			]
		},
		menu: {
			menuCreate: [
				"CREATE",
				"MAKE",
				"1"
			],
			menuLoad: [
				"LOAD",
				"READ",
				"2"
			],
			menuDelete: [
				"DELETE",
				"DESTROY",
				"REMOVE",
				"3"
			],
			menuOption: [
				"OPTIONS",
				"SETTINGS",
				"4"
			],
			menuQuit: [
				"QUIT",
				"BACK",
				"POYO",
				"GAME",
				"5"
			]
		}
	}
}

function mainMenu() {
	adventure.isMainMenu = true;
	adventure.disableInput();
	
	adventure.print(true, "-=-=-=-=-=-=-=-=-", "green");
		adventure.print(false, "A.D.V.E.N.T.U.R.E.", "yellow");
		adventure.print(false, "-=-=-=-=-=-=-=-=-", "green");
	adventure.newLine();
	adventure.print(true, "1. ", "red");
		adventure.print(false, "Create game");
	adventure.print(true, "2. ", "red");
		adventure.print(false, "Load game");
	adventure.print(true, "3. ", "red");
		adventure.print(false, "Delete game");
	adventure.print(true, "4. ", "red");
		adventure.print(false, "Options");
	adventure.print(true, "5. ", "red");
		adventure.print(false, "Back to Poyo's Stuff!");
	adventure.newLine();
	
	adventure.enableInput();
}