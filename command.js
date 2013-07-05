
var globalCommands = null;

on("chat:message", function(msg) 
{
    if (msg.type == "api")
	{
		if (msg.content.indexOf("!") === 0)
		{
			var commandList = msg.content.substring(1).split(" ");
			var commandLocation = commandGet(commandList, globalCommands);
			if (commandLocation)
			{
				var command = commandLocation.command;
				if (command.func)
					command.func(msg, commandList.slice(commandLocation.index+1));
				else
					commandHelp(msg, commandList);
			}
			else
				sendChat(msg.who, "/w " + msg.who + " I do not know of this command: " + msg.content);		
		}
	}

});

function commandGet(commandList, commandTable)
{
	var currentCommand = null;
	var commandIndex = 0;
	for (; commandIndex < commandList.length; commandIndex++)
	{
		if (commandList[commandIndex] in commandTable)
		{
			currentCommand = commandTable[commandList[commandIndex]];
			if (("commands" in currentCommand))
				commandTable = currentCommand.commands;
			else
				break;
		}
		else
			break;
	}

	return currentCommand ? { index: commandIndex, command: currentCommand } : null;
}

function commandHelp(msg, args)
{
	var key = null;
	if (args.length === 0)
	{
		for (key in globalCommands)
			sendChat(msg.who, "/w " + msg.who + " !" + key + " - " + globalCommands[key].help);		
	}
	else
	{
		var commandLocation = commandGet(args, globalCommands);
		if (commandLocation)
		{
			if ("commands" in commandLocation.command)
			{
				for (key in commandLocation.command.commands)
					sendChat("Help", "/w " + msg.who + " !" + args.slice(0, commandLocation.index).join(" ") + " " + key + " - " + commandLocation.command.commands[key].help);
			}
			else
				sendChat("Help", "/w " + msg.who + " !" + args.slice(0, commandLocation.index + 1).join(" ") + " - " + commandLocation.command.usage);
		}
		else
			sendChat("Help", "/w " + msg.who + " Can't find help for command: '" + args.slice(0).join(" ") + "'");
	}
}

function registerCommands(command, table)
{
	if (!globalCommands)
	{
		globalCommands = {};
		globalCommands.help = 
		{
			func: commandHelp,
			help: "Prints out help.",
			usage: "'!help' will print out top level commands. '!help gm' will print out all gm commands, '!help gm treasure' will print out the usage for gm treasure command."
		};
	}
	globalCommands[command] = table;
}
