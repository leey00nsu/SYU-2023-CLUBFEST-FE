import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const navActiveClasses =
    "py-1 text-center text-sm text-white font-PyeongChang text-glow-hard glow-underline";
  const navClasses = "py-1 text-center text-sm text-white font-PyeongChang";
  return (
    <section className="flex justify-between w-full mb-8 px-20">
      <NavLink
        className={(navData) =>
          navData.isActive ? navActiveClasses : navClasses
        }
        to="/clubs"
      >
        동아리 소개
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? navActiveClasses : navClasses
        }
        to="/timetable"
      >
        동아리제 타임테이블
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? navActiveClasses : navClasses
        }
        to="/about"
      >
        About
      </NavLink>
    </section>
  );
};

export default Nav;
