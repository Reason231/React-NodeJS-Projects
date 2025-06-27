import { useNavigate, useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  // used for navigating to the previous page
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);   // go back to previous page
    // navigate(1)  // go back to next page
  };

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="flex flex-col justify-center items-center">
            <p className="p-a">
              The page you were looking for could not be found
            </p>
            <button onClick={handleGoBack} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              Go Back to previous Page
            </button>

            {/* Direct to  */}
            <NavLink to="/" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
              <button>Go Back To HomePage</button>
            </NavLink>
          </div>
        </div>
      </section>
    );
  }
  console.log(error);

  return <h1> The page you are looking does not exist</h1>;
};
