import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/Card.css";

export const MovieDetails = () => {
  const movie = useLoaderData();
  console.log(movie);

  const {
    Poster,
    Title,
    Runtime,
    Year,
    Plot,
    BoxOffice,
    Awards,
    imdbRating,
  } = movie;

  // Format runtime (e.g. "192 min" -> "3hr 12min")
  let formattedTime = "N/A";
  if (Runtime && Runtime.includes("min")) {
    const totalMinutes = parseInt(Runtime.replace(" min", ""));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    formattedTime = `${hours}hr ${minutes}min`;
  }

  return (
    <li className="hero-container hero-movie-container text-white">
      <div className="main-container">
        <figure className="movie">
          <div className="movie__hero">
            <img src={Poster} alt={Title} className="movie__img" />
          </div>

          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                {Title} <i className="fas fa-fire"></i>
              </h1>
              <div className="movie__tag movie__tag--2">Year: {Year}</div>
            </div>

            <p className="movie__description">{Plot}</p>
            <br />
            <p className="movie__description">Awards: {Awards}</p>

            <div className="movie__details">
              <p className="movie__detail">
                <span className="icons icons-red">
                  <i className="fas fa-star"></i>
                </span>
                {imdbRating}
              </p>
              <p className="movie__detail">
                <span className="icons icons-grey">
                  <i className="fas fa-clock"></i>
                </span>
                {formattedTime}
              </p>
              <p className="movie__detail">
                <span className="icons icons-yellow">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                {BoxOffice}
              </p>
            </div>

            <div className="mt-4">
              <NavLink
                to="/movie"
                className="bg-red-500"
                style={{ textAlign: "center", fontSize: "1.6rem" }}
              >
                Go Back
              </NavLink>
            </div>
          </div>

          <div className="movie__price">{BoxOffice}</div>
        </figure>
      </div>
    </li>
  );
};
