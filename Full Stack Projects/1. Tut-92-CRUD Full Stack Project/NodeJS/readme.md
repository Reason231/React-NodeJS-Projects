## To use the form-urlencoded body in the postman
- router.use(express.urlencoded({ extended: true })); // For your postman to be able to read form-urlencoded data.

## To use the form-data body in the postman
- Install "multer" => npm i multer
- const upload=multer()   // For your postman to be able to read form-data
- const upload=multer()   // For your postman to be able to read form-data
- router.use(upload.none());   // For your postman to be able to read form-data 
