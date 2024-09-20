import React from 'react'

const FifthPage = () => {

        // responsive design of the fifth page is complete for the slightly bigger screen size 
  return (
    <div className='w-full h-[160vh] zs:h-[175vh] xs:h-[135vh] bg-[#1EC5FC] overflow-hidden px-1 pt-10 '>
      {/* this is the first blue area huge text */}
       <div className='text-[4.6rem] zs:text-[4.79rem] xs:text-[5rem] ss:text-[5.45rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[4.08rem] f1 uppercase'>
                              <p className=' overflow-hidden'>We're</p>
                              <p >Providing</p>
                              <p >full- </p>
                              <p className='pl-[7.6rem]'>services </p>
               </div>
      {/* this is the blue area paragraph area  */}
               <div className='w-full gap-10 my-10 f2 text-[22.5px] zs:text-[23px] xs:text-[24px] ss:text-[25.5px] tracking-tight leading-[25px] zs:leading-[26px] xs:leading-[27.5px] ss:leading-[28.5px] flex flex-col items-center justify-center   '>

                          <div className='text-center zs:opacity-80 xs:opacity-90' >
                                  <p>Positioning</p>
                                  <p>Storytelling</p>
                                  <p>Brand Strategy</p>
                                  <p>Brand identity</p>
                          </div>
                          <div className='text-center zs:opacity-80 xs:opacity-90' >
                                  <p>Art Direction</p>
                                  <p>UX & UI Design</p>
                                  <p>Website & E-Commerce</p>
                                  <p>Mobile App</p>
                          </div>
                          <div className='text-center zs:opacity-80 xs:opacity-90' >
                                  <p>Creative Development</p>
                                  <p>Front-end Development</p>
                                  <p>Back-end Development</p>
                                  <p>Headless CMS</p>
                                  <p>Wordpress</p>
                          </div>
               </div>

               <div className='text-[4.6rem] zs:text-[4.79rem] xs:text-[5rem] ss:text-[5.35rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[4.08rem] f1 uppercase'>
                              <p className=' overflow-hidden'>from</p>
                              <p >strategy </p>
                              <p className='pl-[6.7rem]'>to Design</p>
                              <p className='pl-[7.7rem]'>and</p>
                              <p>Development</p>
               </div>
    </div>
  )
}

export default FifthPage