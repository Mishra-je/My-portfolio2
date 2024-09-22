import { Outlet, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

const Layout = () => {
  const [Menu, SetMenu] = useState(false);
  const menuarray = [
    {
      id: 1,
      Name: "Home",
    },
    {
      id: 2,
      Name: "About",
    },
    {
      id: 3,
      Name: "Skills",
    },
    {
      id: 4,
      Name: "Project",
    },
   
  ];
  return (
    <>
      {/* <nav className="flex justify-between  items-center   bg-[#032f3c] text-white w-[100%] fixed shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] z-50 "> */}
      <nav className=" w-full flex justify-between  items-center px-4 bg-[#032f3c] text-white  fixed shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] z-50 overflow-hidden ">
        <div className="">
          <ul className=" py-5 ">
            <li className=" text-white list-nonev ">
              <Link to="/Logo" className="list-none  md:text-5xl sm:text-3xl text-4xl ml-10">
                <span className="logocontainer font-semibold cursor-not-allowed  ">
                  Mishra ji
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <span
          className="w-[50px] mr-10 md:hidden text-white cursor-pointer"
          onClick={() => SetMenu(!Menu)}
        >
          {Menu ? <MdOutlineCancel className="mr-12" /> : <IoMenu/>}
          {/* {Menu ? <IoMenu/>  : <MdOutlineCancel  />} */}
        </span>

        <div className=" hidden md:flex text-white  ">
          <ul className="flex  ">
            <li className="hovereffect ">
              <Link
                to="/"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/Project"
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-blue-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
               Project
              </Link>
            </li>
          
          </ul>
        </div>
      </nav>


      {/* new changes  */}

      {/* <ul
        className={
          !Menu
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link  to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link  to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link  to='education' smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link  to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link  to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-white hover:scale-110'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}


      {/* Ending here */}
    
      {Menu && (
      <div className=" scroll-none  ">
      <ul className="md:hidden absolute pt-[30%] left-[50%] space-y-10 h-full pl-20 w-[70%] bg-[rgb(0,33,71)] text-white  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
          {menuarray.map(({ id, Name }) => (
            <li key={id} className=" hover:scale-105 duration:200 cursor-pointer text-2xl  font-semibold " >{Name}</li>
          ))}
        </ul>
      </div>
      )}
      <hr className="w-[30%]" />
      <hr className=" mt-8 text-gray-700 font-semibold " />
      <Outlet />
    </>
  );
};

export default Layout;
