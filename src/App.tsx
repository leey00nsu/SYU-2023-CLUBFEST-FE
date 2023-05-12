import { useState, useEffect, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import ClubDetailPage from "./pages/ClubDetailPage";
import LoadingSpinner from "./components/ui/LoadingSpinner";

// const LandingPage = lazy(() => import("./pages/LandingPage"));
import LandingPage from "./pages/LandingPage";
import { motion } from "framer-motion";

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [bgColor, setBgColor] = useState("#000000");
  const handleResize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    // signature
    console.log(
      `%c
    ___       _______   _______       ___    ___ ________  ________  ________   ________  ___  ___     
   |\\  \\     |\\  ___ \\ |\\  ___ \\     |\\  \\  /  /|\\   __  \\|\\   __  \\|\\   ___  \\|\\   ____\\|\\  \\|\\  \\    
   \\ \\  \\    \\ \\   __/|\\ \\   __/|    \\ \\  \\/  / | \\  \\|\\  \\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\___|\\ \\  \\\\\\  \\   
    \\ \\  \\    \\ \\  \\_|/_\\ \\  \\_|/__   \\ \\    / / \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\_____  \\ \\  \\\\\\  \\  
     \\ \\  \\____\\ \\  \\_|\\ \\ \\  \\_|\\ \\   \\/  /  /   \\ \\  \\\\\\  \\ \\  \\\\\\  \\ \\  \\\\ \\  \\|____|\\  \\ \\  \\\\\\  \\ 
      \\ \\_______\\ \\_______\\ \\_______\\__/  / /      \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\____\\_\\  \\ \\_______\\
       \\|_______|\\|_______|\\|_______|\\___/ /        \\|_______|\\|_______|\\|__| \\|__|\\_________\\|_______|
                                    \\|___|/                                       \\|_________|         
                                                                                                       
                                                                                                       `,
      "color:green"
    );
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (innerWidth > 1200) {
      setBgColor("#0a1240");
    } else {
      setBgColor("#000000");
    }
  }, [innerWidth]);

  let styles = "w-screen flex justify-center overflow-y-auto";

  if (innerWidth > 1200) {
    styles = "w-screen flex justify-evenly overflow-y-auto";
  }

  return (
    <motion.div
      key={bgColor}
      initial={{ backgroundColor: innerWidth > 1200 ? "#ffffff" : "#0a1240" }}
      animate={{ backgroundColor: innerWidth > 1200 ? "#0a1240" : "#ffffff" }}
      transition={{
        duration: 0.2,
      }}
    >
      <div id="app" className={styles}>
        {innerWidth > 1200 && (
          <motion.div
            className=" flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              className="w-[600px] object-scale-down"
              src="/assets/img/promo.png"
            />
          </motion.div>
        )}
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
    </motion.div>
  );
}

export default App;
