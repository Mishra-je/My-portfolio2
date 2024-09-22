import React from 'react'

const About = () => {
  return (
    <>
     <div className=' mr-30 ml-5 md:mx-16  '>
        <div className=' py-3'>
          <h2 className='font-bold text-3xl mb-8'><span className='text-green-800'>*</span>About</h2>
          <p className='md:mr-10 text-lg font-medium'> <span className='text-red-600 font-semibold text-2xl'>Hello </span> , I'm Sachin Mishra, with a keen eye for MERN stack . With a background in IT , I strive to create impactful and visually stunning Software <br /> solutions that leave a lasting impression.</p>
        </div>
        {/* About div closed */}

        <div className='py-3'>
          <h3 className='font-bold text-3xl mb-4 mt-3'><span className='text-green-800'>*</span>Education & Training </h3>
          <p className='text-lg font-medium'>.10 Passout in 2018</p>
          <p className='text-lg font-medium'>.12 Passout in 2020</p>
          <p className='text-lg font-medium'>*Persuing BCA from IMPACT college ,Patna Affliated by AKU(2021-2024)</p>
        </div>

       <div >
        <h2 className='font-bold text-3xl mb-4 mt-3'><span className='text-green-800'>*</span>
          Experience 
        </h2>
        <p className='text-lg font-medium'>*Currently Working in <span>BPR Network</span>as a Full stack developer.</p>
       </div>

      <div>
        <h2 className='font-bold text-3xl mb-4 mt-3' > <span className='text-green-800'>*</span>Mission Statement </h2>
        <p  className='text-lg font-medium'>.My mission to leverage my skills and creativity to deliver innovative solutions that exceed client expectation and contribute positively to the degital<br/> landscape . I am committed to continious learning and growth ,always seeking new challeges and opportunites to expand my horizons.</p>
      </div>
        
     </div>
     {/* MAIN DIV CLOSE HERE */}
    
    </>
  )
}

export default About