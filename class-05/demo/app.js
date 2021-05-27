'use strict';

/* 
Func review

Create 3 functions: 
-A getSum function that takes in two numbers andd returns an array of the two numbers and the sum of them.

-A getMultiply that take in two numbers and return the value of the multiplication!

-Create a function that is called sum and  multiply and store each value of each of the functions in a variable and returnn an array of the values

*/

function getSum(x,y){
    // let user = prompt('Whats your name?')
    let z = x + y;
    return[z,x,y];
    // we can't code anything after the return 
}
// let bashar = getSum(7,7)[3];
// console.log(bashar);
// alert('Hello Anood');

function getMultiply(x,y){
    return x * y; 
}


function getSumAndMultiply(a,b){
    let sum = getSum(a,b)[0]; //[14,7,7,'']
    let multiply = getMultiply(a,b);

    return [sum , multiply]

}
// console.log(getMultiply(5,5));


// console.log(getSumAndMultiply(7,7));



let getUsers = function(){
    let arr = [];
    let users = null;
    for(let i = 0 ; i < 5; i++){
        users = prompt('Enter your name!');
        arr.push(users);  
    }
    return arr;
}


console.log(getUsers());




