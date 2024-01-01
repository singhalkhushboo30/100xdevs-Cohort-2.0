// singleton object
const tinder_User=new Object()

//Non-singleton Object
const tinderUser={}
console.log(tinderUser)
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser)

// Nesting in objects
const regularUser={
    email:"abc@google.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }

}

//Accessing the nested  objects
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname)

console.log(regularUser.fullname.userfullname.firstname)

// console.log(regularUser.fullname?.userfullname.firstname) -used during api call to check whther the value (for fullname ) exdists or not if 
// yes then do this otherwise do that

const obj1={ 1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={...obj1,...obj2}    { '1': 'a', '2': 'b','3': 'c', '4': 'd'  }
//const obj3={obj1,obj2}          { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3=Object.assign(obj1,obj2)
const obj3=Object.assign({},obj1,obj2)  //good to add empty object to ensure this will produce desired result to the targeted array when we have multiple source arrays

console.log(obj3);

const user=[
    {id:1,
    email:"a@gmail.com"},
    {id:2,
        email:"b@gmail.com"
    },
    {id:3,
    email:"c@gmail.com"}
]

//Accessing object of an array

console.log(user[1]["email"])
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //boolean value