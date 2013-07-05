var whatev = whatev || {};

whatev.commands = (function()
{
	var registeredCommands = {
		help:
		{
			func: help,
			help: "Prints out help.",
			usage: "'!help' will print out top level commands. '!help gm' will print out all gm commands, '!help gm treasure' will print out the usage for gm treasure command."
		}
	};

	function get(commandList, commandTable)
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

	function help(msg, args)
	{
		var key = null;
		if (args.length === 0)
		{
			for (key in registeredCommands)
				sendChat(msg.who, "/w " + msg.who + " !" + key + " - " + registeredCommands[key].help);		
		}
		else
		{
			var commandLocation = get(args, registeredCommands);
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

	return {
		register: function(command, table)
		{
			registeredCommands[command] = table;
		},
		parse: function(msg)
		{
			if (msg.type == "api")
			{
				if (msg.content.indexOf("!") === 0)
				{
					var commandList = msg.content.substring(1).split(" ");
					var commandLocation = get(commandList, registeredCommands);
					if (commandLocation)
					{
						var command = commandLocation.command;
						if (command.func)
							command.func(msg, commandList.slice(commandLocation.index+1));
						else
							help(msg, commandList);
					}
					else
						sendChat(msg.who, "/w " + msg.who + " I do not know of this command: " + msg.content);		
				}
			}
		}
	};
})();

on("chat:message", function(msg) 
{
	whatev.commands.parse(msg);
});


