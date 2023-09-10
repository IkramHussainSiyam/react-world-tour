import { useState } from "react";
import "./Country.css";

const Country = ({ country, countVisited }) => {
  const countryName = country.name?.common;
  const { population, car, flags, continents } = country;
  const area = parseInt(country.area);

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className={`country ${visited ? "visited" : ""}`}>
      <div className="country__image">
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div className="country__content">
        <h3 className="country__name">{countryName}</h3>
        <div className="country__details">
          <p>
            <span>Country name:</span>
            <span>{countryName}</span>
          </p>
          <p>
            <span>Country code:</span>
            <span>{car.signs}</span>
          </p>
          <p>
            <span>Population:</span>
            <span>{population}</span>
          </p>
          <p>
            <span>Continents:</span>
            <span>{continents}</span>
          </p>
          <p>
            <span>Area:</span>
            <span>
              {area} km<sup>2</sup>
            </span>
          </p>
        </div>
        <button
          onClick={() => {
            handleVisited();
            if (!visited) {
              countVisited(country);
            }
          }}
          className="country__btn"
        >
          {visited ? "Visited ✔" : "Visiting"}
        </button>
      </div>
    </div>
  );
};

export default Country;
