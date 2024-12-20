const express = require("express");

const app = express();

app.use("/hello",(req,res)=>{
    res.send("Hello from the dats")
})

app.listen(7777,()=>{
    console.log("server is successfuly listening on port 7777 .......... ")
})
