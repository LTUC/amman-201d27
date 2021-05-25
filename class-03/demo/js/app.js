'use strict';
// runing js in a strcit mode

// let num1 = prompt('enter a number?');
// //bashar
// // Casting the data type
// console.log(num1);
// console.log(typeof num1);
// num1 = Number(num1);
// console.log(num1);
// console.log(typeof num1);

/*

Truthy & Falsey values:
There's a values that are considered True or False 
without actually writing true or false!


Truthy values:
-true
-Numbers(all the numbers) 3.1 -3 
-Any String '3213213sdadsa' 
- calculations 3*5


Falsey Values:
-False
- Zero
- '' empty string
- 'Bashar' / 32 -> NaN

*/

// let value = 'Bashar' / 32;
// console.log(value);
// if(value){ // -> true
//     alert('Yes i am truthy ')
// }else{
//     alert('No i am false')
// }


// let someThing = prompt('Enter Something');
// // 321321 weqewq 
// if(someThing){
//     alert('this is the thing that you enterd ' + someThing)
// }else{
//     alert('You need to enter an actual name')
// }


//Loops
// Repeat a block of code or sequence of instructions until a specific condition is met

//for loop 
/*

for(initialization; condition; update ){
    code ... 
}
1-Initalization, let i = 2; (once)
2-condition -> body of the for loop
3-update
*/
// i++ -> i = i + 1
// i-- -> i = i - 1 
// for(let i = 0; i <= 10; i = i + 2){
//     console.log('increment each time by 2' , i);
// }

// for(let x = 50 ; x >= 20 ; x = x - 4){
//     console.log('decrement by one each time' , x);
// }

// this wont run because the condition is going to be false from the beginning 

// for(let n = 0 ; n === 10 ; n++){
//     console.log('Website is loading');
// }


// One time
// infinite loop (this wont stop)
// for(let i = 0 ; i < 10 ; i--){
//     console.log('webiste is dying!');
// }



// while loop

/*     expression     
while(condition){
    code ... 
}
When we don't know how many times we're going to loop
Input Validtion 
*/
// let i = 0;
// // i = 0 
// while(i < 10){
//     console.log('Site is loading', i);
//     // i++;
// }

// let passCode = prompt('Enter the code!');

// // '123'
// // console.log(passCode);
// passCode = Number(passCode)
// // console.log(passCode);
// // bashar
// while(Number(passCode) !== 123){ // condition needs to be False
//     passCode = prompt('Wrong enter the correct Passcode');
//     // passCode = Number(passCode);
// }


//Arrays: is a special type of variables that can hold or store multiple values as a list

// why?
// let student1 = 'Mohammad';
// let student2 =  'Bashar'; 

// ...

// how ? [] square brackets
let arrOfGrades = [30,50,20,100,80,200,1000]; // list
// in order to know how many values(elements) we have in the array
// console.log(arrOfGrades.length);

console.log(arrOfGrades);

// index => adress of each element in the array (the position of the element in the array)

console.log('The first element', arrOfGrades[0]);

console.log('The second element ', arrOfGrades[1]);


let studentNames = ['Osaid', 'Mohammad','Marah','Omaima','Bashar'];

// console.log(studentNames);

console.log(studentNames[3]);
studentNames[3] = 'Abdulsalam';
// console.log(studentNames);
// studentNames[5] = 'Abd';
// console.log(studentNames);
// studentNames[5] = prompt('Please enter your name');
// console.log(studentNames);
// let mixedArr = [2,'Tamim', true,['Bashar','Mohmmad']];

// console.log(mixedArr);

// push
// let newStudent = prompt('Enter your name')
// to add an element to the end of the array
// studentNames.push('Israa');
// studentNames.push('Tamim')
// console.log(studentNames);
// // removing the last element of our array 
// studentNames.pop();
// console.log(studentNames);
// // adding an element to the start of my array
// studentNames.unshift('Ahlam')
// console.log(studentNames);

// let newArr = [];
// console.log(newArr);
// newArr.push('Ocean8')
// console.log(newArr);




/*
1- ask the user two questions that accepts yes/y no/n.
2- keep track of the score if the user answer with the correct answer add a point  to them and in the end alert them with the score.
3- loop through an array of movies and show it in order in the console. 
*/ 

// let score = 0;


// let robot = prompt('Do you think i am robot?');

// if(robot ==='yes' || robot ==='y'){
//     alert('REALLY?')
// }else if( robot ==='no' || robot ==='n'){
//     alert('What a surprise');
//     // score  = score + 1;
//     score++;
// }else {
//     alert('Okay whatever!')
// }

// let dogs = prompt('Do you think i like dogs?')

// switch(dogs){
//     case 'yes':
//     case 'y':
//         alert('Yes i do');
//         score++;
//         break;
//     case 'no':
//     case 'n':
//         alert('you dont know me!');
//         break;
//     default:
//         alert('Okay whatever');           
// }

// alert(`Your score is  ${score}`);


let moviesArr = ['shutter island' , 'inception', 'conjuring' , 'marrige story', 'the purge', 'dont breath'];
console.log(moviesArr);
// 6 
for(let index = 0; index < moviesArr.length; index++){

    console.log(moviesArr[index]);
    // moviesArr[0]
    // moviesArr[1]
    // moviesArr[2]
    // moviesArr[3]
    // if(index === 3){
    //     break;
    // }

}

// let sum = 0;

// console.log(++sum); // it show the value before increment 
// preincrement ++variable

// postincrement sum++
// console.log(sum);