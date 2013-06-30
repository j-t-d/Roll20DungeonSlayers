on("change:graphic", function(obj) 
{
    function setDeath(isDead)
    {
        function turnOrderIndex(turnOrder)
        {
            var index = -1;
            for (var i = 0; i < turnOrder.length; i++)
            {
                if (turnOrder[i].id == obj.id)
                {
                    index = i;
                    break;
                }
            }
            return index;
        }

        var turnOrder = JSON.parse(Campaign().get("turnorder"));                        
        var currentlyDead = obj.get("status_dead");
        if (currentlyDead && !isDead)
        {
            if (turnOrderIndex(turnOrder) == -1)
            {
                turnOrder.push({id: obj.get("_id"), pr: getInitiative(obj)});
                Campaign().set("turnorder", JSON.stringify(turnOrder)); 
            }
            obj.set({status_dead: false});
        }
        else if (!currentlyDead && isDead)
        {
            var index = turnOrderIndex(turnOrder);
            if (index != -1)
            {
                turnOrder.splice([index], 1);
                Campaign().set("turnorder", JSON.stringify(turnOrder)); 
            }
            obj.set({status_dead: true});
        }
    }

    var hpValue = obj.get("bar1_value");
    var hpMax = obj.get("bar1_max");
    if(hpMax !== "")
    {
        if(hpValue <= 0)
            setDeath(true);
        else
        {
            setDeath(false);
            if(hpValue <= (hpMax / 2))
                obj.set({status_redmarker: true});
            else
                obj.set({status_redmarker: false});
        }
    }   
});
