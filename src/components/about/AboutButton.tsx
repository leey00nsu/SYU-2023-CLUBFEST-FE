import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface AboutButtonProps {
  children: React.ReactNode;
  url: string;
}

const AboutButton = (props: AboutButtonProps) => {
  return (
    <a
      href={props.url}
      target="_blank"
      className=" w-fit flex justify-center items-center px-4 py-1 xs:text-base text-sm text-clubfest-blue bg-white cursor-pointer font-PyeongChang rounded-2xl"
    >
      {props.children}
      <FiArrowRight className="ml-1" />
    </a>
  );
};

export default AboutButton;
