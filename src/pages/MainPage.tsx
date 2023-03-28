import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import SortButton from "../components/ui/SortButton";
import InputBar from "../components/ui/InputBar";
import ClubList from "../components/ClubList";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Clubs from "../components/Clubs";

interface MainPageProps {
  menu: string;
}

const MainPage = (props: MainPageProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [sortBy, setSortBy] = useState("rank");
  const sortByRankHandler = () => {
    setSortBy("rank");
  };
  const sortByAscendingHandler = () => {
    setSortBy("alphabet");
  };
  const toggleSideBarHandler = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Layout>
      <Header />
      <section className="w-full flex justify-between mb-8">
        <div className="w-2/6 text-center text-sm text-white font-PyeongChang">
          동아리 소개
        </div>
        <div className="w-2/6 text-center text-sm text-white font-PyeongChang">
          동아리제 타임테이블
        </div>
        <div className="w-2/6 text-center text-sm text-white font-PyeongChang">
          About
        </div>
      </section>
      {props.menu === "clubs" && <Clubs />}
    </Layout>
  );
};

export default MainPage;
