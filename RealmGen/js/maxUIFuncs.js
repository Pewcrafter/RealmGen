$(document).ready(function() {
	var reBtn = document.getElementById("realmEye");
	var mBtn = document.getElementById("manual");
	var subBtn = document.getElementById("submit");
	var mGrid = document.getElementById("mainGrid");
	var reGrid = document.getElementById("reGrid");
	var charName = document.getElementById("charName");
	var charList = document.getElementById("charList");
	var manSubmit = document.getElementById("manSubmit");
	var price = document.getElementById("tPrice");
	var lifeCount = 0;
	var manaCount = 0;
	var atkCount = 0;
	var defCount = 0;
	var spdCount = 0;
	var dexCount = 0;
	var vitCount = 0;
	var wisCount = 0;
	var life = document.getElementById("lifeQuantity");
	var mana = document.getElementById("manaQuantity");
	var atk = document.getElementById("atkQuantity");
	var def = document.getElementById("defQuantity");
	var spd = document.getElementById("speedQuantity");
	var dex = document.getElementById("dexQuantity");
	var vit = document.getElementById("vitQuantity");
	var wis = document.getElementById("wisQuantity");
	var runningTotal = 0.00;
	/* Realmeye Button on click function */
	reBtn.onclick = function () {
		mBtn.style.backgroundColor = "#AAAAAA";
		reBtn.style.backgroundColor = "white";
		mGrid.style.display = "none";
		reGrid.style.display = "grid";
		document.getElementById("manSubmit").style.display = "none";
		document.getElementById("header").innerHTML = "RealmEye Lookup";
		price.innerHTML = "Total Price: $0.00";
	};
	
	/* Manual Button on click function */
	mBtn.onclick = function () {
		reBtn.style.backgroundColor = "#AAAAAA";
		mBtn.style.backgroundColor = "white";
		mGrid.style.display = "grid";
		reGrid.style.display = "none";
		charList.style.display = "none";
		manSubmit.style.display = "block";
		document.getElementById("header").innerHTML = "Enter the pots you need to max your character!";
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
		
	};
	
	life.onchange = function () {
		lifeCount = life.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	mana.onchange = function () {
		manaCount = mana.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	atk.onchange = function () {
		atkCount = atk.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	def.onchange = function () {
		defCount = def.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	spd.onchange = function () {
		spdCount = spd.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	dex.onchange = function () {
		dexCount = dex.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	vit.onchange = function () {
		vitCount = vit.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
	
	wis.onchange = function () {
		wisCount = wis.value;
		runningTotal = (lifeCount * .25) + (manaCount * .20) + (atkCount * .15) + (defCount * .15) + (spdCount * .05) + (dexCount * .05) + (vitCount * .10) + (wisCount * .05);
		price.innerHTML = "Total Price: $" + runningTotal.toFixed(2);
	}
		
	
	/* Submit button Functionality */
	subBtn.onclick = function () {
		var str = "charX";
		var pName = charName.value;
		var badUrl="https://nightfirec.at/realmeye-api/?player=[playername]&filter=characters+stats+class+hp+mp+defense+attack+dexterity+speed+vitality+wisdom";
		var Url = badUrl.replace("[playername]", pName);
		$.getJSON(Url, function(result){	
			var i;
			for (i=1;i<= result.characters.length;i++){
				var currChar = document.getElementById(str.replace("X",i));
				currChar.style.display = "list-item";
				currChar.innerHTML = result.characters[i-1].class;
				currChar.innerHTML += " HP: " + result.characters[i-1].stats.hp;
				currChar.innerHTML += " MP: " + result.characters[i-1].stats.mp;
				currChar.innerHTML += " ATK: " + result.characters[i-1].stats.attack;
				currChar.innerHTML += " DEF: " + result.characters[i-1].stats.defense;
				currChar.innerHTML += " SPD: " + result.characters[i-1].stats.speed;
				currChar.innerHTML += " DEX: " + result.characters[i-1].stats.dexterity;
				currChar.innerHTML += " VIT: " + result.characters[i-1].stats.vitality;
				currChar.innerHTML += " WIS: " + result.characters[i-1].stats.wisdom;
				if (i+1 > result.characters.length && i+1 < 17) {
					var j;
					for (j=i+1;j<17;j++){
						currChar = document.getElementById(str.replace("X",j));
						currChar.style.display = "none";
					}
				}
			}
		});
		setTimeout(function() {
			document.getElementById("charList").style.display = "block";
		}, 3000);
	};
});