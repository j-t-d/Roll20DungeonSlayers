var whatev = whatev || {};

whatev.chars = {};

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
			"mr": {op: "/", arg: 2},
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
			"scribe": 1
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
			"spellcraft": 1
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
		base: 1,
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
		sm: 1,
	},
	"healing touch": {
		sm: 1,
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
		minimum: 8,
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
		output: "is trying to ride an animal"
	},
	"scribe": {
		output: "is trying to scribe a scroll"
	},
	"search": {
		minimum: 8,
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
		output: "is trying to work a mechanism"
	}
};

function printSkills(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].skills)
		{
			for (key in whatev.chars[id].skills)
			{	
				if (!whatev.chars[id].skills.hasOwnProperty(key))
					continue;

				log(key + " current(" + whatev.chars[id].skills[key].current + ") base(" + whatev.chars[id].skills[key].base + ") min(" + whatev.chars[id].skills[key].min + ") " + whatev.chars[id].skills[key].output);
			}
		}
	}
}

function printStats(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].stats)
		{
			for (key in whatev.chars[id].stats)
			{	
				if (!whatev.chars[id].stats.hasOwnProperty(key))
					continue;

				log(key + " (" + JSON.stringify(whatev.chars[id].stats[key]) + ")");
			}
		}
	}
}

function printRacials(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].racials)
		{
			for (key in whatev.chars[id].racials)
			{	
				if (!whatev.chars[id].racials.hasOwnProperty(key))
					continue;

				log(key + " (" + JSON.stringify(whatev.chars[id].racials[key]) + ")");
			}
		}
	}
}

function printTalents(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].talents)
		{
			for (key in whatev.chars[id].talents)
			{	
				if (!whatev.chars[id].talents.hasOwnProperty(key))
					continue;

				log(key + " (" + JSON.stringify(whatev.chars[id].talents[key]) + ")");
			}
		}
	}
}

function printSpells(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].spells)
		{
			for (key in whatev.chars[id].spells)
			{	
				if (!whatev.chars[id].spells.hasOwnProperty(key))
					continue;

				log(key + " base(" + whatev.chars[id].spells[key].base + ") current(" + whatev.chars[id].spells[key].current + ")");
			}
		}
	}
}

function loadSkills(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		whatev.chars[id] = {};
		whatev.chars[id].skills = {};

		if (skills)
		{
			for (key in skills)
			{
				if (!skills.hasOwnProperty(key))
					continue;

				whatev.chars[id].skills[key] = {output: skills[key].output, current: (skills[key].base ? skills[key].base : 0), affectedBy: {}, base: (skills[key].base ? skills[key].base : 0), min: (skills[key].minimum ? skills[key].minimum : 0)};
			}
		}
	}
}

function prepStats(characterName)
{
	var character = getCharacter(characterName);
	var attributes = null;
	var key = null;
	var stat = null;

	if (character)
	{
		var id = character.get("_id");

		if (stats)
		{
			attributes = getAttributes(character);

			for (key in stats)
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
	}
}

function loadStats(characterName)
{
	var character = getCharacter(characterName);
	var attributes = null;
	var key = null;
	var stat = null;

	if (character)
	{
		var id = character.get("_id");

		whatev.chars[id].stats = {};

		if (stats)
		{
			attributes = getAttributes(character);

			for (key in stats)
			{
				if (!stats.hasOwnProperty(key))
					continue;

				whatev.chars[id].stats[key] = {};
				whatev.chars[id].stats[key].affects = stats[key].affects;

				if (stats[key].base === null)
				{
					stat = getAttributeValue(attributes, key.toUpperCase());
					whatev.chars[id].stats[key].base = stat;
				}
				else
					whatev.chars[id].stats[key].base = stats[key].base;
			}
		}
	}
}

function loadRacials(characterName)
{
	var character = getCharacter(characterName);
	var attributes = null;
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		whatev.chars[id].racials = {};
		attributes = getAttributes(character);

		if (racials)
		{
			for (key in racials)
			{
				if (!racials.hasOwnProperty(key))
					continue;

				if (getAttribute(attributes, key.toUpperCase()))
				{
					whatev.chars[id].racials[key] = {};
					whatev.chars[id].racials[key] = racials[key];
					whatev.chars[id].racials[key].base = getAttributeValue(attributes, key.toUpperCase());
				}
			}
		}
	}
}

