import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/FSDemoDB", {
    useNewUrlParser : true, 
    useUnifiedTopology : true
})

// schema 
const userSchema = mongoose.Schema({

    name: String,
    email: String,
    password: String 
})

const User = new mongoose.model('users',userSchema )  // creating model named users using scchema named userSchema

//Routes 
app.post("/login", (req,res)=>{
    res.send("My API")
})

app.post("/register", (req,res) => {
    res.send("My API Register")
})

app.listen(9002, () =>{
    console.log("Be started at port 9002")
})
