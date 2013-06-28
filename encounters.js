var gmPlayerId = "-IyBQkJEl_kfk1rgy11p";


on("chat:message", function(msg) 
{
    if(msg.type == "api")  
    {
        if (msg.content.indexOf("!findMobs") === 0)
        {
            log("Looking for mob page.");
            var mobPageId = null;
            _.each(findObjs({_type: "page", name : "Mob Page"}), function(obj)
            {
                mobPageId = obj.get("_id");
                log("Found mob page id: " + mobPageId);
            });
            
            _.each(findObjs({_subtype: "token", _pageid: mobPageId}), function(obj)
            {            
                log(obj);
                try
                {
                    var gmNotes = decodeURIComponent(obj.get("gmnotes")).replace(/<\/?[^>]+>/gi, '');
                    var mobData = JSON.parse(gmNotes);
                    log(mobData);
                }
                catch (ex)
                {
                    log("Failed to parse gm notes: " + ex);
                }
            });
        }
        else if (msg.content.indexOf("!startCombat") === 0)
        {

            if (msg.playerid == gmPlayerId)
            {
                var turnOrder = [];

                _.each(findObjs(
                    {
                        _subtype: "token", 
                        _type: "graphic", 
                        _pageid: Campaign().get("playerpageid"),
                        layer: "objects"
                    }), function(token)
                    {
                        // check if dead
                        var isDead = token.get("status_dead");
                        if (!isDead)
                        {
                            var initiative = getInitiative(token);
                            if (initiative)
                                turnOrder.push({id: token.get("_id"), pr: initiative});                            
                        }
                    }
                );
                sendChat(msg.who, "/w " + msg.who + " initiatives calculated!");
                setInitiative(turnOrder);            
            }
            else
                sendChat(msg.who, "/w " + msg.who + " only the GM can use !startCombat");
        }
        else if (msg.content.indexOf("!endTurn") === 0)
        {
            var currentTurnOrder = JSON.parse(Campaign().get("turnorder"));  
            var currentTurn = currentTurnOrder[0];
            if (currentTurn)
            {
                var token = getObj("graphic", currentTurn.id);
                if (token)
                {
                    var character = getObj("character", token.get("_represents"));
                    if (character)
                    {
                        var controllers = character.get("controlledby");
                        if (controllers.indexOf(msg.playerid) != -1)
                        {
                            currentTurnOrder.splice(0, 1);
                            currentTurnOrder.push(currentTurn);
                            Campaign().set("turnorder", JSON.stringify(currentTurnOrder)); 
                            sendChat(msg.who, "I have completed my turn."); 
                        }
                    }
                }
            }
        }
    }
});
