'use strict';

// Create a constructor called CarStore, that takes an array of cars as a parameter:
// It should have an "addCar" method that adds a car object to it's list
// It should have a "getSumPrice" method that returns the sum of all cars price 
// It should have a "getOldestCarType" method that returns the oldest car's type
// It should have a "deleteCarByType" method that removes the cars from the inner list
// that have the given type

function CarStore(array) {
  this.addCar = function (type, price, year) {
    var help = {type: type, price: price, year: year}
    array.push(help);
  };

  this.getSumPrice = function (){
    var sum = 0;
    array.forEach(function(element){
      sum += element.price;
    })
    return sum;
  }

  this.getOldestCarType = function () {
    var oldest = array[0].year;
    var oldestCarName = array[0].type;
    array.forEach(function(element){
      if (element.year < oldest ) {
        oldest = element.year;
        oldestCarName = element.type;
      }
    })
    return oldestCarName;
  }

  this.deleteCarByType = function (type) {
    var indexOfElement = 0;
    for(var i = 0; i < array.length; i++){
      if (type === array[i].type){
        indexOfElement = i;
      }
    }
    array.splice(indexOfElement, 1);
 }
}

var cars = [
  {type: 'Dodge', price: 20000, year: 2012},
  {type: 'Tesla', price: 30000, year: 2015},
  {type: 'Nissan', price: 12000, year: 2010},
  {type: 'Trabant', price: 2000, year: 1980},
  {type: 'Ferrari', price: 40000, year: 2001}
];

var carStore = new CarStore(cars);

carStore.addCar('Smart', 18000, 2011);
console.log(carStore.getSumPrice()); // 122000 
console.log(carStore.getOldestCarType()); // 'Trabant'
carStore.deleteCarByType('Ferrari');
console.log(carStore.getSumPrice()); // 82000 

