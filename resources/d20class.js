//Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard
//class skills list: "appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disable device", "disguise", "escapeArtist", "forgery", "gatherInformation", "handleAnimal", "heal", "hide", "intimidate", "jump", "knowledge()", "listen", "moveSilently", "openLock", "perform()", "profession()", "ride", "search", "senseMotive", "sleightOfHand", "spellcraft", "spot", "survival", "swim", "tumble", "useMagicDevice", "useRope"
var d20class = 
{
	'barbarian': 
		{
		//name: identifiable class name
		name: "barbarian",
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
		alignment: ["Neutral Good", "Chaotic Good", "True Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["climb", "craft()", "handleAnimal", "intimidate", "jump", "listen", "ride", "survival", "swim"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "shields"],
		// s#firstLine {
 		spellStat: "none",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "none"
		},
	'bard': 
		{
		name: "bard",
		BAB: 1,
		fortSave: 1,
		refSave: 0,
		willSave: 0,
		hitDie: 6,
		skillPoints: 6,
		alignment: ["Neutral Good", "Chaotic Good", "True Neutral", "Chaotic Neutral", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disguise", "escapeArtist", "gatherInformation", "hide", "jump", "knowledge()", "listen", "moveSilently", "perform()", "profession()","senseMotive", "sleightOfHand", "spellcraft", "swim", "tumble", "useMagicDevice"],
		weaponProficiencies: ["simple", "bard"],
		armorProficiencies: ["light", "shields"],
		spellStat: "CHA",
		spellType: "arcane"
		},
	'cleric': 
		{
		name: "cleric",
		BAB: 1,
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		hitDie: 8,
		skillPoints: 2,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		//NOTE: clerics may have additional class skills based on domains
		classSkills: ["concentration", "craft()", "diplomacy", "heal", "knowledge(arcana)", "knowledge(history)", "knowledge(religion)", "knowledge(planes)", "profession()", "spellcraft"],
		weaponProficiencies: ["simple"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	'druid': 
		{
		name: "druid",
		BAB: 1,
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		hitDie: 8,
		skillPoints: 4,
		alignment: ["Neutral Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Neutral Evil"],
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nature)", "listen", "profession()", "ride", "spellcraft", "spot", "survival", "swim"],
		weaponProficiencies: ["druid"],
		armorProficiencies: ["druid"],
		spellStat: "WIS",
		spellType: "divine"
		},
	'fighter': 
		{
		name: "fighter",
		BAB: 0,
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		hitDie: 10,
		skillPoints: 2,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["climb", "craft", "handleAnimal", "intimidate", "jump", "ride", "swim"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields", "towerShields"],
		spellStat: "none",
		spellType: "none"
		},
	'monk': 
		{
		name: "monk",
		BAB: 1,
		fortSave: 0,
		refSave: 0,
		willSave: 0,
		hitDie: 8,
		skillPoints: 4,
		alignment: ["Lawful Good", "Lawful Neutral", "Lawful Evil"],
		classSkills: ["balance", "climb", "concentration", "craft()", "diplomacy", "escapeArtist", "hide", "jump", "knowledge(arcana)", "knowledge(religion)", "listen", "moveSilently", "perform()", "profession()", "senseMotive", "spot", "swim", "tumble"],
		weaponProficiencies: ["monk"],
		armorProficiencies: ["none"],
		spellStat: "none",
		spellType: "none"
		},
	'paladin': 
		{
		name: "paladin",
		BAB: 0,
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		hitDie: 10,
		skillPoints: 2,
		alignment: ["Lawful Good"],
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nobilityAndRoyalty)", "knowledge(religion)", "profession()", "ride", "senseMotive"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	'ranger': 
		{
		name: "ranger",
		BAB: 0,
		fortSave: 0,
		refSave: 0,
		willSave: 1,
		hitDie: 8,
		skillPoints: 6,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["climb", "concentration", "craft()", "handleAnimal", "heal", "hide", "jump", "knowledge(dungeoneering)", "knowledge(geography)", "knowledge(nature)", "listen", "moveSilently", "profession()", "ride", "search", "spot", "survival", "swim", "useRope"],
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "shields"],
		spellStat: "WIS",
		spellType: "divine"
		},
	'rogue': 
		{
		name: "rogue",
		BAB: 1,
		fortSave: 1,
		refSave: 0,
		willSave: 1,
		hitDie: 6,
		skillPoints: 8,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["appraise", "balance", "bluff", "climb", "craft()", "decipherScript", "diplomacy", "disableDevice", "disguise", "escapeArtist", "forgery", "gatherInformation", "hide", "intimidate", "jump", "knowledge (local)", "listen", "moveSilently", "openLock", "perform()", "profession", "search", "senseMotive", "sleightOfHand", "spot", "swim", "tumble", "useMagicDevice", "useRope"],
		weaponProficiencies: ["simple", "rogue"],
		armorProficiencies: ["light"],
		spellStat: "none",
		spellType: "none"
		},
	'sorceror': 
		{
		name: "sorceror",
		BAB: 2,
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		hitDie: 4,
		skillPoints: 2,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["bluff", "concentration", "craft()", "knowledge(arcana)", "profession()", "spellcraft"],
		weaponProficiencies: ["simple"],
		armorProficiencies: ["none"],
		spellStat: "CHA",
		spellType: "arcane"
		},
	'wizard': 
		{
		name: "wizard",
		BAB: 2,
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		hitDie: 4,
		skillPoints: 2,
		alignment: ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"],
		classSkills: ["concentration", "craft()", "decipherScript", "knowledge()", "profession()", "spellcraft"],
		weaponProficiencies: ["wizard"],
		armorProficiencies: ["none"],
		spellStat: "INT",
		spellType: "arcane"
		}
}

module.exports.default =
{
	d20class
}