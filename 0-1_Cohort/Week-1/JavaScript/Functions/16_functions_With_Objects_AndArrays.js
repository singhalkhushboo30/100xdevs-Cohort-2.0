// Spread operators and rest operators are two of the modt useful pieces of shorthand  in JavaScript. Spread operators allow us to expand
// an array or object into its individual elements, while rest operators allow us to condense multiple elements into a single array or object.

// Spread operator ex:
// let array=[1,2,3,4]
// let newArray=[...arrsy,5]
//newArray=[1,2,3,4,5]

//Rest operator ex:It collects multiple elements into an array. This is useful if you don’t know how many arguments a function may receive, 
// and you want to capture all of them as an array.
// function(...sum){
//     let total=0;
//     numps.map(num=>{
//         total+=num
// ;    })
// return total;
// }
// console.log(sum(1,2,3,4,5))    -15 as output


// function calculateCartPrice(num1){
//  return num1;
// }
// console.log(calculateCartPrice(2))

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,500,700))

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject["username"]} and price is ${anyObject.price}`)
}

handleObject(user)
//handleObject({
//     username:"sam",
//     price:245
// })

const myNewArray=[200,400,600]

function returnSecondValue(getArray){
  return getArray[2]
}

console.log(returnSecondValue(myNewArray))

// console.log(returnSecondValue([200,600,400,500]))