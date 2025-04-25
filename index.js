const express = require("express")
const app = express()


app.use(express.json())

app.get("/health",(req,res) =>{
    res.status(200).json({message:"hello chrome i am inside you"})
})


app.listen(3000,() => {console.log("server is listening to port 3000")})