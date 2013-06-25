on("chat:message", function(msg) 
{
	var debug = false;

	function getValue(attributes, key)
	{
		var rtn = null;

		if (attributes && key)
		{
			for (var i = 0; i < attributes.length; i++)
			{
				if (attributes[i].get("name") == key)
				{
					rtn = attributes[i].get("current");
					break;
				}
			}
		}

		return rtn;
	}

	if(msg.type == "api" && msg.content.indexOf("!chk ") !== -1) 
	{
		var characters = findObjs({
			_type: "character",
			name: msg.who
		});

		if (characters.length > 0)
		{
			var rollValue = randomInteger(20);
			var checkValue = 0;
			var summation = "";
			var output = "";
			var skip = false;
			var message = msg.content.replace("!chk ", "").toLowerCase();
			var character = _.first(characters);
			var attributes = findObjs({
			      _type: "attribute",
			      _characterid: character.get('_id')
			    });

			var BOD = parseInt(getValue(attributes, "BOD"), 10);
			var ST = parseInt(getValue(attributes, "ST"), 10);
			var CO = parseInt(getValue(attributes, "CO"), 10);
			var MOB = parseInt(getValue(attributes, "MOB"), 10);
			var AG = parseInt(getValue(attributes, "AG"), 10);
			var DX = parseInt(getValue(attributes, "DX"), 10);
			var MND = parseInt(getValue(attributes, "MND"), 10);
			var IN = parseInt(getValue(attributes, "IN"), 10);
			var AU = parseInt(getValue(attributes, "AU"), 10);

			// Animal Handling : MOB+AU
			if (message.indexOf("animal handling") !== -1)
			{
				summation = "MOB(" + MOB + ") + AU(" + AU + ")";
				output = "tries to influence an animal";
				checkValue = MOB + AU;
				message = message.replace("animal handling", "");
			}
			// Appraise: MND+IN
			else if (message.indexOf("appraise") !== -1)
			{
				var appraise = getValue(attributes, "Appraise");

				summation = "MND(" + MND + ") + IN(" + IN + ")";
				output = "is attempted to appraise something";
				checkValue = MND + IN;
				message = message.replace("appraise", "");

				if (appraise)
				{
					checkValue += (parseInt(appraise, 10) * 3);
					summation += " + Appraise(" + (parseInt(appraise, 10) * 3) + ")";
				}
			}
			// Climb: MOB+ST
			else if (message.indexOf("climb") !== -1)
			{
				var acrobat = getValue(attributes, "Acrobat");
				var climber = getValue(attributes, "Master Climber");

				summation = "MOB(" + MOB + ") + ST(" + ST + ")";
				output = "is trying to climb something";
				checkValue = MOB + ST;
				message = message.replace("climb", "");

				if (acrobat)
				{
					checkValue += (parseInt(acrobat, 10) * 2);
					summation += " + Acrobat(" + (parseInt(acrobat, 10) * 2) + ")";
				}
				if (appraise)
				{
					checkValue += (parseInt(climber, 10) * 2);
					summation += " + Master Climber(" + (parseInt(climber, 10) * 2) + ")";
				}
			}
			// Communicate: MND+DX
			else if (message.indexOf("communicate") !== -1)
			{
				var unkempt = getValue(attributes, "Unkempt");
				var education = getValue(attributes, "Education");

				summation = "MND(" + MND + ") + DX(" + DX + ")";
				output = "is trying to communicate with someone";
				checkValue = MND + DX;
				
				if (unkempt)
				{
					checkValue -= 2;
					summation += " + Unkempt(-2)";
				}
				if (education)
				{
					checkValue += (parseInt(education, 10) * 2);
					summation += " + Education(" + (parseInt(education, 10) * 2) + ")";
				}

				message = message.replace("communicate", "");
			}
			// Decipher Script: MND+IN
			else if (message.indexOf("decipher script") !== -1)
			{
				var education = getValue(attributes, "Education");
				var alertness = getValue(attributes, "Alertness");

				summation = "MND(" + MND + ") + IN(" + IN + ")";
				output = "is trying to decipher a script";
				checkValue = MND + IN;

				if (education)
				{
					checkValue += (parseInt(education, 10) * 2);
					summation += " + Education(" + (parseInt(education, 10) * 2) + ")";
				}
				if (alertness)
				{
					checkValue += (parseInt(alertness, 10) * 2);
					summation += " + Alertness(" + (parseInt(alertness, 10) * 2) + ")";
				}

				message = message.replace("decipher script", "");
			}
			// Defy Poison: BOD+CO
			else if (message.indexOf("defy poison") !== -1)
			{
				var endurance = getValue(attributes, "Endurance");

				summation = "BOD(" + BOD + ") + CO(" + CO + ")";
				output = "is trying to defy a poison";
				checkValue = BOD + CO;

				if (endurance)
				{
					checkValue += (parseInt(endurance, 10) * 2);
					summation += " + Endurance(" + (parseInt(endurance, 10) * 2) + ")";
				}

				message = message.replace("defy poison", "");
			}
			// Disable Traps: MND+DX
			else if (message.indexOf("disable traps") !== -1)
			{
				var thievery = getValue(attributes, "Thievery");

				summation = "MND(" + MND + ") + DX(" + DX + ")";
				output = "is trying to disable a trap";
				checkValue = MND + DX;

				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}

				message = message.replace("disable traps", "");
			}
			// Feat of Strength: BOD+ST
			else if (message.indexOf("feat of strength") !== -1)
			{
				summation = "BOD(" + BOD + ") + ST(" + ST + ")";
				output = "is trying to defy a poison";
				checkValue = BOD + ST;
				message = message.replace("feat of strength", "");
			}
			// Flirt: MND+AU
			else if (message.indexOf("flirt") !== -1)
			{
				var unkempt = getValue(attributes, "Unkempt");
				var charming = getValue(attributes, "Charming");
				
				summation = "MND(" + MND + ") + AU(" + AU + ")";
				output = "is trying to flirt with someone";
				checkValue = MND + AU;

				if (unkempt)
				{
					checkValue -= 2;
					summation += " + Unkempt(-2)";
				}
				if (charming)
				{
					checkValue += (parseInt(charming, 10) * 2);
					summation += " + Charming(" + (parseInt(charming, 10) * 2) + ")";
				}

				message = message.replace("flirt", "");
			}
			// Gold Lust: MND+IN+4
			else if (message.indexOf("gold lust") !== -1)
			{
				summation = "MND(" + MND + ") + IN(" + IN + ") + (4)";
				output = "is trying to stop coveting a shiny";
				checkValue = MND + IN + 4;
				message = message.replace("gold lust", "");
			}
			// Haggle: MND+(IN or AU)*
			else if (message.indexOf("haggle") !== -1)
			{
				var unkempt = getValue(attributes, "Unkempt");
				var charming = getValue(attributes, "Charming");
				var rascal = getValue(attributes, "Rascal");
				
				if (IN > AU)
				{
					summation = "MND(" + MND + ") + IN(" + IN + ")";
					checkValue = MND + IN;
				}
				else
				{
					summation = "MND(" + MND + ") + AU(" + AU + ")";
					checkValue = MND + AU;
				}

				output = "is trying to haggle with a merchant";

				if (unkempt)
				{
					checkValue -= 2;
					summation += " + Unkempt(-2)";
				}
				if (charming)
				{
					checkValue += (parseInt(charming, 10) * 2);
					summation += " + Charming(" + (parseInt(charming, 10) * 2) + ")";
				}
				if (rascal)
				{
					checkValue += (parseInt(rascal, 10) * 3);
					summation += " + Rascal(" + (parseInt(rascal, 10) * 3) + ")";
				}
				
				message = message.replace("haggle", "");
			}
			// Hide: MOB+AG
			else if (message.indexOf("hide") !== -1)
			{
				var stealth = getValue(attributes, "Stealth");

				summation = "MOB(" + MOB + ") + AG(" + AG + ")";
				output = "is trying to hide behind some cover";
				checkValue = MOB + AG;

				if (stealth)
				{
					checkValue += (parseInt(stealth, 10) * 2);
					summation += " + Stealth(" + (parseInt(stealth, 10) * 2) + ")";
				}

				message = message.replace("hide", "");
			}
			// Jump: MOB+AG
			else if (message.indexOf("jump") !== -1)
			{
				var acrobat = getValue(attributes, "Acrobat");

				summation = "MOB(" + MOB + ") + AG(" + AG + ")";
				output = "is trying to jump onto something";
				checkValue = MOB + AG;

				if (acrobat)
				{
					checkValue += (parseInt(acrobat, 10) * 2);
					summation += " + Acrobat(" + (parseInt(acrobat, 10) * 2) + ")";
				}

				message = message.replace("jump", "");
			}
			// Knowledge: MND+IN
			else if (message.indexOf("knowledge") !== -1)
			{
				var education = getValue(attributes, "Education");

				summation = "MND(" + MND + ") + IN(" + IN + ")";
				output = "is trying to apply some knowledge";
				checkValue = MND + IN;

				if (education)
				{
					checkValue += (parseInt(education, 10) * 2);
					summation += " + Education(" + (parseInt(education, 10) * 2) + ")";
				}

				message = message.replace("knowledge", "");
			}
			// Intimidate: BOD+AU
			else if (message.indexOf("intimidate") !== -1)
			{
				summation = "BOD(" + BOD + ") + AU(" + AU + ")";
				output = "is trying to intimate someone";
				checkValue = BOD + AU;
				message = message.replace("intimidate", "");
			}
			// Open Lock: MND+DX
			else if (message.indexOf("open lock") !== -1)
			{
				var thievery = getValue(attributes, "Thievery");
				var lockpicking = getValue(attributes, "Lockpicking");

				summation = "MND(" + MND + ") + DX(" + DX + ")";
				output = "is trying to get a lock open";
				checkValue = MND + DX;

				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}
				if (lockpicking)
				{
					checkValue += (parseInt(lockpicking, 10) * 2);
					summation += " + Lockpicking(" + (parseInt(lockpicking, 10) * 2) + ")";
				}

				message = message.replace("open lock", "");
			}
			// Perception: MND+IN or 8*
			else if (message.indexOf("perception") !== -1)
			{
				var thievery = getValue(attributes, "Thievery");
				var alertness = getValue(attributes, "Alertness");

				if ((MND + IN) < 8)
				{
					summation = "(8)";
					checkValue = 8;
				}
				else
				{
					summation = "MND(" + MND + ") + IN(" + IN + ")";
					checkValue = MND + IN;
				}

				output = "is trying to look for anything unusual";
				
				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}
				if (alertness)
				{
					checkValue += (parseInt(alertness, 10) * 2);
					summation += " + Alertness(" + (parseInt(alertness, 10) * 2) + ")";
				}

				message = message.replace("perception", "");
			}
			// Pick Pocket: MOB+DX
			else if (message.indexOf("pick pocket") !== -1)
			{
				var thievery = getValue(attributes, "Thievery");
				var stealth = getValue(attributes, "Stealth");

				summation = "MOB(" + MOB + ") + DX(" + DX + ")";
				output = "is trying to pick someones pocket";
				checkValue = MOB + DX;

				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}
				if (stealth)
				{
					checkValue += (parseInt(stealth, 10) * 2);
					summation += " + Stealth(" + (parseInt(stealth, 10) * 2) + ")";
				}

				message = message.replace("pick pocket", "");
			}
			// Read Tracks: MND+IN
			else if (message.indexOf("read tracks") !== -1)
			{
				var alertness = getValue(attributes, "Alertness");
				var hunter = getValue(attributes, "Hunter");

				summation = "MND(" + MND + ") + IN(" + IN + ")";
				output = "is trying to read some tracks";
				checkValue = MND + IN;

				if (alertness)
				{
					checkValue += (parseInt(alertness, 10) * 2);
					summation += " + Alertness(" + (parseInt(alertness, 10) * 2) + ")";
				}
				if (hunter)
				{
					checkValue += (parseInt(hunter, 10) * 2);
					summation += " + Hunter(" + (parseInt(hunter, 10) * 2) + ")";
				}

				message = message.replace("read tracks", "");
			}
			// Resist Disease: BOD+CO
			else if (message.indexOf("resist disease") !== -1)
			{
				var endurance = getValue(attributes, "Endurance");

				summation = "BOD(" + BOD + ") + CO(" + CO + ")";
				output = "is trying to resist a disease";
				checkValue = BOD + CO;

				if (endurance)
				{
					checkValue += parseInt(endurance, 10);
					summation += " + Endurance(" + parseInt(endurance, 10) + ")";
				}

				message = message.replace("resist disease", "");
			}
			// Riding: MOB+(AG or AU)*
			else if (message.indexOf("riding") !== -1)
			{
				var riding = getValue(attributes, "Riding");
				var beastmaster = getValue(attributes, "Beast Master");

				if (AG > AU)
				{
					summation = "MOB(" + MOB + ") + AG(" + AG + ")";
					checkValue = MOB + AG;
				}
				else
				{
					summation = "MOB(" + MOB + ") + AU(" + AU + ")";
					checkValue = MOB + AU;
				}
				
				output = "is trying to ride an animal";

				if (riding)
				{
					checkValue += (parseInt(riding, 10) * 2);
					summation += " + Riding(" + (parseInt(riding, 10) * 2) + ")";
				}
				if (beastmaster)
				{
					checkValue += (parseInt(beastmaster, 10) * 3);
					summation += " + Beast Master(" + (parseInt(beastmaster, 10) * 3) + ")";
				}

				message = message.replace("riding", "");
			}
			// Search: MND+IN or 8*
			else if (message.indexOf("search") !== -1)
			{
				var thievery = getValue(attributes, "Thievery");
				var stealth = getValue(attributes, "Stealth");
				var alertness = getValue(attributes, "Alertness");

				if ((MND + IN) < 8)
				{
					summation = "(8)";
					checkValue = 8;
				}
				else
				{
					summation = "MND(" + MND + ") + IN(" + IN + ")";
					checkValue = MND + IN;
				}

				output = "is trying to apply some knowledge";
				
				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}
				if (stealth)
				{
					checkValue += (parseInt(stealth, 10) * 2);
					summation += " + Stealth(" + (parseInt(stealth, 10) * 2) + ")";
				}
				if (alertness)
				{
					checkValue += (parseInt(alertness, 10) * 2);
					summation += " + Alertness(" + (parseInt(alertness, 10) * 2) + ")";
				}

				message = message.replace("search", "");
			}
			// Sneak: MOB+AG
			else if (message.indexOf("sneak") !== -1)
			{
				var fleet = getValue(attributes, "Fleet Footed");
				var stealth = getValue(attributes, "Stealth");

				summation = "MOB(" + MOB + ") + AG(" + AG + ")";
				output = "is trying to sneak around";
				checkValue = MOB + AG;

				if (fleet)
				{
					checkValue += 2;
					summation += " + Fleet Footed(+2)";
				}
				if (stealth)
				{
					checkValue += (parseInt(stealth, 10) * 2);
					summation += " + Stealth(" + (parseInt(stealth, 10) * 2) + ")";
				}

				message = message.replace("sneak", "");
			}
			// Spellcraft : MND+AU
			else if (message.indexOf("spellcraft") !== -1)
			{
				summation = "MND(" + MND + ") + AU(" + AU + ")";
				output = "is trying to concentrate on spellcraft";
				checkValue = MND + AU;
				message = message.replace("spellcraft", "");
			}
			// Start fire: MND+DX
			else if (message.indexOf("start fire") !== -1)
			{
				var hunter = getValue(attributes, "Hunter");

				summation = "MND(" + MND + ") + DX(" + DX + ")";
				output = "is trying to start a fire";
				checkValue = MND + DX;

				if (hunter)
				{
					checkValue += (parseInt(hunter, 10) * 2);
					summation += " + Hunter(" + (parseInt(hunter, 10) * 2) + ")";
				}

				message = message.replace("start fire", "");
			}
			// Swim: MOB+ST
			else if (message.indexOf("swim") !== -1)
			{
				var swim = getValue(attributes, "Swim");

				summation = "MOB(" + MOB + ") + ST(" + ST + ")";
				output = "is trying to swim in some liquid";
				checkValue = MOB + ST;

				if (swim)
				{
					checkValue += (parseInt(swim, 10) * 3);
					summation += " + Swim(" + (parseInt(swim, 10) * 3) + ")";
				}

				message = message.replace("swim", "");
			}
			// Trophy: MOB+DX+Hunter
			else if (message.indexOf("trophy") !== -1)
			{
				var hunter = getValue(attributes, "Hunter");

				summation = "MOB(" + MOB + ") + DX(" + DX + ")";
				output = "is trying to skin and clean a corpse";
				checkValue = MOB + DX;

				if (hunter)
				{
					checkValue += (parseInt(hunter, 10) * 2);
					summation += " + Hunter(" + (parseInt(hunter, 10) * 2) + ")";
				}

				message = message.replace("trophy", "");
			}
			// Wake Up: MND+IN
			else if (message.indexOf("wake up") !== -1)
			{
				var alertness = getValue(attributes, "Alertness");
				var lightning = getValue(attributes, "Lightning Reflexes");

				summation = "MND(" + MND + ") + IN(" + IN + ")";
				output = "is trying to wake up";
				checkValue = MND + IN;

				if (alertness)
				{
					checkValue += (parseInt(alertness, 10) * 2);
					summation += " + Alertness(" + (parseInt(alertness, 10) * 2) + ")";
				}
				if (lightning)
				{
					checkValue += (parseInt(lightning, 10) * 2);
					summation += " + Lightning Reflexes(" + (parseInt(lightning, 10) * 2) + ")";
				}

				message = message.replace("wake up", "");
			}
			// Work Mechanism: MND+(DX or IN)*
			else if (message.indexOf("work mechanism") !== -1)
			{			
				var thievery = getValue(attributes, "Thievery");
				var lockpicking = getValue(attributes, "Lockpicking");

				if (DX > IN)
				{
					summation = "MND(" + MND + ") + DX(" + DX + ")";
					checkValue = MND + DX;
				}
				else
				{
					summation = "MND(" + MND + ") + IN(" + IN + ")";
					checkValue = MND + IN;
				}
				output = "is trying to figure out how a mechanism works";
				
				if (thievery)
				{
					checkValue += (parseInt(thievery, 10) * 2);
					summation += " + Thievery(" + (parseInt(thievery, 10) * 2) + ")";
				}
				if (lockpicking)
				{
					checkValue += (parseInt(lockpicking, 10) * 2);
					summation += " + Lockpicking(" + (parseInt(lockpicking, 10) * 2) + ")";
				}

				message = message.replace("work mechanism", "");
			}
			else if (message.indexOf("help") !== -1)
			{
				if (debug)
					log("Help");

				sendChat("Check Bot", "/w " + msg.who + " Available skills: animal handling, appraise, climb, communicate, decipher script, defy poison, disable traps, feat of strength, flirt, gold lust, haggle, hide, jump, knowledge, intimidate, open lock, perception, pick pocket, read tracks, resist disease, riding, search, sneak, spellcraft, start fire, swim, trophy, wake up, work mechanism.");
				skip = true;
				message = message.replace("help", "");

				if (debug)
				{
					log("Help(" + msg.who + ")");
					log("Message(" + message + ")");
				}
			}
			else
			{
				skip = true;
				sendChat("Check Bot", "/w " + msg.who + " That is not a valid skill choice.");
			}

			// Leftover data to handle
			if (message.length > 0)
			{
				// Strip spaces
				message = message.replace(/ /g, "");
				
				if (isNumber(message))
				{
					summation += " + (" + message + ")";
					checkValue += parseInt(message, 10);
					message = "";
				}
			}

			if (debug)
			{
				log("Check: " + rollValue + " vs " + checkValue);
				log("Attributes: " + summation);
				log("Leftover: [" + message + "]");
			}

			// Print out final results
			if (!skip)
				sendChat(msg.who, "/em " + output + " ... " + rollValue + " vs " + checkValue + " [" + summation + "] attempt is a " + (rollValue <= checkValue ? (rollValue == 1 ? "CRITICAL " : "") + "SUCCESS!" : "FAILURE!"));
		}
		else
			sendChat(msg.who, "/em tried to do a skill check but they aren't even a character!");
	}
});
