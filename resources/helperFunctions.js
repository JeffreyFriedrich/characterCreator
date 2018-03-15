//WIP	Goal is to take an array of objects composed of keys equal to the types of dice and values 
//		equal to the number of dice of each type and return an object where each die rolled is a key
//		with each value being the appropriate die result 
//		example: [{10:2}, {6:2}] might become {{10:2}, {10:7}, {6:4}, {6:1}} 
//function bigDiceRoller({typeOfDice:numberOfDice}) {
//	var obj = {};
//	for(i = 0; i < arguments.length; i++) {
//		var dieType = null;
//		var dice = null;
//		obj.push(diceRoller(dieType, dice));
//	}
//	return obj;
//}

//diceRoller takes a single int typeOfDie and rolls an int numberOfDice equal to that type, then outputs the dice values 
//	into an array.
//	summerBoolean is an optional parameter that, given any nonzero value, makes the function return an integer value 
//	equal to the sum of the array values in lieu of the array itself
function diceRoller(typeOfDie, numberOfDice, summerBoolean) {
	var arr = [];
	if (numberOfDice === undefined) {
		numberOfDice = 1;
	}
	for(i = 0; i < numberOfDice; i++) {
		arr.push(dieRoll(typeOfDie));
	}
	if (summerBoolean === undefined || summerBoolean === 0 || summerBoolean === false) {
			return arr;
	}
	else {
		return arr.reduce((total, current) => {
			return total += current;
		}, 0)
	}
}
//abilityScorer takes advantage of other helper functions to generate an array of 6 values with these rules:
//	1. There will always be at least one 18.
//	2. The other 5 values in the array will result from rolling a minimum of 4 6-sided dice per array value.
//	3. If any of those 4 dice are a 1, that die gets rerolled until its value is not a 1.
//	4. The smallest of those 4 resulting dice is removed.
//	5. Once we have the three higher non-one dice, they are added together and placed as a value in the array.
//	6. Continue until we have 6 values in the array.
//The result is 6 values including one guaranteed 18 and 5 numbers between 6-18 with an average value of 12.
function abilityScorer() {
	var arr = [18];
	while (arr.length < 6) {
		let tempArray = diceRoller(6, 4);
		tempArray = replaceOnes(tempArray, 6);
		removeSmallest(tempArray);
		arr = arr.concat(tempArray.reduce((total, current) => {return total+=current;}, 0));
	}
	return arr;
}
//removeSmallest takes an array, switches
function removeSmallest(arr) {
	for(i = 0; i < arr.length; i++) {
		if( arr[i] < arr[arr.length]) {
			let int = arr[arr.length];
			arr[arr.length] = arr[i];
			arr[i] = int;
		}
	}
	return arr.pop(arr);
}

function replaceOnes(arr, typeOfDice) {
	var length = arr.length;
	arr = filterOnes(arr);
	if (typeOfDice === undefined || typeOfDice === 0 || typeOfDice === false) {
		typeOfDice = 6;
	}
	while (arr.length < length) {
		arr.push(dieRoll(typeOfDice))
		arr = filterOnes(arr);
	}
	return arr;
}

function filterOnes (arr) {
	return arr.filter((el) => {
		return el > 1;
	});
}

function dieRoll(die) {
	if (die === undefined) {
		die = 6;
	}
	return Math.ceil(Math.random() * die);
}

function calculateAbilityModifier(abilityScore) {
	return Math.floor((abilityScore - 10) / 2);
}

function calculateAbility(baseValue, raceMod) {
	return (baseValue + raceMod);
}

module.exports.default = 
{
	diceRoller,
	abilityScorer,
	removeSmallest,
	replaceOnes,
	filterOnes,
	dieRoll,
	calculateAbilityModifier
}
