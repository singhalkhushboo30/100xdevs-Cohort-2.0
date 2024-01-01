//for-each -The forEach() method of Array instances executes a provided function once for each array element.

const coding=["js","ruby","java","pyhton","cpp"]

//callback function will be used -unnamed

//coding.forEach(function (val){
//    console.log(val)
// })

coding.forEach((element)=>{console.log(element)})

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)    -printMe function reference will be given

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding=[{
    languageName:"javaScript",
    languageFileName:"js"
},
{
    languageName:"java",
    languageFileName:"java"
},{
    languageName:"pyhton",
    languageFileName:"pyhton"
}
]

myCoding.forEach((element)=>{
    console.log(element)
})