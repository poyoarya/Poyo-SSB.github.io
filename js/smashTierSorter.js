Element.prototype.hide = function() {
	this.setAttribute("style","display: none;");
}

Element.prototype.show = function() {
	this.setAttribute("style","");
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
	for(var i = this.length - 1; i >= 0; i--) {
		if(this[i] && this[i].parentElement) {
			this[i].parentElement.removeChild(this[i]);
		}
	}
}

var finished = false;

window.addEventListener("keydown", function(e) {
	if (!finished) {
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();
		}
		if (e.keyCode === 37) {
			select(1);
		} else if (e.keyCode === 39) {
			select(2);
		} else if (e.keyCode === 38 || e.keyCode === 40) {
			select(0);
		}
	}
}, false);

var ssb4 = {
	chars: [
		{name: "Bowser", url: "bowser", score: 0},
		{name: "Bowser Jr.", url: "bowserJr", score: 0},
		{name: "Captain Falcon", url: "captainFalcon", score: 0},
		{name: "Charizard", url: "charizard", score: 0},
		{name: "Dark Pit", url: "darkPit", score: 0},
		{name: "Diddy Kong", url: "diddyKong", score: 0},
		{name: "Donkey Kong", url: "donkeyKong", score: 0},
		{name: "Dr. Mario", url: "drMario", score: 0},
		{name: "Duck Hunt Duo", url: "duckHuntDuo", score: 0},
		{name: "Falco", url: "falco", score: 0},
		{name: "Fox", url: "fox", score: 0},
		{name: "Ganondorf", url: "ganondorf", score: 0},
		{name: "Greninja", url: "greninja", score: 0},
		{name: "Ike", url: "ike", score: 0},
		{name: "Jigglypuff", url: "jigglypuff", score: 0},
		{name: "King Dedede", url: "kingDedede", score: 0},
		{name: "Kirby", url: "kirby", score: 0},
		{name: "Link", url: "link", score: 0},
		{name: "Little Mac", url: "littleMac", score: 0},
		{name: "Lucario", url: "lucario", score: 0},
		{name: "Lucas", url: "lucas", score: 0},
		{name: "Lucina", url: "lucina", score: 0},
		{name: "Luigi", url: "luigi", score: 0},
		{name: "Mario", url: "mario", score: 0},
		{name: "Marth", url: "marth", score: 0},
		{name: "Mega Man", url: "megaMan", score: 0},
		{name: "Meta Knight", url: "metaKnight", score: 0},
		{name: "Mewtwo", url: "mewtwo", score: 0},
		{name: "Mii Brawler", url: "miiBrawler", score: 0},
		{name: "Mii Gunner", url: "miiGunner", score: 0},
		{name: "Mii Swordsman", url: "miiSwordsman", score: 0},
		{name: "Mr. Game & Watch", url: "mrGameAndWatch", score: 0},
		{name: "Ness", url: "ness", score: 0},
		{name: "Olimar", url: "olimar", score: 0},
		{name: "PAC-MAN", url: "pacMan", score: 0},
		{name: "Palutena", url: "palutena", score: 0},
		{name: "Peach", url: "peach", score: 0},
		{name: "Pikachu", url: "pikachu", score: 0},
		{name: "Pit", url: "pit", score: 0},
		{name: "R.O.B.", url: "rob", score: 0},
		{name: "Robin", url: "robin", score: 0},
		{name: "Rosalina & Luma", url: "rosalinaAndLuma", score: 0},
		{name: "Roy", url: "roy", score: 0},
		{name: "Ryu", url: "ryu", score: 0},
		{name: "Samus", url: "samus", score: 0},
		{name: "Sheik", url: "sheik", score: 0},
		{name: "Shulk", url: "shulk", score: 0},
		{name: "Sonic", url: "sonic", score: 0},
		{name: "Toon Link", url: "toonLink", score: 0},
		{name: "Villager", url: "villager", score: 0},
		{name: "Wario", url: "wario", score: 0},
		{name: "Wii Fit Trainer", url: "wiiFitTrainer", score: 0},
		{name: "Yoshi", url: "yoshi", score: 0},
		{name: "Zelda", url: "zelda", score: 0},
		{name: "Zero Suit Samus", url: "zeroSuitSamus", score: 0}
	]
}

