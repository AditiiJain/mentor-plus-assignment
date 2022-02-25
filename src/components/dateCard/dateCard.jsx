import React, { useState } from "react";
import SlotCard from "../slotCard/slotCard";

const DateCard = (prop) => {
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
  let now = new Date(prop.data.date.substr(0, 10));

  const [slot,setSlot] = useState([])


  const clickHandler = (prop) =>{
      console.log(prop)
      setSlot(prop)
    //   <SlotCard data={prop}/>
     }
  return (
    <>
      <div
        className="w-[4rem] flex flex-col border-2 border-[#456187]"
        onClick={() => {
            // console.log(prop)
            clickHandler(prop)
        }}
      >
        <p>{days[now.getDay()]}</p>
        <p>{now.getDate()}</p>
        <p>{months[now.getMonth()]}</p>
      </div>
    </>
  );
};

export default DateCard;
