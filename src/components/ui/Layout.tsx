import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  bg: string;
}
const Layout = (props: LayoutProps) => {
  let styles =
    "bg-cover bg-[url('/assets/img/main_background.png')] bg-clubfest-blue overflow-hidden relative h-full flex flex-col max-w-[500px] w-full justify-center items-center ";
  if (props.bg === "landing") {
    styles =
      "bg-center bg-no-repeat bg-cover bg-[url('/assets/img/landing_background.png')] overflow-hidden relative  flex flex-col max-w-[500px] w-full h-full justify-center items-center";
  }
  return <div className={styles}>{props.children}</div>;
};

Layout.defaultProps = {
  bg: "",
};

export default Layout;
