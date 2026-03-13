// Immediately Invoked Function Expression ( IIFE )

// why we use it 
//  1. for imediate execution of function
//  2. to make a new scope to use var without global pollution

// ()() first one is for function definition and second one is for execution

( () => ( console.log("db connected") ) )();

( function chai () { console.log("started") } ) (); // named iife


( ( name ) => ( console.log(`${name}`) ) ) ("shivkar");