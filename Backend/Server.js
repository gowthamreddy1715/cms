const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const {errorHandler} = require('./Middleware/errorMiddleware')

const port = process.env.PORT || 5000

const app = express()

mongoose.connect("mongodb+srv://nallapareddygowtham:Fortuner@gowtam.ubami.mongodb.net/cms?retryWrites=true&w=majority&appName=gowtam",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("MongoDB Connected")
}).catch(err=>{
    console.error(err)
})

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/users',require("./Routes/goUsers"))
app.use('/policies',require("./Routes/goPolicy"))
app.use('/claims',require("./Routes/goClaims"))
app.use('/policyholder',require("./Routes/goPolicyholder"))
app.listen(port,()=>{
    console.log(`Server runs on port ${port}`)
})
