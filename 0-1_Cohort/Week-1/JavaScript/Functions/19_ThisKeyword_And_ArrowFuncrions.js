// const user={
//     username:"hitesh",
//     price:99,
//     welcomeMessage:function(){
//         console.log(`${this.username}, welcome to website`)
//         // console.log(this) 
//     }
// }

// user.welcomeMessage()
// user.username="sam" 
// user.welcomeMessage()
// console.log(this)    // In browser will give window object but here it will give empty object

// function one(){
//     let username="hitesh"
//     console.log(this.username)   //this keyword not working with function but works mainly with objects
// }
// one()

// const result=function(){
//     let username="hitesh"
//     console.log(this)               // various parameters
//     console.log(this.username)   //undefined
// }

// result()

//***************************************** 

//Arrow Functions

const result=()=>{
      let username="hitesh"
      console.log(this)
      console.log(this.username)

}

result()

// Arrow functions syntax: (parameter1,parameter2...)=>{ }

//Explicit return(defining return keyword)
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(3,5))

//Implicit return 
//const addTwo=(num1,num2)=> num1+num2         //if curly braces used tehn we must have defined the return keyword
 const addTwo=(num1,num2)=>(num1+num2)

//  const addTwo=(num1,num2)=> {username:"hietsh"}           -undefined because object can't be returned this way

//const addTwo=(num1,num2)=>({username:"hitesh"})

console.log(addTwo(3,5))


//const myArray=[2,4,6,4,3]
// myArray.forEach(()=>())