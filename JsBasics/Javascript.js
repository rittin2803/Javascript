console.log('Hello world');

// Variables 
let vname = 'Rittin';
console.log(vname);

//Constants - For not change value of variable.
const salary = 67;

//Datatype - "Primitive"
// String, Number, Boolean, Undef, NULL

//Datatype - "Reference"
// Object, Array, Function

//DYNAMIC LANGUAGE

//Objects
let fname = 'Rittin';
let age = 19;
let person = {
    //Object literal
    fname: 'Mosh',
    age: 19
};

//2 ways to work with objects
//DOT NOTATION
person.fname = 'Mithra';
console.log(person.fname);

//BRACKET NOTATION
person['name'] = 'Rittin Mithra';

//Arrays
let selectedColors = ['red', 'blue'];

//Functions
function greet(fname){
    //Logic here
    console.log('Hello' + fname);

}
greet('Rittin');

