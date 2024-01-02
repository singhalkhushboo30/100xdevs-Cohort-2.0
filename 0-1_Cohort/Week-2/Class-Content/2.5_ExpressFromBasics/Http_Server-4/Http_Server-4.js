const express=require("express")
const port=3000
const app=express()

const users=[{name:"John",
kidneys:[{"healthy:false"}]}]

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=Kidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

