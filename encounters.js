on("chat:message", function(msg) 
{
    if(msg.type == "api")  
    {
        if (msg.content.indexOf("!findMobs") == 0)
        {
            log("Looking for mob page.")
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
        else if (msg.content.indexOf("!startCombat") == 0)
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
                        turnOrder.push({id: token.get("_id"), pr: getInitiative(token)});                            
                }
            );
            
            setInitiative(turnOrder);            
        }
    }
});
