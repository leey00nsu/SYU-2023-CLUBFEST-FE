import React from "react";
import Layout from "../components/ui/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <p className=" animate-pulse text-white font-PyeongChang text-3xl">
        잘못된 접근입니다.
      </p>
    </Layout>
  );
};

export default ErrorPage;
