const user={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails: function(){
    //    console.log("Got user details from database")
     // console.log(`Username: ${this.username}`)    
    console.log(this)    //{ username:"fngkkthym"....}

    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this) //{}


const promise1=new Promise()
const date=new Date()  //new keyword(constructor function)- constructor function and let us create multiple instances from this

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this//Implicitly defined
}

// const userOne=User("hitesh",12,true)
// const userTwo=User("mahi",11,false)
// console.log(userOne)//userTwo function call value be override the userOne function call

const userOne=new User("hitesh",12,true)
const userTwo=new User("mahi",11,false)
console.log(userOne.constructor) //will give User function
console.log(userTwo)


