## Day 21 => Review Functionality

## VVI Note of Bug Fix
- Go to backend => controllers => admin => "auth-controller.js"
- Add the user in the cookie => 
 // Cookie Day 22 Updated One
        const token=jwt.sign({
            id:checkUser._id,role:checkUser.role,email:checkUser.email,userName:checkUser.userName
        },`CLIENT_SECRET_KEY`,{expiresIn:"60mins"})

## Backend Part
- Go to "models" folder and create "Review.js" file
- Go to "controllers" => "shop" and create "product-review-controller.js" file.
- Go to "routes" => "shop" and create "review-routes.js" file
- Go to "server.js" and import the routes.
- Tut video => 13:09:49 - 13:24:40

## Frontend Part
- Go to "store" => "shop" and create "review-slice" folder.
- Go to "store.js" to import the slice.
- Go to "components" => "common" folder and create "star-rating.jsx"
- Go to "components" => "shopping-view" and "product-details.jsx" file.
- Tut video => 13:24:40 - 13:53

## Average Review Part
- Go to "components" => "shopping-view" and "product-details.jsx" file.
- Tut video => 13:53:30 - 13:54:40





