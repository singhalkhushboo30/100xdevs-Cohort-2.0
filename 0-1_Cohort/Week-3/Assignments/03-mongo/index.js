const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
//app.use()
// for /admin route go to adminRouter middleware
// for /user route go to userRouter middleware
app.use("/admin", adminRouter)
app.use("/user", userRouter)

//apap.get("/admin/signup",(req,res)=>{})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
