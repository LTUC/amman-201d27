'use strict';

// functions

// what is functions? 
// block of code that does something when you call or invoke them. 


//why? 
// to reduce the redudent code and to organize our code (Reusable)



// how ? 
// function declration .. 
function welcomingMessage(){
    alert('Welcome to my website!');
}

function getName(firstName,lastName){ // Parameters

    alert('Weclome to my site ' + firstName + lastName );
}
//reusable with different values!
// getName(' Bashar', ' Alasmar'); // arguemnts 

// getName(' Abd', ' Kafaween');
// getName(' Abd', ' Kafaween');
// getName(' Abd', ' Kafaween');
// getName(' Abd', ' Kafaween');
// getName(' Abd', ' Kafaween');

function sumAndMultiply(num1,num2){
    let sum = num1+ num2;
    let multiply = num1 * num2;
    let user = 'Bashar';
    return [multiply, sum , user];
}
// console.log(sumAndMultiply(10,4)[2]); // undifnied 
// let newThing = sumAndMultiply(10,4);
// console.log(newThing[2]);

function getSquare(length){
    let calc = length * length;
    return calc;
}
// console.log(getSquare(8));


// function expression 
// let userAge = prompt('Whats your date of birth?');
// userAge = Number(userAge);
// 1995
let getAge = function(year){
    let calc = 2021 - year;
    // alert(calc);
    return calc;
}

// the only time the function will work is when you CALL IT
// console.log(getAge(userAge));



//Scopes

//global scope? at any place of the code that is not inside(outside) curly brakcets

// let lastName= 'Alasmar'

// if(true){
//     let firstName = 'Bashar';
   
// }
// console.log(firstName)
// // console.log(firstName);
// // console.log(lastName);

// let globalVar = 'Hello from out side'
// we can use global variables whereever we want!
function getName(first){
    let localVar = 'Hello from inside';
    // console.log(globalVar);
    return localVar ;
    // alert('Tamim')
}
let funcValu = getName('Bashar');
console.log(funcValu);
// console.log(localVar);
// console.log(localVar);
// alert(getName('Bashar'));
//Hoisting