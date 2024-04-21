import { useEffect, useId, useState } from "react";

// import countriesData from "../Components/countriesData.js";
import CountryCard from "../Components/CountryCard.jsx";

function CountriesContainer({ query,select }) {
  const id = useId();
  const [countriesData, setCoutriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCoutriesData(data);
      });
  }, []);

  return (
    <>
      <div className="contries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
          )
          .map((country, i) => {
            return (
              <CountryCard
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                key={country.name.common}
                data={country}
              />
            );
          })}
      </div>
    </>
  );
  return <div className="countries-container">{array}</div>;
}

export default CountriesContainer;
