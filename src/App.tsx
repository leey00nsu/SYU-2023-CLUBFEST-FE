import LandingPage from "./pages/LandingPage";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-y-auto">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
