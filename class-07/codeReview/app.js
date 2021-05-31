'use strict';

let operationHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



//From Mdn to genrate random value
function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  let cont = document.getElementById('container');
// Seattle	23	65	6.3
// seattel equal (min,max,avg) 
const seattle = {
    locationName:'Seattle',
    minNumOfCust:23,
    maxNumOfCust:65,
    avgPerSale:6.3,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< operationHours.length;i++){
                //push
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
                // this.customersHourly[i] = randomVal(this.minNumOfCust,this.maxNumOfCust);
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
            // [23,43,423,423] * 6.3 => NaN
            // 23 * 6.3 => a normal valu        
            this.total = this.total + this.cookiesHourly[i];
                            // 0     +  23 
                            // 23    + 43 
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < operationHours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${operationHours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

seattle.calcRandomNumOfCust();
seattle.calcRandomNumOfCookies();
seattle.render();
// console.log(seattle);


// Tokyo	3	24	1.2

const tokyo = {
    locationName:'Tokyo',
    minNumOfCust:3,
    maxNumOfCust:24,
    avgPerSale:1.2,
    customersHourly:[],
    cookiesHourly:[],
    total:0,
    calcRandomNumOfCust:function(){
          for(let i = 0; i< operationHours.length;i++){
                //push
                this.customersHourly.push(randomVal(this.minNumOfCust,this.maxNumOfCust));
                // this.customersHourly[i] = randomVal(this.minNumOfCust,this.maxNumOfCust);
          }  
    },
    calcRandomNumOfCookies:function(){
        for(let i = 0 ; i < operationHours.length; i++){
            this.cookiesHourly.push(this.customersHourly[i] * Math.ceil(this.avgPerSale));
            // [23,43,423,423] * 6.3 => NaN
            // 23 * 6.3 => a normal valu        
            this.total = this.total + this.cookiesHourly[i];
                            // 0     +  23 
                            // 23    + 43 
        }
    },
    render:function(){
        let locationName = document.createElement('h2');
        cont.appendChild(locationName);
        locationName.textContent = this.locationName;

        let unOrderedList = document.createElement('ul');   
        cont.appendChild(unOrderedList);

        for(let i = 0 ; i < operationHours.length; i++){
            let listItems = document.createElement('li');
            unOrderedList.appendChild(listItems);
            listItems.textContent = `${operationHours[i]} : ${this.cookiesHourly[i]} cookies`;
        }

        let dailyTotal = document.createElement('li');
        unOrderedList.appendChild(dailyTotal);
        dailyTotal.textContent = `Total : ${this.total} cookies`;
    }


};

tokyo.calcRandomNumOfCust();
tokyo.calcRandomNumOfCookies();
tokyo.render();