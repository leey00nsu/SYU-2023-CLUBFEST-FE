import DivisionButton from "./DivisionButton";
import ClubList from "./ClubList";
import { useState } from "react";
import { dummyList } from "../../assets/dummyList";

const Clubs = () => {
  const [curDivision, setCurDivision] = useState("문화분과");

  // 문화분과,봉사분과,체육분과,학술분과
  const divisions = ["문화분과", "봉사분과", "체육분과", "학술분과"];

  const changeDivisionHandler = (changedDivision: string) => {
    setCurDivision(changedDivision);
  };
  return (
    <>
      <section className="flex justify-center w-full mb-8">
        {divisions.map((division, index) => (
          <>
            <DivisionButton
              key={index}
              division={division}
              activeDivision={curDivision}
              changeDivision={changeDivisionHandler}
            />
            {index !== divisions.length - 1 && (
              <div className="mx-4 text-sm text-white font-PyeongChang">|</div>
            )}
          </>
        ))}
      </section>
      <section className="w-full p-4 overflow-y-auto grow ">
        <ClubList sortBy="alphabet" list={dummyList} />
      </section>
    </>
  );
};

export default Clubs;
