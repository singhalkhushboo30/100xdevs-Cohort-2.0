// for of -works on iterable values of an object
//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. 
//Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), 
//as well as the arguments object, generators produced by generator functions, and user-defined iterables.


// ["","",""]
//[{},{},{}]

// can be used on array, ovjects,strings etc
const arr=[1,2,3,4,5]
for (const num of arr) {
 console.log(num)     
}

const greetings="Hello World!"
for(const ch of greetings){
    console.log(`Each char is ${ch}`)
}

//*************************************************************************************8 */

// Maps- like object but are different in terms of iteration
// In js everything is object
// ap objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
// A Map object is iterated by key-value pairs — a for...of loop returns a 2-member array of [key, value] for each iteration.

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
console.log(map)

for(const key of map){
    console.log(key)
}
for(const [key,value] of map){
    console.log(key,':-',value)
}

//Objects not iteratable

// const myObject={
//     'game1':'NFS',
//     'game2':'Spiderman'
// }
const myObject={
    game1:'NFS',
    game2:'Spiderman'
}


for(const [key,value] of myObject){
    console.log(key,':-',value)
}

