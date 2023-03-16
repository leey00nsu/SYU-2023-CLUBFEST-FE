import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import SortButton from "../components/ui/SortButton";
import InputBar from "../components/ui/InputBar";
import ClubList from "../components/ClubList";
import { useState } from "react";
import SideBar from "../components/ui/SideBar";

const dummyList = [
  {
    clubName: "나테스트",
    clubSection: "분과1",
    clubDesc: "동아리 소개 1",
    clubImg: "/img/",
    clubRank: 1,
  },
  {
    clubName: "가테스트",
    clubSection: "분과2",
    clubDesc: "동아리 소개 2",
    clubImg: "/img/",
    clubRank: 2,
  },
  {
    clubName: "라테스트",
    clubSection: "분과3",
    clubDesc: "동아리 소개 3",
    clubImg: "/img/",
    clubRank: 3,
  },
  {
    clubName: "다테스트",
    clubSection: "분과4",
    clubDesc: "동아리 소개 4",
    clubImg: "/img/",
    clubRank: 4,
  },
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
];

const MainPage = () => {
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
      {!isCollapsed && <SideBar toggleSideBar={toggleSideBarHandler} />}
      <Header toggleSideBar={toggleSideBarHandler} />
      <section className="w-full flex flex-col justify-center items-center p-4">
        <article className="mb-4">
          <p>지원기간 : 00 ~ 00</p>
          <p>2023-2학기에 신설된 신규 동아리는 포함되어 있지 않습니다</p>
        </article>
        <InputBar />
      </section>
      <section className="w-full p-4">
        <div className="flex justify-start">
          <SortButton value="rank" sortBy={sortBy} onClick={sortByRankHandler}>
            동아리 순위 순
          </SortButton>
          <SortButton
            value="alphabet"
            sortBy={sortBy}
            onClick={sortByAscendingHandler}
          >
            가나다 순
          </SortButton>
        </div>
      </section>
      <section className="w-full px-4 grow overflow-y-auto">
        <ClubList sortBy={sortBy} list={dummyList} />
      </section>
    </Layout>
  );
};

export default MainPage;
