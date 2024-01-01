function sayMyName(){
    console.log("a")
    console.log("b")
    console.log("c")
    console.log("d")
    console.log("e")
    console.log("f")
}

//sayMyName / -reference
//sayMyName() -function execution

// function addTwoNumbers(number1, number2){       //number1,number2 -parameters defined in function definition
//     console.log(number1+number2)     // console.log only means that something has to be dispalyed on console I
//     //It doesn't mean it also returns something
// }

// addTwoNumbers()   -Nan (output) because not passed the value and have defined the datatype

// const result=addTwoNumbers(3,5)   //3,5 -arguements

// console.log("Result: ",result)   //udefined

function addTwoNumbers(number1, number2){  
    // let result= number1+number2;
    // return result; 

    return number1+number2;
}
const result=addTwoNumbers(3,5)
console.log("Result: ",result)

function loginUserMessage(username){    //function loginUserMessage(username="Sam") - passing default value
    if(username===undefined){      //if(!username){}
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`;

}

// const myresult=loginUserMessage("hitesh")
// console.log(myresult)
// console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())


