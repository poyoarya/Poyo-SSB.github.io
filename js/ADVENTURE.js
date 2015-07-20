$(window).keydown(function(e) {
	if (e.keyCode == 13 && adventure.inputVariable != null) {
		adventure.print(false, $("#input").val());
		adventure.variables[adventure.inputVariable] = $("#input").val();
		adventure.inputVariable = null;
		$("#input").remove();
	}
});

var adventure = {
	inputVariable: null,
	
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
	
	pause: function() {
	},
	
	clear: function() {
		while ($("#console").children().length > 0) {   
			$("#console").children().last().remove();
		}
	},
	
	input: function(variable) {
		$("#console").children().last().append(
			$("<input id=\"input\" wrap=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" rows=\"1\" maxlength=\"32\" focus></input>")
		);
		this.inputVariable = variable;
	},
	
	variables: {
		
	}
}