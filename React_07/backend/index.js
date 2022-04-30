const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myFanTalentDB', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => {
    console.log("DB Connected!")
})

const userSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

const fanSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    username: String,
    email: String,
    password: String
})

const Fan = new mongoose.model("Fan", fanSchema)

//Route
app.post("/api/sign-up/fan", (req, res) => {
    const {fname, lname, username, email, password} = req.body
   console.log(req.body)

app.post("/api/sign-up/talent", (req, res) => {
    const {first_name, last_name, username, email, password} = req.body
    User.findOne({ email: email }, (err, user) => {
        if(user){
            res.send({message: "User already exists."})
        } else {
            const user = new User({
                first_name,
                last_name,
                username,
                email,
                password 
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send({ message: "Record Successfully Submitted "})
                }
            })
        }
    })
    
    
})

app.listen(9002, () => {
    console.log("Running at port 9002...")
});