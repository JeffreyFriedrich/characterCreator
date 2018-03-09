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

//diceRoller takes a ty
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

function removeSmallest(arr) {
	for(i = 0; i < arr.length; i++) {
		if( arr[i] < arr[arr.length]) {
			let int = arr[arr.length];
			arr[arr.length] = arr[i];
			arr[i] = int;
		}
	}
	arr.pop(arr);
}

function replaceOnes(arr, typeOfDice) {
	var length = arr.length;
	arr = filterOnes(arr);
	if (typeOfDice === undefined || typeOfDice === 0 || typeOfDice === false) {

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

module.exports.default = 
{
	diceRoller,
	abilityScorer,
	removeSmallest,
	replaceOnes,
	filterOnes,
	dieRoll
}