var characters = [
  	"A",
	"R",
	"L",
	"E",
	"N",
	"S",
	"T",
	"I",
	"K",
	"O",
	"D",
	"G",
	"M",
	"B",
	"U",
	"V",
	"P",
	"F",
	"J",
	"Ä",
	"Y",
	"Ö",
	"H",
	"Å",
	"C",
	"X",
	"Z",
	"W"
];

var combo2 = [
		"ER",
	"ST",
	"EN",
	"AN",
	"TA",
	"LI",
	"LA",
	"AR",
	"RA",
	"AL",
	"IN",
	"OR",
	"TE",
	"LL",
	"KA",
	"MA",
	"RE",
	"RI",
	"DA",
	"IG",
	"VI",
	"IS",
	"LE",
	"ND",
	"NG",
	"EL",
	"SK",
	"SA",
	"TI",
	"IL",
	"TT",
	"IK",
	"OL",
	"DE",
	"TR",
	"NA",
	"NE",
	"PA",
	"VA",
	"ÄR",
	"AS",
	"BO",
	"ME",
	"AT",
	"GA",
	"RO",
	"BE",
	"AM",
	"LS",
	"ES",
	"GE",
	"IT",
	"LO",
	"NI",
	"RU",
	"SE",
	"TO",
	"KE",
	"ON",
	"UL",
	"GR",
	"UN",
	"BY",
	"CK",
	"LU",
	"NS",
	"SI",
	"ET",
	"ED",
	"NN",
	"NO",
	"UM",
	"US",
	"VE",
	"ÖR",
	"KO",
	"RS",
	"RT",
	"BA",
	"DI",
	"FL",
	"ID",
	"SN",
	"SS",
	"EK",
	"KR",
	"KT",
	"OM",
	"SL",
	"AD",
	"BL",
	"DD",
	"DR",
	"HE",
	"JA",
	"PE",
	"AG",
	"HA",
	"JÖ",
	"MI",
	"OS",
	"PP",
	"RN",
	"RÖ",
	"BI",
	"HO",
	"JU",
	"KL",
	"MO",
	"UR",
	"EM",
	"FA",
	"GL",
	"JO",
	"LD",
	"LM",
	"RD",
	"RK",
	"RÄ",
	"AK",
	"FI",
	"IM",
	"LT",
	"IA",
	"LY",
	"MM",
	"RR",
	"SO",
	"SU",
	"AV",
	"BR",
	"GG",
	"HU",
	"KI",
	"NT",
	"OD",
	"PL",
	"RP",
	"SP",
	"UT",
	"FR",
	"GI",
	"GO",
	"IR",
	"LÄ",
	"RB",
	"RM",
	"ÄT",
	"IV",
	"JE",
	"LJ",
	"LÖ",
	"RG",
	"RL",
	"RY",
	"ÅS",
	"ÄN",
	"ÄS",
	"AB",
	"JÄ",
	"MS",
	"NÄ",
	"PR",
	"TU",
	"GN",
	"KU",
	"KV",
	"LV",
	"MP",
	"OK",
	"SV",
	"UD",
	"VÄ",
	"ÅN",
	"ÖN",
	"AJ",
	"BB",
	"EB",
	"FE",
	"FO",
	"GU",
	"IB",
	"IP",
	"KÄ",
	"LB",
	"NU",
	"OP",
	"SB",
	"SJ",
	"ÄL",
	"AP",
	"MÅ",
	"NÖ",
	"PO",
	"SM",
	"UG",
	"YL",
	"BÄ",
	"DO",
	"EJ",
	"KN",
	"KS",
	"MU",
	"NJ",
	"NK",
	"OB",
	"OT",
	"PI",
	"TB",
	"UP",
	"VÅ",
	"YD",
	"YT",
	"ÅL",
	"ÅR",
	"BJ",
	"DU",
	"EG",
	"EI",
	"EV",
	"FJ",
	"FT",
	"GS",
	"LÅ",
	"OF",
	"OV",
	"PS",
	"RV",
	"TS",
	"TV",
	"TY",
	"YS",
	"AC",
	"IU",
	"MY",
	"MÖ",
	"OG",
	"TJ",
	"UK",
	"UV",
	"YC",
	"YG",
	"ÖS",
	"BU",
	"EA",
	"EX",
	"FF",
	"IO",
	"KÖ",
	"LF",
	"LG",
	"LK",
	"NV",
	"OJ",
	"RÅ",
	"SY",
	"VS",
	"YN",
	"YR",
	"ÅG",
	"ÄC",
	"ÖM",
	"AF",
	"CE",
	"CI",
	"DM",
	"DS",
	"DV",
	"DY",
	"EC",
	"EF",
	"FÄ",
	"GY",
	"HJ",
	"IC",
	"IX",
	"JS",
	"NB",
	"NL",
	"NY",
	"OC",
	"PU",
	"SD",
	"SÖ",
	"TÅ",
	"TÄ",
	"UB",
	"ÄG",
	"ÄM",
	"AX",
	"DL",
	"FÅ",
	"FÖ",
	"GÅ",
	"HÄ",
	"HÖ",
	"IF",
	"JK",
	"KM",
	"KÅ",
	"LH",
	"MJ",
	"MR",
	"MÄ",
	"NÅ",
	"OA",
	"PT",
	"SF",
	"VO",
	"XT",
	"ÅD",
	"ÅV",
	"ÄD",
	"ÖD",
	"ÖJ",
	"ÖK",
	"ÖV",
	"AU",
	"BÅ",
	"BÖ",
	"CH",
	"DG",
	"EH",
	"EP",
	"FU",
	"GÖ",
	"HÅ",
	"IE",
	"JT",
	"KK",
	"KY",
	"ML",
	"MN",
	"MT",
	"NH",
	"NR",
	"PÄ",
	"RF",
	"RJ",
	"SÅ",
	"TH",
	"TL",
	"TÖ",
	"UF",
	"YK",
	"YM",
	"ÅB",
	"ÅT",
	"ÄK",
	"ÖL",
	"AI",
	"BS",
	"CA",
	"DB",
	"DH",
	"DJ",
	"DN",
	"DÄ",
	"FY",
	"GB",
	"GJ",
	"HY",
	"JI",
	"JM",
	"KH",
	"MF",
	"MV",
	"OH",
	"OX",
	"PJ",
	"PY",
	"PÅ",
	"RH",
	"SH",
	"SÄ",
	"UA",
	"VB",
	"VR",
	"VT",
	"VU",
	"XA",
	"XE",
	"YP",
	"ÄP",
	"ÄV",
	"ÖG",
	"AE",
	"AH",
	"CL",
	"CY",
	"DP",
	"DT",
	"DÅ",
	"EU",
	"EZ",
	"EÅ",
	"FN",
	"GH",
	"GT",
	"GV",
	"GÄ",
	"HI",
	"IÄ",
	"JB",
	"JL",
	"JV",
	"JY",
	"KB",
	"KJ",
	"KP",
	"LN",
	"LP",
	"LR",
	"MB",
	"MD",
	"MH",
	"NC",
	"NF",
	"OO",
	"OU",
	"OÅ",
	"OÄ",
	"PV",
	"PÖ",
	"SC",
	"SG",
	"TD",
	"TF",
	"TG",
	"TM",
	"TN",
	"VD",
	"VL",
	"VN",
	"VY",
	"WI",
	"XB",
	"XI",
	"XK",
	"XP",
	"XS",
	"XÅ",
	"YB",
	"YF",
	"YH",
	"ZI",
	"ÅK",
	"ÅÅ",
	"ÄF",
	"ÄJ",
	"ÄX",
	"ÖA",
	"ÖF",
	"ÖP",
	"ÖT",
	"ÖY"
];

