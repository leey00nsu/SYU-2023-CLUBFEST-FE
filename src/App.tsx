import { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center overflow-y-auto">
      <Suspense fallback={<LoadingSpinner size="lg" full />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/home" element={<MainPage />} /> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
