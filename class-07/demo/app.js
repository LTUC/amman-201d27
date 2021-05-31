'use strict';


// const osaid = {
//     stdName:'Osaid',
//     age:23,
//     height:184,
//     walk:function(){
//         console.log('Walking under the rain');
//     }
// }


// const bayan = {
//     stdName:'Bayan',
//     age:23,
//     height:162,
//     walk:function(){
//         console.log('Walking under the sun');
//     }
// }


//Constructor Function : special type of functions that is responisble for creating objects (instances)

let arrOfobjects = [];
function College(stdName,age,height){
    this.stdName = stdName;
    // property = value that im passing
    this.age = age;
    this.height = height;
    this.weight = 0;
    // console.log(this);
    arrOfobjects.push(this);

}

//prototype 

College.prototype.walk = function(){
    console.log(`${this.stdName} Walking under the rain`);
}

College.prototype.updatingWeight = function(){
    this.weight  = this.weight + 10;
    console.log('Osaids wait is ' + this.weight);
}

// creating the instances(objects)
let std1 = new College('Osaid',23,184);
let std2 = new College('Bayan',23,164);
let std3 = new College('Khaled',25, 181);
console.log(arrOfobjects);

for(let i = 0 ;i < arrOfobjects.length; i++){
    arrOfobjects[i].walk()
}
// std1.walk();
// std1.updatingWeight();
// std2.walk();





// let std3 = new College('Bashar',)
// std2.walk();
// console.log(std1);
// std1.walk();