function Generate () {
	var char1 = getLetter ();
	var wordParts = [char1];
	var shouldGenerate = true;
	var seqCons = 0;
	var seqVow = 0;
	while (shouldGenerate) {
		if (wordParts.length < 3) {
			var c = getRelevantCombo (wordParts[wordParts.length - 1]);
			/*
			if (!isVowel (c)) {
				seqCons ++;
				seqVow = 0;
			} else {
				seqCons = 0;
				seqVow ++;
			}
			if (seqCons <= 2 && seqVow <= 2) {
				wordParts.push (c);
			} else {
				if (isVowel (c)) {
					while (isVowel (c)) {
						c = getRelevantCombo (wordParts[wordParts.length - 1]);
					}
				}
				if (!isVowel (c)) {
					while (!isVowel (c)) {
						c = getRelevantCombo (wordParts[wordParts.length - 1]);
					}
				}
			}
			*/
			wordParts.push (c);
		} else {
			if (Math.random () > 0.9 || wordParts.length > 8) {
				shouldGenerate = false;
			} else {
				/*
				if (!isVowel (c)) {
					seqCons ++;
					seqVow = 0;
				} else {
					seqCons = 0;
					seqVow ++;
				}
				if (seqCons <= 2 && seqVow <= 2) {
					wordParts.push (c);
				} else {
					if (isVowel (c)) {
						var d = c;
						while (isVowel (d) || d == c) {
							d = getRelevantCombo (wordParts[wordParts.length - 1]);
						}
						d = c;
					}
					if (!isVowel (c)) {
						var d = c;
						while (!isVowel (d) || d == c) {
							d = getRelevantCombo (wordParts[wordParts.length - 1]);
						}
					}
				}
				*/
				c = getRelevantCombo (wordParts[wordParts.length - 1]);
				wordParts.push (c);
			}
		}
	}
	var word = "";
	for (var i = 0; i < wordParts.length; i ++) {
		word += wordParts[i];
	}
	console.log(word);
}
function getLetter () {
	var hasChar = false;
	while (!hasChar) {
		for (var i = 0; i < characters.length; i ++) {
			if (Math.random () > 0.9) {
				return characters[i];
			}
		}
	}
}
function getRelevantCombo (char) {
	var combosTemp = [];
	for (var i = 0; i < combo2.length; i ++) {
		if (combo2[i].search (char) == 0) {
			combosTemp.push (combo2[i]);
			//console.log (combo2[i]);
		}
	}
	var hasCombo = false;
	while (!hasCombo) {
		for (var i = 0; i < combosTemp.length; i++) {
			if (Math.random () > 0.8) {
				return combosTemp[i][1];
			}
		}
	}
}

function isVowel (char) {
	return (char == "A" || 
			char == "E" || 
			char == "I" || 
			char == "O" || 
			char == "U" || 
			char == "Å" || 
			char == "Ä" || 
			char == "Ö");
}