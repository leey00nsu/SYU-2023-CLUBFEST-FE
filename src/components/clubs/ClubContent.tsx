import React from "react";

interface ClubContentProps {
  title: string;
  contents: string;
}

const ClubContent = (props: ClubContentProps) => {
  const contentsArr = props.contents.split("\n");

  return (
    <section className="flex flex-col items-center w-full mb-8">
      <p className="w-full text-start font-PyeongChang text-clubfest-blue  border-clubfest-blue border-b-2 py-1 mb-2">
        {props.title}
      </p>
      {contentsArr.map((content, index) => (
        <p
          key={index}
          className="w-full text-start font-PyeongChang text-clubfest-gray"
        >
          {content}
        </p>
      ))}
    </section>
  );
};

export default ClubContent;
