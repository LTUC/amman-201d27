'use strict';

// we will get the image elements
let leftImageElement = document.getElementById('left-image');
let rightImageElement = document.getElementById('right-image');

let leftIndex; 
let rightIndex;



// rounds
let rounds = 10;

// to track the count of the clicks of the user

let countsClick = 0;



// function Car(model,price){
//   this.model = model;
//   this.price  = price;
// }

// Car.allCars = [];

function GoatImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  GoatImage.allGoats.push(this);
}
// let arrOfobj = [];

GoatImage.allGoats = [];
// instances 

new GoatImage('cruisin-goat','images/cruisin-goat.jpg'); //[0] 
new GoatImage('goat-away','images/goat-away.jpg');// [1]
new GoatImage('goat-out-of-hand','images/goat-out-of-hand.jpg'); //[2]
new GoatImage('float-your-goat','images/float-your-goat.jpg'); // [3]
new GoatImage('smiling-goat','images/smiling-goat.jpg');// [4]
new GoatImage('sweater-goat','images/sweater-goat.jpg');// [5]
new GoatImage('kissing-goat','images/kissing-goat.jpg')//[6]
new GoatImage('sasst-goat','images/sassy-goat.jpg'); // [7]

// console.log(GoatImage.allGoats);

function displayTwoImages(){
  leftIndex = generateRandomIndex(); // 0 - 7 5
  rightIndex = generateRandomIndex(); // 0 - 7 5
  console.log(leftIndex);
  console.log(rightIndex);
  //   //3             5 
  while(leftIndex === rightIndex){
    leftIndex = generateRandomIndex(); // 5
  }
  // console.log('after',leftIndex);
  // console.log('after',rightIndex);
  leftImageElement.setAttribute('src',GoatImage.allGoats[leftIndex].source);
  rightImageElement.src = GoatImage.allGoats[rightIndex].source;

}
displayTwoImages();


// let flooring = Math.floor();
// each time when we call this function will genrate to me a random index between 0 - 7
function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * GoatImage.allGoats.length);
  return randomIndex;               //0.1111111
                                  // 0.999999  * 8  =>  7.9999999
                                  // floor - > 7
                     //  0 - length 
                
}


leftImageElement.addEventListener('click',handleClicking);
rightImageElement.addEventListener('click',handleClicking);

function handleClicking(event){
    countsClick++;
    // each time its increasing by 1;
    // console.log(countsClick);
    console.log(event.target.id);
    if(rounds >= countsClick){
          // 10 >= 11 f 
        if(event.target.id === 'left-image'){
          GoatImage.allGoats[leftIndex].votes++;
          // console.log(GoatImage.allGoats[leftIndex].name);
          // console.log(GoatImage.allGoats);
        }else if(event.target.id ==='right-image'){
            GoatImage.allGoats[rightIndex].votes++;
        }
        displayTwoImages();
    }else{
      console.log(GoatImage.allGoats);
    // display list of the goats
    // i created this list overhere because my arrayofobjects is update with the votes
    gettingList();
    leftImageElement.removeEventListener('click',handleClicking);
    rightImageElement.removeEventListener('click',handleClicking);
    }

  }


// console.log(generateRandomIndex());

function gettingList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <GoatImage.allGoats.length; i++ ){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${GoatImage.allGoats[i].name} has ${GoatImage.allGoats[i].votes} Votes`;
  }

}



