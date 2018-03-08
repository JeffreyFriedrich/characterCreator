var deity = 
{
	boccob:
		{
		//name: name of deity given from players handbook
		name: "Boccob",
		//alignment: players are able to choose a deity within one alignment of their character
		alignment: "True Neutral",
		//domains: clerics are able to choose from the domains of their god; domains grant extra abilities to clerics such as feats, class skills, bonus spells, etc.
		domains: ["knowledge", "magic", "trickery"],
		//favoredWeapon: certain classes and the cleric war domain interact with their gods favorite weapon
		favoredWeapon: "quarterstaff",
		//titles: what a god is alternatively known by; mostly for flair
		titles: ["the Uncaring", "Lord of All Magics", "Archmage of the Deities"],
		//portfolio: what subdivision of the universe the god has jurisdiction over; more flair; could be used to help characters pick a deity 
		portfolios: ["magic"],
		//description: a giant string of text explaining who this god is and what their goals are; pure flair
		description: "Boccob is a distant deity who promotes no special agenda in the world of mortals. As a god of magic and knowledge, he is worshipped by wizards, sorcerers, and sages."
		}
}

module.exports.default = 
{
	deity
}
