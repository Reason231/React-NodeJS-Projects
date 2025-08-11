const bcrypt=require("bcryptjs")
const User=require("../models/User")

const registerUser=async(req,res) =>{
    console.log("I am here")
    const {userName,email,password}=req.body;

    try{
        const hasPassword=await bcrypt.hash(password,12)
        const newUser = new User({
            userName,
            email,
            password:hasPassword
        })
        newUser.save()
        res.status(200).json({
            success:true,
            message:"Registration successful"
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Some error occurred while registering"
        })
    }
}

module.exports = {registerUser}