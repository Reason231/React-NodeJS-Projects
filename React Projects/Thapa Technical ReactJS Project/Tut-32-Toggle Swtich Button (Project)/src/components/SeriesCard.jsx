import React from "react";
import NetflixCSS from "../components/Netflix.module.css"; // Importing CSS module


export function CardData(props) {
  const { name, id, description, cast, genre, watch_url, img_url, rating } =
    props.currData;

  return (
    <div style={{ border: "1px solid black", padding: "1rem", marginBottom: "1rem" }}>
      <h1>Name: {name}</h1>
      <img
        src={img_url}
        alt={name}
        style={{ height: "150px", width: "auto", marginBottom: "10px" }}
      />
      <p>Id: {id}</p>
      <p>
        Rating:
        <span
          className={`${NetflixCSS.normalClass} ${
            rating >= 8.5 ? NetflixCSS.high_rating : NetflixCSS["low-rating"]
          }`}
        >
          {rating}
        </span>
      </p>
      <p class="bg-cyan-400">Description: {description}</p>
      <p>Cast: {cast.join(", ")}</p>
      <p>Genre: {genre.join(", ")}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer">
        <button>Watch Now</button>
      </a>


    </div>
  );
}
