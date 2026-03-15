// Iterable = an object that can be iterated (looped) over element by element.
// JavaScript uses a special internal method called:

// Symbol.iterator
// If an object has this method, JavaScript knows how to iterate through it.
// we can use for of loop on it 
/*
Iterable	Example
Array	[1,2,3]
String	"hello"
Map	new Map()
Set	new Set()
TypedArray	Int8Array etc

Objects are NOT Iterable
Normal objects cannot be used with for...of
Instead we use:
for...in
Object.keys()
Object.values()
Object.entries()


*/