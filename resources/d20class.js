//fuck you jeff


//Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard
//class skills list: "appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disable device", "disguise", "escapeArtist", "forgery", "gatherInformation", "handleAnimal", "heal", "hide", "intimidate", "jump", "knowledge()", "listen", "moveSilently", "openLock", "perform()", "profession()", "ride", "search", "senseMotive", "sleightOfHand", "spellcraft", "spot", "survival", "swim", "tumble", "useMagicDevice", "useRope"
var d20class = 
{
	Barbarian: 
		{
		//name: identifiable class name
		name: "Barbarian",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 0,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level receives full hit die; afterwards, they roll for it; reroll 1s if merciful
		hitDie: 12,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 4,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["NG", "CG", "N", "CN", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["climb", "craft()", "handleAnimal", "intimidate", "jump", "listen", "ride", "survival", "swim"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "shields"],
		// spellStat://name: identifiable class name what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "none",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "none"
		},
	Bard: 
		{
		name: "Bard",
		BAB: 1,
		fortSave: 1,
		refSave: 0,
		willSave: 0,
		hitDie: 6,
		skillPoints: 6,
		alignment: ["NG", "CG", "N", "CN", "NE", "CE"],
		classSkills: ["appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disguise", "escapeArtist", "gatherInformation", "hide", "jump", "knowledge()", "listen", "moveSilently", "perform()", "profession()","senseMotive", "sleightOfHand", "spellcraft", "swim", "tumble", "useMagicDevice"],
		weaponProficiencies: ["simple", "bard"],
		armorProficiencies: ["light", "shields"],
		spellStat: "CHA",
		spellType: "arcane"
		},
	Cleric: 
		{
		name: "Cleric",
		BAB: 1,
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		hitDie: 8,
		skillPoints: 2,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		//NOTE: clerics may have additional class skills based on domains
		classSkills: ["concentration", "craft()", "diplomacy", "heal", "knowledge(arcana)", "knowledge(history)", "knowledge(religion)", "knowledge(planes)", "profession()", "spellcraft"],
		weaponProficiencies: ["simple"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	Druid: 
		{
		name: "Druid",
		BAB: 1,
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		hitDie: 8,
		skillPoints: 4,
		alignment: ["NG", "LN", "N", "CN", "NE"],
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nature)", "listen", "profession()", "ride", "spellcraft", "spot", "survival", "swim"],
		weaponProficiencies: ["druid"],
		armorProficiencies: ["druid"],
		spellStat: "WIS",
		spellType: "divine"
		},
	Fighter: 
		{
		name: "Fighter",
		BAB: 0,
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		hitDie: 10,
		skillPoints: 2,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		classSkills: ["climb", "craft", "handleAnimal", "intimidate", "jump", "ride", "swim"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields", "towerShields"],
		spellStat: "none",
		spellType: "none"
		},
	Monk: 
		{
		name: "Monk",
		BAB: 1,
		fortSave: 0,
		refSave: 0,
		willSave: 0,
		hitDie: 8,
		skillPoints: 4,
		alignment: ["LG", "LN", "LE"],
		classSkills: ["balance", "climb", "concentration", "craft()", "diplomacy", "escapeArtist", "hide", "jump", "knowledge(arcana)", "knowledge(religion)", "listen", "moveSilently", "perform()", "profession()", "senseMotive", "spot", "swim", "tumble"],
		weaponProficiencies: ["monk"],
		armorProficiencies: ["none"],
		spellStat: "none",
		spellType: "none"
		},
	Paladin: 
		{
		name: "Paladin",
		BAB: 0,
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		hitDie: 10,
		skillPoints: 2,
		alignment: ["LG"],
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nobilityAndRoyalty)", "knowledge(religion)", "profession()", "ride", "senseMotive"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	Ranger: 
		{
		name: "Ranger",
		BAB: 0,
		fortSave: 0,
		refSave: 0,
		willSave: 1,
		hitDie: 8,
		skillPoints: 6,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		classSkills: ["climb", "concentration", "craft()", "handleAnimal", "heal", "hide", "jump", "knowledge(dungeoneering)", "knowledge(geography)", "knowledge(nature)", "listen", "moveSilently", "profession()", "ride", "search", "spot", "survival", "swim", "useRope"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	Rogue: 
		{
		name: "Rogue",
		BAB: 1,
		fortSave: 1,
		refSave: 0,
		willSave: 1,
		hitDie: 6,
		skillPoints: 8,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		classSkills: ["appraise", "balance", "bluff", "climb", "craft()", "decipherScript", "diplomacy", "disableDevice", "disguise", "escapeArtist", "forgery", "gatherInformation", "hide", "intimidate", "jump", "knowledge (local)", "listen", "moveSilently", "openLock", "perform()", "profession", "search", "senseMotive", "sleightOfHand", "spot", "swim", "tumble", "useMagicDevice", "useRope"],
		weaponProficiencies: ["simple", "rogue"],
		armorProficiencies: ["light"],
		spellStat: "none",
		spellType: "none"
		},
	Sorceror: 
		{
		name: "Sorceror",
		BAB: 2,
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		hitDie: 4,
		skillPoints: 2,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		classSkills: ["bluff", "concentration", "craft()", "knowledge(arcana)", "profession()", "spellcraft"],
		weaponProficiencies: ["simple"],
		armorProficiencies: ["none"],
		spellStat: "CHA",
		spellType: "arcane"
		},
	Wizard: 
		{
		name: "Wizard",
		BAB: 2,
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		hitDie: 4,
		skillPoints: 2,
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		classSkills: ["concentration", "craft()", "decipherScript", "knowledge()", "profession()", "spellcraft"],
		weaponProficiencies: ["wizard"],
		armorProficiencies: ["none"],
		spellStat: "INT",
		spellType: "arcane"
		},
}