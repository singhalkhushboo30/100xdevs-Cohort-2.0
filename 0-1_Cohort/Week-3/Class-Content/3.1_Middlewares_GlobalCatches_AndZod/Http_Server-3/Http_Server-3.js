//Doing Input Validation
//Middlewares- just another function
//Global Catches- middleware help us in giving user a better error message
//Error-handling middlewares- special type of middleware function in express that has 4 arguements instead of three
// (err,req,res,next) Express recognizes it as an error-handling middleware because of these four arguements


const express=require("express")
const app=express()

app.use(express.json())

//kidneys=[1,2]
//kidneys=12345   //require input validation
app.post("/health-checkup",function(req,res){
    //do something with kidney here
    const kidneys=req.body.kidneys
    const kidneyLength=kidneys.length
    res.send(`Your kidney length is ${kidneyLength}`)

    // if(!kidneys){
    //     res.json({
    //         msg:"wrong inputs"
    //     })
    // }
    // else{
    //     const kidneyLength=kidneys.kidneyLength

    // res.send(`Your kidney length is ${kidneyLength}`)
    // }

    //global catches
    app.use(function(err,req,res,next){
      res.status(500).send("An internal server error occured")
    })
})

app.listen(3000)