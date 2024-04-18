import { useId } from "react";

import countriesData from "../Components/countriesData.js";
import CountryCard from "../Components/CountryCard.jsx";

function CountriesContainer() {
  const id = useId();
  //   console.log("id", id);
  const array = countriesData.map((country) => {
    return (
      <CountryCard
        name={country.name.common}
        flag={country.flags.svg}
        population={country.population}
        region={country.region}
        capital={country.capital?.[0]}
        key={id}
      />
    );
  });
  console.log(countriesData);
  return <div className="countries-container">{array}</div>;
}

export default CountriesContainer;
