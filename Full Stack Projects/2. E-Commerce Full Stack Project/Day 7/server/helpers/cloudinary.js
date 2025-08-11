const cloudinary = require("cloudinary").v2
const multer=require("multer")

cloudinary.config({
    cloud_name:"dslcsrhit",
    api_key:"613931827146359",
    api_secret:"y9V-pEIS-UjU5eRpGrPfJuP31Ck"
})

// memoryStorage() tells multer to store the uploaded file in memory (as a buffer) instead of saving it on the disk.
const storage=new multer.memoryStorage()

async function imageUploadUtil(file) {
        // The utility to upload files to Cloudinary.
        const result= await cloudinary.uploader.upload(file,{
            resource_type:"auto"
        })

        return result;
}

const upload = multer({storage})
module.exports = {upload,imageUploadUtil}

