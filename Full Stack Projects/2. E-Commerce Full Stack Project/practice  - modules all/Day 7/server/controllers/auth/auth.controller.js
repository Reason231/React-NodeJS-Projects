const User = require("../../models/User")
const bcrypt = require("bcryptjs")
var jwt = require('jsonwebtoken');

const registerUser=async(req,res)=>{
    const {userName,email,password}=req.body
    console.log(email)
    
    try{
        const checkUserEmail=await User.findOne({email})
        if(checkUserEmail) return res.json({
            success:false,
            message:"User already exists with same email"
        })

        const checkUserName=await User.findOne({userName})
        if(checkUserName) return res.json({message:"User already exists with same userName",success:false})

        const hasPassword=await bcrypt.hash(password,12)
        const newUser=new User({
            userName,
            email,
            password:hasPassword
        })
        await newUser.save()
        res.status(200).json({
            message:"Registration successfully",
            success:true
        })
    }

    catch(e){
        console.log(e)
        res.status(500).json({
            message:"Error while registering",
            success:false
        })
    }
}


const loginUser=async(req,res)=>{
    const {email,password}=req.body
    try{
        const checkUser=await User.findOne({email})
        if(!checkUser){
            return res.json({
                success:false,
                message:"User doesn't exist. Please register first"
            })
        }
        const checkPasswordMatch=await bcrypt.compare(password,checkUser.password)
        if(!checkPasswordMatch){
            return res.json({
                success:false,
                message:"Password doesn't match. Please try it again"
            })
        }
        
        const token=jwt.sign({
            id:checkUser._id,role:checkUser.role,email:checkUser
        },
        "CLIENT_SECRET_KEY", {expiresIn:"60mins"}
    )

        res.cookie("token",token,{httpOnly:true,secure:false}).json({
            success:true,
            message:"Logged in successfully",
            user:{
                id:checkUser._id,
                role:checkUser.role,
                email:checkUser.email
            }
        })
    }
    catch(e){
        console.log(e)
        res.status(200).json({
            message:"Error occurred while logging",
            success:false
        })
    }
}

const authMiddleware=async(req,res,next)=>{
    const token=req.cookies.token
    if(!token){
        return res.status(401).json({
            success:false,
            message:"Unauthorized user!!"
        })
    }

    try{
        const decoded=jwt.verify(token,`CLIENT_SECRET_KEY`);
        req.user=decoded;
        next()
    }
    catch(e){
        console.log("Error in auth-middleware")
        res.status(401).json({
            success:false,
            message:"Unauthorized user!!"
        })
    }
}

const logoutUser=async(req,res)=>{
    res.clearCookie("token").json({
        success:false,
        message:"Logged Out successfully"
    })
}


module.exports={registerUser,loginUser,authMiddleware,logoutUser}

