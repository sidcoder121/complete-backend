//create a server
const express = require("express")
const app = express()
app.use(express.json())//middleware

//create notes
const notes = []

//create API 
app.post('/notes',(req,res)=>{
    console.log(req.body)
})

module.exports = app