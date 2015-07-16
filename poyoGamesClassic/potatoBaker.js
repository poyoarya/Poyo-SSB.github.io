	var potatoesBaked = 0
	var potatoesBakedAllTime = 0
	var potatoesInOven = 0
	var badPotatoesInOven = 0
	var goodPotatoesInOven = 0
	var ovenState = "Mini Oven"
	var potatoMax = 6
	
	var bakingMinutes = 0
	var bakingSeconds = 0
	var temp = 0
	var isBaking = 0
	var isBadPotato = 0
	
	var selectedItem = null
	
	var hasCheated = 0
	var cheatPunishState = 0
	
	function log(logMessage) {
		console.info(logMessage);
	}

	function addPotato() {
		if (potatoesInOven >= potatoMax) {
		log("Too many potatoes! (state: good)")
		} else {
			if (isBaking != 1) {
				potatoesInOven = potatoesInOven + 1
				goodPotatoesInOven = goodPotatoesInOven + 1
				document.getElementById("potatoesInOven").innerHTML = "Potatoes in Oven: " + potatoesInOven + "/6";
				log("Potato added")
				isBadPotato = Math.floor((Math.random()*20)+1);
				if (isBadPotato == 20) {
					log("Bad Potato Invoked!")
					document.getElementById("potato").src = "images/badPotato.png";
					log("src changed...")
					document.getElementById("potato").onclick = addBadPotato;
					log("onClick changed.")
				}
			} 
		}
	}
	
	function discardPotato() {
		isBadPotato = Math.floor((Math.random()*20)+1);
		if (isBadPotato == 20) {
			log("Bad Potato Invoked! (upon discard)")
			document.getElementById("potato").src = "images/badPotato.png";
			log("src changed...")
			document.getElementById("potato").onclick = addBadPotato;
			log("onClick changed.")
		} else {
			document.getElementById("potato").src = "images/potato.png";
			log("src changed back...")
			document.getElementById("potato").onclick = addPotato;
			log("onclick changed back.")
		}
	}
	
	function addBadPotato() {
		if (potatoesInOven >= potatoMax) {
			log("Too many potatoes! (state: bad)")
		} else {
			potatoesInOven = potatoesInOven + 1
			badPotatoesInOven = badPotatoesInOven + 1
			document.getElementById("potato").src = "images/potato.png";
			log("src changed back...")
			document.getElementById("potato").onclick = addPotato;
			log("onclick changed back.")
		}
	}
	
	function dispStatus() {
		if (potatoesInOven == potatoMax) {
			if (isBaking == 0) {
				document.getElementById("status").innerHTML = "The oven is full, it's time to bake!";
			}
		} else if (potatoesInOven == 0) {
			document.getElementById("status").innerHTML = "There are no potatoes in the oven!";
		} else {
			document.getElementById("status").innerHTML = "";
		} if (isBaking == 1) {
			if (bakingSeconds > 9) {
				document.getElementById("timeLeft").innerHTML = "Bake time left: " + bakingMinutes + ":" + bakingSeconds;
			} else if (bakingSeconds < 10) {
				document.getElementById("timeLeft").innerHTML = "Bake time left: " + bakingMinutes + ":0" + bakingSeconds;
			}
			document.getElementById("status").innerHTML = "Baking...";
		} else if (isBaking == 0) {
			document.getElementById("timeLeft").innerHTML = "Waiting for bake...";
		} if (badPotatoesInOven != 0) {
			if (badPotatoesInOven == 1) {
				document.getElementById("warning").innerHTML = "Warning: 1 bad potato in oven!";
			} else {
				document.getElementById("warning").innerHTML = "Warning: " + badPotatoesInOven + " bad potatoes in oven!";
			}
			if (badPotatoesInOven == potatoMax) {
				document.getElementById("warning").innerHTML = "Warning: Oven full of bad potatoes! Why would you do this?!";
			}

		}
		document.getElementById("potatoesInOven").innerHTML = "Potatoes in Oven: " + potatoesInOven + "/" + potatoMax;
		document.getElementById("potatoesTotal").innerHTML = "Potatoes baked: " + potatoesBaked;
		document.getElementById("ovenState").innerHTML = "Oven: " + ovenState;
		setTimeout(dispStatus,10)
	}
	
	dispStatus()
	
	function baking() {
		if (bakingMinutes == 2) {
			if (bakingSeconds == 0) {
				bakingMinutes = 1
				bakingSeconds = 59
				setTimeout(baking,1000)
				return;
			}
		} else if (bakingMinutes == 1) {
			if (bakingSeconds == 59) {
				bakingSeconds = 58
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 58) {
				bakingSeconds = 57
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 57) {
				bakingSeconds = 56
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 56) {
				bakingSeconds = 55
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 55) {
				bakingSeconds = 54
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 54) {
				bakingSeconds = 53
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 53) {
				bakingSeconds = 52
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 52) {
				bakingSeconds = 51
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 51) {
				bakingSeconds = 50
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 50) {
				bakingSeconds = 49
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 49) {
				bakingSeconds = 48
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 48) {
				bakingSeconds = 47
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 47) {
				bakingSeconds = 46
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 46) {
				bakingSeconds = 45
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 45) {
				bakingSeconds = 44
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 44) {
				bakingSeconds = 43
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 43) {
				bakingSeconds = 42
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 42) {
				bakingSeconds = 41
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 41) {
				bakingSeconds = 40
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 40) {
				bakingSeconds = 39
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 39) {
				bakingSeconds = 38
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 38) {
				bakingSeconds = 37
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 37) {
				bakingSeconds = 36
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 36) {
				bakingSeconds = 35
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 35) {
				bakingSeconds = 34
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 34) {
				bakingSeconds = 33
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 33) {
				bakingSeconds = 32
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 32) {
				bakingSeconds = 31
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 31) {
				bakingSeconds = 30
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 30) {
				bakingSeconds = 29
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 29) {
				bakingSeconds = 28
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 28) {
				bakingSeconds = 27
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 27) {
				bakingSeconds = 26
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 26) {
				bakingSeconds = 25
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 25) {
				bakingSeconds = 24
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 24) {
				bakingSeconds = 23
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 23) {
				bakingSeconds = 22
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 22) {
				bakingSeconds = 21
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 21) {
				bakingSeconds = 20
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 20) {
				bakingSeconds = 19
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 19) {
				bakingSeconds = 18
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 18) {
				bakingSeconds = 17
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 17) {
				bakingSeconds = 16
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 16) {
				bakingSeconds = 15
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 15) {
				bakingSeconds = 14
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 14) {
				bakingSeconds = 13
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 13) {
				bakingSeconds = 12
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 12) {
				bakingSeconds = 11
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 11) {
				bakingSeconds = 10
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 10) {
				bakingSeconds = 9
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 9) {
				bakingSeconds = 8
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 8) {
				bakingSeconds = 7
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 7) {
				bakingSeconds = 6
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 6) {
				bakingSeconds = 5
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 5) {
				bakingSeconds = 4
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 4) {
				bakingSeconds = 3
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 3) {
				bakingSeconds = 2
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 2) {
				bakingSeconds = 1
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 1) {
				bakingSeconds = 0
				temp = 1
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 0) {
				if (temp == 1) {
					bakingSeconds = 59
					bakingMinutes = 0
					setTimeout(baking,1000)
				}
			}
		} else if (bakingMinutes == 0) {
			if (bakingSeconds == 59) {
				bakingSeconds = 58
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 58) {
				bakingSeconds = 57
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 57) {
				bakingSeconds = 56
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 56) {
				bakingSeconds = 55
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 55) {
				bakingSeconds = 54
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 54) {
				bakingSeconds = 53
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 53) {
				bakingSeconds = 52
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 52) {
				bakingSeconds = 51
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 51) {
				bakingSeconds = 50
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 50) {
				bakingSeconds = 49
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 49) {
				bakingSeconds = 48
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 48) {
				bakingSeconds = 47
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 47) {
				bakingSeconds = 46
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 46) {
				bakingSeconds = 45
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 45) {
				bakingSeconds = 44
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 44) {
				bakingSeconds = 43
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 43) {
				bakingSeconds = 42
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 42) {
				bakingSeconds = 41
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 41) {
				bakingSeconds = 40
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 40) {
				bakingSeconds = 39
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 39) {
				bakingSeconds = 38
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 38) {
				bakingSeconds = 37
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 37) {
				bakingSeconds = 36
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 36) {
				bakingSeconds = 35
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 35) {
				bakingSeconds = 34
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 34) {
				bakingSeconds = 33
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 33) {
				bakingSeconds = 32
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 32) {
				bakingSeconds = 31
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 31) {
				bakingSeconds = 30
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 30) {
				bakingSeconds = 29
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 29) {
				bakingSeconds = 28
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 28) {
				bakingSeconds = 27
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 27) {
				bakingSeconds = 26
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 26) {
				bakingSeconds = 25
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 25) {
				bakingSeconds = 24
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 24) {
				bakingSeconds = 23
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 23) {
				bakingSeconds = 22
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 22) {
				bakingSeconds = 21
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 21) {
				bakingSeconds = 20
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 20) {
				bakingSeconds = 19
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 19) {
				bakingSeconds = 18
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 18) {
				bakingSeconds = 17
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 17) {
				bakingSeconds = 16
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 16) {
				bakingSeconds = 15
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 15) {
				bakingSeconds = 14
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 14) {
				bakingSeconds = 13
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 13) {
				bakingSeconds = 12
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 12) {
				bakingSeconds = 11
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 11) {
				bakingSeconds = 10
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 10) {
				bakingSeconds = 9
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 9) {
				bakingSeconds = 8
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 8) {
				bakingSeconds = 7
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 7) {
				bakingSeconds = 6
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 6) {
				bakingSeconds = 5
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 5) {
				bakingSeconds = 4
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 4) {
				bakingSeconds = 3
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 3) {
				bakingSeconds = 2
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 2) {
				bakingSeconds = 1
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 1) {
				bakingSeconds = 0
				setTimeout(baking,1000)
				return;
			} if (bakingSeconds == 0) {
				isBaking = 0
				potatoesBaked = potatoesBaked + goodPotatoesInOven
				if (badPotatoesInOven != 0) {
					potatoesBaked = potatoesBaked - Math.pow(2,badPotatoesInOven)
					log("Bad potatoes exist! :(")
				} else {
					log("No bad potatoes")
				}
				log("Finished baking.")
				potatoesInOven = 0
				goodPotatoesInOven = 0
				badPotatoesInOven = 0
			}
		}
	}
	
	function bakePotatoes() {
		if (isBaking != 1) {
			if (potatoesInOven != 0) {
				isBaking = 1
				if (ovenState == "Mini Oven") {
					bakingMinutes = 2
					bakingSeconds = 0
					log("Baking (Mini Oven)")
				}
				if (ovenState == "Double Mini Oven") {
					bakingMinutes = 1
					bakingSeconds = 45
					log("Baking (Double Mini Oven)")
				}
				setTimeout(baking,1000)
			}
		}
	}
	
	function selectItem(selectItem) {
		if (selectItem == "doubleMiniOven") {
			if (ovenState == "Double Mini Oven") {
				deselectAll()
				selectedItem = selectItem
				document.getElementById("selectDoubleMiniOven").className = "shopSelected";
				document.getElementById("itemDescription").innerHTML = "'Ey, ya already got this. Ya ain't got a need fer it!"
				document.getElementById("itemPrice1").innerHTML = ""
				document.getElementById("itemPrice2").innerHTML = ""
				document.getElementById("priceNumber").innerHTML = ""
			} else {
				deselectAll()
				selectedItem = selectItem
				document.getElementById("selectDoubleMiniOven").className = "shopSelected";
				document.getElementById("itemDescription").innerHTML = "That's a double mini oven. It can hold twice the potatoes as your little mini oven."
				document.getElementById("itemPrice1").innerHTML = "It costs "
				document.getElementById("itemPrice2").innerHTML = " potatoes. Ya gonna buy it?"
				document.getElementById("priceNumber").innerHTML = "25"
			}
		} else if (selectItem == "miniOven") {
			deselectAll()
			selectedItem = selectItem
			document.getElementById("selectMiniOven").className = "shopSelected";
			document.getElementById("itemDescription").innerHTML = "'Ey, ya already got this. Ya ain't got a need fer it!"
			document.getElementById("itemPrice1").innerHTML = ""
			document.getElementById("itemPrice2").innerHTML = ""
			document.getElementById("priceNumber").innerHTML = ""
		}
	}
	
	function deselectAll() {
		selectedItem = null
		
		document.getElementById("selectDoubleMiniOven").className = "shopUnselected";
		document.getElementById("selectMiniOven").className = "shopUnselected";
		
		document.getElementById("itemDescription").innerHTML = "Ya gonna buy something?"
		document.getElementById("itemPrice1").innerHTML = ""
		document.getElementById("itemPrice2").innerHTML = ""
		document.getElementById("priceNumber").innerHTML = ""
	}
	
	function buyItem() {
		if (selectedItem == null) {
			alert("Er, you're mighty excited about buying, but I don't know what ya wanna buy!")
			return;
		}
		if (selectedItem == "doubleMiniOven") {
			if (ovenState == "Double Mini Oven") {
				alert("Oi, ya already got that!")
				return;
			} if (potatoesBaked >= 25) {
				ovenState = "Double Mini Oven"
				potatoMax = 12
				document.getElementById("oven").src = "images/doubleMiniOven.png"
				document.getElementById("selectDoubleMiniOven").src = "images/doubleMiniOvenBought.png"
			} else {
				alert("'Ey, ya ain't got the potatoes for that! ...Man, that sounds weird.")
				deselectAll()
			}
		}
		if (selectedItem == "miniOven") {
			alert("Oi, ya already got that!")
			deselectAll()
		}
	}
	
	//CHEATY HAX!
	
	function CHEATAddPotatoes(cheatAddPotatoes) {
		potatoesBaked = potatoesBaked + cheatAddPotatoes
		if (hasCheated == 1) {
			return;
		} else {
			cheatPunish()
			hasCheated = 1
		}
	}
	
	function cheats() {
		log("LIST OF CHEATS:")
		log("These are all caps sensitive.")
		log("-----------------")
		log("CHEATAddPotatoes(<number of potatoes>)")
	}
	
	function cheatPunish() { 
		if (cheatPunishState == 0) {
			document.getElementById("cheater").innerHTML = "YOU'RE A CHEATER!";
			cheatPunishState = 1
			setTimeout(cheatPunish,50)
			return;
		}
		if (cheatPunishState == 1) {
			document.getElementById("cheater").innerHTML = "";
			cheatPunishState = 0
			setTimeout(cheatPunish,50)
			return;
		}
	}