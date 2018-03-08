var race = 
{
	human: 
		{
		//name: as found in the literature
		name:"Human",
		//abilityChanges: changes made 
		abilityChanges: {},
		// size: 0 = fine, 1 = diminuitive, 2 = tiny, 3 = small, 4 = medium, 5 = large, 6 = huge, 7 = gargantuan, 8 = colossal; attack and AC formula = 2 ^ (3 - size) (for size < 4) or -(2) ^ (size - 5) (for size > 4) or 0 (size = 4); special attacks modifier (bull rush, grapple, etc) = (size - 4) * 4; hide modifier = (4 - size) * 4
		size: 4,
		// speed: ft moved in a move action
		speed: 30,
		//vision: 0 = normal, 1 = low-light vision, 2 = darkvision, 3 = low-light vision and darkvision
		vision: 0,
		//visionRange: range at which creatures can see, according to their vision, before taking penalties; creatures without extra vision abilities will have a 0
		visionRange: 0,
		//weaponFamiliarity: exotic weapons that a race treats as martial (a fighter of this race can use this weapon without taking a feat or penalty)
		weaponFamiliarity: [],
		//weaponProficiency: weapons that all members of this race have proficiency with
		weaponProficiency: [],
		//bonusFeatures: extra features, often conditional, that a race has outside current categories;
		bonusFeatures: ["bonus feat at 1st level", "4 extra skill points at first level, 1 at additional levels"],
		//racialBonus: racial features that apply unconditionally to certain categories; often skills or saving throws
		racialBonus: {},
		//blood: is considered this/these race(s) for certain effects; often written as "___ blood"; if blank, refer to race name
		blood: [],
		// automaticLanguages: languages always known by that race
		automaticLanguages: ["common"],
		// bonusLanguages: languages added to the list a character can know at lvl 1 (number of these known determined from INT mod)
		//NOTE: humans access to any bonus language does not include secret languages like druidic
		bonusLanguages: ["any"],
		//spell-like abilities: race specific abilities that can be cast under certain conditions
		spellLikeAbilities: [],
		// favoredClass: multiclass character do not take an experience point penalty for their favored class levels (when this rule is used)
		favoredClass: "any"
		},
	dwarf: 
		{
		name:"Dwarf", 
		abilityChanges: {CON: 2, CHA: -2},
		size: 4,
		speed: 20,
		vision: 2,
		visionRange: 60,
		weaponFamiliarity: ["dwarven waraxe", "dwarven urgrosh"],
		weaponProficiency: [],
		bonusFeatures: ["Dwarves can move at their base speed even when wearing medium or heavy armor or when carrying a medium or heavy load (unlike other creatures, whose speed is reduced in such situations).", "Stonecunning: This ability grants a dwarf a +2 racial bonus on Search checks to notice unusual stonework, such as sliding walls, stonework traps, new construction (even when built to match the old), unsafe stone surfaces, shaky stone ceilings, and the like. Something that isn’t stone but that is disguised as stone also counts as unusual stonework. A dwarf who merely comes within 10 feet of unusual stonework can make a Search check as if he were actively searching, and a dwarf can use the Search skill to find stonework traps as a rogue can. A dwarf can also intuit depth, sensing his approximate depth underground as naturally as a human can sense which way is up.", "Stability: A dwarf gains a +4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).", "+2 racial bonus on saving throws against poison.", "+2 racial bonus on saving throws against spells and spell-like effects.", "+1 racial bonus on attack rolls against orcs and goblinoids.", "+4 dodge bonus to Armor Class against monsters of the giant type. Any time a creature loses its Dexterity bonus (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too.", "+2 racial bonus on Appraise checks that are related to stone or metal items.", "+2 racial bonus on Craft checks that are related to stone or metal."],
		racialBonus: {},
		blood: [],
		automaticLanguages: ["common", "dwarven"],
		bonusLanguages: ["giant", "gnome", "goblin", "orc", "terran", "undercommon"],
		spellLikeAbilities: [],
		favoredClass: "fighter"
		},
	elf:
		{
		name:"Elf", 
		abilityChanges: {DEX: 2, CON: -2},
		size: 4,
		speed: 30,
		vision: 1,
		visionRange: 0,
		weaponFamiliarity: [],
		weaponProficiency: ["longsword", "rapier", "longbow", "composite longbow","shortbow", "composite shortbow"],
		bonusFeatures: ["Immunity to magic sleep effects, and a +2 racial saving throw bonus against enchantment spells or effects", "An elf who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if she were actively looking for it"],
		racialBonus: {listen: 2, search: 2, spot: 2},
		blood: [],
		automaticLanguages: ["common", "elven"],
		bonusLanguages: ["draconic", "gnoll", "gnome", "goblin", "orc", "sylvan"],
		spellLikeAbilities: [],
		favoredClass: "wizard"
		},
	gnome:
		{
		name:"Gnome", 
		abilityChanges: {STR: -2, CON: 2},
		size: 3,
		speed: 20,
		vision: 1,
		visionRange: 0,
		weaponFamiliarity: ["gnome hooked hammer"],
		weaponProficiency: [],
		bonusFeatures: ["+2 racial bonus on saving throws against illusions", "Add +1 to the Difficulty Class for all saving throws against illusion spells cast by gnomes. This adjustment stacks with those from similar effects.", "+1 racial bonus on attack rolls against kobolds and goblinoids.", "+4 dodge bonus to Armor Class against monsters of the giant type. Any time a creature loses its Dexterity bonus (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too."],
		racialBonus: {listen: 2, craftAlchemy: 2},
		blood: [],
		automaticLanguages: ["common", "gnome"],
		bonusLanguages: ["draconic", "dwarven", "elven", "giant", "goblin", "orc"],
		spellLikeAbilities: ["1/day—speak with animals (burrowing mammal only, duration 1 minute). A gnome with a Charisma score of at least 10 also has the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation. Caster level 1st; save DC 10 + gnome’s Cha modifier + spell level."],
		favoredClass: "bard"
		},
	halfElf:
		{
		name:"Half-Elf", 
		abilityChanges: {},
		size: 4,
		speed: 30,
		vision: 1,
		visionRange: 0,
		weaponFamiliarity: [],
		weaponProficiency: [],
		bonusFeatures: ["Immunity to sleep spells and similar magical effects, and a +2 racial bonus on saving throws against enchantment spells or effects"],
		racialBonus: {listen: 1, search: 1, spot: 1, diplomacy: 2, gatherInformation: 2},
		blood: ["elven"],
		automaticLanguages: ["common", "elven"],
		//NOTE: humans access to any bonus language does not include secret languages like druidic
		bonusLanguages: ["any"],
		spellLikeAbilities: [],
		favoredClass: "any"
		},	
	halfOrc:
		{
		name:"Half-Orc", 
		abilityChanges: {STR: 2, INT: -2, CHA: -2},
		size: 4,
		speed: 30,
		vision: 2,
		visionRange: 60,
		weaponFamiliarity: [],
		weaponProficiency: [],
		bonusFeatures: [],
		racialBonus: {},
		blood: ["orc"],
		automaticLanguages: ["common", "orc"],
		bonusLanguages: ["draconic", "giant", "gnoll", "goblin", "abyssal"],
		spellLikeAbilities: [],
		favoredClass: "barbarian"
		},
	halfling:
		{
		name:"Halfling", 
		abilityChanges: {STR: -2, DEX: 2},
		size: 3,
		speed: 20,
		vision: 0,
		visionRange: 0,
		weaponFamiliarity: [],
		weaponProficiency: [],
		bonusFeatures: ["+2 morale bonus on saving throws against fear: This bonus stacks with the halfling’s +1 bonus on saving throws in general.", "+1 racial bonus on attack rolls with thrown weapons and slings."],
		racialBonus: {climb: 2, jump: 2, listen: 2, moveSilently: 2, fortSave: 1, refSave: 1, willSave: 1},
		blood: [],
		automaticLanguages: ["common", "halfling"],
		bonusLanguages: ["dwarven", "elven", "gnome", "goblin", "orc"],
		spellLikeAbilities: [],
		favoredClass: "rogue"
		}
}

export default {
	race
}