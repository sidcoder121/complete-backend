//create a server
const express = require("express")
const app = express()

//create notes
const notes = []

//create API 
app.post('/notes',(req,res)=>{
    console.log(res.body)
})

module.exports = app