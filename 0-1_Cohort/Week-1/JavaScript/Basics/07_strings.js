const name="Hitesh"
const repoCount=50


//console.log(name+repoCount+" Value") -not a good way to use

// XString interpolation - easy to inejct variables
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('hites-hc')

console.log(gameName[0])
console.log(gameName.__proto__) //not empty has many functions but on tjis console gives empty object

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))        //character at index 
console.log(gameName.indexOf('t'))    //index of 

const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne=" hitesh "
console.log(newStringOne)

//trim- works on white spaces and line terminators(/n -newline characters)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20choudhary"

//replace
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))

//split- conversion of string to array
console.log(gameName.split('-'))

