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


//prototypes 

Cat.prototype.updatingTheAge = function(){
    this.age = randomValue(3,12);
}

Cat.prototype.render = function(){
         let articleEl = document.createElement('article');
        globVar.appendChild(articleEl);

        let h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.kittenName;
                            // frankie.kittenName; 

        let paragraphEl = document.createElement('p');
        articleEl.appendChild(paragraphEl);
        paragraphEl.textContent = `${this.kittenName} is a cute cat and it has ${this.age} years old`;

        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        let liEl = null;
    
        // we need to convert this string to an array!
        for(let i = 0 ; i < this.likes.length ; i++){
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = this.likes[i];
        }
        
        let imgEl = document.createElement('img');
        articleEl.appendChild(imgEl);

        imgEl.setAttribute('src',`images/${this.kittenName}.jpeg`);
        
      
        articleEl.appendChild(table);
        let firstRow = document.createElement('tr');
        table.appendChild(firstRow);

        let interstArr = ['IsGoodWithKids','IsGoodWithDogs','IsGoodWithOthercats'];
        let th = null;
        for(let i = 0 ; i <interstArr.length;i++){
            th = document.createElement('th') //reassinging
            firstRow.appendChild(th);
            th.textContent = interstArr[i];
        }

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
let bashar = new Cat ('Bashar', ['gaming', 'asking simple very very simple questions'] ,false,false,false);


console.log(arrOfObj);
function callings(){
for(let i = 0 ; i < arrOfObj.length; i++){
    arrOfObj[i].updatingTheAge();
    arrOfObj[i].render();
}
}

callings();




const catsForm = document.getElementById('kittenForm');

catsForm.addEventListener('submit', handleSubmitting);

function handleSubmitting(event){
    event.preventDefault();
    // will prevent the default behavior of the forms which is refreshing 
    // console.log(event);
        // alert('hiii')
    let newName = event.target.nameField.value;

    let likes = event.target.likesField.value;
    console.log(likes);
    // 'hugging,playing' 
    likes = likes.split(',');
    //['hugging','playing']

    let goodKids = event.target.isGoodWithKids.checked;
    // console.log(goodKids);
    // console.log(goodKids);
    let goodDogs = event.target.isGoodWithDogs.checked;

    let goodWithOtherCats = event.target.isGoodWithOtherCats.checked;

    //INSIDE THE EVENT FUNCTION!
    //creating the instance from the submission 
                        'MeshMesh','cuddling,hugging'    
    let kitty = new Cat(newName,likes,goodKids,goodDogs,goodWithOtherCats)
    // console.log(kitty);
    kitty.updatingTheAge();    
    kitty.render();
    // // console.log(event.target.nameField.value);
    // console.log(event.target.likesField.value);
}