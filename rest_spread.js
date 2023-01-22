

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }
  
//ES 2015 rest and arrow func refactoring

const filterOutOdds = (...arg) => {
    return arg.filter((num) => num %2 === 0)
}


const findMin = (...nums) => {
    return nums.reduce((acc, val)=> {
        return acc < val ? acc : val;
    })
}




const mergeObjects = (obj1, obj2) => { return {...obj1, ...obj2}}


const doubleAndReturnArgs = (arr, ...nums) => {
    return [...arr.map((el)=> el*2), ...nums.map((el)=>el*2)]
    
 }


 /** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {

}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {

}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {

}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}