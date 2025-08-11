const mongoose = require("mongoose")

const ProductSchema= new mongoose.Schema({
    image:String,
    title:String,
    description:String,
    category:String,
    brand:String,
    price:Number,
    salePrice:Number,
    totalStock:Number
},{timestamps:true})  // timestamps helps you track when data was created and modified.


module.exports = mongoose.model("Product",ProductSchema)

