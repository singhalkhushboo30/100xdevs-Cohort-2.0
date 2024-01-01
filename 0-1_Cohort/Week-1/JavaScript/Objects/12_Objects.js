// singleton

// object literals
//Object.create   - object creation through constructor

// const JsUser={
//     name:"Hitesh"
//     // 0:"Hietsh"
//     ,age:18,
//     email:"hiesh@google.com"
//     ,isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }
// myArray=["h","i"]

//Object access through dot notation
// console.log(JsUser.email);

//Object access through bracket notation
// console.log(JsUser["email"]);

//declaring a symbol
// const mySym=Symbol("key1")


// const JsUser1={
//     name:"Hitesh"
//     // 0:"Hietsh"
//     ,age:18,
//      "full name":"Hitesh Choudhary",
//     [mySym]:"mykey1",      //symbol can be used here in bracket form otherwise it will give data type as string
//     email:"hiesh@google.com"
//     ,isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(JsUser1[mySym])    //symbol can be accessed only this way

// JsUser1.email="hitesh@chatgpt.com"
// // Object.freeze(JsUser1)      doesn't let us to make changes after this
// JsUser1.email="hitesh@microsoft.com"

// console.log(JsUser1)

// JsUser1.greeting=function(){
//     console.log("Hello JS User")
// }

// JsUser1.greeTingTwo=function(){
//     console.log(`Hello Js User, ${this.name}`)
// }
// console.log(JsUser1.greeting());
// console.log(JsUser1.greetingTwo());


console.log("**********************************************************")
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());