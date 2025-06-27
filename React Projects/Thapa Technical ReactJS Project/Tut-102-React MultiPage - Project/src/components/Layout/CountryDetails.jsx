import { useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { useEffect, useState, useTransition } from "react";
import { Loader } from "../UI/Loader";
import "../../App.css";
import { NavLink } from "react-router-dom";

export const CountryDetails = () => {
  const params = useParams();

  // isPending: Tells if we are still fetching.
  // startTransition: Wraps the async fetch to tell React, “this might take time”.
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  const getCountryDetailsData = async () => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      setCountry(res.data[0]);
    });
  };

  console.log(country);
  useEffect(() => {
    getCountryDetailsData();
  }, []);

  if (isPending) return <Loader />;
  return (
    <>
      <section className="card country-details-card container flex justify-center ">
        <div className="w-[90dvw] rounded-3xl bg-[linear-gradient(71deg,_#080509,_#1a171c,_#080509)]">
          {country && (
            <div className="country-image grid grid-two-cols gap-10 items-center p-10">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="flag"
              />
              <div className="country-content">
                <p className="card-title"> {country.name.official} </p>

                <div className="infoContainer">
                  <p>
                    <span className="card-description"> Native Names:</span>
                    {Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="card-description"> Population: </span>
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="card-description"> Region:</span>
                    {country.region}
                  </p>
                  <p>
                    <span className="card-description"> Sub Region:</span>
                    {country.subregion}
                  </p>
                  <p>
                    <span className="card-description"> Capital:</span>
                    {country.capital}
                  </p>

                  <p>
                    <span className="card-description">Top Level Domain:</span>
                    {country.tld[0]}
                  </p>
                  <p>
                    <span className="card-description"> Currencies: </span>
                    {Object.keys(country.currencies)
                      .map((curElem) => country.currencies[curElem].name)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="card-description">Languages: </span>
                    {Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="country-card-backBtn">
            <NavLink to="/country" className="backBtn">
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
