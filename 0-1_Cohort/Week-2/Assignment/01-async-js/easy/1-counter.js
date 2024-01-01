//  ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
//  


// function counter(){
//     const date=new Date();
//     const newDate=date.toLocaleString()
//     console.log(newDate)
//     setInterval(counter,1000)
// }

// counter()


function showTime(){
    let date=new Date()
    let newDate=date.toLocaleTimeString()
    console.log(newDate)


}
setInterval(showTime,1000)