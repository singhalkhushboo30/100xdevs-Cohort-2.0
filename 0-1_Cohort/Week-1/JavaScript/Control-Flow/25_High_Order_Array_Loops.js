//for in loop
// The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), 
//including inherited enumerable properties.

const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programming=["js","ruby","java","python"]
for(const value in programming){
    console.log(`${value} key has value ${programming[value]}`)
}

// Map is not iteratable that's why can't be used with for..in loop 
