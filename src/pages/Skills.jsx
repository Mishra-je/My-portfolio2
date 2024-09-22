import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { FaHashtag } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { AiOutlineDotNet } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const percentage = 75;
  const percentage1 = 80;
  const percentage2 = 70;
  const percentage3 = 90;
  return (
    <>
      <div className="mt-28 text-center ">
        <h2 className="font-bold text-3xl mb-8">
          <span className="text-green-800">*</span>Skills
        </h2>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

      <div className=" min-w-max max-h-max grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 w-[90%]  ">
        <div className="md:w-[50%] w-[60%] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-tl-full rounded-bl-full scale-110 transition-all duration-300 hover:scale-100  
         ">
          <FaHtml5 className="p-6 md:pr-2 pb-3"  />
          <h2 className="sm:ml-8 sm:text-xs font-semibold md:ml-8 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden ">HTML5</h2>
        </div>

        <div className="md:w-[50%] w-[60%]  border-2  ml-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-tl-full rounded-bl-full scale-110 transition-all duration-300 hover:scale-100 ">
          <FaCss3 className="p-6 md:pr-2 pb-3" />
          <h2 className="ml-14 font-semibold  md:ml-8 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden">CSS3</h2>
        </div>
        
        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2  ml-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-tl-full rounded-bl-full scale-110 transition-all duration-300 hover:scale-100 ">
          <IoLogoJavascript className="p-6 pb-4 " />
          <h2 className=" ml-14 font-semibold md:ml-10 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden mb-4 ">JS</h2>
        </div>
        <div className=" md:w-[50%] w-[60%] border-2  mt-8 md:mt-2  ml-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-tl-full rounded-bl-full  scale-110 transition-all duration-300 hover:scale-100">
          <RiTailwindCssFill className="p-6 md:pr-2 pb-3" />
          <h2 className=" md:ml-2 mb-2 2xl:ml-10 xl:mb-2 xl:text-xs md:font-semibold font-semibold md:text-sm pl-4 md:block hidden ">TAILWIND</h2>
        </div>
       
        <div className="  w-[60%] mt-4 md:mt-4 xl:mt-2 ml-5 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-tl-full rounded-bl-full scale-110 transition-all duration-300 hover:scale-100">
          <FaReact className="h-25 p-6 pb-4 md:pr-10" />
          {/* <h2 className="font-semibold md:text-xl text-sm xl:ml-12 xl:text-sm xl:mb-2  md:block hidden ">React Js</h2> */}
          <h2 className="ml-14 font-semibold md:ml-10 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden ">React Js</h2>
        </div>
        
        <div>
          
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-5 text-center mb-5 ">
        <h2 className="font-bold text-3xl mb-8 underline">
          <span className="text-red-600">*Backend</span> - Skills
        </h2>
      </div>
      <div className=" min-w-max max-h-max grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 w-[90%]  ">
        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2  ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition-all duration-300 hover:scale-110 ">
          <SiDotnet />
          <h2 className=" ml-14 font-semibold  md:ml-2 xl:ml-4 md:text-sm text-2xl md:mb-2 md:block hidden ">Asp.net Core</h2>
        </div>

        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2 ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition-all duration-300 hover:scale-110">
          <FaHashtag className=" py-2" />
          <h2 className="ml-14 font-semibold  md:ml-8 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden ">C#</h2>
        </div>
        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2  ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition-all duration-300 hover:scale-110">
          <BiLogoPostgresql className="py-2 " />
          <h2 className="mml-14 font-semibold  md:ml-2 xl:ml-8 md:text-sm text-2xl md:mb-2 md:block hidden ">Postgresql</h2>
        </div>
        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2  ml-5  shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition-all duration-300 hover:scale-110 ">
          <DiMysql className="py-2" />

          <h2 className="ml-14 font-semibold  md:ml-8 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden ">Mysql</h2>
        </div>
        <div className=" md:w-[50%] w-[60%] border-2 mt-8 md:mt-2 ml-5 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  transition-all duration-300 hover:scale-110 ">
          <AiOutlineDotNet />
          <h2 className="ml-14 font-semibold  md:ml-8 xl:ml-12 md:text-sm text-2xl md:mb-2 md:block hidden ">.Net</h2>
        </div>
      </div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="mt-5 text-center mb-5 ">
        <h2 className="font-bold text-3xl mb-8 underline">
         
          <span className="text-red-600">*Programming </span>Language
        </h2>
      </div>
        <div className=" ml-5 md:flex grid grid-cols-2 space-x-5 mt-[5%] ">
       <div className="flex-col">
       <CircularProgressbar className="w-[30%] ml-4 mb-2" value={percentage} text={`${percentage}%`} />
        <h3 className="font-semibold text-2xl md:ml-6 pl-4 mb-6 ">Python </h3>
       
       </div>
        <div className="flex-col">
        <CircularProgressbar className="w-[30%] mb-2" value={percentage1} text={`${percentage1}%`} />
        <h3 className="font-semibold text-2xl ml-2 md:ml-4 ">Java </h3>
        </div>
        <div className="flex-col" >
        <CircularProgressbar className="w-[30%] mb-2" value={percentage2} text={`${percentage2}%`} />
        <h3 className="font-semibold text-2xl md:ml-6 ml-0 ">C++ </h3>
        </div>

        <div className="flex-col">
        <CircularProgressbar className="w-[30%] mb-2" value={percentage3} text={`${percentage3}%`} />
        <h3 className="font-semibold text-2xl md:ml-8 ml-8 ">C</h3>


        </div>
        
        
       
        </div>
      
    </>
  );
};

export default Skills;