var ssbb = {
	chars: [
		{name: "Bowser", url: "bowser", score: 0},
		{name: "Captain Falcon", url: "captainFalcon", score: 0},
		{name: "Diddy Kong", url: "diddyKong", score: 0},
		{name: "Donkey Kong", url: "donkeyKong", score: 0},
		{name: "Falco", url: "falco", score: 0},
		{name: "Fox", url: "fox", score: 0},
		{name: "Ganondorf", url: "ganondorf", score: 0},
		{name: "Ice Climbers", url: "iceClimbers", score: 0},
		{name: "Ike", url: "ike", score: 0},
		{name: "Jigglypuff", url: "jigglypuff", score: 0},
		{name: "King Dedede", url: "kingDedede", score: 0},
		{name: "Kirby", url: "kirby", score: 0},
		{name: "Link", url: "link", score: 0},
		{name: "Lucario", url: "lucario", score: 0},
		{name: "Lucas", url: "lucas", score: 0},
		{name: "Luigi", url: "luigi", score: 0},
		{name: "Mario", url: "mario", score: 0},
		{name: "Marth", url: "marth", score: 0},
		{name: "Meta Knight", url: "metaKnight", score: 0},
		{name: "Mr. Game & Watch", url: "mrGameAndWatch", score: 0},
		{name: "Ness", url: "ness", score: 0},
		{name: "Pit", url: "pit", score: 0},
		{name: "Pok\u00e9mon Trainer", url: "pokemonTrainer", score: 0},
		{name: "R.O.B.", url: "rob", score: 0},
		{name: "Samus", url: "samus", score: 0},
		{name: "Sheik", url: "sheik", score: 0},
		{name: "Snake", url: "snake", score: 0},
		{name: "Sonic", url: "sonic", score: 0},
		{name: "Toon Link", url: "toonLink", score: 0},
		{name: "Wario", url: "wario", score: 0},
		{name: "Wolf", url: "wolf", score: 0},
		{name: "Yoshi", url: "yoshi", score: 0},
		{name: "Zelda", url: "zelda", score: 0},
		{name: "Zero Suit Samus", url: "zeroSuitSamus", score: 0}
	]
}

var ssbm = {
	chars: [
		{name: "Bowser", url: "bowser", score: 0},
		{name: "Captain Falcon", url: "captainFalcon", score: 0},
		{name: "Donkey Kong", url: "donkeyKong", score: 0},
		{name: "Dr. Mario", url: "drMario", score: 0},
		{name: "Falco", url: "falco", score: 0},
		{name: "Fox", url: "fox", score: 0},
		{name: "Ganondorf", url: "ganondorf", score: 0},
		{name: "Ice Climbers", url: "iceClimbers", score: 0},
		{name: "Jigglypuff", url: "jigglypuff", score: 0},
		{name: "Kirby", url: "kirby", score: 0},
		{name: "Link", url: "link", score: 0},
		{name: "Luigi", url: "luigi", score: 0},
		{name: "Mario", url: "mario", score: 0},
		{name: "Marth", url: "marth", score: 0},
		{name: "Mewtwo", url: "mewtwo", score: 0},
		{name: "Mr. Game & Watch", url: "mrGameAndWatch", score: 0},
		{name: "Ness", url: "ness", score: 0},
		{name: "Peach", url: "peach", score: 0},
		{name: "Pichu", url: "pichu", score: 0},
		{name: "Pikachu", url: "pikachu", score: 0},
		{name: "Roy", url: "roy", score: 0},
		{name: "Samus", url: "samus", score: 0},
		{name: "Sheik", url: "sheik", score: 0},
		{name: "Yoshi", url: "yoshi", score: 0},
		{name: "Young Link", url: "youngLink", score: 0},
		{name: "Zelda", url: "zelda", score: 0}
	]
}

