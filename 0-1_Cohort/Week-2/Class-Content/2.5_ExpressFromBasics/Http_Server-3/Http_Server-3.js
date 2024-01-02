    const express=require("express")
     const app=express()
     const port=3000

     function sum(n){
        let ans=0
        for(let i=1;i<=n;i++){
            ans+=i;
        }
        return ans
     }

     //req- headers,data
     //res- data to be sent
     app.get("/",(req,res)=>{
          const n=req.query.n;
          const ans=sum(n)
          res.send(`${ans}`)
     })

     app.listen(port)