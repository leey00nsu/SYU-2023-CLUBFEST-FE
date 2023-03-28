import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import SortButton from "../components/ui/SortButton";
import InputBar from "../components/ui/InputBar";
import ClubList from "../components/ClubList";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
  /* sort 기능 구현되었지만 사용 X , alphabet으로 기본 설정됨 */
  const sortByAscendingHandler = () => {
    setSortBy("alphabet");
  };
  const toggleSideBarHandler = () => {
    setIsCollapsed((prev) => !prev);
  };

  const navActiveClasses =
    "py-1 text-center text-sm text-white font-PyeongChang text-glow-hard glow-underline";
  const navClasses = "py-1 text-center text-sm text-white font-PyeongChang";

  return (
    <Layout>
      <Header />
      <section className="flex justify-between w-full mb-8 px-20">
        <NavLink
          className={(navData) =>
            navData.isActive ? navActiveClasses : navClasses
          }
          to="/clubs"
        >
          동아리 소개
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? navActiveClasses : navClasses
          }
          to="/timetable"
        >
          동아리제 타임테이블
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? navActiveClasses : navClasses
          }
          to="/about"
        >
          About
        </NavLink>
      </section>
      {props.menu === "clubs" && <Clubs />}
    </Layout>
  );
};

export default MainPage;
