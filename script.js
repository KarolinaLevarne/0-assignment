'use strict'

let myReversedName = "aniloraKkezelyW";
let myActualName = reverseStrig(myReversedName);
console.log(myActualName)

function reverseStrig(myReversedName) {
return myReversedName.split("").reverse().join("");
}