const Timetable = () => {
  const day23 = [
    "불기둥",
    "Su-eco",
    "보담",
    "Creator",
    "오아시스",
    "파이널컷",
    "동행길",
    "멋쟁이사자처럼",
    "한편",
    "일곱빛",
    "GDSC",
    "Team MFS",
    "은빛샘",
  ];

  const day24 = [
    "요소",
    "삼육유학생의 집",
    "D.M",
    "Plague",
    "클래시아",
    "ADIOS",
    "러너스하이",
    "미스트",
    "Draftmation",
    "P.P.P",
    "빛감",
    "호버링",
    "맛-따라 멋-따라",
  ];
  return (
    <div className="flex flex-col w-full grow overflow-y-auto ">
      <section className="w-full flex flex-col items-center mb-14">
        <p className=" font-PyeongChang text-white text-sm mb-1">
          5월 23일(화) - 5월 24일(수) 18:00 ~
        </p>
        <p className=" font-PyeongChang text-white text-sm mb-1">
          장소 : 삼육대학교 대강당
        </p>
      </section>
      <section className="w-full flex flex-col items-center mb-14">
        <p className=" font-PyeongChang text-white text-sm mb-2">23일 학술제</p>
        <p className="w-6 mb-2 border-b"></p>
        {day23.map((club, index) => (
          <p key={index} className=" font-PyeongChang text-white text-sm mb-1">
            {club}
          </p>
        ))}
      </section>
      <section className="w-full flex flex-col items-center mb-14">
        <p className=" font-PyeongChang text-white text-sm mb-2">24일 문화제</p>
        <p className="w-6 mb-2 border-b"></p>
        {day24.map((club, index) => (
          <p key={index} className=" font-PyeongChang text-white text-sm mb-1">
            {club}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Timetable;
