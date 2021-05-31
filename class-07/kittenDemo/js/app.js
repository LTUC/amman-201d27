'use strict';
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let globVar = document.getElementById('kittenProfiles');
let table = document.createElement('table');
let arrOfObj = [];

function Cat(kittenName,likes,goodWithKids,goodWithDogs,goodWithOtherCats){
    this.kittenName = kittenName;
    this.likes = likes;
    this.goodWithKids = goodWithKids;
    this.goodWithDogs = goodWithDogs;
    this.goodWithOtherCats = goodWithOtherCats;
    this.age = 0;
    arrOfObj.push(this);

}


//prototype 

Cat.prototype.updatingTheAge = function(){
    this.age = randomValue(3,12);
}

Cat.prototype.render = function(){
         let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.kittenName;

        let paragraphEl = document.createElement('p');
        articleEl.appendChild(paragraphEl);
        paragraphEl.textContent = `${this.kittenName} is a cute cat and it has ${this.age} years old`;

        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        let liEl = null;
        for(let i = 0 ; i < this.likes.length ; i++){
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.likes[i];
        }
        
        let imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);

        imgEl.setAttribute('src',`images/${this.kittenName}.jpeg`)
        
      
        articleEl.appendChild(table);
        let firstRow = document.createElement('tr');
        table.appendChild(firstRow);
        let th = document.createElement('th');
        firstRow.appendChild(th);
        th.textContent = 'IsGoodWithKids';
        let th2 = document.createElement('th');
        firstRow.appendChild(th2);
        th2.textContent = 'IsGoodWithDogs';
        let th3= document.createElement('th');
        firstRow.appendChild(th3);
        th3.textContent = 'IsGoodWithOthercats';


        let secondRow = document.createElement('tr');
        table.appendChild(secondRow);
        let td = document.createElement('td');
        secondRow.appendChild(td);
        td.textContent = this.goodWithKids;
        let td2 = document.createElement('td');
        secondRow.appendChild(td2);
        td2.textContent = this.goodWithDogs;
        let td3= document.createElement('td');
        secondRow.appendChild(td3);
        td3.textContent = this.goodWithOtherCats;


    }  


// instances
let frankie = new Cat('frankie',['jumping','napping','eating','zzz'],true,false,false);
let serena = new Cat('serena',['jumping','zzz'],true,true,false);
let jumper = new Cat('jumper',['jump','eat','sleep'],false,false,false);
// frankie.updatingTheAge(); 
// frankie.render();
// serena.updatingTheAge();
// serena.render();
// jumper.updatingTheAge()
// jumper.render()

console.log(arrOfObj);

for(let i = 0 ; i < arrOfObj.length; i++){
    arrOfObj[i].updatingTheAge();
    arrOfObj[i].render();
}



/*
function headerRow(){
6am .. 7pm

}

protorender(){
    tableData
}


fucntion lastRow(){
    footerRoww
}
*/


// instances for each location 
//seattle.cal .render() => row for seattle