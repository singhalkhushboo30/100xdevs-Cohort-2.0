// Immediately Invoked Function Expressions(IIFE)

// function fun(){
//     console.log(`DB connected`)
// }

// fun()

//named IIFE
(function fun(){
    console.log(`DB connected`)
})();   //; required to mark the end of function if multiple IIFE defined

// ()()  -first () represents function definiotion and second() represents execution

//unnamed IIFE

((name)=>{
    console.log(`DB connected two ${name}`)
})('hitesh')