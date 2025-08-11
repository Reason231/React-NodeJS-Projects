const {imageUploadUtil} = require("../../helpers/cloudinary");
const Product = require("../../models/Product");


const handleImageUpload = async(req,res) => {
    try{
        const b64=Buffer.from(req.file.buffer).toString("base64")
        const url = "data:" + req.file.mimetype + ";base64," + b64
        const result= await imageUploadUtil(url)

        res.json({
          success:true,
          result
        })
    }
    catch(e) { 
        console.log(e)
        res.json({
            success:false,
            message:"Error occurred while uploading image"
        })
    }
}


const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    } = req.body;

    const newlyCreatedProduct = new Product({
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    });
    await newlyCreatedProduct.save();

    res.status(200).json({
      success: true,
      message: newlyCreatedProduct,
    });
  } catch (e) {
      console.log(e)
      res.status(500).json({
      success: false,
      message: "Error occurred while adding product"
    });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    const listOfProducts = await Product.find({});
    res.status(200).json({
      message: listOfProducts,
      success: true,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching product",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      brand,
      price,
      salePrice,
      totalStock,
    } = req.body;

    let findProduct = await Product.findById(id);
    if (!findProduct)
      return res.status(500).json({
        success: false,
        message: "Product not found",
      });

    findProduct.title = title || findProduct.title;
    findProduct.description = description || findProduct.description;
    findProduct.category = category || findProduct.category;
    findProduct.brand = brand || findProduct.brand;
    findProduct.price = price === "" ? 0 : price || findProduct.price;
    findProduct.salePrice =
      salePrice === "" ? 0 : salePrice || findProduct.salePrice;
    findProduct.totalStock =
      totalStock === "" ? 0 : totalStock || findProduct.totalStock;
    findProduct.image = image || findProduct.image;

    await findProduct.save()

    res.status(200).json({
        success:true,
        message:findProduct
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error occurred while editing product",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product=await Product.findByIdAndDelete(id)

    if(!product) return res.json({
        message:"Product not found",
        success:false
    })

    return res.status(200).json({
        message:"Product deleted successfully",
        success:true
    })

  } catch (e) {
    res.status(500).json({
      success: false,
      message: "Error occurred while editing product",
    });
  }
};


module.exports = {handleImageUpload,addProduct,fetchAllProducts,editProduct,deleteProduct}