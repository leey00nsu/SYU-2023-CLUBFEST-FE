import ClubList from "./ClubList";
import { useState } from "react";
import DivisionButton from "./divisionButton";

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
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
  {
    clubName: "마테스트",
    clubSection: "분과5",
    clubDesc: "동아리 소개 5",
    clubImg: "/img/",
    clubRank: 5,
  },
];

const Clubs = () => {
  const [division, setDivision] = useState("문화분과");
  // 문화분과,봉사분과,체육분과,학술분과
  const divisions = ["문화분과", "봉사분과", "체육분과", "학술분과"];

  const changeDivisionHandler = (changedDivision: string) => {
    setDivision(changedDivision);
  };
  return (
    <>
      <section className="flex justify-center w-full mb-8">
        <DivisionButton
          division="문화분과"
          activeDivision={division}
          changeDivision={changeDivisionHandler}
        />
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <DivisionButton
          division="봉사분과"
          activeDivision={division}
          changeDivision={changeDivisionHandler}
        />
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <DivisionButton
          division="체육분과"
          activeDivision={division}
          changeDivision={changeDivisionHandler}
        />
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <DivisionButton
          division="학술분과"
          activeDivision={division}
          changeDivision={changeDivisionHandler}
        />
      </section>
      <section className="w-full p-4 overflow-y-auto grow ">
        <ClubList sortBy="alphabet" list={dummyList} />
      </section>
    </>
  );
};

export default Clubs;
