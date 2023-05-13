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

  let styles = "w-screen flex justify-center overflow-y-auto";

  if (innerWidth > 1200) {
    styles = "w-screen flex justify-evenly overflow-y-auto";
  }

  return (
    <motion.div>
      <div id="app" className={styles}>
        <motion.div
          initial={{
            opacity: innerWidth > 1200 ? 0 : 0,
          }}
          animate={{
            opacity: innerWidth > 1200 ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className=" bg-cover z-auto absolute w-screen h-full bg-[url('/assets/img/promobg.png')]"
        />
        {innerWidth > 1200 && (
          <motion.div
            className=" flex justify-center z-10"
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
