const express=require("express")
const app=express()
const port=3000

const users=[{name:"John",
kidneys:[{healthy:false}]}]

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

app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
        res.send("updated successfully")
    }

})

app.get("/files/:filename",function(req,res){
    const name=req.params.filename;
    console.log(name)
    res.json({})
})

//remove all the unhealthy kidneys
app.delete("/",function(req,res){
    // you should return a 411
    //only if atleast one unhealthy kidney is tehre do this,else return 411
   if(isThereAtleastOneUnhealthyKidney()){
    const newKidneys=[]
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })

        }
    }
    users[0].kidneys=newKidneys;
    res.json({mess:"done"})
   }else{
    res.status(411).json({
        msg:"You have no bad kidneys"
    })
   }
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastUnhealthyKidney=false
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
          atleastOneUnhealthyKidney=true
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(port)