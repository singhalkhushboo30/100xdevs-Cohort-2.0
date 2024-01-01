/*
Datatypes ahs been categorised on the basis that how the variables have been accessed and stored in the memory

Datatypes ahs been categorised in two types:

Primitive Datatypes- 7 Datatypes (Call by value- copy of the original value is being used)

1. String
2. Number
3. Boolean
4. Symbol
5. BigInt (to handle big/scientific values)
6. Null
7. Undefined

const score=100
const scoreValue=100.3
const bigNumber=123345634574587756n

const isLoggedIn=false
const outsideTemp=null
let userEmail;  undefined
let userEmail=undefined     undefined

const id=Symbol('123')    return value is also datatype(maybe other)
const anotherId=Symbol('123')
cosnole.log(id===anotherId)


Reference Datatypes(Non-Primitive Datatypes)- (Call by Reference)

1. Arrays
2. Objects
3. Functions

const heros= ["abhay","mahi","nish"]

const data={
    name:"hitesh",
    age:22
}

const myFunction=function(){
   console.log("Hello World!")
}

To check datatype
console.log(typeof bigNumber)
console.log(typeof "neha")
console.log(typeof("neha"))
console.log(tupeof myFunction)     -return type is function/function Object 

JavaScript- dynamically typed language(no need to define datatype)

https://262.ecma-international.org/5.1/#sec-11.4.3



*/