var ssb64 = {
	chars: [
		{name: "Captain Falcon", url: "captainFalcon", score: 0},
		{name: "Donkey Kong", url: "donkeyKong", score: 0},
		{name: "Fox", url: "fox", score: 0},
		{name: "Jigglypuff", url: "jigglypuff", score: 0},
		{name: "Kirby", url: "kirby", score: 0},
		{name: "Link", url: "link", score: 0},
		{name: "Luigi", url: "luigi", score: 0},
		{name: "Mario", url: "mario", score: 0},
		{name: "Ness", url: "ness", score: 0},
		{name: "Pikachu", url: "pikachu", score: 0},
		{name: "Samus", url: "samus", score: 0},
		{name: "Yoshi", url: "yoshi", score: 0}
	]
}

function setCharacter(game, slot, id) {
	name = window[game].chars[id].name;
	url = window[game].chars[id].url;
	if (typeof window[game] != "object") {
		throw "SmashError: \"" + game + "\" is not a game";
	}
	if (slot > 2 || slot < 1) {
		throw "SmashError: Only supported slots are 1 and 2";			
	}
	document.getElementById("option" + slot).setAttribute("src", "css/images/smashTierSorter/" + game + "/"  + url + ".png");
	document.getElementById("option" + slot + "Label").innerHTML = name;
}

function select(slot) {
	if (slot == 1) {
		ssb4.chars[pos1].score++;
	} else if (slot == 2) {
		window[currentGame].chars[pos2].score++;
	}
	
	if (pos2 < window[currentGame].chars.length - 1) {
		pos2++;
		option2 = window[currentGame].chars[pos2];
	} else if (pos1 < window[currentGame].chars.length - 2) {
		pos1++;
		pos2 = 1 + pos1;
		option1 = window[currentGame].chars[pos1]
		option2 = window[currentGame].chars[pos2]
	} else {
		output();
		return;
	}
	setCharacter(currentGame, 1, pos1);
	setCharacter(currentGame, 2, pos2);
	questionNumber++;
	document.getElementById("questionNumber").innerHTML = questionNumber;
}

function output() {
	window.finalArray = window[currentGame].chars;
	finalArray.sort(function(a,b) {
		return b.score - a.score;  
	});
	
	window.finalArray = finalArray.map(function(item, i) {
		if (i > 0) {
			var prevItem = finalArray[i - 1];
			if (prevItem.score == item.score) {
				item.rank = prevItem.rank;
			} else {
				item.rank = i + 1;
			}
		} else {
			item.rank = 1;
		}
		
		return item;
	});
	
	document.getElementById("flairText").innerHTML = "The results...";

	document.getElementById("question").hide();
	document.getElementById("labels").hide();
	document.getElementById("option1Label").hide();
	document.getElementById("option2Label").hide();
	document.getElementById("neitherLabel").hide();
	document.getElementById("option1").hide();
	document.getElementById("option2").hide();
	document.getElementById("neither").hide();
	
	for (var i = 0; i < finalArray.length; i++) {
		var row = document.createElement("tr");
		row.setAttribute("id","row" + i);
		var col1 = document.createElement("td");
		var col2 = document.createElement("td");
		col1.setAttribute("class","numberRow");
		col2.setAttribute("class","nameRow");
		col1.appendChild(document.createTextNode(finalArray[i].rank + "."));
		col2.appendChild(document.createTextNode(finalArray[i].name));
		row.appendChild(col1);
		row.appendChild(col2);
		document.getElementById("results").appendChild(row);
	}
	
	window.finished = true;
}

var questionNumber = 1;

function reset(game) {
	while (document.getElementById("results").hasChildNodes()) {   
		document.getElementById("results").removeChild(document.getElementById("results").firstChild);
	}
	
	document.getElementById("question").show();
	document.getElementById("labels").show();
	document.getElementById("option1Label").show();
	document.getElementById("option2Label").show();
	document.getElementById("neitherLabel").show();
	document.getElementById("option1").show();
	document.getElementById("option2").show();
	document.getElementById("neither").show();
	
	window.currentGame = game;
	if ((!window.finished) && (questionNumber != 1)) {
		var conf = confirm("Are you sure you want to reset? You're not done with this one!");
		if (conf != true) {
			return;
		}
	}
	
	window.finished = false;
	questionNumber = 1;

	window.option1 = window[game].chars[0];
	window.option2 = window[game].chars[1];
	window.pos1 = 0;
	window.pos2 = 1;

	setCharacter(game, 1, pos1);
	setCharacter(game, 2, pos2);
}

reset("ssb4");