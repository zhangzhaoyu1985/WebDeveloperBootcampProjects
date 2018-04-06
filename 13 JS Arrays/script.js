// printReverse()

function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		console.log(array[i]);
	}
}
console.log("*** printReverse() ***");
printReverse([1, 2, 3, 4]);

// isUniform()

function isUniform(array) {
	for (var i = 1; i < array.length; i++) {
		if (array[i] !== array[i - 1]) {
			return false;
		}
	}

	return true;
}
console.log("*** isUniform() ***");
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));

// sumArray()

function sumArray(array) {
	var result = 0;

	array.forEach(function(num) {
		result += num;
	});

	return result;
}

console.log("*** sumArray() ***");
console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log(sumArray([-5, 100]));

// max()

function max(array) {
	var result = array[0];

	array.forEach(function(num) {
		result = Math.max(num, result);
	});

	return result;
}

console.log("*** max() ***");
console.log(max([1, 2, 3]));
console.log(max([10, 3, 10, 4]));
console.log(max([-5, 100]));