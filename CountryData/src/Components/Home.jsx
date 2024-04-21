import React, {  useState,useEffect, useContext } from "react";
import Searchbar from "./Searchbar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
// import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useWnidowSize } from "../hooks/UseWindowSize";

function Home() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext();
 const [isDark] =  useContext(ThemeContext)

 const [select,setSelect] = useState('')
 console.log("query",query);

//  window
const width = useWnidowSize()

  return (
    <>
      <main className={`${isDark ? "dark" : ""} `}>
        <h2>Window Width: {width}</h2>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountriesContainer query={query}  />
      </main>
    </>
  );
}

export default Home;
