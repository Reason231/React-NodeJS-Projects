## Day 7
1. Connecting backend to the "Cloudinary website" to save the images 
- https://console.cloudinary.com/app/c-ce0b1deaa817fbf1c372eed9d1f226/home/dashboard
- cloud_name => dslcsrhit
- API Key => 613931827146359
- API Secret => y9V-pEIS-UjU5eRpGrPfJuP31Ck
- Tut video => 3:40 - 3:57

## Steps of backend
- Create the "helpers" folder under the "server" folder.
- Create the "cloudinary.js" file under the "helpers" folder
- Go to the "controller folder" and create the "admin folder"
- Create the "Product.js" file under the models folder
- Create the "products.controller.js" file.
- Create the "admin" folder under the "routes" folder.
- Go to the server.js file to call the routes.

## Steps of frontend
- Go to the image-upload.jsx file
- Go to the products.jsx file to create the loader until the image is uploaded.

2. Adding the products in the admin product view
- Go to models folder of server folder
- Go to the products-controller.js and product-routes file.
- Create the "admin" folder under the "store" folder of "client" folder.
- Go to the "product.jsx" to render the products which is imported from "store" folder. and implementing the "Add" functionality
- Create the "product-tile.jsx" file under the 'admin-view' of 'component' folder
- Tut video => 3:57 - 5:00

3. Logout functionality
- Go to the "index.js" of "auth-slice" 
- Go to the "header.jsx" of "admin-view" and "shopping-view"    to implement functionality
- Tut video => 5:00 - 5:05
