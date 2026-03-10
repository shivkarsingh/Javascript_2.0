console.log(addone(5)) // no error due to hoisting

function addone(num){ //function 
    return num + 1
}



addTwo(5) // error due to diff way of function writing
const addTwo = function(num){ // function expression 
    return num + 2
}