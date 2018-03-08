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
		//racialBonus: racial features that apply unconditionally to certain categories; often skills
		racialBonus: [],
		//blood: is cosidered this/these race(s) for certain effects; often written as "___ blood"; if blank, refer to race name
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
		bonusFeatures: [],
		racialBonus: [],
		blood: [],
		automaticLanguages: ["common"],
		bonusLanguages: ["any"],
		spellLikeAbilities: [],
		favoredClass: "any"
		}
}

export default {
	race
}