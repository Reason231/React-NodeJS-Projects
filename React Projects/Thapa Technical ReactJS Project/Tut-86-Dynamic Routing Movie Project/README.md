## Dynamic Detailed Routing
- Today, we are going to get more information of movies, when we click on "WatchNow" button.

## Steps
1. Go to App.jsx file and define the dynamic path in the down movie section.
2. Create "MovieDetails" Component under the "UI" folder.
3. Create "GetMovieDetails" Component under the "api" folder to get the details of movies.


## New Hook
- useParams() returns the parameters from the url.


## Note =>  
- Modify the api Data in GetMovieDetails.jsx file
const response=await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`)