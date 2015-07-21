$(window).keydown(function(e) {
	if (e.keyCode == 13 && adventure.inputVariable != null) {
		adventure.print(false, $("#input").val());
		adventure.variables[adventure.inputVariable] = $("#input").val();
		adventure.inputVariable = null;
		$("#input").remove();
		window[adventure.callingFunction]();
		adventure.callingFunction = null;
	}
});

var focus = setInterval(function() {
	if ($("#input").length != 0) {
		$("#input").focus()
	}
}, 10);

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

var adventure = {
	inputVariable: null,
	callingFunction: null,
	
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
			)
		} else {
			$("#console").children().last().append(
				$("<span style=\"color: " + adventure.colors[color] + ";\"></span>").text(text)
			);
		}
	},
	
	newLine: function() {
		$("#console").append($("</br>"))
	},
	
	pause: function(f) {
	},
	
	clear: function() {
		while ($("#console").children().length > 0) {   
			$("#console").children().last().remove();
		}
	},
	
	input: function(variable, f) {
		$("#console").children().last().append(
			$("<input id=\"input\" wrap=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" rows=\"1\" maxlength=\"32\"></input>")
		);
		this.inputVariable = variable;
		this.callingFunction = f;
	},
	
	currentGame: "",
	
	variables: {}
}

//=================\\
//    ADVENTURE    \\
//  DOCUMENTATION  \\
//=================\\
//
// - info
// + typeof
// > argument
//
//adventure.colors
//    - list of colors which you can reference when adventure.print()ing
//
//adventure.print(isNewLine, text, color)
//    - prints a string with a specified color
//    > isNewLine:
//        + boolean
//        - dictates whether text printed is on new line
//        - used to print multiple colors in one line when set to false
//    > text
//        + string
//        - the text printed
//    > color
//        + string
//        - dictates color 
//        - name of one of the colours from adventure.colors
//
//adventure.newline()
//    - creates a new line
//
//adventure.pause(f)
//    - pauses execution of commands until a button is pressed
//    > f
//        + string
//        - name of the function to call when unpaused
//
//adventure.clear()
//    - clears the screen of all lines
//
//adventure.input(variable, f)
//    - prompts the user, and sets a variable to their response
//    > variable
//        + string
//        - name of the variable to set when input is entered
//    > f
//        + string
//        - name of the function to call after input is entered
//

function menu() {
	adventure.print(true, "-=-=-=-=-=-=-=-=-", "green");
		adventure.print(false, "A.D.V.E.N.T.U.R.E.", "yellow");
		adventure.print(false, "-=-=-=-=-=-=-=-=-", "green");
	adventure.newLine();
	adventure.print(true, "Type the number that corresponds to your choice!");
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
	adventure.print(true, "What do you choose to do?: ");
	adventure.input("mainMenuSelection", "menuSelect")
}

function menuSelect() {
	if (adventure.variables.mainMenuSelection == 1){
		setTimeout(createGame, 50);
		return;
	} else if (adventure.variables.mainMenuSelection == 2){
		setTimeout(loadGame, 50);
		return;
	} else if (adventure.variables.mainMenuSelection == 3){
		setTimeout(deleteGame, 50);
		return;
	} else if (adventure.variables.mainMenuSelection == 4){
		setTimeout(options, 50);
		return;
	} else if (adventure.variables.mainMenuSelection == 5){
		window.location.href = "index.html";
	}
}

function createGame(notFirstTime) {
	if (typeof notFirstTime == "undefined") {
		adventure.print(true, "Woohoo! Let's begin!");
	}
	adventure.print(true, "Alright; what's your name?: ");
	adventure.input("name", "createGameInput");
}

function createGameInput() {
	adventure.clear();
	adventure.print(true, "1. ", "red");
		adventure.print(false, "Yes, you nincompoop!");
	adventure.print(true, "2. ", "red");
		adventure.print(false, "Um, hold on a minute.");
	adventure.newLine();
	adventure.print(true, "Are you sure that your name is actually \"");
		adventure.print(false, adventure.variables.name, "cyan");
		adventure.print(false, "?\"");
	adventure.input("nameConfirm", "createGameConfirm");
	//createCookie("", "", 99999999)
}

function createGameConfirm() {
	if (adventure.variables.name == 1) {
		adventure.clear(adventure.variables.name);
		storeNewGame();
	} else if (adventure.variables.name == 0) {
		adventure.clear();
		createGameInput("fraud");
	}
}

function adventure.variables.name() {
	
}

function loadGame() {}
function deleteGame() {}
function options() {}

//=================\\
//    ADVENTURE    \\
//      BEGIN      \\
//=================\\

//never mind lol