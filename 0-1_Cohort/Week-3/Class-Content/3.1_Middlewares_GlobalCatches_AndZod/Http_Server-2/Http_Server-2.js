// use of Middleware for validation and authentication

const express=require("express")

const app=express()

// we can add multiple callback functions which work as precheck before final function
// next object represents the execution of next function once current function gets executed
// app.get("/health-checkup",function(req,res){
//     console.log("hi, from req1")
//     next()
// },function(req,res,next){     
//     console.log("hi, from req2")
// })

function userMiddleware(req,res,next){
    if(username!="harkirat" && password!="pass"){
        res.status(403).json({
            mess:"Incorrect inputs"
        })
    }
    else{
        next()
    }
}
function kidneyMiddleware(req,res,next){
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"Incorrect inputs"
        })
    }
    else{
        next()
    }
}
app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){
    // do something with kidney here
    res.send("Your kidney is healthy")
})

app.get("/kidney-check",userMiddleware,kidneyMiddleware,function(req,res){
    // do something with kidney here
    res.send("Your heart is healthy")
})

app.get("/heart-check",userMiddleware,function(req,res){
    // do something with kidney here
    res.send("Your heart is healthy")
})

app.listen(3000)

//for post body parameters
// we do it because we do not know the type of data we are expecting(JSON,HTML,TEXT etc) that's why we ensure it is JSON data
//app.use(express.json())

//In case middleware has to be used is every function then we can use middleware this way instead of mentioning it in api
// app.use(userMiddleware)
// app.get("/heart-check",function(req,res){
//     // do something with kidney here
//     res.send("Your heart is healthy")
// })