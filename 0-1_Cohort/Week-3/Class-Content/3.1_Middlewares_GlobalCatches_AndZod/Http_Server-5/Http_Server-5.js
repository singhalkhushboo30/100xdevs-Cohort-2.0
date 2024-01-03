//If this is an array of number with atleast 1 input,return true else return false
//Zod- independent library help us to create schema and validate input

const zod=require("zod")

function validateInput(obj){
    //if(typeof arr=="object" && arr.length>=1 && typeof arr[0]=="number" && arr.every((item) => typeof item=="number")){}
   // const schema=zod.array(zod.number())
   const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
   })
    const response=schema.safeParse(arr)
    console.log(response)

}

// validateInput([1,2,3])
//validateInput({email:"abc@google.com",password:"326443584"})

// {
//     email=> string=>should look like email
//     password => should have 8 letters
// }

// const schema=zod.object({
//     email:zod.string().email(),
//     password:zod.string().min(8)
// })


app.post("/login",function(req,res){
    const response=validateInput(req.body)
      if(!response.success){
        res.json({msg:"Your input is invalid"})
      }return
    }
    //if success return success message
)
