'use strict';

let btn = document.getElementById('randomizer');

let aud = document.getElementById('music');

btn.addEventListener('click', function(){
aud.volume = Math.random();
console.log(aud.volume);

})