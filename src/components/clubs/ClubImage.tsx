import React from "react";

interface ClubImageProps {
  default: boolean;
  size: string;
}

const ClubImage = (props: ClubImageProps) => {
  let classes =
    "w-20 h-20 bg-gray-400 rounded-full flex flex-col justify-center items-center";

  if (props.size === "md") {
    classes =
      "w-24 h-24 bg-gray-400 rounded-full flex flex-col justify-center items-center";
  }
  return (
    <div className={classes}>
      <p className=" text-white font-PyeongChangPeace text-xs">2023-1</p>
      <p className=" text-white font-PyeongChangPeace text-xs">삼육대학교</p>
      <p className=" text-white font-PyeongChangPeace text-xs">동아리제</p>
    </div>
  );
};

ClubImage.defaultProps = {
  default: false,
  size: "sm",
};

export default ClubImage;
