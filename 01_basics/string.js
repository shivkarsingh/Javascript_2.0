// STRINGS

// can be denoted as both '' and ""

const accountName = "ss";
const repoCount = 11;

console.log( accountName + " = " + repoCount + " value" );

// this method of string concatenation is outdated and not efficient so avoid this

// String Interpolation - we make placeholders and we inject variables - Template Literals

console.log( ` Hello my name is ${accountName} and my repo count is ${repoCount}` );
console.log( `This is a 
    multiline 
    string`);



