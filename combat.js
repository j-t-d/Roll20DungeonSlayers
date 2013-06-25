on("chat:message", function(msg) 
{
	var debug = true;
	
	log("1");

	if(msg.type == "api" && msg.content.indexOf("!def") !== -1) 
	{
		var character = getCharacter(msg.who);

		log("2");

		if (character)
		{
			log("3");
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var skip = false;
			var message = msg.content.replace("!def ", "").toLowerCase();
			var attributes = getAttributes(character);

			var BOD = getAttribute(attributes, "BOD");
			var CO = getAttribute(attributes, "CO");
			var AV = getAttribute(attributes, "AV");
			log("4");

			checkValue = BOD + CO + AV;
			summation = "BOD(" + BOD + ") + CO(" + CO + ") + AV(" + AV + ")";
			// Leftover data to handle
			if (message.length > 0)
			{
				log("5");
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					log("6");
					checkValue += parseInt(message, 10);
					summation += " + (" + message + ")";
					message = "";
				}
			}
			log("7");
			sendChat(msg.who, "/em attempts to defend against an attack ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to defend but they aren't even a character!");
	}
});
