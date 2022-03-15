import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Settime from "./pages/settime/SetTime";
import Temperature from "./pages/temperature/Temperature";
import Humidity from "./pages/humidity/Humidity";
import Soilhumidity from "./pages/soilhumidity/SoilHumidity";
import Graph from "./pages/graph/Graph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/settime" element={<Settime />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/soilhumidity" element={<Soilhumidity />} />
          <Route path="/graph" element={<Graph />} />
        </Route>
      </Routes>

      <Home />
    </BrowserRouter>
  );
}

export default App;
