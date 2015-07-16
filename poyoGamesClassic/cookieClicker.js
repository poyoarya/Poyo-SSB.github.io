	var cookies = 0
	var cookieDisplay = 0
	var CPS = 0
	var cursors = 0
	var grandmas = 0
	var farms = 0
	var factories = 0
	var mines = 0
	var shipments = 0
	var alchemyLabs = 0
	var portals = 0
	var timeMachines = 0
	var antimatterCondensers = 0
	var seconds = 0
	var minutes = 0
	var hours = 0
	var days = 0

	function addSecond() {
		if (seconds == 59) {
			seconds = 0
			document.getElementById("timeSeconds").innerHTML = seconds + " sceonds";
			setTimeout(addSecond,1000)
		} else {
			seconds = seconds + 1
			document.getElementById("timeSeconds").innerHTML = seconds + " sceonds";
			setTimeout(addSecond,1000)
		}
	}
	
	function addMinute() {
		if (minutes == 59) {
			minutes = 0
			document.getElementById("timeMinutes").innerHTML = minutes + " mintoots";
			setTimeout(addMinute,60000)
		} else {
			minutes = minutes + 1
			document.getElementById("timeMinutes").innerHTML = minutes + " mintoots";
			setTimeout(addMinute,60000)
		}
	}

	function addHour() {
		if (hours == 23) {
			hours = 0
			document.getElementById("timeHours").innerHTML = hours + " hueres";
			setTimeout(addHour,3600000)
		} else {
			hours = hours + 1
			document.getElementById("timeHours").innerHTML = hours + " hueres";
			setTimeout(addHour,3600000)
		}
	}
		
	function addDay() {
		days = days + 1
		document.getElementById("timeDay").innerHTML = days + " dyays";
		setTimeout(addDay,86400000)
	} 		

	function cookieLoop() {
		cookies = cookies + CPS
		cookieDisplay = Math.round(cookies)
		document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
		setTimeout(cookieLoop, 1000);
	}

	function dispPrice(priceOfDisplay, priceOf) {
		document.getElementById("price").innerHTML = priceOfDisplay + " cust " + priceOf + " cokies";
	}

	function resetPrice() {
		document.getElementById("price").innerHTML = "buy somting pls";
	}

	function replaceStatus() {
		document.getElementById("status").innerHTML = "nom";
	}

	function moarCookies() {
		cookies = cookies + 1;
		cookieDisplay = Math.round(cookies)
		document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
	}

	function moarCursors() {
		if (cookies >= 15) { than 15
			cursors = cursors + 1;
			CPS = CPS + 0.1;
			CPS = Math.round(CPS * 10) / 10
			cookies = cookies - 15
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun csuror"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("cursorCount").innerHTML = "csorus\u003A " + cursors;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}

	function moarGrandmas() {
		if (cookies >= 100) {
			grandmas = grandmas + 1;
			CPS = CPS + 2;
			CPS = Math.round(CPS * 10) / 10
			cookies = cookies - 100
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun grenma"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("grandmaCount").innerHTML = "grenmas\u003A " + grandmas;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}

	function moarFarms() {
		if (cookies >= 500) {
			farms = farms + 1;
			CPS = CPS + 4;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 500
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun fram"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("farmCount").innerHTML = "frams\u003A " + farms;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarFactories() {
		if (cookies >= 3000) {
			factories = factories + 1;
			CPS = CPS + 10;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 3000
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun facotie"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("factoryCount").innerHTML = "facoties\u003A " + factories;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarMines() {
		if (cookies >= 10000) {
			mines = mines + 1;
			CPS = CPS + 40;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 10000
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun mien"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("mineCount").innerHTML = "miens\u003A " + mines;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}

	function moarShipments() {
		if (cookies >= 40000) {
			shipments = shipments + 1;
			CPS = CPS + 100;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 40000
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun sipemont"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("shipmentCount").innerHTML = "sipemonts\u003A " + shipments;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarAlchemyLabs() {
		if (cookies >= 200000) {
			alchemyLabs = alchemyLabs + 1;
			CPS = CPS + 400;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 200000
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun acelme leb"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("alchemyLabCount").innerHTML = "acelme lebs\u003A " + alchemyLabs;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarPortals() {
		if (cookies >= 1666666) {
			portals = portals + 1;
			CPS = CPS + 6666;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 1666666
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun ptorlal"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("portalCount").innerHTML = "ptorlals\u003A " + portals;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarTimeMachines() {
		if (cookies >= 123456789) {
			timeMachines = timeMachines + 1;
			CPS = CPS + 98765;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 123456789
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun mime macmime"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("timeMachineCount").innerHTML = "mime macmimes\u003A " + timeMachines;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}
	
	function moarAntimatterCondensers() {
		if (cookies >= 3999999999) {
			antimatterCondensers = antimatterCondensers + 1;
			CPS = CPS + 999999;
			CPS = Math.round(CPS * 10) / 10.
			cookies = cookies - 3999999999
			cookieDisplay = Math.round(cookies)
			document.getElementById("status").innerHTML = "bot wun natimtater cnodesro"
			document.getElementById("CPS").innerHTML = "cokies por sceond\u003A " + CPS;
			document.getElementById("antimatterCondenserCount").innerHTML = "natimtater cnodesros\u003A " + antimatterCondensers;
			document.getElementById("cookieCount").innerHTML = "cokies\u003A " + cookieDisplay;
			setTimeout(replaceStatus, 3000);
		} else {
			document.getElementById("status").innerHTML = "yo ned more cokies";
			setTimeout(replaceStatus, 3000);
		}
	}

	addSecond()
	setTimeout(addMinute,59000)
	setTimeout(addHour,3599000)
	setTimeout(addDay,86399000)
	cookieLoop()