function loadTalents(characterName)
{
	var character = getCharacter(characterName);
	var attributes = null;
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		whatev.chars[id].talents = {};
		attributes = getAttributes(character);

		if (talents)
		{
			for (key in talents)
			{
				if (!talents.hasOwnProperty(key))
					continue;

				if (getAttribute(attributes, key.toUpperCase()))
				{
					whatev.chars[id].talents[key] = {};
					whatev.chars[id].talents[key] = talents[key];
					whatev.chars[id].talents[key].base = getAttributeValue(attributes, key.toUpperCase());
				}
			}
		}
	}
}

function loadSpells(characterName)
{
	var character = getCharacter(characterName);
	var key = null;

	if (character)
	{
		var id = character.get("_id");

		whatev.chars[id].spells = {};

		if (spells)
		{
			for (key in spells)
			{
				if (!spells.hasOwnProperty(key))
					continue;

				whatev.chars[id].spells[key] = {base: spells[key].sm};
			}
		}
	}
}

function processStats(characterName)
{
	var character = getCharacter(characterName);
	var key = null;
	var target = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id].stats)
		{
			for (key in whatev.chars[id].stats)
			{	
				if (!whatev.chars[id].stats.hasOwnProperty(key))
					continue;

				// Step through affects, apply to targets
				for (target in whatev.chars[id].stats[key].affects)
				{
					// Test for stat, then skill
					if (whatev.chars[id].stats.hasOwnProperty(target))
					{
						// if target has a current value, continue, otherwise establish a current for target with its base
						if (!whatev.chars[id].stats[target].hasOwnProperty("current"))
							whatev.chars[id].stats[target].current = whatev.chars[id].stats[target].base;

						// add to current if it is a number, otherwise process an operation
						if (isNumber(whatev.chars[id].stats[key].affects[target]))
							whatev.chars[id].stats[target].current += (whatev.chars[id].stats[key].base * whatev.chars[id].stats[key].affects[target]);
						else
						{
							if (whatev.chars[id].stats[key].affects[target].hasOwnProperty("op"))
							{
								if (whatev.chars[id].stats[key].affects[target].op == "/")
								{
									whatev.chars[id].stats[target].current += (whatev.chars[id].stats[key].base / whatev.chars[id].stats[key].affects[target].arg);
								}
							}
						}
					}
					else if (whatev.chars[id].skills.hasOwnProperty(target))
					{

					}

				}
			}
		}
	}
}

function processLoop(id, key, target, input, check)
{
	if (whatev.chars[id][check].hasOwnProperty(target))
	{
		// if target has a current value, continue, otherwise establish a current for target with its base
		if (!whatev.chars[id][check][target].hasOwnProperty("current"))
			whatev.chars[id][check][target].current = whatev.chars[id][check][target].base;

		// add to current if it is a number, otherwise process an operation
		if (isNumber(whatev.chars[id][input][key].affects[target]))
			whatev.chars[id][check][target].current += (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]);
		else
		{
			if (whatev.chars[id][input][key].affects[target].hasOwnProperty("op"))
			{
				if (whatev.chars[id][input][key].affects[target].op == "/")
				{
					whatev.chars[id][check][target].current += (whatev.chars[id][input][key].base / whatev.chars[id][input][key].affects[target].arg);
				}
			}
		}
	}
}

function processData(characterName, input)
{
	var character = getCharacter(characterName);
	var key = null;
	var target = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id][input])
		{
			for (key in whatev.chars[id][input])
			{	
				if (!whatev.chars[id][input].hasOwnProperty(key))
					continue;

				// Step through affects, apply to targets
				for (target in whatev.chars[id][input][key].affects)
				{
					// Test for stat, then skill, then spells
					processLoop(id, key, target, input, "stats");
					processLoop(id, key, target, input, "skills");
					processLoop(id, key, target, input, "spells");
				}
			}
		}
	}
}

