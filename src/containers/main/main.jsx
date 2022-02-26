import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import DateCard from "../../components/dateCard/dateCard";
import axios from "axios";
import SlotCard from "../../components/slotCard/slotCard";

// const baseURL =
//   "https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json";

const Main = () => {
  //    const slot = (index)=>{
  //      console.log(index)
  //    }
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const requestData = async () => {
//       const response = await axios.get(baseURL);
//       //   console.log(response.data)
//       setData(response.data);
//     };
//     requestData();
//   }, []);
  return (
    <>
      <div className="w-[80%] h-screen">
        <div className="w-full h-[4rem] border-b-[2px] border-[#edeef3]"> </div>
        <div className="">
          <FiArrowLeft />
          <h1>
            <span>Book</span> Demo Session Slot
          </h1>
          <h3>Select Date</h3>
          <DateCard/>
          {/* <h3>Select Slot</h3> */}
          {/* <SlotCard/> */}
          {/* <div className="flex ">
            {data.map((d, index) => {
              return (
                <>
                  <DateCard data={d}/>

                </>
              );
            })}
          </div>
        </div> */}
        {/* <h3>Select Slot</h3> */}
        {/* */}
        </div>
      </div>
    </>
  );
};

export default Main;
