import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  bg: string;
}
const Layout = (props: LayoutProps) => {
  let styles =
    "bg-cover bg-[url('/img/main_background.png')] overflow-hidden relative  flex flex-col max-w-[500px] w-full h-full justify-center items-center ";
  if (props.bg === "landing") {
    styles =
      "bg-cover bg-[url('/img/landing_background.png')] overflow-hidden relative  flex flex-col max-w-[500px] w-full h-full justify-center items-center";
  }
  return <div className={styles}>{props.children}</div>;
};

Layout.defaultProps = {
  bg: "",
};

export default Layout;
