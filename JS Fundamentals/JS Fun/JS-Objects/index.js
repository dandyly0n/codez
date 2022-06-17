// Objects are data structures that connect and hold information.
// Objects have properties (keys or fields) and things that they do (methods, functions,).

//Object Literals:

let user = {
    name: 'Fran',
    // --> name is the KEY, (property/field)
    // --> 'Fran' is the VALUE
    // -->  name and 'Fran' are Key/Value pairs
    age: 30,
    email: 'francislyon@gmail.com',
    location: 'Berlin',
    blogs: ['How to knit', 'How to train a bird'],
    // --> this last one is an [array] (0,1,2,etc.)
    login: function () {
        console.log('The user has logged in.');
    }
    //the NAME OF THE METHOD is login, the VALUE is function
    //everything within the {is the METHOD}**
};

console.log(user);

//If we want to access one of the PROPERTIES from this OBJECT
//we can use dot notation. (user.name) (object.property) OR (object.key)
console.log(user.name);

//If I wanted to change a value later in the code
user.age = 35; 
console.log(user.age);

//**FUNCTION: A regular FUNCTION is not defined in an OBJECT
//BUT a METHOD is. A METHOD is just a FUNCTION
//that is INSIDE of an object.
//TO CALL THIS METHOD:
user.login();
