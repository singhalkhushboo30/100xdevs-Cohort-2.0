const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// console.log(marvel_heroes[3][1])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);    -gives value of marvel_heroes only does not include new Arr elemnts
 
// const all_heroes= marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// (...)- spread operator allows us to quickly copy all part of an 
// existijng array or object into anotehr array or object 

const all_heros=[...marvel_heros,...dc_heros]
console.log(all_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)   //to get all the elements in a single array depending upto depth
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Hitesh"}))   //returns an empty array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))

