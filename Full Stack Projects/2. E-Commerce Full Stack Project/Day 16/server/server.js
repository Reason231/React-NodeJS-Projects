const express=require("express")
const mongoose=require("mongoose")
const cookieParser=require("cookie-parser")
const cors=require("cors")
const authRouter=require('./routes/auth/auth-routes')
const adminProductRouter=require("./routes/admin/products-routes")
const shopProductRouter=require('./routes/shop/products-routes')
const shopCartRouter=require('./routes/shop/cart-routes')
const shopAddressRouter=require('./routes/shop/address-routes')

// Database Connection
mongoose.connect("mongodb+srv://devilineye100:FECsyoEJrx35OBim@cluster0.bfnyj1i.mongodb.net/")
.then(()=>console.log('MongoDB connected'))
.catch((e)=>console.log(e))

const app=express()
const PORT=process.env.PORT || 5000;

// REACT CONNECTION RULES
app.use(
    cors({
        origin:"http://localhost:5173",
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
app.use("/api/admin/products",adminProductRouter)
app.use("/api/shop/products",shopProductRouter)
app.use("/api/shop/cart",shopCartRouter)
app.use("/api/shop/address",shopAddressRouter)

app.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`)
})

