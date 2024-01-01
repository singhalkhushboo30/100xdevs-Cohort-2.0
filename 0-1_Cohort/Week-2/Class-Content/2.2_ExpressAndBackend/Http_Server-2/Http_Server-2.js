const express=require("express")
const app=express()
const port=3000

app.get("/route-api/",(req,res)=>{
    res.json({
        name:"Khushboo",
        age:21

    })
})

app.listen(port,()=>{console.log(`Http-Server 2 is working on port ${port}`)})