let gapCharacters = {
	katarina: "formidable",
	kollyano: "formidable",
	seraf: "of Heavark"
	//key: "values"
}

// Returning all the keys from an object
let allTheKeys = Object.keys(gapCharacters)
>> ["katarina", "kollyano", "seraf"]

// Returning all the values from an object.
let allTheValues = Object.values(gapCharacters)
>> ["formidable", "formidable", "of Heavark"] 

// Returning all the entries from an object.
let allTheEntries = Object.entries(gapCharacters)
>> [["katarina", "formidable"], ["kollyano", "formidable"], ["seraf", "of heavark"]]