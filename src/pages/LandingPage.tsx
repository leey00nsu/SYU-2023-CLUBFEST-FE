import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/ui/Layout";
import EnterButton from "../components/ui/EnterButton";

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

  return (
    <Layout>
      <article className="flex flex-col justify-between items-center">
        <p className="mb-10 text-lg text-yellow-400 ">제 38대 동아리 X 멋사</p>
        <p className="text-4xl font-bold text-white mb-14">2023-1 동아리제</p>
        <EnterButton onClick={enterHandler}>입장하기</EnterButton>
      </article>
      <footer className=" absolute bottom-7">삼육대로고</footer>
    </Layout>
  );
};

export default LandingPage;
