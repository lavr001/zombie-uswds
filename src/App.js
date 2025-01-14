import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Preparedness101 from "./pages/Preparedness101";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/preparedness-101" element={<Preparedness101 />} />
      </Routes>
    </div>
  );
}

export default App;
