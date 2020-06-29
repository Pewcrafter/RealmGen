$(document).ready(function() {
	var reBtn = document.getElementById("realmEye");
	var mBtn = document.getElementById("manual");
	var subBtn = document.getElementById("submit");
	var mGrid = document.getElementById("mainGrid");
	var reGrid = document.getElementById("reGrid");
	var charName = document.getElementById("charName");
	/* Realmeye Button on click function */
	reBtn.onclick = function () {
		mBtn.style.backgroundColor = "white";
		reBtn.style.backgroundColor = "#AAAAAA";
		mGrid.style.display = "none";
		reGrid.style.display = "grid";
	};
	
	/* Manual Button on click function */
	mBtn.onclick = function () {
		reBtn.style.backgroundColor = "white";
		mBtn.style.backgroundColor = "#AAAAAA";
		mGrid.style.display = "grid";
		reGrid.style.display = "none";
	};
	
	/* Submit button Functionality */
	subBtn.onclick = function () {
		var pName = charName.value;
		var badUrl="https://nightfirec.at/realmeye-api/?player=[playername]&filter=characters+stats+class+hp+mp+defense+attack+dexterity+speed+vitality+wisdom";
		var Url = badUrl.replace("[playername]", pName);
		$.getJSON(Url, function(result){	
			console.log(result)
		});
	};
	/* https://nightfirec.at/realmeye-api/?player=[playername]&filter=characters+stats+class+hp+mp+defense+attack+dexterity+speed+vitality+wisdom */
});