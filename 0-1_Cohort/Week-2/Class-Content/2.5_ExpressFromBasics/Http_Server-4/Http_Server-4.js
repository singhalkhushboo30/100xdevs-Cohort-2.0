const express=require("express")
const app=express()
const port=3000

const user=[{name:"John",
kidneys:[{healthy:false}]}]

app.get("/",function(req,res){

})

app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length
    let numberOfHealthyKidneys=0
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys=numberOfHealthyKidneys+1;

        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys
    res.json({
        numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys
    })
})
app.use(express.json())

//middlewares
app.post("/",function(req,res){
    // console.log(req.body)     undefined (use middlewares)
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({mess:"Done"})
})

app.listen(port)