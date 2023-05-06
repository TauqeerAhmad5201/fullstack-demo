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
    const { name, email, password } = req.body 
    User.findOne({email: email}).exec(function(err, user){
        if(user){
            res.send({message:"User already registered"})
        } else {
            const user = new User({
                name : name, 
                email : email,
                password : password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else{
                    res.send( {message: "Sucessfully registered"} )
                }
            })
        }})    
    // const findUser = async function(email){
    //     try { return await User.findOne({email : email})
    //      }
    //     catch(err) { console.log(err)}
    // }
})

    // console.log(req.body)

app.get('/', (req,res)=>{
    res.send('Hello')
})
app.listen(9002, () =>{
    console.log("Be started at port 9002")
})
