// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function showTime(){
    let date=new Date()
    let newDate=date.toLocaleTimeString()
    console.log(newDate)
    setTimeout(showTime,1000)


}
showTime()






































































// (Hint: setTimeout)