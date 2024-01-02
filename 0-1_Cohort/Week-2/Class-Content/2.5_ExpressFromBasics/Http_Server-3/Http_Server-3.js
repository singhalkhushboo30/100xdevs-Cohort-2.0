    const express=require("express")
     const app=express()
     const port=3000

     function sum(n){
        let ans
        for(let i=0;i<n;i++){
            ans+=i;
        }
        return ans
     }

     app.get("/",(req,res)=>{
          const n=req.query.n;
          res.send(sum(n))
     })

     app.listen(port)