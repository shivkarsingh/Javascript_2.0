const user = {

    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // this points to current obj which is user
    }
}

user.welcomeMessage();
console.log(this); // this points to empty object which is global obj

// but if i do this same thing in browser console then i will get 
// window object as this window obj is global obj

function chai(){
    console.log("first");
    console.log( this ); // too many parameters
}

chai();

// this is about who called the function not where it is written
// no obj called chai so this = global obj thats why this.username was undef


