



on("chat:message", function(msg) 
{
	if (msg.content.indexOf("!") === 0)
	{
		var command = msg.content.substring(1).split(" ");
	}

});

function registerCommands(table)
{

}