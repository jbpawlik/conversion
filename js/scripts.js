let gallonsInput = prompt("How many gallons do you want to convert to liters?");
function gallonsToLiters(gallons) {
	return (gallons * 3.8);
}
console.log(gallonsToLiters(gallonsInput));

let litersInput = prompt("How many liters do you want to convert to gallons?");
function litersToGallons(liters) {
	return (liters / 3.8);
}
console.log(litersToGallons(litersInput));

let tspInput = prompt("How many teaspoons do you want to convert to tablespoons?");
function tspToTbsp(tsp) {
	return (tsp / 3);
}
console.log(tspToTbsp(tspInput));

let tbspInput = prompt("How many tablespoons do you want to convert to tesaspoons?");
function tbspToTsp(tbsp) {
	return (tbsp * 3);
}
console.log(tbspToTsp(tbspInput));

let cupInput = prompt("How many cups do you want to convert to pints?");
function cupToPint(cup) {
	return (cup * 0.5);
}
console.log(cupToPint(cupInput));

let pintInput = prompt("How many pints do you want to convert to cups?");
function pintToCup(pint) {
	return (pint / 0.5);
}
console.log(pintToCup(pintInput));
