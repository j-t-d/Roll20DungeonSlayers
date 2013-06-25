on("chat:message", function(msg) 
{
	var debug = true;
	
	// Defense roll (DEF)
	if(msg.type == "api" && msg.content.indexOf("!def") !== -1) 
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!def", "").toLowerCase();
			var attributes = getAttributes(character);

			var BOD = getAttributeValue(attributes, "BOD");
			var CO = getAttributeValue(attributes, "CO");
			var AV = getAttributeValue(attributes, "AV");

			checkValue = BOD + CO + AV;
			summation = "BOD(" + BOD + ") + CO(" + CO + ") + AV(" + AV + ")";

			// Test to see if DEF exists, if not, create it.
			var oDEF = getAttribute(attributes, "DEF");

			if (!oDEF)
				oDEF = createAttribute(character, "DEF");

			// Update DEF
			setAttributeValue(oDEF, checkValue);

			// Leftover data to handle
			if (message.length > 0)
			{
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			sendChat(msg.who, "/em attempts to defend against an attack ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to defend but they aren't even a character!");
	}
	// Melee attack (MAT)
	if(msg.type == "api" && msg.content.indexOf("!melee") !== -1) 
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!melee", "").toLowerCase();
			var attributes = getAttributes(character);

			var BOD = getAttributeValue(attributes, "BOD");
			var ST = getAttributeValue(attributes, "ST");
			var WB = getAttributeValue(attributes, "WB");

			checkValue = BOD + ST + WB;
			summation = "BOD(" + BOD + ") + ST(" + ST + ") + WB(" + WB + ")";

			// Test to see if DEF exists, if not, create it.
			var oMAT = getAttribute(attributes, "MAT");

			if (!oMAT)
				oMAT = createAttribute(character, "MAT");

			// Update DEF
			setAttributeValue(oMAT, checkValue);

			// Leftover data to handle
			if (message.length > 0)
			{
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			sendChat(msg.who, "/em tries to do a melee attack ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to attack but they aren't even a character!");
	}
	// Ranged attack (RAT)
	if(msg.type == "api" && msg.content.indexOf("!ranged") !== -1) 
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!ranged", "").toLowerCase();
			var attributes = getAttributes(character);

			var MOB = getAttributeValue(attributes, "MOB");
			var DX = getAttributeValue(attributes, "DX");
			var WB = getAttributeValue(attributes, "WB");

			checkValue = MOB + DX + WB;
			summation = "MOB(" + MOB + ") + DX(" + DX + ") + WB(" + WB + ")";

			// Test to see if RAT exists, if not, create it.
			var oRAT = getAttribute(attributes, "RAT");

			if (!oRAT)
				oRAT = createAttribute(character, "RAT");

			// Update DEF
			setAttributeValue(oRAT, checkValue);

			// Leftover data to handle
			if (message.length > 0)
			{
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			sendChat(msg.who, "/em tries to do a ranged attack ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to attack but they aren't even a character!");
	}
	// Spell casting (SPC)
	if(msg.type == "api" && msg.content.indexOf("!spell") !== -1) 
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!spell", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var AU = getAttributeValue(attributes, "AU");
			var AV = getAttributeValue(attributes, "AV");
			var SPCMOD = getAttributeValue(attributes, "SPC%");

			checkValue = MND + AU - AV;
			summation = "MND(" + MND + ") + AU(" + AU + ") - AV(" + AV + ")";

			if (SPCMOD)
			{
				checkValue += SPCMOD;
				summation += " + Bonus(" + SPCMOD + ")";
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
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			sendChat(msg.who, "/em tries to cast a spell ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to cast a spell but they aren't even a character!");
	}
	// Targeted Spell Casting (TSC)
	if(msg.type == "api" && msg.content.indexOf("!tspell") !== -1) 
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!tspell", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var DX = getAttributeValue(attributes, "DX");
			var AV = getAttributeValue(attributes, "AV");
			var TSCMOD = getAttributeValue(attributes, "TSC%");

			checkValue = MND + DX - AV;
			summation = "MND(" + MND + ") + DX(" + DX + ") - AV(" + AV + ")";

			if (TSCMOD)
			{
				checkValue += TSCMOD;
				summation += " + Bonus(" + TSCMOD + ")";
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
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			sendChat(msg.who, "/em tries to cast a spell on a target ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to cast a spell but they aren't even a character!");
	}
});
