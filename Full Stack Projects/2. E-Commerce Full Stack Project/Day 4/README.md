## Note - Worked in both client and server folder.

## Day 4
1. Implementing the Form in the Register Page and Login Page
- Imported the FormData to the RegisterPage.jsx
- Imported the FormData to the LoginPage.jsx
- Modified the src => common => config => index.js for the "Login"
- Video => 1:37:00 - 1:44:30

2. Creating the backend models, middleware, routes and controllers in the server folder
- Create the models,routes and controllers folder in the server folder 
- Define the User.js file in the "models folder"
- Create the logic for authentication in the "auth.controller.js file"
- Create the routes in the "auth-routes.js" file
- Import the "auth-routes" in the server.js file
- Video => 1:44:40 - 2:00:00


3. Connecting the backend to the fronted to submit the Register Part
- We are not going to use the "services" folder to get all the API.
- We are going to use the redux
- Go to the src => store => auth-slice => index.js to create the AsyncThunk
- Go to the register.jsx file => to call the api onSubmit()
- To see the data in the mongodb Collection => 
https://cloud.mongodb.com/v2/685ec77dc1e878041c605c03#/metrics/replicaSet/685ec802139f874d786e8c28/explorer/sample_mflix/comments/find
- Video => 2:00:00 - 2:09:00


4. Adding the notification(toaster/sooner) after the registration is complete
- npx shadcn@latest add sonner
- Go to main.jsx and add it.
- Go the register.jsx and add it
- Video => 2:09:00 - 2:13:00


5. Login Part
- Go to the auth-controller.js file in the server
- Go to the auth-routes.js to create the route
- Go to the src => store => auth-slice => index.js to create the AsyncThunk
- Go to the login.jsx file => to call the api onSubmit()
- Video => 2:18:00 - 2:38:00


6. Logout Part
- Logic written in auth-controller.js file
- Implementation is still remaining in react and done in day 7(Tut video => 5:00 - 5:05)
- Video => 2:39:00 - 2:40:00


## Note => If we don't use the auth-middleware then try to refresh the page after you login, it will re-sent back to the login page even if you are loggedIn.
7. Auth-Middleware Part
- Go the auth.controller.js file and write the logic.
- Go to the auth-routes.js file to route it.
- Go to the client => store => auth-slice => index.js to create the asyncThunk
- Go to the App.jsx to implement it
- Note => Go to the network tab, and refresh the web-pages after login, it always checks if the user is authenticated or not. Explanation => 2:49:00
- Video => 2:40:00 - 2:50:00
