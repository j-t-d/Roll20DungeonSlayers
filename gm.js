
function gmHandleIdentify(msg, args)
{
	if (args.length == 1)
	{
		if (args[0] == state.gmIdentityString)
		{
			sendChat("GM", "/w " + msg.who + " You are now identified as the GM.");
			state.gmIdentity = msg.playerid;
		}		
		else sendChat("GM", "/w " + msg.who + " unrecognized passcode");
	}
	else
	{
		state.gmIdentityString = Math.random().toString(36).slice(2);
		sendChat("GM", "/w gm use !gm identify " + state.gmIdentityString + " to identify yourself.");			
	}
}

function gmHandleCombatStart(msg, args)
{
	if (gmCommandCheck(msg))
	{
		var encounter = new Encounter();
		encounter.combatStart(msg.who);
	}
}

function gmHandleCombatEnd(msg, args)
{
	if (gmCommandCheck(msg))
	{
		var encounter = new Encounter();
		encounter.combatEnd(msg.who);
	}
}

function gmHandleTreasure(msg, args)
{
	var treasureString = args.join(" ");
	var treasure = new Treasure(msg.who);
	treasure.send("*********** " + treasureString + " ***********");
	treasure.resolve(treasureString);
}

function gmCommandCheck(msg)
{
	var rtn = false;
	if (msg.playerid == state.gmIdentity)
		rtn = true;
	else
		sendChat("GM", "/w " + msg.who + " You are not the GM. Please use !gm identify to fix this.");
	return rtn;
}


on("ready", function()
{
	registerCommands("gm", 
	{
		help: "List of GM commands",
		commands: 
		{
			identify: 
			{ 
				func: gmHandleIdentify,
				help: "Used to identify a GM to unlock the GM commands",
				usage: "Use !gm identify to get whispered a special key. Then use !gm identify <key> to identify."
			},
			treasure:
			{
				func: gmHandleTreasure,
				help: "Used to roll treasure.",
				usage: "Use !gm treasure <treasure string> where treasure string is similar to that in the rulset. ie: A:16,#B:20"
			},
			combat:
			{
				help: "Used to do combat commands",
				commands:  
				{
					start:
					{
						func: gmHandleCombatStart,
						help: "Starts combat",
						usage: "Use !gm combat start to initialize the turn order pane. It uses bar 3 for creatures, and the attributes in each character sheet. Also starts any turn timers"
					},
					end:
					{
						func: gmHandleCombatEnd,
						help: "Ends combat",
						usage: " Use !gm combat end to hide the turn order pane and turn timers."
					}
				}
			}
		}
	});
});