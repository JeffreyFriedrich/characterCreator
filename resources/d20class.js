//fuck you jeff


//Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard
//class skills list: "appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disable device", "disguise", "escapeArtist", "forgery", "gatherInformation", "handleAnimal", "heal", "hide", "intimidate", "jump", "knowledge()", "listen", "moveSilently", "openLock", "perform()", "profession()", "ride", "search", "senseMotive", "sleightOfHand", "spellcraft", "spot", "survival", "swim", "tumble", "useMagicDevice", "useRope"
var d20class = 
[
	{
		//name: identifiable class name
		name: "Barbarian",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 0,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level
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
	{
		//name: identifiable class name
		name: "Bard",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 1,
		// All saves: 0 = full, 1 = half
		fortSave: 1,
		refSave: 0,
		willSave: 0,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 6,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 6,
		// alignment: array of whitelisted alignments; possible alignments = "LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"  
		alignment: ["NG", "CG", "N", "CN", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["appraise", "balance", "bluff", "climb", "concentration", "craft()", "decipherScript", "diplomacy", "disguise", "escapeArtist", "gatherInformation", "hide", "jump", "knowledge()", "listen", "moveSilently", "perform()", "profession()","senseMotive", "sleightOfHand", "spellcraft", "swim", "tumble", "useMagicDevice"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "bard"],
		armorProficiencies: ["light", "shields"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "CHA",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "arcane"
	},
	{
		//name: identifiable class name
		name: "Cleric",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 1,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 8,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 2,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		//NOTE: cleric alignment must be within 1 level of his deity
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		//NOTE: clerics may have additional class skills based on domains
		classSkills: ["concentration", "craft()", "diplomacy", "heal", "knowledge(arcana)", "knowledge(history)", "knowledge(religion)", "knowledge(planes)", "profession()", "spellcraft"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "WIS",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "divine"
	},
	{
		//name: identifiable class name
		name: "Druid",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 1,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 0,
		// hit die: d//name: identifiable class name4, d6, d8, d10, d12; 1st level
		hitDie: 8,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 4,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["NG", "LN", "N", "CN", "NE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nature)", "listen", "profession()", "ride", "spellcraft", "spot", "survival", "swim"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["druid"],
		armorProficiencies: ["druid"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "WIS",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "divine"
	},
	{
		//name: identifiable class name
		name: "Fighter",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 0,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 10,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 2,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["climb", "craft", "handleAnimal", "intimidate", "jump", "ride", "swim"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields", "towerShields"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "none",
		// spellType: whahttps://github.com/GregoryProuty/characterCreator.gitt kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "none"
	},
	{
		//name: identifiable class name
		name: "Monk",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 1,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 0,
		willSave: 0,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 8,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 4,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "LN", "LE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["balance", "climb", "concentration", "craft()", "diplomacy", "escapeArtist", "hide", "jump", "knowledge(arcana)", "knowledge(religion)", "listen", "moveSilently", "perform()", "profession()", "senseMotive", "spot", "swim", "tumble"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["monk"],
		armorProficiencies: ["none"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "none",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "none"
	},
	{
		//name: identifiable class name
		name: "Paladin",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 0,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 1,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 10,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 2,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["concentration", "craft()", "diplomacy", "handleAnimal", "heal", "knowledge(nobilityAndRoyalty)", "knowledge(religion)", "profession()", "ride", "senseMotive"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "medium", "heavy", "shields"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "WIS",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "divine"
	},
	{
		//name: identifiable class name
		name: "Ranger",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 0,
		// All saves: 0 = full, 1 = half
		fortSave: 0,
		refSave: 0,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 8,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 6,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["climb", "concentration", "craft()", "handleAnimal", "heal", "hide", "jump", "knowledge(dungeoneering)", "knowledge(geography)", "knowledge(nature)", "listen", "moveSilently", "profession()", "ride", "search", "spot", "survival", "swim", "useRope"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "martial"],
		armorProficiencies: ["light", "shields"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "WIS",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "divine"
	},
	{
		//name: identifiable class name
		name: "Rogue",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 1,
		// All saves: 0 = full, 1 = half
		fortSave: 1,
		refSave: 0,
		willSave: 1,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 6,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 8,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["appraise", "balance", "bluff", "climb", "craft()", "decipherScript", "diplomacy", "disableDevice", "disguise", "escapeArtist", "forgery", "gatherInformation", "hide", "intimidate", "jump", "knowledge (local)", "listen", "moveSilently", "openLock", "perform()", "profession", "search", "senseMotive", "sleightOfHand", "spot", "swim", "tumble", "useMagicDevice", "useRope"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple", "rogue"],
		armorProficiencies: ["light"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "none",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "none"
	},
	{
		//name: identifiable class name
		name: "Sorceror",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 2,
		// All saves: 0 = full, 1 = half
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 4,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 2,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["bluff", "concentration", "craft()", "knowledge(arcana)", "profession()", "spellcraft"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["simple"],
		armorProficiencies: ["none"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "CHA",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "arcane"
	},
	{
		//name: identifiable class name
		name: "Wizard",
		// BAB: 0 = full, 1 = 3/4, 2 = half
		BAB: 2,
		// All saves: 0 = full, 1 = half
		fortSave: 1,
		refSave: 1,
		willSave: 0,
		// hit die: d4, d6, d8, d10, d12; 1st level
		hitDie: 4,
		// skill points: class-specific-number; calculation is (CSN + INT modifier + (isHuman)) * (lvl + 3)
		skillPoints: 2,
		// alignment: array of whitelisted alignments; possible alignments = LG, NG, CG, LN, N, CN, LE, NE, CE  
		alignment: ["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE"],
		// classSkills: skills that allow full ranks (up to (lvl + 3)) at cost of 1; all other skills go up to ((lvl + 3) / 2) and cost 2 (unless character has Able Learner feat); some nonclass skills cannot be used/invested in untrained
		classSkills: ["concentration", "craft()", "decipherScript", "knowledge()", "profession()", "spellcraft"],
		// All proficiencies: represent a selection of weapons and armor a character can equip; simple and martial weapon proficiency are most common for weapons; light, medium, heavy, and shields are most common for armor
		weaponProficiencies: ["wizard"],
		armorProficiencies: ["none"],
		// spellStat: what ability modifier impacts spells for this class; CHA, WIS, and INT are common; many classes will have "none"
		spellStat: "INT",
		// spellType: what kind of spells do they produce; common types are arcane and divine; many classes will have none and few will have both 
		spellType: "arcane"
	},
]