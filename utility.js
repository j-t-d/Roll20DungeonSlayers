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
	var attributes = findObjs({
		_type: "attribute",
		_characterid: character.get('_id')
	});
	return attributes;
}

function getInitiative(token)
{
	var initiative = 0;
	// check to see if character
	var represents = token.get("_represents");
	if (represents && represents != "")
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
		initiative = parseInt(token.get("bar3_value"), 10)
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