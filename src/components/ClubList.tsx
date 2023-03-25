import React from "react";
import ClubListBox from "./ClubListBox";

/*  ClubProps : 리스트에 표시되는 동아리 정보
    clubName : 동아리명
    clubSection : 동아리 분과
    clubDesc : 동아리 소개
    clubRank : 동아리 순위
*/
export interface ClubProps {
  clubName: string;
  clubSection: string;
  clubDesc: string;
  clubImg: string;
  clubRank: number;
}

interface ClubListProps {
  list: ClubProps[];
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
  return (
    <article className="w-full justify-center flex flex-wrap gap-6">
      {list.map((list, index) => (
        <ClubListBox key={index} data={list} />
      ))}
      {list.length % 2 == 1 && (
        <div className=" invisible flex flex-col w-48 p-2 bg-white rounded-lg h-36"></div>
      )}
    </article>
  );
};

export default ClubList;
