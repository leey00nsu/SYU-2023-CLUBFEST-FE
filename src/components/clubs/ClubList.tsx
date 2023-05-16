import React from "react";
import ClubListBox from "./ClubListBox";
import { clubListTypes } from "../../assets/clubList";

interface ClubListProps {
  activeDivision: string;
  list: clubListTypes[];
  sortBy: string;
}

const ClubList = (props: ClubListProps) => {
  let list = props.list;

  // 동아리 순위 순으로 정렬
  if (props.sortBy === "rank") {
    list.sort((a, b) => {
      if (a.clubRank > b.clubRank) return 1;
      if (a.clubRank < b.clubRank) return -1;
      return 0;
    });
  }
  // 동아리 이름 순으로 정렬
  else if (props.sortBy === "alphabet") {
    list.sort((a, b) => {
      if (a.clubName > b.clubName) return 1;
      if (a.clubName < b.clubName) return -1;
      return 0;
    });
  }

  list = list.filter((club) => club.clubSection === props.activeDivision);

  return (
    <article className="w-full justify-center flex flex-wrap gap-6">
      {list.map((list, index) => (
        <ClubListBox key={list.clubName} data={list} />
      ))}
      {/* 리스트의 마지막이 홀수이면 가상의 박스를 하나 추가하여 열을 맞춥니다. */}
      {list.length % 2 == 1 && (
        <div className=" invisible flex flex-col w-5/12 p-2 bg-white rounded-lg h-40"></div>
      )}
    </article>
  );
};

export default ClubList;
