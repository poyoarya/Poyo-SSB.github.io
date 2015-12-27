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

String.prototype.urlify = function() {
	return this.replace(/&/g," And ").replace(/[\.,-\/#!$%\^\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {return index == 0 ? letter.toLowerCase() : letter.toUpperCase();}).replace(/\s+/g, '');
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

var ssb4 = [
	"Bowser",
	"Bowser Jr.",
	"Captain Falcon",
	"Charizard",
	"Dark Pit",
	"Diddy Kong",
	"Donkey Kong",
	"Dr. Mario",
	"Duck Hunt Duo",
	"Falco",
	"Fox",
	"Ganondorf",
	"Greninja",
	"Ike",
	"Jigglypuff",
	"King Dedede",
	"Kirby",
	"Link",
	"Little Mac",
	"Lucario",
	"Lucas",
	"Lucina",
	"Luigi",
	"Mario",
	"Marth",
	"Mega Man",
	"Meta Knight",
	"Mewtwo",
	"Mii Brawler",
	"Mii Gunner",
	"Mii Swordsman",
	"Mr. Game & Watch",
	"Ness",
	"Olimar",
	"PAC-MAN",
	"Palutena",
	"Peach",
	"Pikachu",
	"Pit",
	"R.O.B.",
	"Robin",
	"Rosalina & Luma",
	"Roy",
	"Ryu",
	"Samus",
	"Sheik",
	"Shulk",
	"Sonic",
	"Toon Link",
	"Villager",
	"Wario",
	"Wii Fit Trainer",
	"Yoshi",
	"Zelda",
	"Zero Suit Samus",
]

var ssbb = [
	"Bowser",
	"Captain Falcon",
	"Diddy Kong",
	"Donkey Kong",
	"Falco",
	"Fox",
	"Ganondorf",
	"Ice Climbers",
	"Ike",
	"Jigglypuff",
	"King Dedede",
	"Kirby",
	"Link",
	"Lucario",
	"Lucas",
	"Luigi",
	"Mario",
	"Marth",
	"Meta Knight",
	"Mr. Game & Watch",
	"Ness",
	"Pit",
	"Pok\u00e9mon Trainer",
	"R.O.B.",
	"Samus",
	"Sheik",
	"Snake",
	"Sonic",
	"Toon Link",
	"Wario",
	"Wolf",
	"Yoshi",
	"Zelda",
	"Zero Suit Samus",
]

var ssbm = [
	"Bowser",
	"Captain Falcon",
	"Donkey Kong",
	"Dr. Mario",
	"Falco",
	"Fox",
	"Ganondorf",
	"Ice Climbers",
	"Jigglypuff",
	"Kirby",
	"Link",
	"Luigi",
	"Mario",
	"Marth",
	"Mewtwo",
	"Mr. Game & Watch",
	"Ness",
	"Peach",
	"Pichu",
	"Pikachu",
	"Roy",
	"Samus",
	"Sheik",
	"Yoshi",
	"Young Link",
	"Zelda",
]

var ssb64 = [
	"Captain Falcon",
	"Donkey Kong",
	"Fox",
	"Jigglypuff",
	"Kirby",
	"Link",
	"Luigi",
	"Mario",
	"Ness",
	"Pikachu",
	"Samus",
	"Yoshi",
]

function PrefList(n) {
    this.size = n;
    this.items = [{item: 0, equals: []}];
    this.current = {item: 1, try: 0, min: 0, max: 1};

    this.addAnswer = function(x, y, pref) {
        if (pref == 0) {
            this.items[this.current.try].equals.push(this.current.item);
            this.current = {item: ++this.current.item, try: 0, min: 0, max: this.items.length};
        } else {
            if (pref == -1) this.current.max = this.current.try
            else this.current.min = this.current.try + 1;
            if (this.current.min == this.current.max) {
                this.items.splice(this.current.min, 0, {item: this.current.item, equals: []});
                this.current = {item: ++this.current.item, try: 0, min: 0, max: this.items.length};
            }
        }
    }

    this.getQuestion = function() {
        if (this.current.item >= this.size) return null;
        this.current.try = Math.floor((this.current.min + this.current.max) / 2);
        return({a: this.current.item, b: this.items[this.current.try].item});
    }

    this.getOrder = function() {
        var index = [];
        for (var i in this.items) {
            index.push(this.items[i].item);
            for (var j in this.items[i].equals) {
                index.push(this.items[i].equals[j]);
            }
        }
        return(index);
    }
}

// THIS FUNCTION ACTS AS THE PERSON ANSWERING THE QUESTIONS
function preference(a, b) {
    return parseInt(prompt(fruit[table.getQuestion().a] + " vs. " + fruit[table.getQuestion().b]));
}

function setCharacter(game, slot, id) {
	name = window[game][id];
	url = name.urlify();
	document.getElementById("option" + slot).setAttribute("src", "css/images/smashTierSorter/" + game + "/"  + url + ".png");
	document.getElementById("option" + slot + "Label").innerHTML = name;
}

function output() {
	alert(table.getOrder());
	/*	
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
	*/
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

	window.table = new PrefList(fruit.length);
	window.questionNumber = 0;
	window.question;

	while (question = table.getQuestion()) {
		document.write(++c + ". " + fruit[q.a] + " or " + fruit[q.b] + "?<BR>");
		var answer = preference(fruit[q.a], fruit[q.b]);
		document.write("&nbsp;&rarr; " + [fruit[q.a], "no preference", fruit[q.b]][answer + 1] + "<BR>");
		t.addAnswer(q.a, q.b, answer);
	}
}

reset("ssb4");