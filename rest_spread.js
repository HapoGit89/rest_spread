

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

const removeRandom = (items) => {
    const arr = [...items]
    arr.splice(Math.floor(Math.random()*arr.length),1)
    return arr
}
    



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2]



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal= (obj, key, val) => {
return{...obj, [`${key}`]: val}}



/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
let obj2 = {...obj};
delete obj2[`${key}`]
return obj2

}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {return {...obj1, ...obj2}}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    obj2 = {...obj}
    obj2[`${key}`] = val;
    return obj2

}