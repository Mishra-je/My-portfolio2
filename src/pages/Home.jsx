import React from 'react'
// import {picture } from '../Images/whatsapp/Snapchat-1233301844.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
//import { SiVisualbasic } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa6";
import  '../NewImage/IMG-20240511-WA0001.jpg'
import Blogs from './Blogs'
import './Home.css'
import walllpaper2 from './WhatsApp Image 2024-05-15 at 21.51.31_ac4693b8.jpg'
import Skills from './Skills';
import { Footer } from './Footer';
//+import Footer2 from './Footer2';
const Home = () => {
  return (
    <div className='overflow-x-hidden md:px-10  '>
    <img src= {walllpaper2} alt='wallpaper2' className=' shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] mt-[20%] ml-[35%] w-[50%]  rounded-full md:hidden  ' />
      <div className=' flex justify-between mr-12   ' >
        <div className=' ml-10'>
          <div className=' md:mt-40  mt-10 space-y-5 mx-10 md:mr-5 mr-10  '>
            <p className='text-xl font-semibold'>Welcome in my Feed</p>
            <h3 className='text-3xl font-semibold'>Hello,I'm a <span className='text-red-600'>Programmar</span></h3>
            <p className=' mr-[20px]  '>
            We've already covered both the frontend and the backend: now it's time to throw full-stack development into the mix. Full-stack developers work across all three layers: the frontend, an backend, and the database layer.
            Because of the sheer depth of their knowledge across theentire tech stack, .
            </p>
            <div className='sm:flex md:flex-row'>
            <div className=' space-y-5 shadow-[0_10px_20px_rgba(184,_46,_170,_0.7)] p-11 rounded-tr-2xl rounded-bl-2xl mr-5 mt-6 md:mt-2'>
              <h3 className='font-bold text-2xl mt-5'>Available on</h3>
              <div>
                <ul className='flex'>
                  <li>
                    <a href='facebook.com'>
                      {<FaFacebook className='w-7' />}
                    </a>
                  </li>
                  <li>
                    <a href='www.linkedin.com/in/sachin-mishra-0b7772265'>
                    {<FaLinkedin  className='w-7' />}
                    </a>
                  </li>
                  <li>
                    <a href='youtube.com'>
                    {<FaYoutube className='w-7' />}
                    </a>
                  </li>
                  <li>
                    <a href='https://www.instagram.com/itx_urr_sachin_/' target='_blank' rel='noreferrer' >
                    {<FaInstagram className='w-7' />}
                    </a>
                  </li>
                 

                </ul>
              </div>
            </div>
            
            <div className=' space-y-4 bg-black text-white hover:text-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-5 rounded-tr-2xl rounded-bl-2xl md:mt-2 mt-6 mb-4 border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent motion-safe:hover:scale-110'>
              <h3 className='font-bold text-lg mt-7 px-6'>Currently working on</h3>
              <div>

              <ul className='flex'>
                <li>
                  {<FaHtml5 className='w-7' />}
                
                </li>
                <li>
                {<FaCss3 className='w-7' />}
                </li>
                <li>
                {<IoLogoJavascript className='w-7' />}
                </li>
                <li>
                {<RiTailwindCssFill className='w-7' />}
                </li>
              </ul>
              <ul className=' flex mt-4'>
                <li>{<FaReact className='w-7' />}</li>
               
                <li>{<SiDotnet className='w-7' />}</li>
                <li>{<BiLogoPostgresql className='w-7' />}</li>
                <li className='flex'>C{<FaHashtag className='w-7' />}</li>
              </ul>

              </div>
            </div>
          </div>
          </div>

         
        </div>
        {/* <div className='mt-40 ml-[15%] '> */}
        <div className='hidden lg:block ml-48 mt-20  '>
          {/* <img src= {picture} alt='' /> */}
          {/* <img src ={whatsapp}   alt='whatsapp' /> */}
          {/* <img src= {'https://images.unsplash.com/photo-1715109862442-0048f453915e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D'} alt='whatsapp' className='w-[90%]  h-[450px] rounded-tr-3xl rounded-bl-3xl ' /> */}
          {/* <img src={walllpaper} alt='wallpaper' className='w-[90%] rounded-xl h-[550px] '  /> */}
          <img src= {walllpaper2} alt='wallpaper2' className='w-[90%] rounded-xl h-[550px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] '  />
        </div>
       


      </div> 
      <hr className='font-bold text-3xl text-black mt-10 mb-4 ' />
      <div className='ml-8 md:mr-5 mr-10  '>
        <Blogs/>
      </div>
      <hr className='font-bold text-3xl text-black mt-10 mb-4 ' />
      <div className='ml-8 md:mr-5 mr-10  '>
        <Skills/>
      </div>
      <hr className='font-bold text-3xl text-black mt-10 mb-4 ' />
      <div className='ml-8 md:mr-5 mr-10  '>
      <Footer/>
      </div>

       


    
    </div>
  
  )
}

export default Home