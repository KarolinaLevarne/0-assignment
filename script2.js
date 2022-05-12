let testObject = { key1: 40, 
key2: 491, key3: 991, 
key4: 819, key5: 138, 
key6: 481};

consoleLog(testObject);
sum(testObject)

function consoleLog(theObject){
	for (const [key, value] of Object.entries(theObject)) {
  		console.log(`${key}: ${value}`);
	}
}

function sum(theObject){
	let sum = 0;

	for (const value of Object.values(theObject)) {
  		sum += value;
	}
	console.log(sum);
}