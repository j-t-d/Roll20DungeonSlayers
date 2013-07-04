on("ready", function()
{
	state.treasureTable = {
		"A":
		[
			"",
			{func:resolveTreasure, args:{roll: "D20", desc: "CP"}},
			{func:resolveTreasure, args:{roll: "2D20", desc: "CP"}},
			{func:resolveTreasure, args:{roll: "3D20", desc: "CP"}},
			{func:resolveTreasure, args:{roll: "4D20", desc: "CP"}},
			{func:resolveTreasure, args:{roll: "5D20", desc: "CP"}},
			{func:resolveTreasure, args:{roll: "D20", desc: "SP"}},
			{func:resolveTreasure, args:{roll: "2D20", desc: "SP"}},
			{func:resolveTreasure, args:{roll: "3D20", desc: "SP"}},
			{func:resolveTreasure, args:{roll: "4D20", desc: "SP"}},
			{func:resolveTreasure, args:{roll: "5D20", desc: "SP"}},
			{func:resolveTreasure, args:{roll: "D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "2D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "3D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "4D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "5D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "6D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "7D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "8D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "9D20", desc: "GP"}},
			{func:resolveTreasure, args:{roll: "10D20", desc: "GP"}}
		],
		"B":
		[
			"",
			"Fish bone, rotten meat",
			"Broken water skin",
			"Leftover food stuffs",
			"Water skin",
			"Fresh provisions",
			"Bloody rags",
			"Piece of string",
			"Frayed grubby blanket",
			"Bent piece of wire",
			"Gaudy marble or wax chunk",
			"Flint, steel and tinder",
			"Tooth necklace, elven ears",
			"Fishing hook",
			{func:resolveTreasure, args:{roll: "D20/2", desc: "m moldy rope"}},
			{func:resolveTreasure, args:{roll: "D20", desc: " glass stones"}},
			"Gem Shards (D20 CP)",
			{func:resolveTreasure, args:[{roll: "D20", desc: "CP"}, {roll: "D20", desc: "SP"}]},
			{func:resolveTreasure, args:[{roll: "D20", desc: "CP"}, {roll: "D20", desc: "SP"}, {roll: "D20", desc: "GP"}]},
			{func:resolveTreasure, args:[{roll: "D20", desc: "GP"}, {resolve: "#M:5"}]},
			{func:resolveTreasure, args:{roll: "D20", desc: " Gems (D20 GP)"}}
		],
		"C":
		[
			"",
			"Water skin or leather cup",
			"Flint, steel and tinder",
			"One ration",
			{func:resolveTreasure, args:{roll: "D20/2", desc: " torches"}},
			"Blanket or tankard",
			"Fishing rod or wooden cutlery",
			"Leather cord or D20 CP",
			"Pan or pot",
			"Firewood or D20 SP",
			{func:resolveTreasure, args:{roll: "D20/2", desc: " rations"}},
			"Needle and thread or beer keg",
			"D20/2 Meter rope or D20 GP",
			"Healing herb or pipe with tobacco",
			"Climbing gear or oil latern",
			{func:resolveTreasure, args:{resolve: "#M:5"}},
			"2 man tent or bear trap",
			{func:resolveTreasure, args:{resolve: "#A:15"}},
			"Compass or gold teeth (D20/2 GP)",
			"D20/2 Healing herbs or Ring (D20GP)",
			{func:resolveTreasure, args:{resolve: "#M:10"}}
		],
		"D":
		[
			"",
			"1 CP",
			"Bread crumbs or comb",
			"Piece of kohl or leather pouch",
			"Piece of wire or handkerchief (used)",
			"Packaged bread or apple",
			"Wooden figurine or dice",
			"Pipe with tobacco or bandana",
			"Wooden figurine or dice",
			"Crowbar or key",
			"D20 CP or a ring (1SP)",
			"Decorative belt buckle (D20/2 SP)",
			"1 healing herb or deck of cards",
			"Hidden dagger or necklace (D20 SP)",
			"Golden tooth (1GP) or lantern",
			"5 lock picks or bunch of keys",
			{func:resolveTreasure, args:{resolve: "#A:15"}},
			"Gold teeth (D20/2 GP) or Healing potion",
			"Precious Jewelry (D20 GP)",
			{func:resolveTreasure, args:{resolve: "#M:5"}},
			{func:resolveTreasure, args:{resolve: "#M:10"}}
		],
		"M":
		[
			"",
			{func:resolvePotion},
			{func:resolvePotion},
			{func:resolvePotion},
			{func:resolvePotion},
			{func:resolvePotion},
			{func:resolveScroll},
			{func:resolveScroll},
			{func:resolveWeapon},	
			{func:resolveScroll},
			{func:resolveWeapon},
			{func:resolveArmor},
			{func:resolveScroll},
			{func:resolveArmor},
			{func:resolveScroll},
			{func:resolveWeapon},
			{func:resolveArmor},
			{func:resolveWeapon},
			{func:resolveUnique},
			{func:resolveItem},
			{func:resolveUnique}
		],
		"P":
		[
			"","","","","",
			"Potion of Restoration",
			"Madman's Potion",
			"Potion of Gaseous Form",
			"Potion of Embiggenment",
			"Potion of Aging",
			"Potion of Aging",
			"Potion of Haste",
			"Potion of Haste",
			"Potion of Talent",
			"Potion of Talent",
			"Potion of Dwarven Sight",
			"Potion of Dwarven Sight",
			"Potion of Invulnerability",
			"Potion of Invulnerability",
			"Shrinking Potion",
			"Shrinking Potion",
			"Anaerobic Potion",
			"Anaerobic Potion",
			"Anaerobic Potion",
			"Potion of Spider Walk",
			"Potion of Spider Walk",
			"Potion of Spider Walk",
			"Greater Healing Potion",
			"Greater Healing Potion",
			"Potion of Perception",
			"Potion of Perception",
			"Potion of Perception",
			"Poison (CTN 20, undefendable)",
			"Poison (CTN 20, undefendable)",
			"Potion of Water Walking",
			"Potion of Water Walking",
			"Potion of Water Walking",
			"Holy Water",
			"Holy Water",
			"Spellchanging Potion",
			"Spellchanging Potion",
			"Spellchanging Potion",
			"Spellchanging Potion",
			"Potion of Sure Shot",			
			"Potion of Sure Shot",			
			"Potion of Sure Shot",			
			"Potion of Sure Shot",		
			"Cooldown Potion",	
			"Cooldown Potion",	
			"Cooldown Potion",	
			"Cooldown Potion",	
			"Cooldown Potion",	
			"Healing Potion",
			"Healing Potion",
			"Healing Potion",
			"Healing Potion",
			"Healing Potion",
			"Potion of Enchant Weapon",
			"Potion of Enchant Weapon",
			"Potion of Enchant Weapon",
			"Potion of Enchant Weapon",
			"Potion of Enchant Weapon",
			"Potion of Continuous Healing",
			"Potion of Continuous Healing",
			"Potion of Continuous Healing",
			"Potion of Continuous Healing",
			"Defense Potion",
			"Defense Potion",
			"Defense Potion",
			"Defense Potion",
			"Greater Defense Potion",
			"Greater Defense Potion",
			"Greater Defense Potion",
			"Greater Defense Potion",
			"Potion of Strength",
			"Potion of Strength",
			"Potion of Strength",
			"Potion of Strength",
			"Battle Potion",
			"Battle Potion",
			"Battle Potion",
			"Potion of Levitation",
			"Potion of Levitation",
			"Potion of Levitation",
			"Potion of All Seeing",
			"Potion of All Seeing",
			"Potion of Flight",
			"Potion of Flight",
			"Antidote",
			"Antidote",
			"Potion of Luck",
			"Potion of Luck",
			"Potion of Deep Thought",
			"Potion of Deep Thought",
			"Vitality Potion",
			"Vitality Potion",
			"Spellcasting Potion",
			"Spellcasting Potion",
			"Potion of Teleportation",
			"Potion of Invisibility",
			"Potion of Youth"
		],
		"S1":
		[
			"", "",
			"Flicker",
			"Flicker",
			"Balance",
			"Balance",
			"Cleanse",
			"Cleanse",
			"Create Food",
			"Create Food",
			"Enchant Weapon",
			"Enchant Weapon",
			"Jump",
			"Resist Poison",
			"Resist Poison",
			"Eavesdrop",
			"Healing Touch",
			"Healing Touch",
			"Cloud of Remorse",
			"Cloud of Remorse",
			"Dirt Devil",
			"Healing Aura",
			"Healing Aura",
			"Open",
			"Open",
			"Light",
			"Light",
			"Change Race",
			"Change Race",
			"Shadow Arrow",
			"Mana Bread",
			"Mana Bread",
			"Defensive Shield",
			"Defensive Shield",
			"Fire Beam",
			"Fire Beam",
			"Throw Voice",
			"Healberries",
			"Healberries",
			"Invigorate",
			"Concealing Fog"
		],
		"S2":
		[
			"",
			"Blind",
			"Bestow Scent",
			"Feather Fall",
			"Scorching Blade",
			"Arctic Weapon",
			"Healing Light",
			"Frighten",
			"Arrow of Light",
			"Shadow",
			"Protective Shell",
			"Levitate",
			"Wall of Stone",
			"Stumble",
			"Transformation",
			"Telekinesis",
			"Calm Animal",
			"Mirage",
			"Slow",
			"Weapon of Light",
			"Water Walking"
		],
		"S3":
		[
			"","",
			"Hurl",
			"Confusion",
			"Displace",
			"Fire Wall",
			"Shadow Lance",
			"Shadow Blade",
			"Sternutation",
			"Rust",
			"Holy Hammer",
			"Guardian",
			"Lance of Light",
			"Cloud of Death",
			"Healing Ray",
			"Chasm",
			"Create Web",
			"Shrink",
			"Dominate Undead",
			"Prolong Defensive Shield",
			"Consecrate Water",
			"Magic Lock",
			"Magic Ladder",
			"Dominate Animal",
			"Strengthen Defensive Shield",
			"Lightning Bolt",
			"Fire Lance",
			"Fire Breath",
			"Sprint",
			"Messenger",
			"Curse",
			"Blessing",
			"Sleep",
			"Breach",
			"Give to Take",
			"Paralyze",
			"Arcane Sword",
			"Penetrating Gaze",
			"Silence",
			"Befriend",
			"Permeate"
		],
		"S4":
		[
			"","",
			"Boil Blood",
			"Summon Demon",
			"Planar Gate",
			{func: resolveElemental},
			"Ethereal Form",
			"Burning Inferno",
			"Dominate",
			"Invisibility",
			"Embiggen",
			"Time Stop",
			"Resurrection",
			"Reset Cooldown",
			"Spell Changer",
			"Restoration",
			"Fireball",
			"Rout Undead",
			"Dance",
			"Ice Beam",
			"Neutralize Poison",
			"Healing Sphere",
			"Chain Lightning",
			"Magic Barrier",
			"Raise Skeletons",
			"Fly",
			"Raise Zombies",
			"Banish",
			"Protective Dome",
			"Destroy Magics",
			"Call Shades",
			"Shadow Pillar",
			"Pillar of Light",
			"Eyes and Ears",
			"Teleport",
			"Terrify",
			"Necrologue",
			"See Invisible",
			"See Hidden",
			"Vaporize",
			"Body Explosion"
		],
		"SA":
		[
			"",
			{func:resolveArmorParts},
			{func:resolveArmorParts},
			{func:resolveArmorParts},
			"Robe",
			"Robe",
			"Robe",
			"Robe",
			"Runic Robe",
			"Leather Armor",
			"Leather Armor",
			"Leather Armor",
			"Leather Armor",
			"Leather Armor",
			"Chain Mail",
			"Chain Mail",
			"Chain Mail",
			"Chain Mail",
			"Plate Armor",
			"Plate Armor",
			"Plate Armor"
		],
		"AP":
		[
			"",
			"Leather Vambrace",
			"Leather Vambrace",
			"Leather Vambrace",
			"Leather Vambrace",
			"Leather Vambrace",
			"Plate Vambrace",
			"Plate Vambrace",
			"Plate Vambrace",
			"Plate Greaves",
			"Plate Greaves",
			"Plate Greaves",
			"Plate Helmet",
			"Plate Helmet",
			"Plate Helmet",
			"Plate Helmet",
			"Wooden Shield",
			"Metal Shield",
			"Metal Shield",
			"Metal Shield",
			"Tower Shield"
		],
		"EA":
		[
			"",
			"Stand Up",
			"Stand Up",
			"Stand Up",
			"Stand Up",
			"Stand Up",
			"Stand Up",
			"Concentrate",
			"Move up to MR",
			"Ranged Attack",
			"Melee Attack",
			"Pick up Weapon",
			"Pick up Weapon",
			"Pick up Weapon",
			"Draw Weapon",
			"Draw Weapon",
			"Draw Weapon",
			"Cast Spell",
			"Change Spell",
			"Change Spell",
			"Cast Target Spell"
		],
		"EB1":
		[
			"","",
			"Flirt",
			"Flirt",
			"Resist Disease",
			"Pick Pocket",
			"Pick Pocket",
			"Swim",
			"Swim",
			"Work Mechanism",
			"Read Tracks",
			"Read Tracks",
			"Sneaking",
			"Sneaking",
			"Sneaking",
			"Haggle",
			"Haggle",
			"Haggle",
			"Perception",
			"Perception",
			"Perception",
			"Knowledge",
			"Knowledge",
			"Knowledge",
			"Knowledge",
			"Knowledge",
			"Hide",
			"Hide",
			"Hide",
			"Hide",
			"Open Lock",
			"Open Lock",
			"Climb",
			"Climb",
			"Disable Trap",
			"Disable Trap",
			"Ride",
			"Ride",
			"Jump",
			"Appraise",
			"Defy Poison"
		],
		"EB2":
		[
			"",
			"Lightning Spells",
			"Lightning Spells",
			"Earth, Rock and Stone Spells",
			"Ice, Frost and Water Spells",
			"Fire Spells",
			"Fire Spells",
			"Healing Spells",
			"Healing Spells",
			"Healing Spells",
			"Light Spells",
			"Light Spells",
			"Light Spells",
			"Air and Transport Spells",
			"Air and Transport Spells",
			"Damage Spells",
			"Shadow Spells",
			"Shadow Spells",
			"Protection Spells",
			"Protection Spells",
			"Protection Spells"
		],
		"EB3":
		[
			"",
			"Hit Points",
			"Hit Points",
			"Hit Points",
			"Defense",
			"Defense",
			"Defense",
			"Initiative",
			"Initiative",
			"Initiative",
			"Movement Rate",
			"Movement Rate",
			"Melee Attack",
			"Melee Attack",
			"Melee Attack",
			"Ranged Attack",
			"Ranged Attack",
			"Spell Casting",
			"Spell Casting",
			"Targetted Spell Casting",
			"Targetted Spell Casting"
		],
		"EB4":
		[
			"",
			"Strength",
			"Strength",
			"Strength",
			"Constitution",
			"Constitution",
			"Constitution",
			"Constitution",
			"Agility",
			"Agility",
			"Agility",
			"Dexterity",
			"Dexterity",
			"Dexterity",
			"Intellect",
			"Intellect",
			"Intellect",
			"Intellect",
			"Aura",
			"Aura",
			"Aura"
		],
		"EB5":
		[
			"",
			"Body",
			"Body",
			"Body",
			"Body",
			"Body",
			"Body",
			"Body",
			"Mobility",
			"Mobility",
			"Mobility",
			"Mobility",
			"Mobility",
			"Mobility",
			"Mind",
			"Mind",
			"Mind",
			"Mind",
			"Mind",
			"Mind",
			"Mind"
		],
		"ET1":
		[
			"","","","",
			"Hero's Luck",			
			"Hero's Luck",
			"Arcane Explosion",
			"Eagle Form",
			"Blood Shield",
			"Salvo",
			"Cooldown Sacrifice",
			"Bloody Healing",
			"Lightning Thrower",
			"Battle Healer",
			"Lucky Devil",
			"Smash Demons",
			"Armorclad",
			"Play Instrument",
			"Disengage",
			"Caregiver",
			"Master of the Elements",
			"Fire Magic",
			"Defensive Stance",
			"Defy Elementals",
			"Nasty Shot",
			"Bear Form",
			"Blocker",
			"Appraise",
			"Artisan",
			"Dodge",
			"Charming",
			"Education",
			"Enhanced Cooldown",
			"Hunter",
			"Close Combat",
			"Thievery",
			"Marksman",
			"Parry",
			"Swimming",
			"Conjurer",
			"Endurance",
			"Stealth",
			"Acrobat",
			"Swift",
			"Master Climber",
			"Brutal Blow",
			"Resist Magic",
			"Pickpocket",
			"Rascal",
			"Lockpicking",
			"Battle Cry",
			"Elemental Protection",
			"Sharpshooter",
			"Mounted Archer",
			"Smash Armor",
			"Armored Mage",
			"Necromancy",
			"Manipulator",
			"Alertness",
			"Injure",
			"Slip Away",
			"Beast Master",
			"Lightning Reflexes",
			"Steadfast",
			"Animal Form",
			"Smash Undead",
			"Dual Wielding",
			"Unarmed Master",
			"Weapon Expert(WN)",
			"Expertise",
			"Spellchanger",
			"Mindful Magic",
			"Imp",
			"Release Spell",
			"Painful Change",
			"Consuming Sprint",
			"Painful Gain",
			"Escape Death",
			"Absorb Life",
			"Spellmaster(Z)",
			"Delay Death"
		],
		"G":
		[
			"","","",
			"Dragonscale",
			"Stuffed Animal",
			"Flute",
			"Comb",
			"Desiccated Eyeball",
			"Colorful Feather",
			"Gnarly Root",
			"Bandana",
			"Bird Claw",
			"Tiara",
			"Ball",
			"Belt",
			"Gloves",
			"Scarf",
			"Hat",
			"Sparkling Crystal",
			"Headband",
			"Broach",
			"Bracelet",
			"Gem",
			"Bracelet",
			"Cloak",
			"Mead Horn",
			"Mantle",
			"Staff",
			"Boots",
			"Tunic",
			"Sandals",
			"Chain",
			"Mask",
			"Surcoat",
			"Leather Strap",
			"Tooth",
			"Earring",
			"Candle Holder",
			"Paw",
			"Ring",
			"Jug",
			"Quiver",
			"Claw",
			"Statuette",
			"Chalice",
			"Scabbard",
			"Vase",
			"Dice",
			"Drum",
			"Scepter",
			"Staff",
			"Harp",
			"Doll",
			"Crown",
			"Bowl",
			"Carved Figurine",
			"Shrunken Head",
			"Mirror",
			"Skull",
			"Dried Heart",
			"Demon Tongue"
		],
		"X":
		[
			"","",
			"Necklace of Regeneration",
			"Fudger's Deck o' Cards",
			"Magic Carpet",
			"Scepter of Fireballs",
			"Girdle of Troll Strength",
			"Gloves of Maiming",
			"Elven Saddle",
			"Ring of Protection +2",
			"Ring of Protection +2",
			"Bowman's Vambrace",
			"Bowman's Vambrace",
			"Elven Boots",
			"Elven Boots",
			"Elven Cloak of Stealth",
			"Elven Cloak of Stealth",
			"Ring of Protection +1",
			"Ring of Protection +1",
			"Ring of Protection +1",
			"Ring of Protection +1",
			"Phantasmal Messenger",
			"Phantasmal Messenger",
			"Phantasmal Messenger",
			"Cooldown Ring",
			"Cooldown Ring",
			"Ring of Spells",
			"Ring of Spells",
			"Ring of Spellchange",
			"Ring of Spellchange",
			"Sleeping Dust",
			"Sleeping Dust",
			{func:resolveSpellStaff},
			"Warhorn",
			"Charm of Levitation",
			"Emerald Key",
			"Ring of Protection +3",
			"Magic Quiver",
			"Cloak of the Watcher",
			"Ring of Invisibility",
			"Crystal Ball"
		],
		"WR":
		[
			"",
			{func:resolveTreasure, args:{roll: "D20", desc: " crossbow bolts"}},
			{func:resolveTreasure, args:{roll: "D20", desc: " crossbow bolts"}},
			"Light crossbow",
			"Heavy crossbow",
			{func:resolveTreasure, args:{roll: "D20", desc: " arrows"}},
			{func:resolveTreasure, args:{roll: "D20", desc: " arrows"}},
			"Short Bow",
			"Short Bow",
			"Short Bow",
			"Short Bow",
			"Short Bow",
			"Long Bow",
			"Long Bow",
			"Long Bow",
			"Elven Bow",
			"Sling",
			"Spear",
			"Spear",
			"Spear",
			"Throwing Knife"
		],
		"WM1":
		[
			"",
			"Two-handed Sword",
			"Two-handed Sword",
			"Dagger",
			"Dagger",
			"Dagger",
			"Dagger",
			"Halberd",
			"Great Axe",
			"Broad Sword",
			"Broad Sword",
			"Broad Sword",
			"Short Sword",
			"Short Sword",
			"Short Sword",
			"Long Sword",
			"Long Sword",
			"Long Sword",
			"Axe",
			"Axe",
			"Dwarven Axe"
		],
		"WM2":
		[
			"",
			"Flail",
			"Hammer",
			"Hammer",
			"Hammer",
			"Quarterstaff",
			"Club",
			"Battle Flail",
			"Battle Flail",
			"Brass Knuckles",
			"Spear",
			"Spear",
			"Spear",
			"War Hammer",
			"War Hammer",
			"War Hammer",
			"War Hammer",
			"Mace",
			"Mace",
			"Mace",
			"Mace"
		]
	};
});

