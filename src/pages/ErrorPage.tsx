import React from "react";
import Layout from "../components/ui/Layout";
import among_us from "../assets/img/among_us_red.png";

const ErrorPage = () => {
  return (
    <Layout>
      <img className="w-12 moving-element" src={among_us} />
      <p className=" animate-pulse text-white font-PyeongChang text-3xl">
        잘못된 접근입니다.
      </p>
    </Layout>
  );
};

export default ErrorPage;
