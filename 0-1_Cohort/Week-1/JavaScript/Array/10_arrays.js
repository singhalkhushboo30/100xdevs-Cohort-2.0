// array
// const myArray=[0,1,2,3,4,5,true,"hitesh"]      //[element1,element2,...]
// const myHeros=["shaktiman","naagraj"]

// console.log(myArray[0])

const myArr =new Array(1,2,3,4)
console.log(myArr)

// myArr.push(6)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(0) //add the element at starting point
// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()    //remove the element from starting index
// console.log(myArr)

// console.log(myArr.includes(3))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()   //convert value to string comma-seperated
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//slice - to get sub array
//splice -  adds/removes array elements 
// or
// overwrites the original array
// array.splice(index,how many,item1,...,itemX)

console.log("A ", myArr)

const myn1=myArr.slice(1,3)

console.log(myn1)
console.log("B ",myArr)

const myn2=myArr.splice(1,3)
console.log("C ",myArr)
console.log(myn2)