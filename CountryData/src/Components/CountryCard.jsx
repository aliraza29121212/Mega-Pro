import React from "react";
import { Link } from "react-router-dom";
function CountryCard({ name, flag, population, region, capital, key, data }) {
  return (
    <div key={key}>
      <Link className="country-card" to={`/${name}`} state={{ data }}>
        <img src={flag} alt={`${name} ${flag}`} />
        <div className="card-text">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population: </b>
            {population.toLocaleString("en-PK")}
          </p>
          <p>
            <b>Region: </b>
            {region}
          </p>
          <p>
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CountryCard;
