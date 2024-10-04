const Employee = require("./Route/empRoute")
const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")
const cors = require("cors")


const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/Employee",Employee)

app.listen(process.env.PORT)    

async function db() {
    try {
       const res = await mongoose.connect(process.env.DB)
       const data = await res.default
       console.log(data.STATES.connected);
        
    } catch (error) {
        console.log(error.message);
        
    }
}

db()