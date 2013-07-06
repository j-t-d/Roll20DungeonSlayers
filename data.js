// jshint  evil:true
var whatev = whatev || {};

var chars = {};
whatev.chars = chars;

stats = {
	"bod": {
		base: null,
		affects: {
			"hp": 1,
			"def": 1,
			"mat": 1,
			"defy poison": 1,
			"feat of strength": 1,
			"intimidate": 1,
			"resist disable": 1
		}
	},
	"st": {
		base: null,
		affects: {
			"mat": 1,
			"climb": 1,
			"feat of strength": 1,
			"swim": 1
		}
	},
	"co": {
		base: null,
		affects: {
			"hp": 1,
			"def": 1,
			"defy poison": 1,
			"resist disable": 1
		}
	},
	"mob": {
		base: null,
		affects: {
			"initiative": 1,
			"mr": 1,
			"rat": 1,
			"animal handling": 1,
			"climb": 1,
			"hide": 1,
			"jump": 1,
			"pick pocket": 1,
			"riding": 1,
			"sneak": 1,
			"swim": 1,
			"trophy": 1
		}
	},
	"ag": {
		base: null,
		affects: {
			"initiative": 1,
			"hide": 1,
			"jump": 1,
			"riding": 1,
			"sneak": 1
		}
	},
	"dx": {
		base: null,
		affects: {
			"rat": 1,
			"tsc": 1,
			"communicate": 1,
			"disable traps": 1,
			"open lock": 1,
			"pick pocket": 1,
			"start fire": 1,
			"trophy": 1,
			"work mechanism": 1,
			"scribe": 1
		}
	},
	"mnd": {
		base: null,
		affects: {
			"spc": 1,
			"tsc": 1,
			"appraise": 1,
			"communicate": 1,
			"change spell": 1,
			"decipher script": 1,
			"disable traps": 1,
			"flirt": 1,
			"gold lust": 1,
			"haggle": 1,
			"knowledge": 1,
			"open lock": 1,
			"perception": 1,
			"read tracks": 1,
			"search": 1,
			"spellcraft": 1,
			"start fire": 1,
			"wake up": 1,
			"work mechanism": 1,
			"alchemy": 1,
			"scribe": 1,
			"dominate undead": 1
		}
	},
	"in": {
		base: null,
		affects: {
			"appraise": 1,
			"change spell": 1,
			"decipher script": 1,
			"gold lust": 1,
			"haggle": 1,
			"knowledge": 1,
			"perception": 1,
			"read tracks": 1,
			"search": 1,
			"wake up": 1,
			"work mechanism": 1,
			"alchemy": 1
		}
	},
	"au": {
		base: null,
		affects: {
			"spc": 1,
			"animal handling": 1,
			"flirt": 1,
			"haggle": 1,
			"intimidate": 1,
			"riding": 1,
			"spellcraft": 1,
			"dominate undead": 1
		}
	},
	"hp": {
		base: 10,
		affects: {
		}
	},
	"def": {
		base: 0,
		affects: {
		}
	},
	"initiative": {
		base: 0,
		affects: {
		}
	},
	"mr": {
		base: {complex: "1+mob/2"},
		affects: {
		}
	},
	"mat": {
		base: 0,
		affects: {
		}
	},
	"rat": {
		base: 0,
		affects: {
		}
	},
	"tsc": {
		base: 0,
		affects: {
			"fire beam": 1
		}
	},
	"spc": {
		base: 0,
		affects: {
			"healing touch": 1
		}
	},
	"av": {
		base: null,
		affects: {
			"def": 1,
			"spc": -1,
			"tsc": -1
		}
	},
	"wb": {
		base: null,
		affects: {
			"mat": 1,
			"rat": 1
		}
	},
	"spc%": {
		base: null,
		affects: {
			"spc": 1
		}
	},
	"tsc%": {
		base: null,
		affects: {
			"tsc": 1
		}
	},
	"ini%": {
		base: null,
		affects: {
			"initiative": 1
		}
	},
	"mr%": {
		base: null,
		affects: {
			"mr": 1
		}
	}
};


