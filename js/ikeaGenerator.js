String.prototype.lastLetter = function(offset) {
	if (!offset) {offset = 0}
	return this.substring(this.length - 1 - offset, this.length-offset).toUpperCase();
}

String.prototype.isVowel = function() {
	return ["A","E","I","O","U","\u00C5","\u00C4","\u00D6"].indexOf(this.toUpperCase()) !== -1;
}

String.prototype.isConsonant = function() {
	return ["B","C","D","F","G","H","J","K","L","M","N","P","R","S","T","V","W","Y","Z"].indexOf(this.toUpperCase()) !== -1;
}

String.prototype.isAccent = function() {
	return ["\u00C5","\u00C4","\u00D6"].indexOf(this.toUpperCase()) !== -1;
}

Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.containsAccent = function() {
	for (i=0; i <= this.length; i++) {
		if (i == this.length) {
			return false
		} else if (this[i][0].isAccent()) {
			return true;
		}
	}
}

Array.prototype.containsVowel = function() {
	for (i=0; i <= this.length; i++) {
		if (i == this.length) {
			return false
		} else if (this[i][0].isVowel()) {
			return true;
		}
	}
}

Array.prototype.containsConsonant = function() {
	for (i=0; i <= this.length; i++) {
		if (i == this.length) {
			return false
		} else if (this[i][0].isConsonant()) {
			return true;
		}
	}
}

var vowelBeginnings = [
	"A",
	"E",
	"I",
	"O",
	"U"
];

var vowelAccentBeginnings = [
	"\u00C5",
	"\u00C4",
	"\u00D6"
];

var consonantBeginnings = [
	"B",
	"C",
	"D",
	"F",
	"G",
	"H",
	"J",
	"K",
	"L",
	"M",
	"N",
	"P",
	"R",
	"S",
	"T",
	"V",
	"W",
	"Y",
	"Z"
];

