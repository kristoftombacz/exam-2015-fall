'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

function Circle(radius) {
  this.radius = radius;
  this.circumference = 0;
  this.area = 0;
}

Circle.prototype.getCircumference = function (radius) {
  this.circumference = (2 * this.radius * Math.PI);
  return this.circumference;
}

Circle.prototype.getArea = function (radius) {
  this.area = (this.radius * this.radius * Math.PI);
  return this.area;
}

Circle.prototype.toString = function (radius) {
  var circleDetails = 'Radius: ' + this.radius + ', Circumference: ' + this.circumference + ', Area: ' + this.area;
  return circleDetails;
}

var uj = new Circle(4);
console.log(uj.getCircumference());
console.log(uj.getArea());
console.log(uj.toString());