spells = {
	"fire beam": {
		base: 1
	},
	"healing touch": {
		base: 1
	},
	"dominate undead": {
		base: {complex: "-(mnd+au)/2"}
	}
};

talents = {
	"alchemy": {
		affects: {
			"alchemy": 1
		}
	},
	"alertness": {
		affects: {
			"decipher script": 2,
			"perception": 2,
			"read tracks": 2,
			"search": 2,
			"wake up": 2
		}
	},
	"acrobat": {
		affects: {
			"climb": 2,
			"jump": 2
		}
	},
	"appraise": {
		affects: {
			"appraise": 3
		}
	},
	"artisan": {
		affects: {
			"mundane crafting": 1
		}
	},
	"beast master": {
		affects: {
			"riding": 3
		}
	},
	"caregiver": {
		affects: {
			"healing touch": 1
		}
	},
	"charming": {
		affects: {
			"flirt": 2,
			"haggle": 2
		}
	},
	"close combat": {
		affects: {
			"mat": 1
		}
	},
	"education": {
		affects: {
			"communicate": 2,
			"decipher script": 2,
			"knowledge": 2
		}
	},
	"embed magics": {
		affects: {
			"magic crafting": 1
		}
	},
	"endurance": {
		affects: {
			"hp": 3,
			"defy poison": 1,
			"resist disease": 1
		}
	},
	"fire magic": {
		affects: {
			"fire beam": 1
		}
	},
	"hunter": {
		affects: {
			"read tracks": 2,
			"start fire": 2,
			"trophy": 2
		}
	},
	"lightning reflexes": {
		affects: {
			"initiative": 2
		}
	},
	"lightning thrower": {
		affects: {
		}
	},
	"lockpicking": {
		affects: {
			"open lock": 2,
			"work mechanism": 2
		}
	},
	"manipulator": {
		affects: {
		}
	},
	"marksman": {
		affects: {
			"rat": 1,
			"tsc": 1
		}
	},
	"master climber": {
		affects: {
			"climb": 2
		}
	},
	"master of the elements": {
		affects: {
			"fire beam": 1
		}
	},
	"rascal": {
		affects: {
			"haggle": 3,
			"intimidate": 3	
		}
	},
	"riding": {
		affects: {
			"riding": 2
		}
	},
	"ritual of scars": {
		affects: {
			"def": 2,
			"hp": -1,
			"communicate": -1,
			"flirt": -1,
			"haggle": -1
		}
	},
	"rune lore": {
		affects: {
			"scribe": 1
		}
	},
	"spellchanger": {
		affects: {
			"change spell": 2
		}
	},
	"stealth": {
		affects: {
			"hide": 2,
			"pick pocket": 2,
			"search": 2,
			"sneak": 2
		}
	},
	"swift": {
		affects: {
			"mr": 1
		}
	},
	"swim": {
		affects: {
			"swim": 3
		}
	},
	"thievery": {
		affects: {
			"disable traps": 2,
			"open lock": 2,
			"perception": 2,
			"pick pocket": 2,
			"search": 2,
			"work mechanism": 2
		}
	}
};

racials = {
	"monocular": {
		affects: {
			"rat": -1,
			"tsc": -1
		}
	},
	"fragile": {
		affects: {
			"def": -1
		}
	},
	"quick": {
		affects: {
			"initiative": 2
		}
	},
	"slow": {
		affects: {
			"mr": -1
		}
	},
	"fleet footed": {
		affects: {
			"sneak": 2,
		}
	},
	"magically gifted": {
		affects: {
			"spc": 1
		}
	},
	"fast": {
		affects: {
			"mr": 1
		}
	},
	"clumsy": {
		affects: {
			"animal handling": -4,
			"climb": -4,
			"hide": -4,
			"jump": -4,
			"pick pocket": -4,
			"riding": -4,
			"sneak": -4,
			"swim": -4,
			"trophy": -4,
			"rat": -4
		}
	},
	"unkempt": {
		affects: {
			"communicate": -2,
			"flirt": -2,
			"haggle": -2
		}
	},
	"tough": {
		affects: {
			"def": 1
		}
	},
	"sure shot": {
		affects: {
			"rat": 1,
			"tsc": 1
		}
	}
};