on("chat:message", function(msg)
{		
	function sendOutput(text)
	{
		sendChat("Treasure", "/w " + msg.who + " " + text);

	}

	function resolveSpellStaff()
	{
		function spellLookup(spell)
		{
			sendOutput("REWARD IS: Spellstaff of " + spell);
		}
		resolveSpell(spellLookup);
	}

	function resolvePotion()
	{
		sendChat(msg.who, "/roll 5D20", function(results)
		{
			tableLookup("P", rollResult(results));
		});
	}

	function resolveElemental(outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var spell = null; 
			if (total <= 5)
				spell = "Summon Earth Elemental";
			else if (total <= 10)
				spell = "Summon Fire Elemental";
			else if (total <= 15)
				spell = "Summon Air Elemental";
			else if (total <= 20)
				spell = "Summon Water Elemental";
			if (outputFunc)
				outputFunc(spell);
		});
	}


	function resolveSpellTable(roll, table, outputFunc)
	{
		sendChat(msg.who, "/roll " + roll, function(results)
		{
			var total = rollResult(results);
			tableLookup(table, total, outputFunc);
		});
	}

	function resolveSpell(outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			if (total <= 8)
				resolveSpellTable("2D20", "S1", outputFunc);
			else if (total <= 14)
				resolveSpellTable("D20", "S2", outputFunc);				
			else if (total <= 18)
				resolveSpellTable("2D20", "S3", outputFunc);
			else
				resolveSpellTable("2D20", "S4", outputFunc);
		});
	}

	function resolveScroll()
	{
		function scrollOutput(item)
		{
			sendOutput(item + " Scroll");
		}		
		resolveSpell(scrollOutput);
	}

	function resolveEffectTypeFreeAction(effectState)
	{
		log("Resolving Free Action");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var freeAction = getFromTable("EA", total);
			if (freeAction)
			{
				effectState.effects.push("Free Action - " + freeAction);
				resolveEffectType(effectState);
			}
		});
	}

	function resolveEffectTypeBonusModifier(effect, limit1, limit2, effectState)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var bonus = 0;
			var total = rollResult(results);
			if (total <= limit1)
				bonus++;
			else if (total <= limit2)
				bonus += 2;
			else if (total <= 20)
				bonus += 3;
			effectState.effects.push(effect + " +" + bonus);
			resolveEffectType(effectState);
		});
	}

	function resolveEffectTypeCheck(effectState)
	{
		log("Resolving Check");
		sendChat(msg.who, "/roll 2D20", function(results)
		{
			var total = rollResult(results);
			var checkType = getFromTable("EB1", total);
			if (checkType)
				resolveEffectTypeBonusModifier(checkType, 10, 17, effectState);
		});
	}

	function resolveEffectTypeSpell(effectState)
	{
		log("Resolvoing spell");
		function spellLookup(spell)
		{
			resolveEffectTypeBonusModifier(spell, 15, 19, effectState);
		}
		resolveSpell(spellLookup);

	}

	function resolveEffectTypeSpellGroup(effectState)
	{
		log("Resolving Spell Group");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var spellGroup = getFromTable("EB2", total);
			if (spellGroup)
				resolveEffectTypeBonusModifier(spellGroup, 15, 19, effectState);
		});
	}

	function resolveEffectTypeCombatValue(effectState)
	{
		log("Resolving Combat Value");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var combatValue = getFromTable("EB3", total);
			if (combatValue)
				resolveEffectTypeBonusModifier(combatValue, 10, 17, effectState);
		});
	}

	function resolveEffectTypeTrait(effectState)
	{
		log("Resolving trait");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var trait = getFromTable("EB4", total);
			if (trait)
				resolveEffectTypeBonusModifier(trait, 10, 17, effectState);
		});
	}

	function resolveEffectTypeAttribute(effectState)
	{
		log("Resolving attribute");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var attribute = getFromTable("EB5", total);
			if (attribute)
				resolveEffectTypeBonusModifier(attribute, 10, 17, effectState);
		});
	}

	function resolveEffectTypeBonus(effectState)
	{
		log("Resolving bonus");
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			if (total <= 9)
				resolveEffectTypeCheck(effectState);
			else if (total <= 13)
				resolveEffectTypeSpell(effectState);
			else if (total == 14)
				resolveEffectTypeSpellGroup(effectState);
			else if (total <= 17)
				resolveEffectTypeCombatValue(effectState);
			else if (total <= 19)
				resolveEffectTypeTrait(effectState);
			else if (total <= 20)
				resolveEffectTypeAttribute(effectState);
		});
	}

	function resolveEffectTalentModifier(talent, bonus, effectState)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);		
			if (total <= 12)
				bonus++;
			else if (total <= 17)
				bonus += 2;
			else if (total <= 19)
				bonus += 3;
			else if (total <= 20)
			{
				bonus += 1;
				resolveEffectTalentModifier(talent, bonus, effectState);
			}

			if (total != 20)
			{
				effectState.effects.push(talent + " +" + bonus);
				resolveEffectType(effectState);
			}
		});
	}

	function resolveEffectTypeTalent(effectState)
	{
		sendChat(msg.who, "/roll 4D20", function(results)
		{
			var total = rollResult(results);
			var talent = getFromTable("ET1", total);
			if (talent)
			{
				log("Resolving talent: " + talent);
				resolveEffectTalentModifier(talent, 0, effectState);
			}
		});
	}

	function resolveSpellEffectCharges(spell, effectState)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			effectState.effects.push(spell + " (" + total + " charges)");
			resolveEffectType(effectState);
		});
	}

	function resolveSpellEffectCooldown(spell, effectState, isAll)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			var rounds = 0;
			if (total <= 10)
				rounds = 1;
			else if (total <= 14)
				rounds = 2;
			else if (total <= 17)
				rounds = 3;
			else if (total <= 19)
				rounds = 4;
			else if (total == 20)
				rounds = 5;
			if (spell)
				effectState.effects.push(spell + " cooldown reduced " + rounds + " rounds");
			else if (!isAll)
				effectState.effects.push("A known spell cooldown reduced " + rounds + " rounds");
			else 
				effectState.effects.push("All known spells cooldown reduced " + rounds + " rounds");
			resolveEffectType(effectState);
		});
	}

	function resolveSpellEffectDaily(spell, effectState)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var daily = "";
			var total = rollResult(results);
			if (total <= 16)
				daily = "1x daily";
			else if (total <= 18)
				daily = "2x daily";
			else if (total == 19)
				daily = "3x daily";
			else if (total == 20)
				daily = "permanently";
			effectState.effects.push(spell + " ignore cooldown " + daily);
			resolveEffectType(effectState);
		});
	}

	function resolveEffectTypeSpellEffect(effectState)
	{
		function spellResult(spell)
		{
			log("Resolving spell effect: " + spell);			
			sendChat(msg.who, "/roll D20", function(results)
			{
				var total = rollResult(results);
				if (total <= 12)
				{
					effectState.effects.push(spell);
					resolveEffectType(effectState);
				}
				else if (total <= 16)
					resolveSpellEffectCharges(spell, effectState);
				else if (total == 17)
					resolveSpellEffectCooldown(spell, effectState);
				else if (total == 18)
					resolveSpellEffectCooldown(null, effectState);
				else if (total == 19)
					resolveSpellEffectCooldown(null, effectState, true);
				else if (total == 20)
					resolveSpellEffectDaily(spell, effectState);
			});
		}
		resolveSpell(spellResult);
	}

	function resolveEffectType(effectState)
	{
		log("Have " + effectState.effects.length + "/" + effectState.maxEffects + " (" + (effectState.effects.length < effectState.maxEffects) + ") effects so far");
		if (effectState.effects.length < effectState.maxEffects)
		{
			sendChat(msg.who, "/roll D20", function(results)
			{
				var total = rollResult(results);
				if (total <= 5)
					resolveEffectTypeFreeAction(effectState);
				else if (total <= 13)
					resolveEffectTypeBonus(effectState);
				else if (total <= 17)
					resolveEffectTypeTalent(effectState);
				else if (total <= 20)
					resolveEffectTypeSpellEffect(effectState);
			});
		}
		else
		{			
			var output = "";
			if (effectState.bonus)
				output += "+" + effectState.bonus + " ";
			output += effectState.item;
			if (effectState.effects.length > 0)
				output += " of " + effectState.effects.join(", ");
			if (effectState.outputFunc)
				effectState.outputFunc(output);
			else				
				sendOutput("REWARD: " + output);
		}
	}

	function resolveOtherEffects(effectState)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			if (total <= 15)
			{
				// no effect
			}
			else if (total <= 18)
				effectState.maxEffects++;
			else if (total <= 19)
				effectState.maxEffects += 2;
			else if (total == 20)
			{
				effectState.maxEffects += 2;
				// resolveEffectBonus(item, bonus, maxEffects) // Could be this too!?! Does roll again mean the entire table?
				resolveOtherEffects(effectState);
			}

			if (total != 20) // not a roll again
			{
				log("Have " + effectState.maxEffects + " effects to resolve");
				effectState.effects = [];
				resolveEffectType(effectState);
			}
		});
	}

	// if bonus is not set (to 0) it'll assume it's a non wb/av item and not print or calculate it
	function resolveEffectBonus(effectState)
	{
		log("Resolving effects for " + effectState.item);
		if (!effectState.maxEffects)
			effectState.maxEffects = 0;

		if (effectState.bonus !== null)
		{
			sendChat(msg.who, "/roll D20", function(results)
			{
				var total = rollResult(results);
				if (total <= 1)		
					effectState.maxEffects++;
				else if (total <= 17)
					effectState.bonus++;
				else if (total <= 19)
					effectState.bonus += 2;
				else if (total == 20)
					effectState.bonus += 3;
				log("Item Bonus: " + effectState.bonus);

				resolveOtherEffects(effectState);
			});			
		}
		else
			resolveOtherEffects(effectState);
	}

	function resolveArmorParts(args, outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("AP", total, outputFunc);
		});
	}

	function resolveArmor()
	{
		function armorLookup(item)
		{
			function armorOutput(loot)
			{
				sendOutput("REWARD IS: " + loot);
			}
			resolveEffectBonus({item: item, bonus: 0, maxEffects: 0, effects: []});
		}
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("SA", total, armorLookup);
		});
	}

	function resolveItem()
	{
		function itemLookup(item)
		{
			function itemOutput(loot)
			{
				sendOutput("REWARD IS: " + loot);
			}
			resolveEffectBonus({item: item, maxEffects: 1, effects: []});
		}
		sendChat(msg.who, "/roll 3D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("G", total, itemLookup);
		});
	}

	function resolveUnique()
	{
		sendChat(msg.who, "/roll 2D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("X", total);
		});
	}

	function resolveWeaponType(table, outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			tableLookup(table, total, outputFunc);
		});
	}

	function resolveRangedWeapon(outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("WR", total, outputFunc);
		});
	}

	function resolveMeleeWeapon(outputFunc)
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			if (total <= 12)
				resolveWeaponType("WM1", outputFunc);
			else if (total <= 20)
				resolveWeaponType("WM2", outputFunc);
		});
	}

	function resolveWeapon()
	{
		function weaponLookup(item)
		{
			function weaponOutput(loot)
			{
				sendOutput("REWARD IS: " + loot);
			}
			resolveEffectBonus({item: item, bonus: 0, maxEffects: 0, effects: []});
		}
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			if (total <= 5)
				resolveRangedWeapon(weaponLookup);
			else if (total <= 20)
				resolveMeleeWeapon(weaponLookup);
		});
	}

	function rollResult(results)
	{
		var data = JSON.parse(results[0].content);
		return data.total;
	}

	function getFromTable(table, index)
	{
		var loot = null;
		table = table.toUpperCase();
		log("Table Lookup: " + table + "[" + index + "]");
		var currentTable = state.treasureTable[table];
		if (currentTable)
		{
			if (index >= currentTable.length)
			{
				index = currentTable.length - 1;
				log("Clamped too large roll to: " + index);
			}
			loot = currentTable[index];
			if (!loot)
				log("Unknown loot in table " + table + " at index: " + index);
		}	
		else
			log("Unknown treasure table: " + table);		
		return loot;	
	}

	function tableLookup(table, index, outputFunc)
	{
		var loot = getFromTable(table, index);
		if (loot)
		{
			if (typeof loot === 'object')
			{
				if (loot.func)
					loot.func(loot.args, outputFunc);
				else
					log("Unknown loot object: " + loot);
			}
			else
			{
				if (outputFunc)
					outputFunc(loot);
				else
					sendOutput("REWARD IS: " + loot);
			}
		}
	}

	function rollCheck(roll, table, isExact, ctnCheckNumber)
	{
		sendChat(msg.who, "/roll " + roll, function(results)
		{
			var result = false;
			var total = rollResult(results);
			if (isExact)
				result = true;
			else
			{
				if (total <= ctnCheckNumber)
					result = true;
			}				

			if (result)
				tableLookup(table, total);
			else
				sendOutput("Roll (" + roll + "=" + total + "): FAILED (CTN is " + ctnCheckNumber + ")");			
		});					
	}

	function resolveTreasure(args, outputFunc)
	{
		if (args && (typeof args === 'object'))
		{
			if (args instanceof Array)
			{
				for (var rollIndex = 0; rollIndex < args.length; rollIndex++)
					resolveTreasure(args[rollIndex]);
			}
			else if (args.resolve)
			{
				var treasureRolls = args.resolve.split(",");
				for (var treasureIndex = 0; treasureIndex < treasureRolls.length; treasureIndex++)
				{
					log("resolving: " + treasureRolls[treasureIndex]);
					var treasureRegex = /^(#?)(\d*)([abcdmpsABCDMPS][1234]?):([\dD+]+)/;
					var currentRoll = treasureRegex.exec(treasureRolls[treasureIndex]);
					if (currentRoll)
					{
						var isExact = currentRoll[1] === "#";
						var numChecks = currentRoll[2] === "" && 1 || parseInt(currentRoll[2], 10);
						var table = currentRoll[3];
						var tableCheck = currentRoll[4];
						if (tableCheck.indexOf("D") != -1)
						{
							for (var tableRollIndex = 0; tableRollIndex < numChecks; tableRollIndex++)
								rollCheck(tableCheck, table, isExact, 20); // just assume it's 20 for non exact....
						}
						else
						{
							for (var ctnRollIndex = 0; ctnRollIndex < numChecks; ctnRollIndex++)
							{
								if (isExact)
									tableLookup(table, tableCheck);
								else
									rollCheck("D20", table, isExact, parseInt(tableCheck, 10));
							}
						}
					}
					else
					{
						sendOutput("Failed to parse treasure roll: " + treasureRolls[treasureIndex]);
						break;
					}
				}

			}
			else if (args.roll)
			{
				sendChat(msg.who, "/roll " + args.roll, function(results)
				{
					var loot = rollResult(results) + " " + args.desc;
					if (outputFunc)
						outputFunc(loot);
					else
						sendOutput("REWARD IS: " + rollResult(results) + " " + args.desc);
				});
			}
			else
				log("Got a weird argument to resolveTreasure: " + args);
		}
	}
	if (msg.content.indexOf("!treasure ") === 0)
	{
		var treasureString = msg.content.replace("!treasure ", "");
		sendOutput("*********** " + treasureString + " ***********");
		resolveTreasure({resolve: treasureString});
	}
});