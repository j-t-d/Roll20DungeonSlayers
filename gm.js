on("chat:message", function(msg) 
{
	if (msg.content.indexOf("!gm ") === 0)
	{
		var cmd = msg.content.replace("!gm ", "");
		if (cmd.indexOf("identify ") === 0)
		{
			var gmIdentityString = cmd.replace("identify ", "");
			if (gmIdentityString == state.gmIdentityString)
			{
				sendChat("GM", "/w " + msg.who + " you are now identified as the GM.");
				state.gmIdentity = msg.playerid;
			}
		}
		else if (cmd.indexOf("identify") === 0)
		{
			state.gmIdentityString = Math.random().toString(36).slice(2);
			sendChat("GM", "/w gm use !gm identify " + state.gmIdentityString + " to identify yourself.");			
		}
	}
});

function gmCommandCheck(msg)
{
	var rtn = false;
	if (msg.playerid == state.gmIdentity)
		rtn = true;
	else
		sendChat("GM", "/w " + msg.who + " You are not the GM. Please use !gm identify to fix this.");
	return rtn;
}


var gmCommands = [
	{ 
		command: "identify",
		func: gmHandleIdentify,
		help: "Used to identify a GM to unlock the GM commands",
		usage: "Use !gm identify to get whispered a special key. Then use !gm identify <key> to identify."
	},
	{
		command: "treasure",
		func: gmHandleTreasure,
		help: "Used to roll treasure.",
		usage: "Use !gm treasure <treasure string> where treasure string is similar to that in the rulset. ie: A:16,#B:20"
	},
	{
		command: "combat",
		help: "Used to do combat commands",
		commands: [
			{
				command: "start",
				func: gmHandleCombatStart,
				help: "Starts combat",
				usage: "Use !gm combat start to initialize the turn order pane. It uses bar 3 for creatures, and the attributes in each character sheet. Also starts any turn timers"
			},
			{
				command: "end",
				func: gmHandleCombatEnd,
				help: "Ends combat",
				usage: " Use !gm combat end to hide the turn order pane and turn timers."
			}
		]

	}
];

on("ready", function()
{
	registerCommands("gm", gmCommands);
});