skills = {
	"alchemy": {
		output: "attempts to brew a potion"
	},
	"animal handling": {
		output: "tries to influence an animal"
	},
	"appraise": {
		output: "is attempting to appraise something"
	},
	"climb": {
		output: "is trying to climb something"
	},
	"communicate": {
		output: "is trying to communicate with someone"
	},
	"change spell": {
		output: "is changing their active spell"
	},
	"decipher script": {
		output: "is trying to decipher a script"
	},
	"defy poison": {
		output: "is trying to defy a poison"
	},
	"disable traps": {
		output: "is trying to disable a trap"
	},
	"feat of strength": {
		output: "is trying to perform a feat of strength"
	},
	"flirt": {
		output: "is trying to flirt with someone"
	},
	"gold lust": {
		base: 4,
		output: "is trying to not covet a shiny"
	},
	"haggle": {
		base: {complex: "in>au?mnd+in:mnd+au"},
		output: "is trying to haggle"
	},
	"hide": {
		output: "is trying to hide behind some cover"
	},
	"jump": {
		output: "is trying to jump onto something"
	},
	"knowledge": {
		output: "is trying to apply some knowledge"
	},
	"intimidate": {
		output: "is trying to intimidate someone"
	},
	"open lock": {
		output: "is trying to get a lock open"
	},
	"perception": {
		base: {complex: "mnd+in>=8?mnd+in:8"},
		output: "is looking for anything unusual"
	},
	"pick pocket": {
		output: "is trying to pick a pocket"
	},
	"read tracks": {
		output: "is trying to read some tracks"
	},
	"resist disease": {
		output: "is trying to resist a disease"
	},
	"riding": {
		base: {complex: "ag>au?mob+ag:mob+au"},
		output: "is trying to ride an animal"
	},
	"scribe": {
		output: "is trying to scribe a scroll"
	},
	"search": {
		base: {complex: "mnd+in>=8?mnd+in:8"},
		output: "is searching for something"
	},
	"sneak": {
		output: "is attempting to sneak around"
	},
	"spellcraft": {
		output: "is trying to concentrate on the arcane"
	},
	"start fire": {
		output: "is starting a fire"
	},
	"swim": {
		output: "is trying to swim in a liquid"
	},
	"trophy": {
		output: "is trying to harvest a corpse"
	},
	"wake up": {
		output: "is trying to wake up"
	},
	"work mechanism": {
		base: {complex: "dx>in?mnd+dx:mnd+in"},
		output: "is trying to work a mechanism"
	}
};


function printObject(id)
{
	log(id + " (" + JSON.stringify(state.whatev.chars[id]) + ")");
}

function loadSkills(character, id)
{
	var key = null;
	
	state.whatev.chars[id].skills = {};

	if (skills)
	{
		for (key in skills)
		{
			if (!skills.hasOwnProperty(key))
				continue;

			state.whatev.chars[id].skills[key] = {output: skills[key].output, affectedBy: {}, base: (skills[key].base ? skills[key].base : 0)};
		}
	}
}

function loadStats(character, id, attributes)
{
	var key = null;
	var stat = null;

	state.whatev.chars[id].stats = {};

	if (stats)
	{
		for (key in stats)
		{
			if (!stats.hasOwnProperty(key))
				continue;

			state.whatev.chars[id].stats[key] = {};
			state.whatev.chars[id].stats[key].affects = stats[key].affects;
			state.whatev.chars[id].stats[key].affectedBy = {};

			if (stats[key].base === null)
			{
				stat = getAttributeValue(attributes, key.toUpperCase());

				if (stat === null)
					stat = 0;

				state.whatev.chars[id].stats[key].base = stat;
			}
			else
				state.whatev.chars[id].stats[key].base = stats[key].base;
		}
	}
}

