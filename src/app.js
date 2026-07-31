//create a server
const express = require("express")
const app = express()
app.use(express.json())//middleware

//create notes
const notes = []

//create API 
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created succesfully"
    })

    //to delete nodes
    app.delete('./notes/:index',(req,res)=>{
        const index = req.params.index

        delete notes[index]

        res.status(200).json({
            message:"note eleted successfully"
        })
    })
})

module.exports = app