on("chat:message", function(msg) 
{
	if(msg.type == "api" && msg.content.indexOf("!brew ") !== -1) 
	{
		var newMsg = msg.content.replace("!brew ", "");
		var rollValue = randomInteger(20);
		var checkValue = 0;
		var debug = false;
		var summation = "";

	}
});