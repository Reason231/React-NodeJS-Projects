const express=require("express")
const authRouter=require('./routes/auth-routes')
const mongoose=require('mongoose')
const cors=require("cors")
const cookieParser = require("cookie-parser")



mongoose.connect("mongodb+srv://devilineye100:FECsyoEJrx35OBim@cluster0.bfnyj1i.mongodb.net/")
.then(()=>console.log('MongoDB connected'))
.catch((e)=>console.log(e))

const app=express()
const PORT=process.env.PORT || 3000

// REACT CONNECTION RULES
app.use(
    cors({
        origin:"http://localhost:5174",
        methods:[`GET`,'POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials:true
    })
)

app.use(cookieParser())
app.use(express.json())

app.use("/api/auth",authRouter)
app.listen(PORT,()=>{
    console.log("Server is running successfully")
})
