import React, { useState, useEffect } from "react";
import axios from "axios";
import SlotCard from "../slotCard/slotCard";

const baseURL =
  "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json";

const DateCard = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [slot, setSlot] = useState([]);
  useEffect(() => {
    const requestData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };
    requestData();
  }, []);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const clickHandler = (d, index) => {
    setCheck(true);
    setSlot(d.available);
    setActiveIndex(index);
  };
  return (
    <>
      <div className="flex ">
        {data.map((d, index) => {
          let now = new Date(d.date.substr(0, 10));
          return (
            <>
              <div
                className={
                  activeIndex === index
                    ? "w-[3.5rem] flex flex-col border-2 border-[#456187] text-center rounded-md mx-2 py-2 px-1 bg-[#279125] text-[#fff] hover:bg-[#279125] hover:text-[#fff]"
                    : "w-[3.5rem] flex flex-col border-2 border-[#456187] text-center rounded-md mx-2 py-2 px-1 hover:bg-[#279125] hover:text-[#fff]"
                }
                onClick={() => {
                  clickHandler(d, index);
                }}
              >
                <p className="text-sm font-normal">{days[now.getDay()]}</p>
                <p className="text-lg font-semibold">{now.getDate()}</p>
                <p className="text-sm font-normal">{months[now.getMonth()]}</p>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="text-[#1b1b1b] text-lg mt-8 font-semibold mb-3">
        Select Slot
      </h1>
      <SlotCard data={slot} slots={check} />
    </>
  );
};

export default DateCard;
