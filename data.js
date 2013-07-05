// jshint  evil:true

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


function printObject(characterName, input)
{
	var character = getCharacter(characterName);
	var key = null;
	var i = 0;

	if (character)
	{
		var id = character.get("_id");

		for (i = 0; i < input.length; i++)
		{
			if (whatev.chars[id][input[i]])
			{
				for (key in whatev.chars[id][input[i]])
				{	
					if (!whatev.chars[id][input[i]].hasOwnProperty(key))
						continue;

					log(key + " (" + JSON.stringify(whatev.chars[id][input[i]][key]) + ")");
				}
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

				whatev.chars[id].skills[key] = {output: skills[key].output, affectedBy: {}, base: (skills[key].base ? skills[key].base : 0)};
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
				whatev.chars[id].stats[key].affectedBy = {};

				if (stats[key].base === null)
				{
					stat = getAttributeValue(attributes, key.toUpperCase());

					if (stat === null)
						stat = 0;

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

				whatev.chars[id].spells[key] = {base: spells[key].base, affectedBy: {}};
			}
		}
	}
}

function processLoop(id, key, target, input, check)
{
	var tmp = null;
	var regex = null;

	if (whatev.chars[id][check].hasOwnProperty(target))
	{
		if (isNumber(whatev.chars[id][input][key].affects[target]))
		{
			if (whatev.chars[id][check][target].hasOwnProperty("affectedBy"))
			{
				// Don't add it to affected by if it is going into a complex
				if (!isNumber(whatev.chars[id][check][target].base))
				{					
					regex = new RegExp(key, "gi");
					whatev.chars[id][check][target].base.complex = whatev.chars[id][check][target].base.complex.replace(regex, (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]));
				}
				else
				{
					tmp = {};
					tmp[key] = (whatev.chars[id][input][key].base * whatev.chars[id][input][key].affects[target]);

					_.extend(whatev.chars[id][check][target].affectedBy, tmp);
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

function processMath(characterName)
{
	var character = getCharacter(characterName);
	var key = null;
	var input = ["skills", "spells", "stats"];
	var i = 0;
	var token = null;

	if (character)
	{
		var id = character.get("_id");

		for (i = 0; i < input.length; i++)
		{
			if (whatev.chars[id][input[i]])
			{
				for (key in whatev.chars[id][input[i]])
				{	
					if (!whatev.chars[id][input[i]].hasOwnProperty(key))
						continue;

					// Step through all values to set its current
					if (whatev.chars[id][input[i]][key].hasOwnProperty("affectedBy"))
					{
						if (isNumber(whatev.chars[id][input[i]][key].base))
							whatev.chars[id][input[i]][key].current = whatev.chars[id][input[i]][key].base;
						else
						{
							whatev.chars[id][input[i]][key].current = eval(whatev.chars[id][input[i]][key].base.complex);
						}

						// Add em up!
						for (token in whatev.chars[id][input[i]][key].affectedBy)
						{
							if (isNumber(whatev.chars[id][input[i]][key].affectedBy[token]))
								whatev.chars[id][input[i]][key].current += whatev.chars[id][input[i]][key].affectedBy[token];
							else
							{
								whatev.chars[id][input[i]][key].current += eval(whatev.chars[id][input[i]][key].affectedBy[token].complex);
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
		printObject(characterName, ["skills","stats","racials","talents","spells"]);
	}

	log("** Proccessing ****************************");

	processData(characterName, "talents");
	processData(characterName, "racials");
	processData(characterName, "stats");
	processMath(characterName);
	//processFinal(characterName);

	log("** After ****************************");
	printObject(characterName, ["stats", "skills", "spells"]);
});

// * TODO: Make sure minimum is used (Make sure list of affectedBy changes if minimum is used instead of stats)
// TODO: Make sure > skill modifer comparisons are used
// * TODO: Add list of affectedBy to each skill, spell
// TODO: Add complex math to deal with SM's, Racials, etc
// TODO: Re-calc on attribute update
// TODO: Build into rolling system
// TODO: Build into help system
// TODO: Build into command system
// TODO: Handle complex as a base
// * TODO: Remove Minimums
// TODO: Add a final tally step
// TODO: 