import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
