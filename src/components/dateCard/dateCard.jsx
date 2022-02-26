import React, { useState, useEffect } from "react";
import axios from "axios";
import SlotCard from "../slotCard/slotCard";

const baseURL =
  "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json";

const DateCard = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
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
  // console.log(prop,key)
  // let now = new Date(data.date.substr(0, 10));

  const clickHandler = (d,index) => {
    // console.log(d,index);
    setCheck(true)
    // console.log(d.available)
    setSlot(d.available)
    // setSlot(prop);
  };
  return (
    <>
      <div className="flex ">
        {data.map((d, index) => {
          let now = new Date(d.date.substr(0, 10));
          return (
            <>
              <div
                className="w-[4rem] flex flex-col border-2 border-[#456187]"
                onClick={() => {
                  clickHandler(d,index);
                }}
              >
                <p>{days[now.getDay()]}</p>
                <p>{now.getDate()}</p>
                <p>{months[now.getMonth()]}</p>
              </div>
              
            </>
          );
          
        })}
      </div>
      <h1>Select Slot</h1>
      <SlotCard data={slot} slots={check}/>

      {/* <div
        className="w-[4rem] flex flex-col border-2 border-[#456187]"
        onClick={() => {
            // console.log(prop)
            clickHandler(prop)
        }}
      >
        <p>{days[now.getDay()]}</p>
        <p>{now.getDate()}</p>
        <p>{months[now.getMonth()]}</p>
      </div> */}
    </>
  );
};

export default DateCard;
