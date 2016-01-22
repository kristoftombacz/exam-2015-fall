'use strict';

// Create a function that counts all the letters in a string,
// and returns an object that has the letters as keys and the counts as values.

function countLetters(string) {
  var countedLetters = {};
  var stringToArray = string.split("");

  stringToArray.forEach(function(letters){
    for (var i = 0; i < stringToArray.length; i++){
      if (stringToArray[i] === letters){
        countedLetters[letters]++;
      }else {
        countedLetters[letters] = 1;
      }
    }
  });
  return countedLetters;
}

console.log(countLetters('appletree')); // {a: 1, p: 2, l: 1, e: 3, t: 1, r: 1}
