"use strict" //treat all JS code as newer version or new JS

//alert(3+3) we are using node.js not browser so would not work this way

//Datatypes

let name="riya"  //String Datatype
let age=18  //number
let isLoggedIn=false  //boolean
let bigIntNumber=123n   //bigint

let state=null  //null - standalone value (representation of empty value)
//undefined -value not assigned
// symbol -to find uniqueness(ex- when we have many react components)


//Objects 

console.log(typeof "Rahul")
console.log(typeof age)
console.log(typeof undefined)
console.log(typeof null)   //object
console.log(typeof true)
console.log(typeof 123n)

console.table([name,age,isLoggedIn,bigIntNumber,state])