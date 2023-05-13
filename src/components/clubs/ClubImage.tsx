import React from "react";

interface ClubImageProps {
  default: boolean;
  size: string;
  url?: string;
}

const ClubImage = (props: ClubImageProps) => {
  let isDefault = props.default;
  if (!props.url) {
    isDefault = true;
  }
  let classes =
    "w-16 h-16 xs:w-20 xs:h-20 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center shrink-0";

  if (props.size === "md") {
    classes =
      "w-20 h-20 xs:w-24 xs:h-24 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center shrink-0";
  }

  if (props.size === "lg") {
    classes =
      "w-24 h-24 xs:w-28 xs:h-28 bg-clubfest-deepgray rounded-full flex flex-col justify-center items-center shrink-0";
  }

  if (isDefault) {
    return (
      <div className={classes}>
        <p className=" text-white font-PyeongChangPeace xs:text-xs text-[10px] ">
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
  } else {
    return (
      <div className={classes + " bg-transparent"}>
        <img
          loading="lazy"
          className="w-full h-full object-fit"
          src={props.url}
        />
      </div>
    );
  }
};

ClubImage.defaultProps = {
  default: false,
  size: "sm",
};

export default ClubImage;
