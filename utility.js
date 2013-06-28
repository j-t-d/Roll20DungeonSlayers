function getCharacter(playername)
{
	var rtn = null;

	try
	{
		var characters = findObjs({
			_type: "character",
			name: playername
		});

		if (characters.length > 0)
			rtn = _.first(characters);
	}
	catch (ex) {}

	return rtn;
}

function setAttributeValue(attribute, value)
{
	if (attribute)
		attribute.set("current", value);
}

function createAttribute(character, attributename)
{
	var rtn = null;

	if (character && attributename)
	{
		rtn = createObj("attribute", {
			name: attributename,
			characterid: character.get("_id")
		});
	}

	return rtn;
}

function getAttribute(attributes, attribute)
{
	var rtn = null;

	try
	{
		for (var i = 0; i < attributes.length; i++)
		{
			if (attributes[i].get("name") == attribute)
			{
				rtn = attributes[i];
				break;
			}
		}
	}
	catch (ex) {}

	return rtn;
}

function getAttributeValue(attributes, attribute)
{
	var rtn = null;

	try
	{
		for (var i = 0; i < attributes.length; i++)
		{
			if (attributes[i].get("name") == attribute)
			{
				rtn = parseInt(attributes[i].get("current"), 10);    
				break;
			}
		}
	}
	catch (ex) {}

	return rtn;
}

function getAttributes(character)
{
	var rtn = null;

	if (character)
	{
		rtn = findObjs({
			_type: "attribute",
			_characterid: character.get('_id')
		});
	}

	return rtn;
}

function getInitiative(token)
{
	var initiative = 0;
	// check to see if character
	var represents = token.get("_represents");
	if (represents && represents !== "")
	{
		var character = getObj("character", represents);
		var attributes = getAttributes(character);
		var MOB = getAttributeValue(attributes, "MOB");
		var AG = getAttributeValue(attributes, "AG");
		var INIMOD = getAttributeValue(attributes, "INI%");
		if (!MOB)
			MOB = 0;
		if (!AG)
			AG = 0;
		if (!INIMOD)
			INIMOD = 0;
		initiative = MOB + AG + INIMOD;   
	}
	else
	{
		initiative = parseInt(token.get("bar3_value"), 10);
	}
	if (isNaN(initiative))
		initiative = 0;
	return initiative;
}

function setInitiative(turnOrder)
{
	turnOrder.sort(function(a,b)
	{
		return b.pr - a.pr;
	});
	Campaign().set("turnorder", JSON.stringify(turnOrder));
}

function isNumber(n) 
{
	return !isNaN(parseFloat(n)) && isFinite(n);
}

function tallyLeftovers(msg)
{
	rtn = null;

	if (msg.length > 0)
	{
		var bonus = 0;
		var tokens = msg.split(" ");

		for (var i = 0; i < tokens.length; i++)
		{
			if (isNumber(tokens[i]))
				bonus += parseInt(tokens[i], 10);
		}

		if (bonus !== 0)
			rtn = bonus;
	}

	return rtn;
}

// Roll against a CTN and auto max damage/result, a null is a fumble
function roll(ctn)
{
	rtn = null;

	if (+ctn > 0)
	{
		var dice = Math.ceil(+ctn / 20);
		var origRolls = [];
		var cloneRolls = [];
		var slayingRolls = [];
		var ctns = [];
		var count = 0;
		var slaying = 0;
		
		// Get all dice roll values and set all die CTN's
		for (var i = 0; i < dice; i++)
		{
			origRolls[i] = randomInteger(20);
			ctns[i] = 20;

			if (i == (dice - 1))
			{
				if (ctn % 20 !== 0)
					ctns[i] = ctn % 20;
			}
		}

		// Test for slaying dice
		if (origRolls[0] == 1)
		{
			var tmpRoll = randomInteger(20);
			i = 0;
			// Keep rolling on coups
			while (tmpRoll == 1)
			{
				slaying += ctns[0];
				slayingRolls[i] = tmpRoll;
				tmpRoll = randomInteger(20);
				i++;
			}

			slayingRolls[i] = tmpRoll;
			if (tmpRoll <= ctns[0])
				slaying += tmpRoll;
		}

		// Test for fumble
		if (origRolls[0] == 20)
			rtn = {total: 0, checks: ctns, dice: origRolls, slayingTotal: 0, slayingDice: slayingRolls};
		else
		{
			cloneRolls = origRolls.slice();
			// Re-arrange rolls
			cloneRolls.sort(function (a, b){
				if (a == 1 && b != 1)
					return -1;
				if (b == 1 && a != 1)
					return 1;
				if (a > b)
					return -1;
				if (a < b)
					return 1;
				return 0;
			});

			for (i = 0; i < dice; i++)
			{
				if (cloneRolls[i] <= ctns[i])
					count += cloneRolls[i] == 1 ? ctns[i] : cloneRolls[i];
			}

			rtn = {total: count, checks: ctns, dice: cloneRolls, slayingTotal: slaying, slayingDice: slayingRolls};

		}
	}

	return rtn;
}

function ctnFormat(ctnData)
{
	var rtn = null;

	if (ctnData)
	{
		var	color1 = "background-color: #ABFFA3;";
		var color2 = "background-color: #FFB8B8;";
		var plus = "background-color: #ABFFA3;";
		var minus = "background-color: #FFB8B8;";
		var ctn = "background-color: #E3A6FF;";

		var norm = "padding: 1px 2px 1px 2px; -webkit-border-radius: 3px; border: 1px solid #555555;";
		var i = 0;

		rtn = "<table style='font-size: 0.875em; border-collapse: separate; border-spacing: 2px; font-weight: bold;'><tr><td style='" + norm + ctn + "'>CTN</td><td> = </td>";

		for (i = 0; i < ctnData.length; i++)
		{
			if (i !== 0)
				rtn += "<td style='" + "'>" + ctnData[i][2] + "</td>";
			rtn += "<td style='" + norm + (ctnData[i][2] === "+" ? plus : minus) + "'>" + ctnData[i][0] + "(" + ctnData[i][1] + ")" + "</td>";
		}

		rtn += "</tr></table>";
	}

	return rtn;
}

