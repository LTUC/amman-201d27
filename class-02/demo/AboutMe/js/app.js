'use strict';
// it will help you to run javascript in a strict mode

// let a = 5;

// console.log(a);

// let favMovie = prompt('Do you like movies?');
// //YES  //NO
// // console.log(favMovie);
// // a question that accepts yes or no
// console.log('Before the lower case',favMovie);

// favMovie = favMovie.toLowerCase();
// //NO => no

// console.log('after the lower case',favMovie);
// // YES
// // .toLowerCase()
// // yes


// if(favMovie ==='yes' || favMovie ==='y'){
//   alert('Me too');
// }else if(favMovie ==='no'){
//   console.log('I recommend to watch some');
// }else{
//   alert('Next time please enter yes or no!');
// }


// another conditional statement 

/*

switch(Value){ // the value that we want to check 
    case yes: 
            alert('Hello')
}
*/

let handMade = prompt('Do you think i like hand mades?');
//YES
// handMade = handMade.toLowerCase();
//yes
//no
// YES NO batata 
// handMade.toUpperCase();
switch(handMade.toLowerCase()){ // yes
case 'yes':
case 'y':
  // console.log('correct') 
  alert('correct i do like handmades');
  break;
case 'no':
  alert('incorrect');
  break;
case 'osaid':
  alert('after the default?');
  break;
default: 
  alert('None of the cases were true');

}
