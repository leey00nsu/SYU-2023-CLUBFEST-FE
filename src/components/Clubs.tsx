import ClubList from "./ClubList";

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
  return (
    <>
      <section className="w-full flex justify-center mb-8">
        <div className="text-sm text-white font-PyeongChang">문화분과</div>
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <div className="text-sm text-white font-PyeongChang">봉사분과</div>
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <div className="text-sm text-white font-PyeongChang">체육분과</div>
        <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
        <div className="text-sm text-white font-PyeongChang">학술분과</div>
      </section>
      <section className="w-full p-4 grow overflow-y-auto ">
        <ClubList sortBy="alphabet" list={dummyList} />
      </section>
    </>
  );
};

export default Clubs;
