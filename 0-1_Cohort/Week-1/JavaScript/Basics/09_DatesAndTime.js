// Dates

let myDate= new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// console.log(typeof myDate) //object

// let myCreateDate=new Date(2023,0,23)   // months start from 0 in JavaScript
// console.log(myCreateDate.toDateString())

// let myCreateDate=new Date(2023,0,23,3,5)   // months start from 0 in JavaScript
// console.log(myCreateDate.toLocaleString())

// let myCreateDate=new Date("2023-01-14")   // months start from 0 in JavaScript
// console.log(myCreateDate.toLocaleString())

// let myCreateDate=new Date("01-14-2023")   // months start from 0 in JavaScript
// console.log(myCreateDate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));   //ms to s

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth())
console.log(newDate.getDay());

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})






