// Admin Shopping Routes

const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");

const handleImageUpload= async(req,res) =>{
    try{
        const b64=Buffer.from(req.file.buffer).toString("base64")
        const url = "data:" + req.file.mimetype + ";base64," + b64
        const result = await imageUploadUtil(url);

        res.json({
            success:true,
            result,
        })
    }
    catch(error){
        console.log(error)
        res.json({
            success:false,
            message:"Error occurred while uploading image"
        })
    }
}


    // add a new product
    const addProduct=async(req,res)=>{
        try{
        const {image,title,description,category,brand,price,salePrice,totalStock} = req.body

        const newlyCreatedProduct= new Product ({
            image,title,description,category,brand,price,salePrice,totalStock
        })

        await newlyCreatedProduct.save()
        res.status(201).json({
            success:true,
            message:newlyCreatedProduct
        })
        }
        catch(e){
            res.status(500).json({
                success:false,
                message:"Error occurred while adding product"
            })
        }
    }

    // fetch all product
      const fetchAllProducts=async(req,res)=>{
        try{
            const listOfProducts= await Product.find({})
            res.status(200).json({
                success:true,
                data:listOfProducts
            })
        }
        catch(e){
            res.status(500).json({
                success:false,
                message:"Error occurred while fetching product"
            })
        }
    }

    // edit a product
        const editProduct=async(req,res)=>{
        try{
            const {id} = req.params;
            const {image,title,description,category,brand,price,salePrice,totalStock} = req.body  // we will get the updated data from the react

            let findProduct = await Product.findById(id)
            if(!findProduct) return res.status(404).json({
                success:false,
                message:"Product not found"
            })


            // updates the new data or it will be previous data
            findProduct.title = title || findProduct.title  // updates the title from above request
            findProduct.description = description || findProduct.description            
            findProduct.category = category || findProduct.category            
            findProduct.brand = brand || findProduct.brand             
            findProduct.price = price === "" ? 0 : price || findProduct.price              
            findProduct.salePrice = salePrice === "" ? 0 : salePrice || findProduct.salePrice              
            findProduct.totalStock = totalStock === "" ? 0 : totalStock || findProduct.totalStock              
            findProduct.image = image || findProduct.image            

            await findProduct.save()
            res.status(200).json({
                success:true,
                data:findProduct
            })

        }
        catch(e){
            res.status(500).json({
                success:false,
                message:"Error occurred while adding product"
            })
        }
    }

    // delete a product
        const deleteProduct=async(req,res)=>{
        try{
            const {id} = req.params
            const product = await Product.findByIdAndDelete(id)

            if(!product) return res.json({
                success:false,
                message:"Product not found"
            })

            res.status(200).json({
                success:true,
                message:"Product deleted successfully"
            })
        }
        catch(e){
            res.status(500).json({
                success:false,
                message:"Error occurred while adding product"
            })
        }
    }

module.exports = {handleImageUpload,addProduct,fetchAllProducts ,editProduct,deleteProduct}