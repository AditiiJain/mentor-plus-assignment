import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import DateCard from "../../components/dateCard/dateCard";

const MainSM = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="py-5 px-[2rem]">
          <h1 className="text-xl font-bold my-5">
            <span
              className="underline underline-offset-4"
              style={{ textDecorationColor: "red" }}
            >
              Book
            </span>{" "}
            Demo Session Slot
          </h1>
          <h3 className="text-[#1b1b1b] text-lg mb-3 font-semibold">
            Select Date
          </h3>
          <DateCard />
        </div>
      </div>
    </>
  );
};
const MainLG = () => {
  return (
    <>
      <div className="w-[100%]" >
        <div className="w-full h-[4rem] border-b-[2px] border-[#edeef3]"> </div>
        <div className="py-5 px-[5rem]">
          <FiArrowLeft />
          <h1 className="text-xl font-bold my-5">
            <span
              className="underline underline-offset-4"
              style={{ textDecorationColor: "red" }}
            >
              Book
            </span>{" "}
            Demo Session Slot
          </h1>
          <h3 className="text-[#1b1b1b] text-lg mb-3 font-semibold">
            Select Date
          </h3>
          <DateCard />
    
        </div>
      </div>
    </>
  );
};

const Main = () => {
  return (
    <>
      <div className="lg:hidden">
        {/*mobile screen*/}
        <MainSM />
      </div>

      <div className="hidden lg:flex lg:w-[80%] lg:h-screen">
        {/*large screen*/}
        <MainLG />
      </div>
    </>
  );
};

export default Main;
