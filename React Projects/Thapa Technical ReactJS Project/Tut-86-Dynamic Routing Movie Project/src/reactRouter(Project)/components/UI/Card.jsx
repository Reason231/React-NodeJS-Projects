import "./Card.css"
import { NavLink } from "react-router-dom";

export const Card = ({ currMovie }) => {
    // Destructing the Poster and ImdbId from teh currMovie 
    const { Poster, imdbID } = currMovie;
    return (
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} className="poster" alt={imdbID} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <NavLink to={`/movie/${imdbID}`}>
              <button className="ticket__buy-btn">Watch now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    );
  };
  