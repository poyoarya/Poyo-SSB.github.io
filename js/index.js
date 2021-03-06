var sheet = document.getElementById("stylesheet");

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	var r, g, b
	r = parseInt(result[1], 16)
	g = parseInt(result[2], 16)
	b = parseInt(result[3], 16)
	return [r, g, b];
}
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h*360, s*100, l*100];
}

var buttons = document.body.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++) {
	var rgb = hexToRgb(buttons[i].getAttribute("buttoncolor"));
	var hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);
	if (rgb[1] > 153) {
		sheet.innerHTML = sheet.innerHTML + "#" + buttons[i].id + " {color: black;background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+10) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-10) + "%, 1) 100%)}\r" + 
											"#" + buttons[i].id + ":hover {background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+18) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-2) + "%, 1) 100%)}\r" + 
											"#" + buttons[i].id + ":active {background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-10) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+10) + "%, 1) 100%)}\r"
	} else {
		sheet.innerHTML = sheet.innerHTML + "#" + buttons[i].id + " {color: white;background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+10) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-10) + "%, 1) 100%)}\r" + 
											"#" + buttons[i].id + ":hover {background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+18) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-2) + "%, 1) 100%)}\r" + 
											"#" + buttons[i].id + ":active {background:linear-gradient(to bottom, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]-10) + "%, 1) 5%, hsla(" + hsl[0] + ", " + hsl[1] + "%, " + (hsl[2]+10) + "%, 1) 100%)}\r"
	}
}