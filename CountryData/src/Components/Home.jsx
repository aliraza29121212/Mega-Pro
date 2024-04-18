import React, { useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";

function Home() {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SelectMenu />
      </div>
      <CountriesContainer query={query} />
    </>
  );
}

export default Home;
