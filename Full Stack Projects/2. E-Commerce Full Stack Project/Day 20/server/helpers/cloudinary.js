const cloudinary = require("cloudinary").v2
const multer=require("multer")

cloudinary.config({
    cloud_name:"dslcsrhit",
    api_key:"613931827146359",
    api_secret:"y9V-pEIS-UjU5eRpGrPfJuP31Ck"
})

const storage=new multer.memoryStorage()

async function imageUploadUtil(file) {
        const result= await cloudinary.uploader.upload(file,{
            resource_type:"auto"
        })

        return result;
}

const upload = multer({storage})
module.exports = {upload,imageUploadUtil}

