'use strict';

//Objects
//Data type 


//cars propreties
// color
// model 
// shape


// cars methods 
// move 
// play music 
// electricity 


//Human 
// properties 

// eye color 
// height 
// weight 
// age 
// Naitionality 

// methods

// talk 
// walk 
// work
// think 
// sleep 





// let std = [1995,false,'Osaid',['reading','labs'] , 175, 65];
// {key:valye} 
// Objects Literal 
const student = {
    stdName:'Osaid',
    covidStatus:false,
    dateOfbirth:1995,
    height:175,
    weight:65,
    likes:['reading','labs','swimming','gaming','coding'],
    jobInfo:{
        jobTitle:'Softwaredeveloper',
        Salary:4000,
    },
    stdGrade:[],
    // a method
    walk:function(){
           console.log(`${this.stdName} Likes to walk under the rain and his covid status is ${this.covidStatus}`);     
        //    console.log(this);
    },
    talk:function(){
        console.log(' talk about UFC all the time');
    },
    stdRandomGrade:function(){
        // i will loop from 1-20
        // and store  or fill in an array as property with each time multiplied by 3 
        for(let i = 1 ; i <= 20 ; i++){
            this.stdGrade.push(i * 3);
        }
        console.log(this.stdGrade);


    }
};
//accesing a method

student.walk();
student.talk();
student.stdRandomGrade();


// const bayan = {
//     role:'Student',
//     walk:function (){
//         // console.log(
//         //     'Bayan likes to walk'
//         // );
//         console.log(this);
//     }
// }
// bayan.walk();


// console.log(this);


 //access objects

 //dot notation
                //nameOFtheObj.Key
// console.log(student.covidStatus);
// console.log(student.jobInfo.jobTitle);


//Bracket notation

//console.log(student['likes']);

// console.log(student['likes'][0]);


// we're looping through the array inside the obj
// for(let i = 0 ; i < student.likes.length; i++){
//     document.write( '<h2>'+ student.likes[i] + '</h2>');
// }

// adding a property

// student.newProp = 'Testing';




//Deleting property 

// delete student.dateOfbirth;

// console.log(student);




// document.write('<h3>' +  5*3 + '</h3>');

// console.log(document);

// this is when you already have an element in the HTML
// let user = prompt('whats your name?')
// let parent = document.getElementById('Bashar');

// parent.textContent = 5*3;





// when we want to create a new element we use createElement

// let h3Element = document.createElement('h3');
// we need to get the container 

// let bodyTag = document.getElementById('newElm');

// not created yet we need to append it 

// bodyTag.appendChild(h3Element);

// to show the output
// h3Element.textContent = 'newElement been created';


// let div = document.getElementById('Bashar');

// let newEl = document.createElement('h4');

// div.appendChild(newEl);
