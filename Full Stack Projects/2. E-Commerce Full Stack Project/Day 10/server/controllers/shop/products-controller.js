// User Shopping Controllers

const Product = require("../../models/Product")

const getFilteredProducts = async(req,res) => {
    try{

        // Updating the url(link) as the filter option changes (params changing)
        const {category=[],brand=[],sortBy="price-lowtohigh"}=req.query

        let filters = {};

        if(category.length) {
            filters.category = { $in: category.split(",") };
        }
        if(brand.length) {
            filters.brand = { $in: brand.split(",") };
        }

        let sort={}

        switch(sortBy) {
            case "price-lowtohigh":
                sort.price = 1; // Ascending order
                break;

            case "price-hightolow":
                sort.price = -1; // Descending order
                break;
            case "title-atoz":
                sort.title = 1; // A to Z order
                break;
            case "title-ztoa":
                sort.price = -1; // Z to A order
                break;

            default: 
            sort.price = 1; // Default sorting by price low to high
            break;
            
        }

        const products= await Product.find(filters).sort(sort)

        res.status(200).json({
            success:true,
            data:products
        })
    }
    catch(e){
        console.log(e)
        res.status(500).json({
            success:false,
            message:"Some error occurred"
        })
    }
}

module.exports = {getFilteredProducts}