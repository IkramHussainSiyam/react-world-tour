import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const countVisited = (country) => {
    console.log(country);
    const visitedCountriesList = [...visitedCountries, country];
    setVisitedCountries(visitedCountriesList);
    console.log(visitedCountriesList);
  };

  return (
    <>
      <div className="card__container container">
        <h1 className="countries__title">
          Total Countries: {countries.length}
        </h1>
        <div className="country__visited">
          <h3>Total visited countries: {visitedCountries.length}</h3>
          <ul>
            {visitedCountries.map((visitedCountry) => (
              <li>
                {visitedCountry.name.common} - {visitedCountry.continents}
              </li>
            ))}
          </ul>
        </div>
        {countries.map((country) => (
          <Country
            key={country.cca3}
            countVisited={countVisited}
            country={country}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
