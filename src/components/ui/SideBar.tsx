import React from "react";
import { useState, useEffect } from "react";

interface SideBarProps {
  toggleSideBar: () => void;
}

const parentStyles = "absolute w-full h-full overflow-hidden";
const closedBackdropStyles = "transition absolute w-full h-full";
const openedBackdropStyles =
  "transition  absolute w-full h-full backdrop-blur-md";

const closedSideBarStyles =
  "transition ease-in-out absolute -translate-x-36  w-36 h-full left-0 bg-gray-400";

const openedSideBarStyles =
  "transition duration-300 ease-in-out absolute translate-x-0  w-36 h-full left-0 bg-gray-400";

const SideBar = (props: SideBarProps) => {
  const [isSet, setIsSet] = useState(false); //애니메이션 체크
  const [isCollapsed, setIsCollapsed] = useState(true);

  // 처음 실행 시 isCollapsed가 false로 바뀌며 열리는 애니메이션을 실행한다.
  // isSet을 true로 하여 사이드바를 닫을 수 있게 함
  useEffect(() => {
    setIsCollapsed(false);
    setIsSet(true);
  }, []);

  const closeSideBarHandler = () => {
    if (isSet) {
      setIsCollapsed(true);
      setIsSet(false);
      setTimeout(props.toggleSideBar, 500); // 애니메이션이 끝난 후 상위 컴포넌트에서 state 변경
    }
  };
  const backdropStyles = isCollapsed
    ? closedBackdropStyles
    : openedBackdropStyles;
  const sideBarStyles = isCollapsed ? closedSideBarStyles : openedSideBarStyles;
  // if (!props.isCollapsed) {
  //   console.log("in");

  //   backdropStyles = openedBackdropStyles;
  //   sideBarStyles = opendSideBarStyles;
  // }
  return (
    <div className={parentStyles}>
      <div onClick={closeSideBarHandler} className={backdropStyles}></div>
      <div onClick={() => console.log("menu")} className={sideBarStyles}>
        <nav className="flex flex-col w-full">
          <header>
            <p>동아리 홍보전</p>
          </header>
          <div>a</div>
          <div>b</div>
          <div>c</div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
