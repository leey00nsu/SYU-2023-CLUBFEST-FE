import LandingPage from "./pages/LandingPage";
import { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";

const Landing = lazy(() => import("./pages/LandingPage"));

function App() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-y-auto">
      <Suspense fallback={<></>} />
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
