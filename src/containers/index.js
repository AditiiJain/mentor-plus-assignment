import React from "react";
import Sidebar from "./sidebar/sidebar";
import Main from "./main/main";

const IndexSM = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Main />
      </div>
    </>
  );
};
const IndexLG = () => {
  return (
    <>
      <div className="flex w-[100%]">
        <Sidebar />
        <Main />
      </div>
    </>
  );
};

const Index = () => {
  return (
    <>
      <div className="lg:hidden">
        <IndexSM />
      </div>
      <div className="hidden lg:flex">
        <IndexLG />
      </div>
    </>
  );
};
export default Index;
