import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Banner />
    </div>
  );
}

export default App;