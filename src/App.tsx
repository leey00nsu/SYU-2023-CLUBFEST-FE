import { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import ClubDetailPage from "./pages/ClubDetailPage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
import LandingPage from "./pages/LandingPage";

function App() {
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="app" className="w-screen flex justify-center overflow-y-auto">
      <Suspense fallback={<LoadingSpinner size="lg" full />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/clubs" element={<MainPage menu="clubs" />} />
          <Route path="/clubs/:clubId" element={<ClubDetailPage />} />
          <Route path="/timetable" element={<MainPage menu="timetable" />} />
          <Route path="/about" element={<MainPage menu="about" />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
