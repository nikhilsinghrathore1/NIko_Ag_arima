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


               {/*this is first  the outer div for the locomotive images */}
               <div className='box1 w-[53%] float-end inline -top-3 h-[32%] p-[2px] relative overflow-hidden -skew-y-2 -skew-x-1'>
               {/* this is the inner div that contains the images */}
               <div className=' w-full h-full   border-[1px] border-black overflow-hidden'>
                              <img className='w-full h-full object-cover scale-125 -rotate-[15deg] object-top' src="https://images.prismic.io/localstudio/65ae835438f662e9dd21247c_matthieu-solo-hd.png?auto=format,compress" alt="not showing" />
               </div>
               </div>

               {/* this is second the outer div for the locomotive images  */}

               <div className='bo w-[45%] float- p-[2px] -top-[30%]   h-[30%] relative overflow-hidden skew-y-12 skew-x-1 '>
               {/* this is the second inner div that contains the images */}

               <div className='w-full h-full bg-red-500'></div>
               </div>

    </div> 
  )
}

export default HeroMain