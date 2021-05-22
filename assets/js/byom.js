
openInfoBox = function(seat) {
    var allSeats = document.getElementsByClassName("popup");
    for (var i = 0; i < allSeats.length; i++) {
      allSeats[i].style.display = "none";
    }
    var desired = document.getElementById(seat);
    desired.style.display = "block";
};

changeDecade = function(decade) {
	var allButtons = document.getElementsByClassName("decade_button");
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.backgroundColor = "#BBBBBB";
    }
    if (decade == '60') {
    	var selectedButton = document.getElementById("select_60");
		selectedButton.style.backgroundColor = "#777777";
		changeTo60s();
    } else if (decade == '70') {
		var selectedButton = document.getElementById("select_70");
		selectedButton.style.backgroundColor = "#777777";
		changeTo70s();
    } else if (decade == '80') {
		var selectedButton = document.getElementById("select_80");
		selectedButton.style.backgroundColor = "#777777";
		changeTo80s();
    } else if (decade == '90') {
		var selectedButton = document.getElementById("select_90");
		selectedButton.style.backgroundColor = "#777777";
		changeTo90s();
    } else if (decade == '00') {
		var selectedButton = document.getElementById("select_00");
		selectedButton.style.backgroundColor = "#777777";
		changeTo00s();
    } else if (decade == '10') {
		var selectedButton = document.getElementById("select_10");
		selectedButton.style.backgroundColor = "#777777";
		changeTo10s();
    } else if (decade == '20') {
		var selectedButton = document.getElementById("select_20");
		selectedButton.style.backgroundColor = "#777777";
		changeTo20s();
    }
    return decade
};

changeTo60s = function() {
	var evs1960s = [3, 4, 9, 4, 4, 4, 10, 12, 21, 29, 43, 3, 4, 6, 3, 3, 4, 9, 26, 26,
	12, 17, 14, 40, 4, 6, 5, 12, 13, 7, 13, 3, 8, 4, 5, 4, 7, 6, 9, 11, 8, 10, 3, 8, 10,
	7, 10, 12, 4, 25, 14];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs1960s[i];
    }
}

changeTo70s = function() {
	var evs1970s = [3, 4, 9, 4, 4, 3, 10, 11, 21, 27, 41, 3, 4, 6, 3, 3, 4, 8, 26, 25,
	12, 17, 14, 45, 4, 7, 5, 12, 13, 6, 13, 3, 8, 4, 6, 4, 7, 6, 9, 10, 8, 10, 3, 8, 10,
	7, 9, 12, 4, 26, 17];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs1970s[i];
    }
}

changeTo80s = function() {
	var evs1980s = [3, 4, 10, 4, 4, 3, 10, 11, 20, 25, 36, 3, 4, 7, 4, 3, 3, 8, 24, 23,
	12, 16, 13, 47, 5, 8, 5, 11, 12, 6, 13, 3, 8, 4, 7, 5, 7, 6, 9, 11, 8, 10, 3, 8, 10,
	7, 9, 12, 4, 29, 21];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs1980s[i];
    }
}

changeTo90s = function() {
	var evs1990s = [3, 4, 11, 4, 3, 3, 10, 11, 18, 23, 33, 3, 4, 7, 4, 3, 3, 7, 22, 21,
	13, 15, 12, 54, 5, 8, 5, 11, 12, 5, 14, 3, 8, 4, 8, 5, 6, 6, 8, 11, 8, 10, 3, 8, 9,
	7, 9, 13, 4, 32, 25];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs1990s[i];
    }
}

changeTo00s = function() {
	var evs2000s = [3, 4, 11, 4, 3, 3, 10, 10, 17, 21, 31, 3, 4, 7, 5, 3, 3, 7, 21, 20,
	13, 15, 12, 55, 5, 9, 5, 11, 11, 5, 15, 3, 7, 4, 10, 5, 6, 6, 8, 11, 8, 10, 3, 7, 9,
	6, 9, 15, 4, 34, 27];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs2000s[i];
    }
}

changeTo10s = function() {
	var evs2010s = [3, 4, 12, 4, 3, 3, 10, 10, 16, 20, 29, 3, 4, 7, 6, 3, 3, 6, 20, 18,
	13, 14, 11, 55, 6, 9, 5, 10, 11, 4, 15, 3, 7, 4, 11, 5, 6, 6, 8, 11, 9, 10, 3, 7, 8,
	6, 9, 16, 4, 38, 29];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs2010s[i];
    }
}

changeTo20s = function() {
	var evs2020s = [3, 4, 12, 4, 4, 3, 10, 10, 15, 19, 28, 3, 4, 8, 6, 3, 3, 6, 19, 17,
	13, 14, 11, 54, 6, 10, 5, 10, 11, 4, 16, 3, 7, 4, 11, 5, 6, 6, 8, 11, 9, 10, 3, 7, 8,
	6, 9, 16, 4, 40 ,30];
	var allStates = document.getElementsByClassName("ev");
	for (var i = 0; i < allStates.length; i++) {
      allStates[i].textContent = evs2020s[i];
    }
}

changeState = function(state, party) {
	var newColor = "";
	if (party == 'D') {
		newColor = "#1A35CE";
	} else if (party == 'R') {
		newColor = "#CE351A";
	} else if (party == 'None') {
		newColor = "#999999";
	} else if (party == 'G') {
		newColor = "#009900";
	} else if (party == 'Y') {
		newColor = "#CCCC00";
	} else if (party == 'P') {
		newColor = "#770077";
	}
	var desiredState = document.getElementsByClassName(state)[0];
	console.log(desiredState);
	desiredState.style.backgroundColor = newColor;
};

changeParty = function(party) {
	var allButtons = document.getElementsByClassName("party_button");
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].style.backgroundColor = "#BBBBBB";
    }

	if (party == 'D') {
		var selectedButton = document.getElementById("d-select");
		selectedButton.style.backgroundColor = "#1A35CE";
	} else if (party == 'R') {
		var selectedButton = document.getElementById("r-select");
		selectedButton.style.backgroundColor = "#CE351A";
	} else if (party == 'None') {
		var selectedButton = document.getElementById("none-select");
		selectedButton.style.backgroundColor = "#777777";
	} else if (party == 'G') {
		var selectedButton = document.getElementById("grn-select");
		selectedButton.style.backgroundColor = "#009900";
	} else if (party == 'Y') {
		var selectedButton = document.getElementById("yel-select");
		selectedButton.style.backgroundColor = "#CCCC00";
	} else if (party == 'P') {
		var selectedButton = document.getElementById("pur-select");
		selectedButton.style.backgroundColor = "#770077";
	}

	return party
}