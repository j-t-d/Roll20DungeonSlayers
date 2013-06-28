on("chat:message", function(msg)
{		
	var lootTable = {
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
			"Flicker Scroll",
			"Flicker Scroll",
			"Balance Scroll",
			"Balance Scroll",
			"Cleanse Scroll",
			"Cleanse Scroll",
			"Create Food Scroll",
			"Create Food Scroll",
			"Enchant Weapon Scroll",
			"Enchant Weapon Scroll",
			"Jump Scroll",
			"Resist Poison Scroll",
			"Resist Poison Scroll",
			"Eavesdrop Scroll",
			"Healing Touch Scroll",
			"Healing Touch Scroll",
			"Cloud of Remorse Scroll",
			"Cloud of Remorse Scroll",
			"Dirt Devil Scroll",
			"Healing Aura Scroll",
			"Healing Aura Scroll",
			"Open Scroll",
			"Open Scroll",
			"Light Scroll",
			"Light Scroll",
			"Change Race Scroll",
			"Change Race Scroll",
			"Shadow Arrow Scroll",
			"Mana Bread Scroll",
			"Mana Bread Scroll",
			"Defensive Shield Scroll",
			"Defensive Shield Scroll",
			"Fire Beam Scroll",
			"Fire Beam Scroll",
			"Throw Voice Scroll",
			"Healberries Scroll",
			"Healberries Scroll",
			"Invigorate Scroll",
			"Concealing Fog Scroll"
		],
		"S2":
		[
			"",
			"Blind Scroll",
			"Bestow Scent Scroll",
			"Feather Fall Scroll",
			"Scorching Blade Scroll",
			"Arctic Weapon Scroll",
			"Healing Light Scroll",
			"Frighten Scroll",
			"Arrow of Light Scroll",
			"Shadow Scroll",
			"Protective Shell Scroll",
			"Levitate Scroll",
			"Wall of Stone Scroll",
			"Stumble Scroll",
			"Transformation Scroll",
			"Telekinesis Scroll",
			"Calm Animal Scroll",
			"Mirage Scroll",
			"Slow Scroll",
			"Weapon of Light Scroll",
			"Water Walking Scroll"
		],
		"S3":
		[
			"","",
			"Hurl Scroll",
			"Confusion Scroll",
			"Displace Scroll",
			"Fire Wall Scroll",
			"Shadow Lance Scroll",
			"Shadow Blade Scroll",
			"Sternutation Scroll",
			"Rust Scroll",
			"Holy Hammer Scroll",
			"Guardian Scroll",
			"Lance of Light Scroll",
			"Cloud of Death Scroll",
			"Healing Ray Scroll",
			"Chasm Scroll",
			"Create Web Scroll",
			"Shrink Scroll",
			"Dominate Undead Scroll",
			"Prolong Defensive Shield Scroll",
			"Consecrate Water Scroll",
			"Magic Lock Scroll",
			"Magic Ladder Scroll",
			"Dominate Animal Scroll",
			"Strengthen Defensive Shield Scroll",
			"Lightning Bolt Scroll",
			"Fire Lance Scroll",
			"Fire Breath Scroll",
			"Sprint Scroll",
			"Messenger Scroll",
			"Curse Scroll",
			"Blessing Scroll",
			"Sleep Scroll",
			"Breach Scroll",
			"Give to Take Scroll",
			"Paralyze Scroll",
			"Arcane Sword Scroll",
			"Penetrating Gaze Scroll",
			"Silence Scroll",
			"Befriend Scroll",
			"Permeate Scroll"
		],
		"S4":
		[
			"","",
			"Boil Blood Scroll",
			"Summon Demon Scroll",
			"Planar Gate Scroll",
			{func: resolveElemental},
			"Ethereal Form Scroll",
			"Burning Inferno Scroll",
			"Dominate Scroll",
			"Invisibility Scroll",
			"Embiggen Scroll",
			"Time Stop Scroll",
			"Resurrection Scroll",
			"Reset Cooldown Scroll",
			"Spell Changer Scroll",
			"Restoration Scroll",
			"Fireball Scroll",
			"Rout Undead Scroll",
			"Dance Scroll",
			"Ice Beam Scroll",
			"Neutralize Poison Scroll",
			"Healing Sphere Scroll",
			"Chain Lightning Scroll",
			"Magic Barrier Scroll",
			"Raise Skeletons Scroll",
			"Fly Scroll",
			"Raise Zombies Scroll",
			"Banish Scroll",
			"Protective Dome Scroll",
			"Destroy Magics Scroll",
			"Call Shades Scroll",
			"Shadow Pillar Scroll",
			"Pillar of Light Scroll",
			"Eyes and Ears Scroll",
			"Teleport Scroll",
			"Terrify Scroll",
			"Necrologue Scroll",
			"See Invisible Scroll",
			"See Hidden Scroll",
			"Vaporize Scroll",
			"Body Explosion Scroll"
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
		]
	};


	function sendOutput(text)
	{
		sendChat("Treasure", "/w " + msg.who + " " + text);

	}

	function resolvePotion()
	{
		sendChat(msg.who, "/roll 5D20", function(results)
		{
			tableLookup("P", rollResult(results));
		});
	}

	function resolveElemental()
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			log("elemental roll result: " + total);
			if (total <= 5)
				sendOutput("REWARD IS: Summon Earth Elemental Scroll");
			else if (total <= 10)
				sendOutput("REWARD IS: Summon Fire Elemental Scroll");
			else if (total <= 15)
				sendOutput("REWARD IS: Summon Air Elemental Scroll");
			else if (total <= 20)
				sendOutput("REWARD IS: Summon Water Elemental Scroll");
		});
	}

	function resolveScrollTable(roll, table)
	{
		sendChat(msg.who, "/roll " + roll, function(results)
		{
			var total = rollResult(results);
			tableLookup(table, total);
		});
	}

	function resolveScroll()
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			log("scroll lookup roll result: " + total);
			if (total <= 8)
				resolveScrollTable("2D20", "S1");
			else if (total <= 14)
				resolveScrollTable("D20", "S2");				
			else if (total <= 18)
				resolveScrollTable("2D20", "S3");
			else
				resolveScrollTable("2D20", "S4");
		});
	}

	function resolveArmor()
	{
		sendChat(msg.who, "/roll D20", function(results)
		{
			var total = rollResult(results);
			tableLookup("SA", total);
		});
	}

	function resolveItem()
	{
		sendOutput("resolveItem");
	}

	function resolveUnique()
	{
		sendOutput("resolveUnique");
	}

	function resolveWeapon()
	{
		sendOutput("resolveWeapon");
	}

	function rollResult(results)
	{
		var data = JSON.parse(results[0].content);
		return data.total;
	}

	function tableLookup(table, index)
	{
		table = table.toUpperCase();
		log("Table Lookup: " + table + "[" + index + "]");
		var currentTable = lootTable[table];
		if (currentTable)
		{
			if (index >= currentTable.length)
			{
				index = currentTable.length - 1;
				log("Clamped too large roll to: " + index);
			}
			var loot = currentTable[index];
			if (loot)
			{
				if (typeof loot === 'object')
				{
					if (loot.func)
						loot.func(loot.args);
					else
						log("Unknown loot object: " + loot);
				}
				else
					sendOutput("REWARD IS: " + loot);
			}
			else
				log("Unknown loot in table " + table + " at index: " + index);
		}
		else
			log("Unknown treasure table: " + table);
	}

	function rollCheck(roll, table, isExact, ctnCheckNumber)
	{
		log("roll check: " + [roll, table, isExact, ctnCheckNumber]);
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

	function resolveTreasure(args)
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
						log("matched: " + currentRoll);
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