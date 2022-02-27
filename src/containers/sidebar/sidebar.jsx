import React, { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { GrClose } from "react-icons/gr";
import Logo from "../../assets/logo.png";

const SidebarSM = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between shadow-lg  py-4 px-8">
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <section className=" flex lg:hidden">
            <div
              className=" space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <HiMenuAlt2 className="text-3xl text-[#49586d]" />
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div
                className="absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <GrClose className="text-3xl" />
              </div>
              <ul className=" flex flex-col items-center justify-between min-h-[250px] w-[40%]">
                <li className=" my-3 p-2  border-4 border-[#edeef3] rounded-lg w-full h-[3rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">
                  <a href="/">Home</a>
                </li>
                <li className=" my-3 p-2 border-4 border-[#edeef3] rounded-lg w-full h-[3rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">
                  <a href="#">Porfile</a>
                </li>
                <li className=" my-3 p-2  border-4 border-[#edeef3] rounded-lg w-full h-[3rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">
                  <a href="#"></a>
                </li>
                <li className=" my-3 p-2  border-4 border-[#edeef3] rounded-lg w-full h-[3rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">
                  <a href="#"></a>
                </li>
                <li className=" my-3 p-2  border-4 border-[#edeef3] rounded-lg w-full h-[3rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
        <style>{`
    .hideMenuNav {
      display: none;
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: white;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}</style>
      </div>
    </>
  );
};

const SidebarLG = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const clickItem = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="bg-[#fafafa] w-[100%] p-9 h-screen">
        <div className="w-full h-[3rem] flex px-5 justify-center items-center mb-4">
          <img src={Logo} alt="" className="w-full h-full" />
        </div>
        <ul className="sidebar-items flex flex-col gap-5">
          <li
            onClick={() => clickItem(1)}
            className={
              1 === activeIndex
                ? " p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#97c2ff] hover:bg-[#97c2ff]"
                : "p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] hover:bg-[#97c2ff]"
            }
          >
            <a href="#"> Home</a>
          </li>
          <li
            onClick={() => clickItem(2)}
            className={
              2 === activeIndex
                ? " p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#97c2ff] hover:bg-[#97c2ff]"
                : "p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] hover:bg-[#97c2ff]"
            }
          >
            <a href="#">Profile</a>
          </li>
          <li
            onClick={() => clickItem(3)}
            className={
              3 === activeIndex
                ? " p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#97c2ff] hover:bg-[#97c2ff]"
                : "p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] hover:bg-[#97c2ff]"
            }
          >
            <a href=""></a>
          </li>
          <li
            onClick={() => clickItem(4)}
            className={
              4 === activeIndex
                ? " p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#97c2ff] hover:bg-[#97c2ff]"
                : "p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] hover:bg-[#97c2ff]"
            }
          >
            <a href=""></a>
          </li>
          <li
            onClick={() => clickItem(5)}
            className={
              5 === activeIndex
                ? " p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#97c2ff] hover:bg-[#97c2ff]"
                : "p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] hover:bg-[#97c2ff]"
            }
          >
            <a href=""></a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      <div className="lg:hidden">
        {/*mobile screen*/}
        <SidebarSM />
      </div>

      <div className="hidden lg:flex">
        {/*large screen*/}
        <SidebarLG />
      </div>
    </>
  );
};

export default Sidebar;
