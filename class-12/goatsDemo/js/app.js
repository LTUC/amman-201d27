'use strict';
// we will get the image elements
let container = document.getElementById('sec-one');
let leftImageElement = document.getElementById('left-image');
let midImageElement = document.getElementById('mid-image');
let rightImageElement = document.getElementById('right-image');

let leftIndex; 
let midIndex;
let rightIndex;



// rounds
let rounds = 10;

let countsClick = 0;

let arrOfNames = [];
let arrOfVotes = [];



function GoatImage(name,source){
  this.name = name;
  this.source = source;
  this.votes = 0;
  this.shown = 0;
  GoatImage.allGoats.push(this);
  arrOfNames.push(this.name);
  // arrOfVotes.push(this.votes);
  // if we want to push the votes or the seen over here its going to be an array of zeros
}
// console.log(arrOfVotes);
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


// console.log(GoatImage);
function displayThreeImages(){
  leftIndex = generateRandomIndex(); // 0 - 7 5
  midIndex = generateRandomIndex();
  rightIndex = generateRandomIndex(); // 0 - 7 5
  // []
  // console.log(leftIndex);
  // console.log(rightIndex);
  // leftImage euqals the right Or leftimage equal the mid 
  // change the right one 
  // if the mid equals the right one change the mid one 
  while(leftIndex === rightIndex || leftIndex === midIndex ||midIndex === rightIndex){
    rightIndex = generateRandomIndex(); // 5
    midIndex = generateRandomIndex();
  }

  // console.log(leftIndex , midIndex , rightIndex);
  // console.log(midIndex);
  // console.log(rightIndex);
  leftImageElement.setAttribute('src',GoatImage.allGoats[leftIndex].source);
  GoatImage.allGoats[leftIndex].shown++;
                     //[7].shown++;
  midImageElement.src = GoatImage.allGoats[midIndex].source;
  GoatImage.allGoats[midIndex].shown++;
                                            //[4]
  rightImageElement.src = GoatImage.allGoats[rightIndex].source;
  GoatImage.allGoats[rightIndex].shown++;

}
displayThreeImages();
console.log(GoatImage.allGoats);
function generateRandomIndex(){
  let randomIndex = Math.floor(Math.random() * GoatImage.allGoats.length);
  return randomIndex;
}

container.addEventListener('click', handleClicking);
let btnEl;
function handleClicking(event){
  
    countsClick++;
    if(rounds >= countsClick){
        if(event.target.id === 'left-image'){
          GoatImage.allGoats[leftIndex].votes++;
        }else if(event.target.id ==='mid-image'){
          GoatImage.allGoats[midIndex].votes++;
        }
        else if(event.target.id ==='right-image'){
            GoatImage.allGoats[rightIndex].votes++;
        }else{
          countsClick--;
          return
        }
        displayThreeImages();
    }else{  
    btnEl = document.getElementById('btn');
    btnEl.addEventListener('click',handleShowing);
    container.removeEventListener('click',handleClicking);
    }

  }
  let arr = [];

function handleShowing(){
  gettingList();
  gettingChart();
  btnEl.removeEventListener('click',handleShowing);
}


let arrOfSeen =[];
// let secondArr =[];
function gettingList(){
  let ul = document.getElementById('unList');
  for(let i = 0 ; i <GoatImage.allGoats.length; i++ ){
    arrOfVotes.push(GoatImage.allGoats[i].votes);
    // secondArr.push(GoatImage.allGoats[i].name);
 
                              // 0
    arrOfSeen.push(GoatImage.allGoats[i].shown);
    
    let li = document.createElement('li');
    ul.appendChild(li);
    li.textContent = `${GoatImage.allGoats[i].name} has ${GoatImage.allGoats[i].votes} Votes and it has been shown ${GoatImage.allGoats[i].shown}`;
  }
  // console.log(secondArr);

}

//newarr
//we need to push the names 

// console.log(arrOfVotes);
// console.log(GoatImage.allGoat);


function gettingChart(){


let ctx = document.getElementById('myChart')
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrOfNames,
        datasets: [{
            label: '# of Votes',
            data: arrOfVotes,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
            ],
            borderWidth: 1
        },{
          label: '# of Seen',
          data: arrOfSeen,
          backgroundColor: [
              'rgba(100, 120, 132, 0.5)',
          ],
          borderWidth: 1
      }
      ]
    },
});
}
// console.log(myChart);

// console.log(myChart.config);
// }
// [
//   {

//   },
//   {

//   },
//   {

//   }
// ]