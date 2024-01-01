/* 

Stack - Primitive(copy of Original Value) 

Heap - Non-Primitive(reference of original value)

let myYoutubeName= "mahi"
let anotherName=myYoutubeName
anotherName="isha"

console.log(anotherName)    //isha
console.log(myYoutubeName)  // mahi

let userOne ={
    email:"user@google.com"
    upi="user@ybl"
}
let userTwo=userOne

userTwo.email="hitesh@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)


     ____________________                   ________________________________
     |  userTwo          |  ----------\     |                               |                                
     |  userOne          |  ----------/     |    {email: user@google.com,   |
     | myYoutubeName     |                  |     upi:upi@ybl}              |
     | anotherName       |                  |                               |
     |  myYoutubeName    |                  |                               |
     |___________________|                  |_______________________________|
           Stack                                 Heap

 */