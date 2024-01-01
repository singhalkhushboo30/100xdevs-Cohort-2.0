// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//You typically use a promise to manage situations where you must wait for the outcome of an operation. For example, 
//uploading files to the server and awaiting the response of an API call, or just asking the user to choose a file from their computer

// In async/await, the async keyword is used to declare an asynchronous function. The await keyword is used to wait for a promise 
// to be resolved before continuing with the execution of the function. The await keyword can only be used inside an async function.

// “Async Await is a syntactic sugar on top of Promises”. It makes the asynchronous code easier to read, write, and maintain asynchronous code. 
//Instead of chaining Promises together, Async Await allows developers to write code that looks like synchronous code.

//Reduces callback hell

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, network call
    //Cryptography task
    // file read/write
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    },1000)
})

promiseOne.then(function(){console.log("Promise consumed")})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Promise 2 consumed")
})

// In resolve function the parameter mainly is object data but it can be in array format also
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"mahi",email:"mahi@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"mahi",password:"mahi123"}
            )
        }
        else{
            reject('ERROR:Soemthing went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user)
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("The promise is either resolved or rejected"))


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"mahi",password:"mahi123"}
            )
        }
        else{
            reject('ERROR:Soemthing went wrong')
        }
    },1000)
})

//Async Await doesn't handle catch implicitly
async function consumePromiseFive(){
    try{const response=await promiseFive
        console.log(response)}
        catch(error){
            console.log(error)
        }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()                       await- because it will take time to convert response to json format
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))