function rollFormat(who, msg, ctnData, ctn, rollData)
{
	var rtn = null;

	if (rollData)
	{
		var miss = "background-color: #FFB8B8;";
		var hit = "background-color: #C4C4C4;";
		var coup = "background-color: #ABFFA3;";
		var fumble = "background-color: #E3A6FF;";
		var outside = "padding: 4px; -webkit-border-radius: 4px; border: 1px solid #555555;";
		var i = 0;
		var j = 0;

		
		rtn = ctnData;
		rtn += "<table style='margin=top: 7px; border-collapse: separate; border-spacing: 2px; font-weight: bold;'><tr>";

		for(i = 0; i < rollData.checks.length; i++)
		{
			if (i === 0 && rollData.total === 0 && rollData.dice[i] === 20)
			{
				rtn += "<td style='" + fumble + outside + "'>";
			}
			else if (rollData.dice[i] <= rollData.checks[i])
			{
				if (rollData.dice[i] == 1)
					rtn += "<td style='" + coup + outside + "'>";
				else
					rtn += "<td style='" + hit + outside + "'>";
			}
			else
				rtn += "<td style='" + miss + outside + "'>";

			rtn += (rollData.dice[i] < 10 ? "&nbsp;&nbsp;" + rollData.dice[i] : rollData.dice[i]) + "<span style=' font-weight: normal;'> vs </span>" + (rollData.checks[i] < 10 ? "&nbsp;&nbsp;" + rollData.checks[i] : rollData.checks[i]) + "</td>";

			if (i === 0 && rollData.slayingDice.length > 0)
			{
				for (j = 0; j < rollData.slayingDice.length; j++)
				{
					if (rollData.slayingDice[j] <= rollData.checks[i])
					{
						if (rollData.slayingDice[j] == 1)
							rtn += "<td style='" + coup + outside + "'>S ";
						else
							rtn += "<td style='" + hit + outside + "'>S ";
					}
					else
						rtn += "<td style='" + miss + outside + "'>S ";

					rtn += (rollData.slayingDice[i] < 10 ? "&nbsp;&nbsp;" + rollData.slayingDice[i] : rollData.slayingDice[i]) + "<span style=' font-weight: normal;'> vs </span>" + (rollData.checks[i] < 10 ? "&nbsp;&nbsp;" + rollData.checks[i] : rollData.checks[i]) + "</td>";
				}
			}

		}
		rtn += "</tr></table>";
		rtn += "<span>" + msg + " and " + (rollData.total > 0 ? "<span style='font-weight: bold';>SUCCEED</span>" : (rollData.dice[0] == 20 ? "<span style='font-weight: bold';>FUMBLE</span>" : "<span style='font-weight: bold';>MISS</span>")) + (rollData.total > 0 ? (" for <span style='font-weight: bold';>" + (rollData.total + rollData.slayingTotal) + "</span>!") : "") + "</span>";
	}

	return rtn;
}

on("chat:message", function(msg) 
{
	if (msg.type == "api" && msg.content.indexOf("!setup") !== -1)
	{
		var character = getCharacter(msg.who);
		var attributes = null;
		var message = "";
		var i = 0;
		var attribList = ["BOD","MND","MOB","ST","CO","AG","DX","IN","AU","AV","WB","SPC%","TSC%","INI%"];
		var attrib = null;

		if (character)
		{
			message = msg.content.replace("!setup", "").toLowerCase();

			attributes = getAttributes(character);

			if (attributes)
			{
				for (i = 0; i < attribList.length; i++)
				{
					attrib = getAttribute(attributes, attribList[i]);

					if (!attrib)
					{
						attrib = createAttribute(character, attribList[i]);
						setAttributeValue(attrib, 0);
					}
				}
			}
		}
	}
});

on("chat:message", function(msg) 
{
	if (msg.type == "api" && msg.content.indexOf("!help") !== -1)
	{
		var charName = msg.who.split(" ")[0];

		sendChat("HelpBot", "/w " +  charName + " Commands available to you...");
		sendChat("HelpBot", "/w " +  charName + " !setup (Add all required attributes to your char sheet)");
		sendChat("HelpBot", "/w " +  charName + " !def (Roll a defense)");
		sendChat("HelpBot", "/w " +  charName + " !melee (Roll a melee attack)");
		sendChat("HelpBot", "/w " +  charName + " !ranged (Roll a ranged attack)");
		sendChat("HelpBot", "/w " +  charName + " !spell (Roll a non-targeted spell)");
		sendChat("HelpBot", "/w " +  charName + " !tspell (Roll a targeted spell)");
		sendChat("HelpBot", "/w " +  charName + " !chk skillname (Roll a skillcheck for a skill)");
		sendChat("HelpBot", "/w " +  charName + " !chk help (List all skills !chk can roll for you)");
		sendChat("HelpBot", "/w " +  charName + " !brew (Roll for potion making)");
		sendChat("HelpBot", "/w " +  charName + " !scribe (Roll for scroll writing)");
		sendChat("HelpBot", "/w " +  charName + " !craftmagic (Roll for mage portion of item creation)");
		sendChat("HelpBot", "/w " +  charName + " !craftitem (Roll for artisan portion of item creation");
	}
});