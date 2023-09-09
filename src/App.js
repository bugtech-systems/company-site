import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Banner from "./components/Banner/Banner";
import Typography from "./pages/Typography/Typography";
import About from "./pages/About/About";
import Tabs from "./pages/Tabs/Tabs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Banner />
      <Typography />
      <About />
      <Tabs />
    </div>
  );
}

export default App;