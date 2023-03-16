const express = require("express");
const app = express();
const dotEnv = require("dotenv")
const cors = require("cors")

dotEnv.config();

const PORT = process.env.PORT || 3001

//request payload middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors());

app.get("/",(req,res,next)=>{
    res.send("Hello from api")
})

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})

app.use((err,req,res,next)=>{
    console.log(`Somthing went wrong ${err}`)
    res.status(500);
    res.send({
        status: 500,
        message: err.message,
        body : {}
    })
})
