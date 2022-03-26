// There are two ways of creating an array.
let myArray = new Array();
let myArray = [];

// You can initialize an array created with new by using
let myArray = new Array(0, 1, 2, 3, 4, 5, 6); // myArray = [0, 1, 2, 3, 4, 5, 6]

// This is a unidimensional array.
let myArray = [0, 1, 2, 3, 4, 5, 6]

// This is a twodimensional array.
let myArray = [
	[0, 1, 2, 3],
	[4, 5, 6, 7],
	[8, 9, 10, 11]
]

// This is a tridimensional array.
let myArray = [
	[[0, 1, 2, 3], [0, 1, 2, 3], [0, 1, 2, 3]],
	[[4, 5, 6, 7], [0, 1, 2, 3], [0, 1, 2, 3]],
	[[8, 9, 10, 11], [0, 1, 2, 3], [0, 1, 2, 3]],
]

// As you might have noticed, directly populating an array is not a good way to do it.
// There are JS methods for that.

// Let's create a list with 1000 empty items.
let myArray = new Array(1000);

// Let's create a list with the same element 1000 times.
let myArray = new Array(1000).fill(1);
// [1, 1, 1, 1, 1 ... 995 more items]

let myArray = new Array(1000).fill(9);
// [9, 9, 9, 9, 9 ... 995 more items]

let myArray = new Array(1000).fill("a");
// ["a", "a", "a", "a", "a" ... 995 more items]

// Now, let's populate a list with different items.
new myArray = Array.from({length: 10}, (_, i) => i + 1)
// [1, 2, 3, 4, 5 ... 995 more items]

// Acessing an object within an array.
let myArray = [{"name":"Teo"}]
let myName = myArray[0].name
>> "Teo"

let myArray = [{"name":"Daenerys"}]
let myName = myArray[0].name
>> "Daenerys"

// Turning an array into a string.
// This is only useful with primitive data types (string, number, bigint, boolean, undefined, symbol, and null).
let myArray = [1, 2, 3, 4, 5, 6]
let turnToString = myArray.toString()
>> "1, 2, 3, 4, 5, 6"

// Separating a list with items other than commas.
let myArray = [1, 2, 3, 4, 5, 6]
let turnToString = myArray.join(" - ")
>> "1 - 2 - 3 - 4 - 5 - 6"

// Adding elements to an array.
let myArray = [1, 2, 3, 4, 5, 6]
myArray.push(7)
>> [1, 2, 3, 4, 5, 6, 7]

// Adding an element to the beginnlet myArray = [1, 2, 3, 4, 5, 6]
let myArray = [1, 2, 3, 4, 5, 6]
myArray.unshift(0)
>> [0, 1, 2, 3, 4, 5, 6]

// Removing the first element of an array.
let myArray = [1, 2, 3, 4, 5, 6]
myArray.shift()
>> [1, 2, 3, 4, 5, 6]

// Removing the last element of an array.
let myArray = [1, 2, 3, 4, 5, 6]
myArray.pop()
>> [1, 2, 3, 4, 5, 6]

// Getting the removed element.
// This works with pop and shift.
let myArray = [1, 2, 3, 4, 5, 6]
let item = myArray.pop()
console.log(myArray, item)
>> [2, 3, 4, 5, 6], 1

// Get n items from array.
let myArray = [1, 2, 3, 4, 5, 6]
myArray.splice(4)
>> [1, 2, 3, 4]

// Get n items from index.
let myArray = [1, 2, 3, 4, 5, 6]
myArray.splice(2, 3) // Get 3 items from index 2.
>> [3, 4]

myArray.splice(0, 3) // Get 3 items from index 0.
>> [3, 4]

myArray.splice(5, 1) // Get 1 items from index 5.
>> [3, 4]

// Merging arrays.
let myFirstList = [0, 1, 2, 3, 4, 5]
let mySecondList = [6, 7, 8, 9, 10]
let mergedList = myFirstList.concat(mySecondList)
console.log(mergedList)
>> [0, 1, 2, 3, 4, 5, 6, 7, 9, 10]
