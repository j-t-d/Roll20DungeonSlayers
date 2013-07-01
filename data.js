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
		base: 0,
		affects: {
			"def": 1,
			"spc": -1,
			"tsc": -1
		}
	},
	"wb": {
		base: 0,
		affects: {
			"mat": 1,
			"rat": 1
		}
	},
	"spc%": {
		base: 0,
		affects: {
			"spc": 1
		}
	},
	"tsc%": {
		base: 0,
		affects: {
			"tsc": 1
		}
	},
	"ini%": {
		base: 0,
		affects: {
			"initiative": 1
		}
	},
	"mr%": {
		base: 0,
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