on("chat:message", function(msg) 
{
	var debug = true;
	
	if (msg.type == "api")
	{
		var character = null;
		var checkValue = 0;
		var summation = [];
		var message = "";
		var attributes = null;
		var BOD = null;
		var AV = null;
		var MOB = null;
		var DX = null;
		var bonus = 0;
		var WB = null;
		var marksman = null;
		var MND = null;
		var rollResults = null;
		var output = "";

		// Defense roll (DEF)
		if(msg.content.indexOf("!def") !== -1) 
		{
			character = getCharacter(msg.who);

			if (character)
			{
				checkValue = 0;
				summation = [];
				message = msg.content.replace("!def", "").toLowerCase();
				attributes = getAttributes(character);

				BOD = getAttributeValue(attributes, "BOD");
				var CO = getAttributeValue(attributes, "CO");
				AV = getAttributeValue(attributes, "AV");
				var ritualofscars = getAttributeValue(attributes, "Ritual of Scars");

				checkValue = BOD + CO + AV;
				summation.push(["BOD", BOD, "+"]);
				summation.push(["CO", CO, "+"]);
				summation.push(["AV", AV, "+"]);

				if (ritualofscars)
				{
					checkValue += (ritualofscars * 2);
					summation.push(["Ritual of Scars", (ritualofscars * 2), "+"]);
				}

				// Test to see if DEF exists, if not, create it.
				var oDEF = getAttribute(attributes, "DEF");

				if (!oDEF)
					oDEF = createAttribute(character, "DEF");

				// Update DEF
				setAttributeValue(oDEF, checkValue);

				// Leftover data to handle
				if (message.length > 0)
				{
					bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation.push(["", Math.abs(bonus), (bonus < 0 ? "-" : "+")]);
						message = "";
					}
				}

				rollResults = roll(checkValue);
				output = ctnFormat(summation);
				output = rollFormat(msg.who, "I defend", output, checkValue, rollResults);

				sendChat(msg.who, "/direct " + output);
			}
			else
				sendChat(msg.who, "/em tried to defend but they aren't even a character!");
		}
		// Melee attack (MAT)
		if(msg.type == "api" && msg.content.indexOf("!melee") !== -1) 
		{
			character = getCharacter(msg.who);

			if (character)
			{
				rollValue = randomInteger(20);
				checkValue = 0;
				summation = [];
				message = msg.content.replace("!melee", "").toLowerCase();
				attributes = getAttributes(character);

				BOD = getAttributeValue(attributes, "BOD");
				var ST = getAttributeValue(attributes, "ST");
				WB = getAttributeValue(attributes, "WB");
				var closecombat = getAttributeValue(attributes, "Close Combat");

				checkValue = BOD + ST + WB;
				summation.push(["BOD", BOD, "+"]);
				summation.push(["ST", ST, "+"]);
				summation.push(["WB", WB, "+"]);

				if (closecombat)
				{
					checkValue += closecombat;
					summation.push(["Close Combat", closecombat, "+"]);
				}

				// Test to see if DEF exists, if not, create it.
				var oMAT = getAttribute(attributes, "MAT");

				if (!oMAT)
					oMAT = createAttribute(character, "MAT");

				// Update DEF
				setAttributeValue(oMAT, checkValue);

				// Leftover data to handle
				if (message.length > 0)
				{
					bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation.push(["", Math.abs(bonus), (bonus < 0 ? "-" : "+")]);
						message = "";
					}
				}

				rollResults = roll(checkValue);
				output = ctnFormat(summation);
				output = rollFormat(msg.who, "I do a melee attack", output, checkValue, rollResults);

				sendChat(msg.who, "/direct " + output);
			}
			else
				sendChat(msg.who, "/em tried to attack but they aren't even a character!");
		}
		// Ranged attack (RAT)
		if(msg.type == "api" && msg.content.indexOf("!ranged") !== -1) 
		{
			character = getCharacter(msg.who);

			if (character)
			{
				checkValue = 0;
				summation = [];
				message = msg.content.replace("!ranged", "").toLowerCase();
				attributes = getAttributes(character);

				MOB = getAttributeValue(attributes, "MOB");
				DX = getAttributeValue(attributes, "DX");
				WB = getAttributeValue(attributes, "WB");
				marksman = getAttributeValue(attributes, "Marksman");

				checkValue = MOB + DX + WB;
				summation.push(["MOB", MOB, "+"]);
				summation.push(["DX", DX, "+"]);
				summation.push(["WB", WB, "+"]);

				if (marksman)
				{
					checkValue += marksman;
					summation.push(["Marksman", marksman, "+"]);
				}

				// Test to see if RAT exists, if not, create it.
				var oRAT = getAttribute(attributes, "RAT");

				if (!oRAT)
					oRAT = createAttribute(character, "RAT");

				// Update DEF
				setAttributeValue(oRAT, checkValue);

				// Leftover data to handle
				if (message.length > 0)
				{
					bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation.push(["", Math.abs(bonus), (bonus < 0 ? "-" : "+")]);
						message = "";
					}
				}

				rollResults = roll(checkValue);
				output = ctnFormat(summation);
				output = rollFormat(msg.who, "I do a ranged attack", output, checkValue, rollResults);

				sendChat(msg.who, "/direct " + output);
			}
			else
				sendChat(msg.who, "/em tried to attack but they aren't even a character!");
		}
		// Spell casting (SPC)
		if(msg.type == "api" && msg.content.indexOf("!spell") !== -1) 
		{
			character = getCharacter(msg.who);

			if (character)
			{
				checkValue = 0;
				summation = [];
				message = msg.content.replace("!spell", "").toLowerCase();
				attributes = getAttributes(character);

				MND = getAttributeValue(attributes, "MND");
				var AU = getAttributeValue(attributes, "AU");
				AV = getAttributeValue(attributes, "AV");
				var SPCMOD = getAttributeValue(attributes, "SPC%");

				checkValue = MND + AU - AV;
				summation.push(["MND", MND, "+"]);
				summation.push(["AU", AU, "+"]);
				summation.push(["AV", AV, "-"]);

				if (SPCMOD)
				{
					checkValue += SPCMOD;
					summation.push(["Bonus", SPCMOD, "+"]);
				}
				
				// Test to see if RAT exists, if not, create it.
				var oSPC = getAttribute(attributes, "SPC");

				if (!oSPC)
					oSPC = createAttribute(character, "SPC");

				// Update DEF
				setAttributeValue(oSPC, checkValue);

				// Leftover data to handle
				if (message.length > 0)
				{
					bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation.push(["", Math.abs(bonus), (bonus < 0 ? "-" : "+")]);
						message = "";
					}
				}

				rollResults = roll(checkValue);
				output = ctnFormat(summation);
				output = rollFormat(msg.who, "I cast a spell", output, checkValue, rollResults);

				sendChat(msg.who, "/direct " + output);
			}
			else
				sendChat(msg.who, "/em tried to cast a spell but they aren't even a character!");
		}
		// Targeted Spell Casting (TSC)
		if(msg.type == "api" && msg.content.indexOf("!tspell") !== -1) 
		{
			character = getCharacter(msg.who);

			if (character)
			{
				checkValue = 0;
				summation = [];
				message = msg.content.replace("!tspell", "").toLowerCase();
				attributes = getAttributes(character);

				MND = getAttributeValue(attributes, "MND");
				DX = getAttributeValue(attributes, "DX");
				AV = getAttributeValue(attributes, "AV");
				var TSCMOD = getAttributeValue(attributes, "TSC%");
				marksman = getAttributeValue(attributes, "Marksman");

				checkValue = MND + DX - AV;
				summation.push(["MND", MND, "+"]);
				summation.push(["DX", DX, "+"]);
				summation.push(["AV", AV, "-"]);

				if (TSCMOD)
				{
					checkValue += TSCMOD;
					summation.push(["Bonus", TSCMOD, "+"]);
				}
				
				if (marksman)
				{
					checkValue += marksman;
					summation.push(["Marksman", marksman, "+"]);
				}

				// Test to see if RAT exists, if not, create it.
				var oTSC = getAttribute(attributes, "TSC");

				if (!oTSC)
					oTSC = createAttribute(character, "TSC");

				// Update DEF
				setAttributeValue(oTSC, checkValue);

				// Leftover data to handle
				if (message.length > 0)
				{
					bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation.push(["", Math.abs(bonus), (bonus < 0 ? "-" : "+")]);
						message = "";
					}
				}

				rollResults = roll(checkValue);
				output = ctnFormat(summation);
				output = rollFormat(msg.who, "I cast a targeted spell", output, checkValue, rollResults);

				sendChat(msg.who, "/direct " + output);
			}
			else
				sendChat(msg.who, "/em tried to cast a spell but they aren't even a character!");
		}

	}
});
