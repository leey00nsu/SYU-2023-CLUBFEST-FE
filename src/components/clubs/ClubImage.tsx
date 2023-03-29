import React from "react";

interface ClubImageProps {
  default: boolean;
  size: string;
}

const ClubImage = (props: ClubImageProps) => {
  let classes =
    "w-16 h-16 xs:w-20 xs:h-20 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center";

  if (props.size === "md") {
    classes =
      "w-20 h-20 xs:w-24 xs:h-24 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center";
  }

  if (props.size === "lg") {
    classes =
      "w-24 h-24 xs:w-28 xs:h-28 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center";
  }
  return (
    <div className={classes}>
      <p className=" text-white font-PyeongChangPeace xs:text-xs text-[10px]">
        2023-1
      </p>
      <p className=" text-white font-PyeongChangPeace xs:text-xs text-[10px]">
        삼육대학교
      </p>
      <p className=" text-white font-PyeongChangPeace xs:text-xs text-[10px]">
        동아리제
      </p>
    </div>
  );
};

ClubImage.defaultProps = {
  default: true,
  size: "sm",
};

export default ClubImage;
