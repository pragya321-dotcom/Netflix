import { LuMonitorCheck } from "react-icons/lu";
import { GoArrowDown } from "react-icons/go";
import { IoTelescopeSharp } from "react-icons/io5";
import { TbFileSmile } from "react-icons/tb";
// import React from 'react'

function Reason() {
  const reasons = [
    {
      "title": " Enjoy on your TV",
      "para" : " Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      "icon" : <LuMonitorCheck />

    },
     {
      "title": " Download your shows to watch offline",
      "para" : " Save your favourites easily and always have something to watch.",
      "icon" : <GoArrowDown />

    },
    {
      "title": "Watch everywhere",
      "para" : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      "icon" : <IoTelescopeSharp />

    },
    {
      "title": "Create profiles for kids",
      "para" : "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      "icon" : <TbFileSmile />

    },
  ];
  return (
    <div className = "mt-5">
       <div className = "font-bold text-3xl mb-5">
            More reasons to join 
       </div>
       <div className="relative flex gap-8">
        {reasons.map((reason,index) => {
          return(
       <div key = {index} className = " w-[300px] h-[320px] rounded-2xl p-10 bg-gradient-to-b from-blue-950 to-gray-900 relative">
          <div className = "font-bold text-2xl gap-10">
             {reason.title}
          </div>

          <div className = "text-gray-400 py-5 text-[15px]">
            {reason.para}
          </div>
          <div className = "text-6xl right-0 mr-10 absolute opacity-60 bottom-0 mb-5">
            {reason.icon}
          </div>
        </div>
     
       );
        })}
       </div>
     </div>
      
  )
}

export default Reason;