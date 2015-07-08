/*
function setCharacter(game, slot, name) {
	var index = window[game].chars.indexOf(name);
	if (typeof window[game] != "object") {
		throw "SmashError: \"" + game + "\" is not a game";
	}
	if (slot > 2 || slot < 1) {
		throw "SmashError: Only supported slots are 1 and 2";			
	}
	if (index == -1) {
		throw "SmashError: Character name not found";
	}
	url = window[game].urls[index]
	document.getElementById("option" + slot).setAttribute("src", "css/images/smashTierSorter/" + game + url + ".png");
	document.getElementById("option" + slot + "Label").innerHTML = name;
}
*/

var finished = false;

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
		{name: "Mii Swordfighter", url: "miiSwordfighter", score: 0},
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
		{name: "Zero Suit Samus", url: "samus", score: 0}
	]
}

var option1 = $scope.foodArray[0];
var option2 = $scope.foodArray[1];
var pos1 = 0;
var pos2 = 1;

function sort() {
	//rad!
}