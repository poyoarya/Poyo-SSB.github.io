var ikeas = [
			//todo
			];

var chars = [
			"A", 
			"B", 
			"C", 
			"D", 
			"E", 
			"F", 
			"G", 
			"H", 
			"I", 
			"J", 
			"K", 
			"L", 
			"M", 
			"N", 
			"O", 
			"P", 
			"Q", 
			"R", 
			"S", 
			"T", 
			"U", 
			"V", 
			"W", 
			"X", 
			"Y", 
			"Z", 
			"Å", 
			"Ä", 
			"Ö"
			];

var combos = [];
for (int i = 0; i < chars.length; i++) {
	var combo = chars[i];
	for (int k = 0; k < ikeas.length; i++) {
		if (ikeas[k].search (combo[i]) != -1) {
		}
	}
}

for (int i = 0; i < chars.length; i ++) {
	for (int k = 0; k < chars.length; k ++) {
		for (int e = 0; e < combos.length; i ++) {
			if (combos[e] === null) {
				combos.push ({name: chars[i]+chars[k], hits: 1});
				break;
			}
		}
	}
}