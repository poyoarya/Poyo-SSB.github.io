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
		adventure.interpret($("#input").prop("value"));
		$("#input").prop("value", "");
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
	
	interpret: function(input) {
		finalInput = input.trim();
	}
}

function mainMenu() {
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
}