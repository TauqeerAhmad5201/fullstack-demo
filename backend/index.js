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
app.post("/login", async (req,res)=>{
    // console.log(req.body.email)
    const {email, password} = req.body
    
    try {
        const check = await User.findOne({email:email})
        
        if(check){
            console.log(check.email, check.password)
            res.json("ok")
            if(password === check.password){
                res.send({message:'Login Successful', user: user})
            }
        }
        else {
            res.json("Wrong")
        }
    } catch (err){
        console.log(err)
    }
})

app.post("/register", async (req,res) => {
    console.log(req.body)
     const {name, email, password} = req.body

    try {
        const check = await User.findOne({email:email})
        
        if(check){
            res.send({message: "User already registered"})
            // res.json('Already exist')
        }
        else {
            res.json("Not exist")
            // await User.insertMany([data])
            await User.create({
                name : name,          //req.body.name
                email : email,
                password: password
            })
        }
        
        res.status('ok')
    } catch (err){
        console.log(err)
    }
})

    // console.log(req.body)

app.get('/', (req,res)=>{
    res.send('Hello')
})
app.listen(9002, () =>{
    console.log("Be started at port 9002")
})
