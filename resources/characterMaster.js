const d20class = require('./d20class.js');
const race = require('./race.js');
const deity = require('./deity.js');

var characterMaster = 
{	
	'baseStats': 
	{
		name: 'baseStats',
    	characterName: '',
    	playerName: '',
    	d20class: {},
    	ecl: 0,
    	race: '',
    	size: null,
    	gender: '',
    	alignment: '',
    	deity: '',
    	height: '',
    	weight: '',
    	looks: ''
	},
	'abilityScores':
	{
		name: 'abilityScores',
		baseStrength: 0,
		baseDexterity: 0,
		baseConstitution: 0,
		baseIntelligence: 0,
		baseWisdom: 0,
		baseCharisma: 0,
		totalStrength: 0,
		totalDexterity: 0,
		totalConstitution: 0,
		totalIntelligence: 0,
		totalWisdom: 0,
		totalCharisma: 0,
		modSTR: 0,
		modDEX: 0,
		modCON: 0,
		modINT: 0,
		modWIS: 0,
		modCHA: 0
	}
}



module.exports.default =
{
    characterMaster
}