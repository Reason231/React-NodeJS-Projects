## Day 20 => Out of Stock Functionality in the Shopping Products
- In this part, we are going to show "Out of stock Products" and the user can't do "add to cart" if the stocks are finished.
- Our logic is that, after the payment is successful, it reduces the quantity of products in the admin and shop.
- Go to the "order-controller.js" of "shop".
- Go to the "product-tile.jsx" of "shopping-view" to update the UI and block the  button
- Go to the "product-details.jsx" of "shopping-view" to update the UI and block the button
- Tut video => 12:19:27 - 12:30

## Edge Case
- If the user is continuously adding the product to the cart, then if the product goes "out of stock" then we will have to stop the user from adding.
- Note => The logic for all the files is same

- # Fixed in the all the productList Page
- Go to the "product-tile.jsx" to pass the "totalStock" props
- Go to the "listing.jsx" of "shopping-view" folder

- # Fixed in the productDetails section
- Go to the "product-details.jsx" of "shopping-view"

- # Fixed in the cart
- Go to the "cart-items-content.jsx" under the "shopping-view" folder
- [!Alt](./client/public/0.png)

- Tut video => 12:30:36 - 12:44




