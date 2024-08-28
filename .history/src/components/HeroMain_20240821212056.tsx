import React from 'react'

const HeroMain = () => {
  return (
    <div className=' w-full h-screen pt-[117px] px-2'>
               {/* container for the main big text */}
               <div className='text-[4.79rem] tracking-tight leading-[3.6rem] f1 uppercase'>
                              <p className=' overflow-hidden'>A committed,</p>
                              <p className='pl-[2px]'>creative and </p>
                              <p className='pl-[17%]'>Agile Team</p>
               </div>

               <div className='box1 w-[50%] float-end -top-3 h-[25%] p-[2px] relative overflow-hidden skew-x-1'>

               <div className=' w-full h-full bg-red-300  border-[1px] border-black'></div>
               </div>
    </div> 
  )
}

export default HeroMain