var possibilities = {
	"A": ["B", "D", "G", "R", "I", "K", "L", "M", "N", "P", "S", "T", "U", "V", "C", "H", "F", "J", "X", "E"],
	"B": ["S", "O", "A", "E", "I", "B", "J", "L", "R", "U", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"C": ["K", "A", "E", "I", "H", "L", "Y"],
	"D": ["M", "A", "R", "N", "D", "E", "I", "L", "H", "S", "Y", "J", "O", "U", "V", "\u00C5", "\u00C4", "G", "T", "B", "P"],
	"E": ["T", "D", "B", "M", "L", "K", "S", "A", "H", "N", "R", "V", "F", "C", "G", "I", "P", "X", "J", "U"],
	"F": ["O", "A", "R", "T", "F", "E", "J", "I", "L", "N", "U", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"G": ["A", "E", "N", "G", "I", "S", "U", "V", "O", "\u00D6", "B", "J", "L", "R", "Y", "\u00C5", "\u00C4", "H"],
	"H": ["O", "A", "\u00D6", "U", "E", "J", "Y", "\u00C5", "\u00C4", "I"],
	"I": ["N", "S", "T", "F", "L", "U", "B", "G", "M", "X", "P", "D", "R", "K", "O", "V", "A", "C", "E", "\u00C4"],
	"J": ["A", "U", "\u00C4", "\u00D6", "O", "K", "E", "T", "I", "Y", "S", "B", "V", "L", "M"],
	"K": ["S", "U", "A", "\u00C4", "E", "R", "V", "\u00C5", "J", "T", "B", "O", "L", "I", "\u00D6", "K", "M", "N", "Y", "P", "H"],
	"L": ["A", "E", "K", "I", "L", "S", "V", "\u00C4", "U", "O", "M", "D", "\u00C5", "Y", "F", "G", "\u00D6", "B", "H", "T", "R", "J", "N", "P"],
	"M": ["E", "\u00C5", "A", "O", "I", "M", "S", "\u00D6", "U", "P", "B", "N", "T", "L", "D", "F", "R", "J", "Y", "\u00C4", "V", "H"],
	"N": ["A", "D", "E", "I", "J", "N", "O", "R", "S", "T", "G", "H", "U", "K", "\u00C4", "V", "L", "\u00D6", "\u00C5", "F", "Y", "C", "B"],
	"O": ["R", "D", "N", "L", "M", "C", "S", "A", "H", "\u00C5", "F", "K", "P", "T", "B", "G", "J", "V", "X", "\u00C4"],
	"P": ["E", "U", "V", "P", "S", "I", "A", "O", "L", "T", "J", "R", "Y", "\u00C5", "\u00C4", "\u00D6"],
	"R": ["Y", "U", "E", "D", "I", "H", "R", "A", "V", "N", "O", "G", "T", "\u00C4", "\u00D6", "S", "K", "B", "J", "M", "F", "L", "P", "\u00C5"],
	"S": ["O", "D", "A", "E", "T", "V", "L", "S", "K", "P", "I", "B", "J", "N", "F", "Y", "H", "G", "U", "\u00D6", "\u00C5", "C", "M", "\u00C4"],
	"T": ["E", "I", "O", "R", "N", "T", "Y", "A", "B", "U", "D", "V", "S", "L", "J", "\u00D6", "F", "\u00C5", "G", "H", "\u00C4", "M"],
	"U": ["R", "T", "N", "D", "K", "L", "M", "S", "G", "F", "V", "A", "B", "P"],
	"V": ["I", "\u00C4", "A", "E", "U", "O", "\u00C5", "Y", "B", "T", "S", "N", "L", "R"],
	"W": ["I"],
	"X": ["K", "P", "I", "E", "T", "S", "B", "\u00C5"],
	"Y": ["L", "N", "G", "H", "P", "R", "C", "T", "K", "B", "S", "D", "F", "M"],
	"Z": ["I"],
	"\u00C5": ["L", "D", "S", "G", "V", "T", "R", "B", "N", "K", "\u00C5"],
	"\u00C4": ["N", "T", "R", "D", "S", "L", "M", "C", "J", "G", "P", "K", "F", "V", "X"],
	"\u00D6": ["V", "R", "J", "L", "M", "N", "D", "K", "G", "F", "S", "P"]
}

var endings = {
	"A": ["RM", "LG", "RP", "RS", "PA", "RV", "LK", "ND", "NT", "TA", "RD", "RA", "LL", "LT", "SA", "NG", "RM", "ST", "TA", "VE", "NS", "LA", "ND", "RP", "DO", "ST", "RD", "TI", "NG", "NT", "NA", "RP", "ND", "KE", "ND", "RE", "TS", "NS", "RI", "PA", "NJ", "CK", "DD", "NG", "LL", "BB", "MA", "RE", "RT", "CK", "DE", "TS", "BO", "ND", "RP", "LM", "ND", "TA", "LJ", "LL", "EL", "R\u00D6", "TT", "N\u00D6", "LD", "RP", "JA", "RK", "NK", "ND", "PS", "RA", "ST", "RD", "LA", "PA", "NG", "KA", "ND", "CK", "LT", "VE", "JS", "LA", "JT", "GA", "RP", "TT", "ST", "ND", "RE", "SS", "RE", "RP", "R\u00D6"],
	"B": ["BI", "AR", "ER", "LA", "ET", "LE", "AR", "BE", "EH", "AL", "AR", "RO", "OL", "BA", "LA", "\u00C4K", "BO", "IG", "\u00C4R", "BA", "\u00C4R", "AR", "IL", "AR", "AN", "\u00C4R", "AR"],
	"C": ["KA", "KE", "IA", "IS", "KA", "IA", "KA", "KA", "KE", "KA"],
	"D": ["AL", "NA", "EN", "LA", "AD", "EN", "ET", "EN", "IS", "ER", "YR", "ER", "IT", "IG", "AM", "IV", "IT", "RA", "EN", "E\u00C5", "IS", "EN", "DA", "RA", "AL", "AL", "AL", "AL", "IS", "EX", "AL", "EN", "BY", "DA", "AL", "AN", "AL", "AL", "DE", "UM", "AL", "EL", "AL", "US", "AL", "OR", "EN", "DA", "ER", "EL", "ER", "AL", "DA", "DA", "AL", "DA", "RA", "AL", "EN", "RA", "UM", "AL", "EN"],
	"E": ["TE", "DA", "KT", "ST", "TA", "TT", "RA", "RA", "LV", "KA", "RT", "RA", "KT", "NT", "R\u00D6", "BY", "MU", "RT", "J\u00D6", "NA", "RA", "LL", "RT", "NN", "MO", "RA", "AT", "DA", "AL", "DA", "FF", "RG", "BO", "NS", "TT", "NS", "RS", "NT", "KT", "BO", "RT", "TT", "BY", "KA", "NA", "RG", "RG", "BY", "LE", "RG", "US", "TE", "RN", "LL", "BO", "RA", "LL", "DA", "DD", "KO", "NS", "SA", "RA", "LA", "RA", "NT", "IG", "RA", "JA", "KA", "RA", "JE", "RN", "IM", "R\u00D6", "IT", "RG", "VA", "RA", "TE", "TT", "TA", "LE"],
	"F": ["TA", "AS", "IL", "R\u00D6", "TA", "FE", "ER", "IK", "IK", "LA", "FA", "IA", "AN", "\u00C4R", "IN", "\u00C4R", "TA"],
	"G": ["AM", "EN", "NE", "GE", "IS", "UM", "EL", "GA", "AN", "ON", "\u00D6R", "AR", "BY", "AN", "ER", "JO", "UR", "EL", "ST", "ON", "OR", "GY", "EN", "\u00D6R", "LO", "EN", "ER", "GA", "RA", "AN", "RA", "YM", "ER", "EN", "GA", "IS", "AN", "ER", "ST", "ER", "EL", "EL", "NA", "EL", "EL", "GA", "UM", "ER", "GA", "ER", "NE", "IG", "ER", "IS", "EN", "IS", "LA"],
	"H": ["OB", "OO", "AN", "EM"],
	"I": ["NA", "SK", "NE", "TA", "US", "LD", "NN", "SK", "ST", "BY", "LD", "MP", "XT", "TA", "UM", "PS", "UM", "NG", "OD", "TO", "ON", "LL", "NG", "DE", "NA", "AS", "SK", "UM", "NG", "TT", "VT", "AN", "SK", "LT", "RA", "SK", "XA", "SS", "NG", "KA", "ON", "MT", "AT", "SK", "RA", "SK", "US", "NA", "ST", "RP", "SK", "NG", "BY", "ST", "GT", "VA", "LL", "US", "EN", "XA", "KA", "LS", "V\u00C5", "SK", "NG", "DE", "KA", "SK", "RO", "DE", "\u00C4R", "UM", "LL", "PE", "SA", "TA", "AN", "OR", "DD", "LA", "NG", "BY", "KT", "LA", "ND", "ND", "NG", "AL", "AS", "NG", "PP", "NG", "DE", "KA", "LA", "NK", "TA"],
	"J": ["\u00D6N", "UR", "OM", "KA", "EN", "KA", "TA", "SA", "UV", "BY", "\u00D6D", "\u00C4S", "\u00D6N", "AN", "IG", "MA", "KA", "UK"],
	"K": ["UT", "\u00C4R", "ER", "AN", "RA", "EN", "EN", "\u00C4R", "EN", "EL", "AD", "AT", "BY", "\u00C5S", "SA", "TA", "IG", "TA", "EN", "\u00C4R", "EN", "EA", "OB", "ER", "IM", "ER", "EL", "AJ", "AD", "EN", "ER", "KA", "EN", "TA", "IS", "EN", "US", "\u00D6R", "EN", "ER", "OG", "EN", "\u00C4R", "AL", "IG", "ET", "\u00C4R", "\u00C4R", "\u00C4R", "IN", "IR", "OJ", "\u00C4R", "ET", "EN", "LA", "IG", "ER", "EN", "IS", "\u00C4R"],
	"L": ["EX", "AK", "VE", "IA", "OP", "MA", "IG", "LY", "AD", "OM", "L\u00D6", "IS", "AR", "MA", "EN", "IA", "LA", "G\u00C5", "LY", "EV", "ER", "IR", "IT", "YN", "YT", "IN", "EN", "AD", "EJ", "DA", "ES", "IS", "LA", "ER", "IN", "LA", "EN", "UM", "IS", "IN", "DA", "T\u00D6", "IS", "SA", "IG", "AR", "ES", "AS", "LT", "S\u00D6", "IG", "AN", "BY", "JA", "ON", "ER", "LA", "EN", "EN", "JA", "IG", "IG", "\u00D6V", "MA", "OU", "TE", "DA", "BU", "BY", "VA", "IG", "VA", "IA", "LE", "\u00D6T", "LO", "LA", "AN", "US", "IG", "BO", "EN", "IT", "IG", "IG", "LD", "IK", "BO", "MI", "IG", "IG", "OM", "\u00C5N", "AR", "LE", "IS", "IG", "IG", "KA", "GA", "IG", "SK", "UR", "BY", "IG", "SE", "YM", "L\u00D6", "IG", "MA", "IG", "IG"],
	"M": ["ON", "ON", "OA", "IN", "EN", "MA", "EN", "EN", "M\u00D6", "\u00D6R", "MA", "PA", "MA", "AR", "PA", "EN", "EN", "AT", "AK", "\u00C5N", "MA", "EN", "LE", "EN", "ER", "MA", "ET", "AN", "\u00C5S", "AR", "MA", "AN", "EN", "ON", "IG", "SK", "UT", "IL", "IX", "YS", "AR", "AL", "PT", "LA", "ER", "RA", "RA", "EN", "PA", "S\u00D6", "ON", "IN"],
	"N": ["DY", "JA", "NO", "GE", "GE", "NO", "UM", "DA", "DE", "DA", "\u00C4S", "\u00C4S", "ES", "KA", "ES", "JE", "IG", "\u00D6R", "ES", "ES", "SA", "AT", "\u00C5S", "KA", "UM", "GE", "ES", "ES", "ES", "DO", "EZ", "FO", "GO", "ER", "NE", "AS", "GE", "DA", "IN", "\u00D6S", "ST", "NI", "SA", "DA", "GO", "JE", "AN", "EN", "DE", "TA", "NE", "AL", "DE", "NA", "EN", "\u00C4S", "IG", "AN", "GE", "ON", "OT", "DA", "JE", "GA", "KT", "ES", "TA", "\u00C5S", "NI", "UM", "KA", "GA", "\u00C5R", "\u00D6A", "GA", "\u00C4S", "DE", "AN", "GA", "JA", "BY", "ES", "ES", "BY", "AN", "NI", "DE", "NA", "ER", "NA", "ES", "GA"],
	"O": ["RB", "RF", "DA", "NS", "NI", "CK", "LM", "\u00C5S", "LF", "LD", "PS", "RP", "RD", "RD", "LM", "RP", "RA", "R\u00D6", "LK", "RM", "TO", "ST", "RG", "LM", "RM", "SA", "DA", "LA", "RN", "PA", "LF", "PP", "RN", "KK", "NA", "BO", "SS", "DD", "JA", "RD", "RT", "RS", "BY", "DA", "RP", "CK", "TS", "NG", "RP", "DI", "RP", "GA", "JS", "BI", "RG", "RE", "RP", "MP", "LF", "NG", "DD", "DA", "VA", "RP", "LM", "PP", "RM", "R\u00C5", "RD", "BO", "GA", "LG", "SS"],
	"P": ["PA", "SO", "AR", "OK", "EN", "EN", "ER", "AN", "IG", "PE", "PA", "SA", "PA", "AN", "IN", "PA", "AX", "ER", "AD", "AS", "AN", "PA", "EN"],
	"R": ["YD", "UM", "EA", "UP", "IK", "AK", "EN", "IT", "TA", "\u00D6M", "R\u00C5", "\u00D6N", "EN", "BY", "IS", "UP", "UM", "BY", "JE", "IL", "ED", "ET", "RE", "IK", "UD", "UM", "IT", "AR", "EN", "KE", "S\u00C5", "IK", "IK", "EJ", "IP", "\u00C4S", "EN", "YD", "RY", "TA", "BY", "IS", "JA", "MA", "EN", "IK", "UN", "OS", "BY", "UP", "PO", "AM", "US", "YP", "TA", "NA", "AN", "ED", "EN", "\u00D6Y", "EN", "IK", "IT", "UM", "IN", "BO", "NA", "\u00C4R", "MO", "\u00D6D", "AF", "IK", "YD", "AM", "ID", "IN", "TA", "KA", "NA", "IG", "LA", "TI", "KA", "RA", "NA", "IB", "\u00C4N", "EN", "LI", "UM", "JE", "KA", "\u00C4D", "N\u00D6", "KT", "EN", "RE", "DE", "LD", "ME", "AN"],
	"S": ["SI", "ER", "BO", "T\u00C5", "TA", "SA", "TA", "KA", "J\u00D6", "SE", "LA", "KA", "TA", "J\u00D6", "EN", "EN", "TA", "TA", "K\u00D6", "TA", "T\u00C5", "TA", "ER", "IG", "AM", "PA", "EL", "J\u00D6", "UM", "LE", "\u00D6N", "T\u00D6", "BO", "J\u00D6", "BO", "ET", "TA", "TA", "TA", "BO", "AR", "N\u00D6", "BO", "EL", "TA", "\u00C5S", "AM", "IN", "ES", "J\u00D6", "IG", "IK", "SE", "BY", "J\u00D6", "UM", "SA", "LA", "OR", "CH", "IG", "TA", "KA", "TA", "IG", "OL", "TA", "AM", "SA", "AM", "SA", "IG", "BY", "UM", "AM", "EL", "TA", "TA", "TA", "TA", "AM", "EN", "AM", "AL", "LA", "EN", "J\u00D6", "BY", "KA"],
	"T": ["ER", "IK", "ER", "NA", "YD", "ER", "BY", "IL", "TA", "IG", "ER", "IS", "ET", "TE", "IG", "ID", "IV", "EL", "YG", "BO", "UN", "EN", "TA", "IA", "ID", "IG", "EN", "ER", "IG", "RA", "AD", "AL", "AV", "ED", "UA", "EN", "ET", "EN", "AN", "AD", "AD", "ER", "AD", "EN", "BY", "TY", "UR", "ER", "AR", "TE", "IG", "ER", "EN", "AL", "OL", "IM", "IG", "ER", "IN", "UR", "AD", "TO", "AD", "EN", "ID", "ED", "TA", "IG", "JA", "EN", "\u00D6R", "IS", "TA", "IS", "IG", "\u00C5R", "AN", "ET", "IG", "EN", "VA", "IK", "BO", "ER", "ID", "IN", "TA", "TA", "EN", "TA", "IG", "AN", "EK", "EN", "IL", "R\u00C5", "AN", "ES", "ER", "AG", "UR", "ED", "EL", "TA", "BO", "OR", "TA", "BY", "RA", "EN", "EN", "ID", "ER"],
	"U": ["TA", "ND", "LT", "LL", "RS", "TT", "ND", "GA", "FT", "KT", "ND", "ND", "GO", "S\u00C5", "ND", "LS", "DD", "FF", "RA", "DA", "NG", "GN", "NS", "SY", "LA", "TA", "ND", "LL", "TT", "LL", "KT", "TA", "GG", "LT", "RS", "LL", "ND", "TA", "BB", "LT", "RR", "GA", "NE", "LS", "NG", "ND", "LT", "RM", "NG", "LT", "LT", "ND"],
	"V": ["IK", "IK", "\u00C4M", "UR", "IK", "EN", "IK", "IS", "IK", "\u00C5G", "AR", "YR", "ER", "OR", "IK", "IK", "IK", "IK", "EN", "ET", "\u00C5S", "IK", "AR", "IK", "IK", "ER", "IK", "IK", "ED", "\u00C5G", "IG", "OR", "AS", "ED", "AR", "EL", "IK", "AL", "IK", "IK", "IK", "AR", "IT", "IK", "\u00C5S", "IK", "AN", "\u00C5G", "\u00C4V"],
	"X": ["IG", "EL", "BO", "\u00C5N"],
	"Y": ["LL", "NE", "GN", "BY", "LL", "CK", "FT", "SA", "RA", "RA", "DD", "GG", "TA", "DA", "MO"],
	"\u00C5": ["LA", "DA", "VA", "VA", "LA", "\u00C5N", "NN"],
	"\u00C4": ["NG", "DA", "NG", "TA", "CK", "RM", "CK", "GG", "TT", "CK", "KT", "TT", "RA", "TT", "NG", "TT", "RT", "LL", "RT", "NN", "LK", "LL", "DD", "XT"],
	"\u00D6": ["VD", "RT", "JA", "NA", "RT", "JA", "DA", "N\u00D6", "RT", "GE", "K\u00D6", "VA", "JE", "JS", "NN", "RA", "KA", "SA", "ME", "RN", "SA"]
}

function getRandInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
	\u00C5 - Å
	\u00C4 - Ä
	\u00D6 - Ö
*/

var maxLength = 9;

function validNextLetter(letter, type) {
	var storage = "";
	if (type === "v") {
		if (letter === "Y") {
			return possibilities["Y"].randomElement();
		} else {
			if ((Math.random() <= 0.8) || !(possibilities[letter].containsAccent())) { //no accent
				while ((!storage.isVowel()) || (storage === "") || (storage.isAccent())) {
					storage = possibilities[letter].randomElement();
					if (storage.isVowel() && !storage.isAccent()) {
						return storage;
					}
				}
			} else { //yes accent
				while ((!storage.isAccent()) || (storage === "")) {
					storage = possibilities[letter].randomElement();
					if (storage.isAccent()) {
						return storage;
					}
				}
			}
		}
	} else if (type === "c") {
		if (letter === "W" || letter === "Z") {
			return "I";
		} else {
			while ((!storage.isConsonant()) || (storage == "")) {
				storage = possibilities[letter].randomElement();
				if (storage.isConsonant()) {
					return storage;
				}
			}
		}
	} else if (type === "va") {
		while ((!storage.isVowel()) || (storage == "")) {
			storage = possibilities[letter].randomElement();
			if (storage.isVowel() && !storage.isAccent()) {
				return storage;
			}
		}
	} else {
		return possibilities[letter].randomElement();
	}
}

function validEnding(letter, type) {
	var storage = "";
	if (type === "v") {
		if ((Math.random() <= 0.8) || !(endings[letter].containsAccent())) { //no accent
			while ((!storage.lastLetter(1).isVowel()) || (storage === "") || (storage.lastLetter(1).isAccent())) {
				storage = endings[letter].randomElement();
				if (storage.lastLetter(1).isVowel() && !storage.lastLetter(1).isAccent()) {
					return storage;
				}
			}
		} else { //yes accent
			while ((!storage.lastLetter(1).isAccent()) || (storage === "")) {
				storage = endings[letter].randomElement();
				if (storage.lastLetter(1).isAccent()) {
					return storage;
				}
			}
		}
	} else if (type === "c") {
		while ((!storage.lastLetter(1).isConsonant()) || (storage == "")) {
			storage = endings[letter].randomElement();
			if (storage.lastLetter(1).isConsonant()) {
				return storage;
			}
		}
	} else if (type === "va") {
		while ((!storage.lastLetter(1).isVowel()) || (storage == "")) {
			storage = endings[letter].randomElement();
			if (storage.lastLetter(1).isVowel() && !storage.lastLetter(1).isAccent()) {
				return storage;
			}
		}
	} else {
		return endings[letter].randomElement();
	}
}
function generateNextLetter(string) {
	if (string === "BEGIN") {
		return vowelBeginnings.concat(vowelAccentBeginnings.concat(consonantBeginnings)).randomElement();
	} else {
		if (string.lastLetter().isVowel()) {
			if (string.lastLetter().isVowel(1)) {
				return string + validNextLetter(string.lastLetter(), "c");
			} else {
				if (Math.random() <= 0.2) {
					if (string.lastLetter().isAccent()) {
						return string + validNextLetter(string.lastLetter(), "va");
					} else {
						return string + validNextLetter(string.lastLetter(), "v");
					}
				} else {
					return string + validNextLetter(string.lastLetter(), "c");
				}
			}
		} else {
			if (string.lastLetter().isConsonant(1)) {
				if (string.lastLetter().isConsonant(2)) {
					if (string.lastLetter().isConsonant(3)) {
						return string + validNextLetter(string.lastLetter(), "v");
					}
					if (Math.random() <= 0.25) {
						return string + validNextLetter(string.lastLetter(), "c");
					} else {
						return string + validNextLetter(string.lastLetter(), "v");
					}
				}
				if (Math.random() <= 0.5) {
					return string + validNextLetter(string.lastLetter(), "c");
				} else {
					return string + validNextLetter(string.lastLetter(), "v");
				}
			} else {
				if (Math.random() <= 0.5) {
					return string + validNextLetter(string.lastLetter(), "c");
				} else {
					return string + validNextLetter(string.lastLetter(), "v");
				}
			}
		}
	}
}

function ender(string) {
	if (string.lastLetter().isVowel()) {
		if (string.lastLetter().isVowel(1)) {
			return string + validEnding(string.lastLetter(), "c");
		} else {
			if (Math.random() <= 0.2) {
				if (string.lastLetter().isAccent()) {
					return string + validEnding(string.lastLetter(), "va");
				} else {
					return string + validEnding(string.lastLetter(), "v");
				}
			} else {
				return string + validEnding(string.lastLetter(), "c");
			}
		}
	} else {
		if (string.lastLetter().isConsonant(1)) {
			if (string.lastLetter().isConsonant(2)) {
				if (string.lastLetter().isConsonant(3)) {
					return string + validEnding(string.lastLetter(), "v");
				}
				if (Math.random() <= 0.2) {
					return string + validEnding(string.lastLetter(), "c");
				} else {
					return string + validEnding(string.lastLetter(), "v");
				}
			}
			if (Math.random() <= 0.4) {
				return string + validEnding(string.lastLetter(), "c");
			} else {
				return string + validEnding(string.lastLetter(), "v");
			}
		} else {
			if (Math.random() <= 0.6) {
				return string + validEnding(string.lastLetter(), "c");
			} else {
				return string + validEnding(string.lastLetter(), "v");
			}
		}
	}
}

function generate() {
	var end = false;
	var finalString = "BEGIN";
	
	while (!end) {
		finalString = generateNextLetter(finalString);
		if (Math.random() <= ((1/maxLength)*(finalString.length-1))) {
			end = true;
		}
		if (end) {
			finalString = ender(finalString);
		}
	}
	
	/*
		at 2 letters, 10% chance of ending
		at 3 letters, 20% chance of ending
		at 4 letters, 40% chance of ending
		at 5 letters, 60% chance of ending
		at 6 letters, 80% chance of ending
		at 7 letters, 90% chance of ending
		at 8 letters, 100% chance of ending
		
		TODO while loops with consonant-only followings
		TODO generate an end
	*/
	
	document.getElementById("text").innerHTML = finalString;
}

generate();