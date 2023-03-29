import React from "react";

interface ClubContentProps {
  title: string;
  content: string;
  content2?: string;
}

const ClubContent = (props: ClubContentProps) => {
  return (
    <section className="flex flex-col items-center w-full mb-8">
      <p className="w-full text-start font-PyeongChang text-clubfest-blue  border-clubfest-blue border-b-2 py-1 mb-2">
        {props.title}
      </p>
      <p className="w-full text-start font-PyeongChang text-clubfest-gray">
        {props.content}
      </p>
      <p className="w-full text-start font-PyeongChang text-clubfest-gray">
        {props.content2}
      </p>
    </section>
  );
};

export default ClubContent;