function loadRacials(character, id, attributes)
{
	var key = null;

	state.whatev.chars[id].racials = {};

	if (racials)
	{
		for (key in racials)
		{
			if (!racials.hasOwnProperty(key))
				continue;

			if (getAttribute(attributes, key.toUpperCase()))
			{
				state.whatev.chars[id].racials[key] = {};
				state.whatev.chars[id].racials[key] = racials[key];
				state.whatev.chars[id].racials[key].base = getAttributeValue(attributes, key.toUpperCase());
			}
		}
	}
}

function loadTalents(character, id, attributes)
{
	var key = null;

	state.whatev.chars[id].talents = {};

	if (talents)
	{
		for (key in talents)
		{
			if (!talents.hasOwnProperty(key))
				continue;

			if (getAttribute(attributes, key.toUpperCase()))
			{
				state.whatev.chars[id].talents[key] = {};
				state.whatev.chars[id].talents[key] = talents[key];
				state.whatev.chars[id].talents[key].base = getAttributeValue(attributes, key.toUpperCase());
			}
		}
	}
}

function loadSpells(character, id)
{
	var key = null;

	state.whatev.chars[id].spells = {};

	if (spells)
	{
		for (key in spells)
		{
			if (!spells.hasOwnProperty(key))
				continue;

			state.whatev.chars[id].spells[key] = {base: spells[key].base, affectedBy: {}};
		}
	}
}

function processLoop(id, key, target, input, check)
{
	var tmp = null;
	var regex = null;
	var complex = null;

	if (state.whatev.chars[id][check].hasOwnProperty(target))
	{
		if (isNumber(state.whatev.chars[id][input][key].affects[target]))
		{
			if (state.whatev.chars[id][check][target].hasOwnProperty("affectedBy"))
			{
				// Don't add it to affected if it is a stat and the base is complex
				complex = false;
			
				if (state.whatev.chars[id][check][target].base.hasOwnProperty("complex"))
				{
					if (state.whatev.chars[id][check][target].base.complex.indexOf(key) !== -1)
						complex = true;
				}
				
				if (complex)
				{
					regex = new RegExp(key, "gi");
					state.whatev.chars[id][check][target].base.complex = state.whatev.chars[id][check][target].base.complex.replace(regex, (state.whatev.chars[id][input][key].base * state.whatev.chars[id][input][key].affects[target]));
				}
				else
				{
					tmp = {};
					tmp[key] = (state.whatev.chars[id][input][key].base * state.whatev.chars[id][input][key].affects[target]);

					_.extend(state.whatev.chars[id][check][target].affectedBy, tmp);
				}
			}
		}
	}
}

function processData(character, id, input)
{
	var key = null;
	var target = null;

	if (state.whatev.chars[id][input])
	{
		for (key in state.whatev.chars[id][input])
		{	
			if (!state.whatev.chars[id][input].hasOwnProperty(key))
				continue;

			// Step through affects, apply to targets
			for (target in state.whatev.chars[id][input][key].affects)
			{
				// Test for stat, then skill, then spells
				processLoop(id, key, target, input, "stats");
				processLoop(id, key, target, input, "skills");
				processLoop(id, key, target, input, "spells");
			}
		}
	}
}

