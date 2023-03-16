import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <div className=" relative bg-indigo-600 flex flex-col max-w-[600px] w-full h-full justify-center items-center ">
      {props.children}
    </div>
  );
};

export default Layout;
