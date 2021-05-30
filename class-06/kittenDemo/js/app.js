'use strict';
// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too `time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned (3,12)
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// TODO: dynamically generate kitten objects using form data


// we will use this stand alone function in order to get random value between (3,12)
// from https://www.w3schools.com/js/js_random.asp
function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


let globVar = document.getElementById('kittenProfiles');
// console.log(globVar);
// its always better to use the container as a global variable!
const frankie = {
    kittenName:'frankie',
    likes:['jumping','napping','eating','zzz'],
    age:0, // initial value of zero
    arr: [],
    goodWithKids:true,
    goodWithDogs:false,
    goodWithOtherCats:false,
    updatingTheAge:function(){
        // in order to have a randomValue between two numbers
        this.age = randomValue(3,12);
        console.log(this.age);
    },
    render:function(){
        let articleEl = document.createElement('article');
        // console.log(globVar);
        //create
        //append 
        globVar.appendChild(articleEl);
        // give it a textcontent if needed

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


        // let prev = document.createElement('h4');
        // articleEl.appendChild(prev);
        // prev.textContent = 'IsGoodWithDogs'
        // let newBool = document.createElement('h5');
        // articleEl.appendChild(newBool);
        // newBool.textContent = this.goodWithDogs;

    }
};

// using this out side its not possible at this moment
frankie.updatingTheAge();
frankie.render();





const sereena = {
    kittenName:'serena',
    likes:['jumping','zzz'],
    age:0, // initial value of zero
    arr: [],
    goodWithKids:false,
    goodWithDogs:true,
    goodWithOtherCats:false,
    updatingTheAge:function(){
        // in order to have a randomValue between two numbers
        this.age = randomValue(3,12);
        console.log(this.age);
    },
    render:function(){
        let articleEl = document.createElement('article');
        // console.log(globVar);
        //create
        //append 
        globVar.appendChild(articleEl);
        // give it a textcontent if needed

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

    }
};

// using this out side its not possible at this moment
sereena.updatingTheAge();
sereena.render();


//Math.random() => will genratee to me a random value between 0 - 1. 

//Math.floor() => removing the fraction it keeps it to the floor    3.9 => 3 

//Math.ceil() =>  6.7 = > 7



  


// const seattle = {


// }



// const tokyo = {

// }




