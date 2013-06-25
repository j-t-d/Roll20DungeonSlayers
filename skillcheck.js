on("chat:message", function(msg) 
{
    if(msg.type == "api" && msg.content.indexOf("!check ") !== -1) 
	{
		var newMsg = msg.content.replace("!check ", "");
		var rollValue = randomInteger(20);
		var checkValue = 0;
		var msgValues;
		var msgEmote;
		var msgMod;
		var debug = false;
		var summation = "";

		msgValues = newMsg.slice(newMsg.indexOf("(") + 1, newMsg.indexOf(")"));
		newMsg = newMsg.replace("(" + msgValues + ")", "");
		msgEmote = newMsg.slice(newMsg.indexOf("(") + 1, newMsg.indexOf(")"));
		newMsg = newMsg.replace("(" + msgEmote + ")", "");
		newMsg = newMsg.replace(/ /g, "");
		msgMod = newMsg;

		var characters = findObjs({
			_type: "character",
			name: msg.who
		});

		if (characters.length > 0)
		{
			var character = _.first(characters);

			if (debug)
				log("Check incoming from(" + msg.who + ")");

			var attributes = findObjs({
			      _type: "attribute",
			      _characterid: character.get('_id')
			    });

			var valueList = msgValues.split(",");

			if (debug)
				log(valueList);

			for (var i = 0; i < valueList.length; i++)
			{
				if (isNumber(valueList[i]))
				{
					checkValue += parseInt(valueList[i], 10);
					summation += "(" + valueList[i] + ")";

					if (debug)
						log("Added(" + valueList[i] + ") to total");
				}
				else
				{

			        for (var j = 0; j < attributes.length; j++)
			        {
			        	if (attributes[j].get("name") == valueList[i])
			        	{
			        		checkValue += parseInt(attributes[j].get("current"), 10);
			        		summation += attributes[j].get("name") + "(" + attributes[j].get("current") + ")";

			        		if (debug)
			        			log("Added(" + valueList[i] + ":" + attributes[j].get("current") + ") to total");
			        	}
			        }
				}
				if (i < valueList.length - 1)
					summation += " + ";
			}

			if (isNumber(msgMod))
			{
				checkValue+=parseInt(msgMod, 10);
				summation += " " + msgMod;

				if (debug)
					log("Added(" + msgMod + ") to total");
			}
			
			if (debug)
				log("A skill check in progress! Roll: " + rollValue + " vs Check: " + checkValue);

			sendChat(msg.who, "/em " + msgEmote + " ... " + rollValue + " vs " + checkValue + "[" + summation + "] is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to do a skill check but they aren't even a character!");
	}
});