function processMath(character, id)
{
	var key = null;
	var input = ["stats", "skills", "spells"];
	var i = 0;
	var token = null;

	for (i = 0; i < input.length; i++)
	{
		if (state.whatev.chars[id][input[i]])
		{
			for (key in state.whatev.chars[id][input[i]])
			{	
				if (!state.whatev.chars[id][input[i]].hasOwnProperty(key))
					continue;

				// Step through all values to set its current
				if (state.whatev.chars[id][input[i]][key].hasOwnProperty("affectedBy"))
				{
					
					if (isNumber(state.whatev.chars[id][input[i]][key].base))
						state.whatev.chars[id][input[i]][key].current = state.whatev.chars[id][input[i]][key].base;
					else
						state.whatev.chars[id][input[i]][key].current = eval(state.whatev.chars[id][input[i]][key].base.complex);

					// Add em up!
					for (token in state.whatev.chars[id][input[i]][key].affectedBy)
					{
						if (isNumber(state.whatev.chars[id][input[i]][key].affectedBy[token]))
							state.whatev.chars[id][input[i]][key].current += state.whatev.chars[id][input[i]][key].affectedBy[token];
						else
							state.whatev.chars[id][input[i]][key].current += eval(state.whatev.chars[id][input[i]][key].affectedBy[token].complex);
					}
				}
			}
		}
	}
}

function baselineCharacter(character)
{
	if (character)
	{
		var id = character.get("_id");
		var attributes = getAttributes(character);

		state.whatev.chars[id] = {};
		
		loadSkills(character, id);
		loadStats(character, id, attributes);
		loadRacials(character, id, attributes);
		loadTalents(character, id, attributes);
		loadSpells(character, id);
	}
}

function affectedBySummation(affectedBy)
{
	var rtn = [];

	if (affectedBy)
	{
		var key = null;

		for (key in affectedBy)
		{
			if (affectedBy[key] !== 0)
				rtn.push([key.toUpperCase(), affectedBy[key], sign(affectedBy[key])]);
		}
	}

	return rtn;
}

function doSetup(msg, args)
{
	character = getCharacter(msg.who);

	if (character)
	{
		id = character.get("_id");
		attributes = null;
		key = null;
		var stat = null;
		var abilities = null;
		var ability = null;

		if (character)
		{
			if (stats)
			{
				attributes = getAttributes(character);

				for (var key in stats)
				{
					if (!stats.hasOwnProperty(key))
						continue;

					stat = getAttribute(attributes, key);

					if (stat === null)
					{
						createAttribute(character, key);
					}
				}
			}

			if ((abilities = getAbilities(character)))
			{
				if (!(ability = getAbility(abilities, "End Turn")))
				{
					ability = createAbility(character, "End Turn");
					ability.set("action", "!endTurn");
				}
			}

			baselineCharacter(character);

			processData(character, id, "talents");
			processData(character, id, "racials");
			processData(character, id, "stats");
			processMath(character, id);

			state.whatev.chars[id].loaded = true;
			if (false)
				printObject(id);

			sendChat("Setup Bot", "/w " + msg.who + " finished with initial setup.");
		}
	}
	else
		sendChat("Setup Bot", "/w " + msg.who + " you are not a character.");	
}

function doCombat(msg, someArgs)
{
	var combat = {"!def": "def", "!melee": "mat", "!ranged": "rat", "!spell": "spc", "!tspell": "tsc"};
	var args = msg.content.split(" ");

	character = getCharacter(msg.who);

	if (character)
	{
		id = character.get("_id");
		checkValue = state.whatev.chars[id].stats[combat[args[0]]].current;
		summation = affectedBySummation(state.whatev.chars[id].stats[combat[args[0]]].affectedBy);
		message = msg.content.replace(args[0], "").toLowerCase();

		// Leftover data to handle
		if (message.length > 0)
		{
			bonus = tallyLeftovers(message);
			
			if (bonus)
			{
				checkValue += bonus;
				summation.push(["", Math.abs(bonus), sign(bonus)]);
				message = "";
			}
		}

		rollResults = roll(checkValue);
		output = ctnFormat(summation);
		output = rollFormat(msg.who, "Combat roll for " + combat[args[0]].toUpperCase(), output, checkValue, rollResults);

		sendChat(msg.who, "/direct " + output);
	}
	else
		sendChat(msg.who, "/em tried to do a combat roll but they aren't even a character!");	
}

