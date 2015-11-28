$(window).keydown(function(e) {
	if (
		(e.keyCode == 38) &&
		($("#input").prop("disabled") == false)
	) {
		$("#input").prop("value", adventure.lastInputRaw) //put last input into text box when up is pressed
	} else if (
		(e.keyCode == 13) &&
		($("#input").prop("disabled") == false)	&&
		($("#input").prop("value") != "") //input is not blank
	) { //event when input is made
		adventure.print(true, ">" + $("#input").val().trim(), "white");
		
		adventure.lastInputRaw = $("#input").val();
		
		adventure.lastInput = $("#input").val().trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
		$("#input").prop("value", "");
		
		//====================//
		
		if (adventure.isMainMenu == true) {
			if (adventure.lastInput.contains("menu.menuCreate", 0)) {
			} else if (adventure.lastInput.contains("menu.menuLoad", 0)) {
			} else if (adventure.lastInput.contains("menu.menuDelete", 0)) {
			} else if (adventure.lastInput.contains("menu.menuOption", 0)) {
			} else if (adventure.lastInput.contains("menu.menuQuit", 0) || adventure.lastInput.contains("menu.menuQuit", 1)) {
				adventure.newLine()
				adventure.print(true, "noooooooooooooooooooo");
				window.location.href = "index.html";
			} else {
				adventure.newLine();
				adventure.print(true, "That's not a command I can recognise!");
				adventure.newLine();
				mainMenu();
			}
		} else {
			alert("I'm sorry, there's been an error!");
		}
		
		//====================//
	}
})

adventure.words = {
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

function mainMenu() { //initial menu
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