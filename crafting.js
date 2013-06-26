on("chat:message", function(msg) 
{
	// Potion Brewing
	if(msg.type == "api" && msg.content.indexOf("!brew") !== -1)
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!brew", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var IN = getAttributeValue(attributes, "IN");
			var alchemy = getAttributeValue(attributes, "Alchemy");
			

			checkValue = MND + IN;
			summation = "MND(" + MND + ") + IN(" + IN + ")";

			if (alchemy)
			{
				checkValue += alchemy;
				summation += " + Alchemy(" + alchemy + ")";
			
				// Leftover data to handle
				if (message.length > 0)
				{
					var bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation += " + (" + bonus + ")";
						message = "";
					}
				}
				sendChat(msg.who, "/em attempts to brew some potions ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
			}
			else
				sendChat(msg.who, "/em tried to brew a potion but they don't have Alchemy!");
		}
		else
			sendChat(msg.who, "/em tried to brew a potion but they aren't even a character!");
	}
	// Scribe scroll
	if(msg.type == "api" && msg.content.indexOf("!scribe") !== -1)
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!scribe", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var DX = getAttributeValue(attributes, "DX");
			var runelore = getAttributeValue(attributes, "Rune Lore");
			

			checkValue = MND + DX;
			summation = "MND(" + MND + ") + DX(" + DX + ")";

			if (runelore)
			{
				checkValue += runelore;
				summation += " + Rune Lore(" + runelore + ")";
			
				// Leftover data to handle
				if (message.length > 0)
				{
					var bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation += " + (" + bonus + ")";
						message = "";
					}
				}
				sendChat(msg.who, "/em attempts to brew some potions ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
			}
			else
				sendChat(msg.who, "/em tried to scribe a spell but they don't have Rune Lore!");
		}
		else
			sendChat(msg.who, "/em tried to scribe a scroll but they aren't even a character!");
	}
	// Craft magic item, mage portion
	if(msg.type == "api" && msg.content.indexOf("!craftmagic") !== -1)
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!craftmagic", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var IN = getAttributeValue(attributes, "IN");
			var embedmagics = getAttributeValue(attributes, "Embed Magics");
			

			checkValue = MND + IN;
			summation = "MND(" + MND + ") + IN(" + IN + ")";

			if (embedmagics)
			{
				checkValue += embedmagics;
				summation += " + Embed Magics(" + embedmagics + ")";
			
				// Leftover data to handle
				if (message.length > 0)
				{
					var bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation += " + (" + bonus + ")";
						message = "";
					}
				}
				sendChat(msg.who, "/em attempts to create a magical item ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
			}
			else
				sendChat(msg.who, "/em tried to create a magic item but they don't have Embed Magics!");
		}
		else
			sendChat(msg.who, "/em tried to create a magic item but they aren't even a character!");
	}
	// Craft magic item, item portion
	if(msg.type == "api" && msg.content.indexOf("!craftitem") !== -1)
	{
		var character = getCharacter(msg.who);

		if (character)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var message = msg.content.replace("!craftitem", "").toLowerCase();
			var attributes = getAttributes(character);

			var MND = getAttributeValue(attributes, "MND");
			var DX = getAttributeValue(attributes, "DX");
			var artisan = getAttributeValue(attributes, "Artisan");

			checkValue = MND + DX;
			summation = "MND(" + MND + ") + DX(" + DX + ")";

			if (artisan)
			{
				checkValue += artisan;
				summation += " + Artisan(" + artisan + ")";
			
				// Leftover data to handle
				if (message.length > 0)
				{
					var bonus = tallyLeftovers(message);
					
					if (bonus)
					{
						checkValue += bonus;
						summation += " + (" + bonus + ")";
						message = "";
					}
				}
				sendChat(msg.who, "/em attempts to create a magical item ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
			}
			else
				sendChat(msg.who, "/em tried to create a magic item but they don't have Artisan!");
		}
		else
			sendChat(msg.who, "/em tried to create a magic item but they aren't even a character!");
	}
});