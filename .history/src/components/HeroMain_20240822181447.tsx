import React from 'react'

const HeroMain = () => {
  return (
    <div className=' w-full h-screen pt-[117px] px-[5px]'>
               {/* container for the main big text */}
               <div className='text-[4.79rem] px-[3px] tracking-tight leading-[3.6rem] f1 uppercase'>
                              <p className=' overflow-hidden'>A committed,</p>
                              <p className='pl-[2px]'>creative and </p>
                              <p className='pl-[17%]'>Agile Team</p>
               </div>


               {/*this is first  the outer div for the locomotive images */}
               <div className='box1 w-[53%] float-end inline -top-3 h-[32%] p-[2px] relative overflow-hidden -skew-y-2 -skew-x-1'>
               {/* this is the inner div that contains the images */}
               <div className=' w-full h-full   border-[1px] border-black/50 overflow-hidden'>
                              <img className='w-full h-full object-cover scale-125 -rotate-[15deg] object-top' src="https://images.prismic.io/localstudio/65ae835438f662e9dd21247c_matthieu-solo-hd.png?auto=format,compress" alt="not showing" />
               </div>
               </div>

               {/* this is second the outer div for the locomotive images  */}
               <div className='bo w-[45%] float- p-[2px] top-[3%]   h-[27%] relative overflow-hidden skew-y-[8deg] '>
               {/* this is the second inner div that contains the images */}

                              <div className='w-full border-[1px] border-black/50 overflow-hidden h-full'>
                                             <img className='scale-150 object-cover object-top' src="https://images.prismic.io/localstudio/65ae837038f662e9dd21247e_thibaud-solo-hd.png?auto=format,compres" alt="not showing " />
                              </div>




               </div>

               {/* this is the intro paragraph */}
               <div className='w-full h-[55%] flex items-start justify-center -mt-20'>
                <div className='f2 text-[23.5px] tracking-tight w-[70%] opacity-90 leading-[26.5px]'>
                <p>We are NikoChan and arima</p>
                <p>two passinate guys born in the early 20's</p>
                <p>We enjoy playing with the codes of digital</p>
                <p>and branding, so we founded our studio in 2024</p>
                <p>to offer customized approach to our clients</p>
                </div>
               </div>

    </div> 
  )
}

export default HeroMain