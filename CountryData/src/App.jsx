import React from "react";

import Header from "./Components/Header.jsx";
import { Outlet } from "react-router-dom";

import "./App.css";
// import { useState } from "react";
import {ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  // const [isDark, setIsDark] = useState(
  //   JSON.parse(localStorage.getItem("isDarkMode"))
  // );

  return (

      <ThemeProvider>
      <Header  />
      <Outlet />
      </ThemeProvider>
     
  );
};

export default App;
