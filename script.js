"use strict";

const button = document.getElementById("check-button");

button.addEventListener("click", valiadte);

function valiadte() {
  document.getElementById();
}
const elements = document.getElementsByClassName("container");
console.log(elements);

const printTheValues = document.getElementById("table").children;

for (let i = 0; i < printTheValues.length; i++) {
  let insideValues = printTheValues[i].children;
  console.log(`Children of element ${i}:`, insideValues);
}

//console.log(printTheValues);

//function valiadte() {
//  document.getElementsByClassName("container").innerHTML = 0;
//}
