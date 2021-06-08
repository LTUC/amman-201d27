'use strict';



// adding items to a loacl storage

localStorage.setItem('Email','basharalasmar@gmail.com');

localStorage.setItem('Passwd',12345);




//  gettind data from the local storage by using ls.getItem(key);

console.log(localStorage.getItem('Email'));




// remove an item (one) from the local storage removeItem(key);
localStorage.removeItem('Passwd');




// remove all the items 

// localStorage.clear();

console.log(localStorage);

