import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/ui/Layout";
import EnterButton from "../components/ui/EnterButton";
import "./star.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const enterHandler = () => {
    sessionStorage.setItem("isLanding", "false");
    navigate("/home", { replace: true });
  };

  useEffect(() => {
    const isLanding = sessionStorage.getItem("isLanding");
    if (isLanding == "false") {
      navigate("/home", { replace: true });
    }
  }, []);

  const stars = new Array(12).fill(1);

  return (
    <Layout bg="main">
      <div className="night">
        {stars.map((star, index) => (
          <div key={index} className="shooting_star"></div>
        ))}
      </div>
      <article
        id="landing"
        className="flex flex-col items-center justify-between"
      >
        <p className="mb-2 text-base text-white font-PyeongChang">
          멋쟁이사자처럼 SYU X 동아리연합회 다원
        </p>
        <p className="mb-6 text-4xl text-white text-glow font-PyeongChangBold">
          2023-1 동아리제
        </p>
        <EnterButton onClick={enterHandler}>동아리제 구경하기</EnterButton>
      </article>
    </Layout>
  );
};

export default LandingPage;
