import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";
import SelectMenu from "./Components/SelectMenu";
import CountriesContainer from "./Components/CountriesContainer";

function App() {
  return (
    <>
      <Header />
      <div className="search-filter-container">
        <Searchbar />
        <SelectMenu />
      </div>
      <CountriesContainer />
    </>
  );
}

export default App;
