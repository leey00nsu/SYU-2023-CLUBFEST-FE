import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  bg: string;
}
const Layout = (props: LayoutProps) => {
  let styles =
    "overflow-hidden relative bg-indigo-600 flex flex-col max-w-[600px] w-full h-full justify-center items-center ";
  if (props.bg === "main") {
    styles = `bg-cover bg-[url('/img/main_background.png')] overflow-hidden relative bg-indigo-600 flex flex-col max-w-[600px] w-full h-full justify-center items-center `;
  }
  return <div className={styles}>{props.children}</div>;
};

Layout.defaultProps = {
  bg: "",
};

export default Layout;
