import React from "react";
import Layout from "../components/ui/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <img className="w-12 moving-element" src="/assets/img/among_us_red.png" />
      <p className=" animate-pulse text-white font-PyeongChang text-3xl">
        잘못된 접근입니다.
      </p>
    </Layout>
  );
};

export default ErrorPage;
