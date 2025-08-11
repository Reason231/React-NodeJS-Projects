const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const User=require('../../models/User')

// register
const registerUser=async(req,res)=>{
    const {userName,email,password} = req.body  // gets the data from the react.

    try{

        const checkUserEmail = await User.findOne({email})
        if(checkUserEmail) return res.json({success:false,message:"User already exists with the same email"})

        const checkUserName = await User.findOne({userName})
        if(checkUserName) return res.json({success:false,message:"User already exists with the same userName"})

        const hasPassword=await bcrypt.hash(password,12)
        const newUser = new User({
            userName,
            email,
            password:hasPassword  // updates the password in the mongoDB so that it won't be seen by the developers
        })
        await newUser.save()
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

// login
const loginUser=async(req,res)=>{
    const {email,password} = req.body  // gets the data from the react.

    try{
        // If the person hasn't signup yet
        const checkUser = await User.findOne({email})
        if(!checkUser) return res.json({
            success:false,
            message:"User doesn't exists! Please register first"
        })

        // If the person entered wrong password while logging
        const checkPasswordMatch = await bcrypt.compare(password,checkUser.password)
        if(!checkPasswordMatch) return res.json({
            success:false,
            message:"Incorrect Password! Please try again"
        })


        // Cookie
        const token=jwt.sign({
            id:checkUser._id,role:checkUser.role,email:checkUser.email
        },`CLIENT_SECRET_KEY`,{expiresIn:"60mins"})

        res.cookie("token",token,{httpOnly:true,secure:false}).json({
            success:true,
            message:"Logged in successfully",
            user: {
                email:checkUser.email,
                role:checkUser.role,
                id:checkUser._id
            }
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


// logout
const logoutUser = (req,res) => {
    res.clearCookie("token").json({
        success:true,
        message:"Logged out successfully"
    })
}


// auth-middlewares
const authMiddleware = async(req,res,next) =>{
    // token holds the above information like id,role,email in the encrypted form.
    const token = req.cookies.token;
    if(!token) return res.status(401).json({
        success:false,
        message:"Unauthorized user!"
    })

    try{
        // Decrypting the jwt info using the SECRET_KEY
        const decoded = jwt.verify(token,"CLIENT_SECRET_KEY")
        req.user = decoded;
        next()
    }
    catch(e){
        console.log("Error in auth-controller middleware",e)
        res.status(401).json({
        success:false,
        message:"Unauthorized user!"
    })
    }
}


module.exports = {registerUser,loginUser,logoutUser,authMiddleware}