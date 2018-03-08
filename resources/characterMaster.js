const d20class = require('./d20class.js');
const race = require('./race.js');
const deity = require('./deity.js');

var characterMaster = 
{
    characterName: '',
    playerName: '',
    d20class: {},
    ecl: null,
    race: '',
    size: null,
    gender: '',
    alignment: '',
    deity: '',
    height: '',
    weight: '',
    looks: ''
}

module.exports.default =
{
    characterMaster
}