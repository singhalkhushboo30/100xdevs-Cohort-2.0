function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        console.log(username)
    }
   //  console.log(website)   - not accessible


    two()
}
one()

if(true){
    const user_name="hitesh"
    if(user_name==="hitesh"){
        const website="youtube"
        console.log(`${user_name} ${website}`)
    }
   // console.log(website)
}
//console.log(user_name)

//********************************************************* 

addOne(5)                   //JavaScript Hoisting
console.log(addOne(5))

function addOne(value){
    return value+1;
}
// addOne(5)
// console.log(addOne(5))


//addTwo(5)                 -error because we have not only declared it here  and but also have holded it in a variable
const addTwo=function addOne(num){     //expression
    return num + 2;
}

addTwo(5)
console.log(addTwo(5))