function processDataOrig(characterName, input)
{
	var character = getCharacter(characterName);
	var key = null;
	var target = null;

	if (character)
	{
		var id = character.get("_id");

		if (whatev.chars[id][input])
		{
			for (key in whatev.chars[id][input])
			{	
				if (!whatev.chars[id][input].hasOwnProperty(key))
					continue;

				// Step through affects, apply to targets
				for (target in whatev.chars[id][input][key].affects)
				{
					// Test for stat, then skill, then spells
					processLoop(id, key, target, input, "stats");
					processLoop(id, key, target, input, "skills");
					processLoop(id, key, target, input, "spells");

					if (whatev.chars[id].stats.hasOwnProperty(target))
					{
						// if target has a current value, continue, otherwise establish a current for target with its base
						if (!whatev.chars[id].stats[target].hasOwnProperty("current"))
							whatev.chars[id].stats[target].current = whatev.chars[id].stats[target].base;

						// add to current if it is a number, otherwise process an operation
						if (isNumber(whatev.chars[id][input][key].affects[target]))
							whatev.chars[id].stats[target].current += (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]);
						else
						{
							if (whatev.chars[id][input][key].affects[target].hasOwnProperty("op"))
							{
								if (whatev.chars[id][input][key].affects[target].op == "/")
								{
									whatev.chars[id].stats[target].current += (whatev.chars[id][input][key].base / whatev.chars[id][input][key].affects[target].arg);
								}
							}
						}
					}
					else if (whatev.chars[id].skills.hasOwnProperty(target))
					{
						// if target has a current value, continue, otherwise establish a current for target with its base
						if (!whatev.chars[id].skills[target].hasOwnProperty("current"))
							whatev.chars[id].skills[target].current = whatev.chars[id].skills[target].base;

						// add to current if it is a number, otherwise process an operation
						if (isNumber(whatev.chars[id][input][key].affects[target]))
							whatev.chars[id].skills[target].current += (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]);
						else
						{
							if (whatev.chars[id][input][key].affects[target].hasOwnProperty("op"))
							{
								if (whatev.chars[id][input][key].affects[target].op == "/")
								{
									whatev.chars[id].skills[target].current += (whatev.chars[id][input][key].base / whatev.chars[id][input][key].affects[target].arg);
								}
							}
						}
					}
					else if (whatev.chars[id].spells.hasOwnProperty(target))
					{
						// if target has a current value, continue, otherwise establish a current for target with its base
						if (!whatev.chars[id].spells[target].hasOwnProperty("current"))
							whatev.chars[id].spells[target].current = whatev.chars[id].spells[target].base;

						log(whatev.chars[id].spells[target]);
						// add to current if it is a number, otherwise process an operation
						if (isNumber(whatev.chars[id][input][key].affects[target]))
							whatev.chars[id].spells[target].current += (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]);
						else
						{
							if (whatev.chars[id][input][key].affects[target].hasOwnProperty("op"))
							{
								if (whatev.chars[id][input][key].affects[target].op == "/")
								{
									whatev.chars[id].spells[target].current += (whatev.chars[id][input][key].base / whatev.chars[id][input][key].affects[target].arg);
								}
							}
						}
					}
				}
			}
		}
	}
}

on("ready", function(msg)
{
	var characterName = "Street.Legal";


	log("** Before ****************************");
	loadSkills(characterName);
	prepStats(characterName);
	loadStats(characterName);
	loadRacials(characterName);
	loadTalents(characterName);	
	loadSpells(characterName);

	if (true)
	{
		printSkills(characterName);
		printStats(characterName);
		printRacials(characterName);
		printTalents(characterName);
		printSpells(characterName);
	}

	processData(characterName, "talents");
	processData(characterName, "racials");
	processData(characterName, "stats");

	log("** After ****************************");
	printStats(characterName);
	log("******************************");
	printSkills(characterName);
	log("******************************");
	printSpells(characterName);


});