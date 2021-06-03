'use strict';
// a = 5;
// console.log(a);

// Errs 


//Var , Let & Const

// Global scope/function -> var

// let & const -> scoped (local scope!) 2015 ES6 

// {
//     var x = 0 ;
// }
// console.log(x);


// var x = 3;
// var x = 5;
// console.log(x);

// console.log(window);
// let x = 3; // hoisting
// //undifined 

// console.log(x);

//Reference Err

// When you try to refer to a variable that is not exist 
// console.log(hero);



//Range Err
// thrown when a number is outside the allowed range

// let arr = [1,2,3,4,5,6];

// arr.length = 9**99;



//Syntax Err
// when you write a code or a reserved word in js that js engine doesn't understand

// lwt  i = 0;

// f(
//     let x = 0;
// )
// fer(let i = 0 ; i < 5; i++){
//     console.log(i);
// }



//Type Err

// let hero = 'TypeErr';
// // console.log(typeof hero)
// hero.push(6);
// hero();


// Logical Errs


// let total = 0; 

// // console.log(total);
// for(let i = 0 ; i < 5; i++){
//     console.log(total+=5);
//     // total = undifined + 5
// }

// (max,min)


//Scopes

let globalVar = 'Im global variable out side of anything';
// works everywhere, its not inside a curly brackets

function scoping(){
    let localVar1 = 'Im inside the function!';

    if(true){
        let localVar2= 'Im inside if that is inside a function'
    }
    console.log(globalVar);
    console.log(localVar1);
    // console.log(localVar2);
}
// scoping();

function anotherFunc(){
    let localVar1 = 'im inside the other function?';
    let globalVar = 'whatever';
    // console.log(globalVar);
    console.log(localVar1);
}
// anotherFunc();



function Human(name,age){
    this.name = name;
    this.age = age;
    this.total = 0;
}
// instance or an object
let newObj = new Human('Bashar',26);
let newStd = new Human('Ghaida', 20);

Human.prototype.greeting = function(){

    console.log(`${this.name} and my age is ${this.age}`);
}

function updating(){
    this.total++;
    // this.total = this.total + 1;
}


newObj.greeting();
newStd.greeting();
updating();