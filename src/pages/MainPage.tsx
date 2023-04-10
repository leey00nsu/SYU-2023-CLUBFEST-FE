import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";

import { useState } from "react";

import Clubs from "../components/clubs/Clubs";
import Timetable from "../components/timetable/Timetable";
import About from "../components/about/About";
import Nav from "../components/ui/Nav";

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

  return (
    <Layout>
      <Header />
      <Nav />
      {props.menu === "clubs" && <Clubs />}
      {props.menu === "timetable" && <Timetable />}
      {props.menu === "about" && <About />}
    </Layout>
  );
};

export default MainPage;
