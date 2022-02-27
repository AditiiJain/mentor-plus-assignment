import React, { useState } from "react";

const SlotCard = (prop) => {
  const [click, setClick] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const slotHandler = (index) => {
    setActiveIndex(index);
    setClick(true);
  };
 
  return (
    <>
      {prop.slots ? (
        <div className="flex">
          {prop.data.map((d, index) => (
            <div
              className={
                index === activeIndex
                  ? "flex border-2 border-[#456187] text-center rounded-md mx-2 py-2 px-3 bg-[#279125] text-[#fff] hover:bg-[#279125] hover:text-[#fff] text-[#fff]"
                  : " flex border-2 border-[#456187] text-center rounded-md mx-2 py-2 px-3 hover:bg-[#279125] hover:text-[#fff] text-[#456187]"
              }
              onClick={() => {
                slotHandler(index);
              }}
            >
              {`${d.hour}${d.min === 0 ? "" : `.${d.min}`} PM - ${d.hour + 1}${
                d.min === 0 ? "" : `.${d.min}`
              } PM `}
            </div>
          ))}
        </div>
      ) : (
        <div className=" mx-2 py-2 px-3 border-2 border-[#456187] rounded-md text-[#456187]">
          Select a date to get available slots.
        </div>
      )}
      <div className="px-2">
      <button
        type="button"
   
        className={
          click === true
            ? "bg-[#021a3e] px-5 py-2 text-[#fff] rounded-lg mt-8 cursor-pointer"
            : "bg-[#021a3e] px-5 py-2 text-[#fff] rounded-lg mt-8 cursor-not-allowed opacity-[0.8]"
        }
      >
        Proceed to Pay
      </button>
      </div>
    </>
  );
};

export default SlotCard;
