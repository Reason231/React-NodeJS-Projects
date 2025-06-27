import React from "react";
import SeriesData from "../api/seriesData.json";
import { CardData } from "./SeriesCard"; // Importing the CardData component
import NetflixCSS from "../components/Netflix.module.css"; // Importing CSS module
import EventMainComponet from "./EventHandlers/EventMain"

function CardList() {
  return (
    <>
      <div className="container">
        <h1 className={NetflixCSS.header}>List of Best Netflix Series</h1>
        {SeriesData.map((data) => (
          <CardData key={data.id} currData={data} />
        ))}
      </div>

      {/* Event Handlers */}
      {/* <EventMainComponet /> */}
      
      {/* Hooks */}

    </>
  );
}

export default CardList;
