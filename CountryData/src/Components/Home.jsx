import React, { useContext, useState } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
// import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext();
 const [isDark] =  useContext(ThemeContext)

  return (
    <>
      <main className={`${isDark ? "dark" : ""} `}>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery} />
          <SelectMenu />
        </div>
        <CountriesContainer query={query} />
      </main>
    </>
  );
}

export default Home;
