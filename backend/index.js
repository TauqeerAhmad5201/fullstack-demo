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

app.post("/register", async (req,res) => {
    console.log(req.body)

    try {
        await User.create({
            name : req.body.name,
            email : req.body.email,
            password: req.body.password
        })
        res.status('ok')
    } catch (err){
        console.log(err)
    }
})

app.listen(9002, () =>{
    console.log("Be started at port 9002")
})
