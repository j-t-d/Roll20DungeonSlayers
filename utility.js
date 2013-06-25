function getAttribute(attributes, attribute)
{
    var rtn = 0
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
        var MOB = getAttribute(attributes, "MOB");
        var AG = getAttribute(attributes, "AG");
        var INIMOD = getAttribute(attributes, "INI%");
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
