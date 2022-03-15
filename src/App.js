import logo from "./logo.svg";
import "./App.css";
import "boxicons/css/boxicons.miin.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/home";
import Settime from "./pages/settime";
import Temperature from "./pages/temperaturee";
import Humidity from "./pages/humidity";
import Soilhumidity from "./pages/soilhumidity";
import Graph from "./pages/graph";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/settime" element={<Settime />} />
          <Route path="/temperatue" element={<Temperature />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/soihumidity" element={<Soilhumidity />} />
          <Route path="/graph" element={<Graph />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
