import React from "react";
import Logo from "../../assets/logo.png"

const Sidebar =()=>{
    return(<>
    <div className="bg-[#fafafa] w-[25%] p-9 h-screen">
        
         <div className="w-full h-[3rem] flex px-5 justify-center items-center mb-4">
             <img src={Logo} alt="" className="w-full h-full"/>
         </div>
         <div className="sidebar-items flex flex-col gap-5">
             <div className="sidebar-item  p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe] ">Home</div>
             <div className="sidebar-item  p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]">Profile</div>
             <div className="sidebar-item  p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]"></div>
             <div className="sidebar-item  p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]"></div>
             <div className="sidebar-item  p-4  border-2 border-[#edeef3] rounded-lg w-full h-[4rem] text-center text-[#2c4973] font-extrabold bg-[#e8f2fe]"></div>
         </div>
    </div>
    </>)
}

export default Sidebar;