function doChk(msg, someArgs)
{
	message = msg.content.replace("!chk", "").toLowerCase();

	character = getCharacter(msg.who);

	if (character)
	{
		var skill = null;
		id = character.get("_id");

		for (var key in state.whatev.chars[id].skills)
		{
			if (!state.whatev.chars[id].skills.hasOwnProperty(key))
				continue;

			if (msg.content.indexOf(key) !== -1)
			{
				skill = key;
				message = message.replace(key, "").toLowerCase();
				break;
			}
		}

		if (skill)
		{
			checkValue = state.whatev.chars[id].skills[skill].current;
			summation = affectedBySummation(state.whatev.chars[id].skills[skill].affectedBy);
			message = msg.content.replace(skill, "").toLowerCase();

			// Leftover data to handle
			if (message.length > 0)
			{
				bonus = tallyLeftovers(message);
				
				if (bonus)
				{
					checkValue += bonus;
					summation.push(["", Math.abs(bonus), sign(bonus)]);
					message = "";
				}
			}

			rollResults = roll(checkValue);
			output = ctnFormat(summation);
			output = rollFormat(msg.who, msg.who + " " + state.whatev.chars[id].skills[skill].output, output, checkValue, rollResults);

			sendChat(msg.who, "/direct " + output);
		}
	}
	else
		sendChat(msg.who, "/em tried to do a skill check but they aren't even a character!");	
}

function doCast(msg, someArgs)
{
	message = msg.content.replace("!cast", "").toLowerCase();

	character = getCharacter(msg.who);

	if (character)
	{
		var spell = null;
		id = character.get("_id");

		for (var key in state.whatev.chars[id].spells)
		{
			if (!state.whatev.chars[id].spells.hasOwnProperty(key))
				continue;

			if (msg.content.indexOf(key) !== -1)
			{
				spell = key;
				message = message.replace(key, "").toLowerCase();
				break;
			}
		}

		if (spell)
		{
			checkValue = state.whatev.chars[id].spells[spell].current;
			summation = affectedBySummation(state.whatev.chars[id].spells[spell].affectedBy);
			message = msg.content.replace(spell, "").toLowerCase();

			// Leftover data to handle
			if (message.length > 0)
			{
				bonus = tallyLeftovers(message);
				
				if (bonus)
				{
					checkValue += bonus;
					summation.push(["", Math.abs(bonus), sign(bonus)]);
					message = "";
				}
			}

			rollResults = roll(checkValue);
			output = ctnFormat(summation);
			output = rollFormat(msg.who, msg.who + " tries to cast " + spell, output, checkValue, rollResults);

			sendChat(msg.who, "/direct " + output);
		}
	}
	else
		sendChat(msg.who, "/em tried to do a skill check but they aren't even a character!");	
}

function registerCommands()
{
	whatev.commands.registerMultiple({
		setup:
		{ 
			func: doSetup,
			help: "Sets up a new character",
			usage: "Use !setup to setup a new character."
		},
		def:
		{
			func: doCombat,
			help: "Defensive roll",
			usage: "!def a defensive roll"
		},
		melee:
		{
			func: doCombat,
			help: "melee roll",
			usage: "!melee a roll"
		},
		ranged:
		{
			func: doCombat,
			help: "ranged roll",
			usage: "!ranged a roll"
		},
		spell:
		{
			func:doCombat,
			help: "Spell cast",
			usage: "!spell a spell"
		},
		tspell:
		{
			func: doCombat,
			help: "Target cast",
			usage: "!tspell a spell"
		},
		chk:
		{
			func: doChk,
			help: "chk",
			usage: "!chk"
		},
		cast:
		{
			func: doCast,
			help: "cast",
			usage: "!cast"
		}
	});
}


on("ready", function(msg)
{
	registerCommands();

	if (!state.whatev)
		state.whatev = whatev;
	if (!state.whatev.chars)
		state.whatev.chars = {};
});
