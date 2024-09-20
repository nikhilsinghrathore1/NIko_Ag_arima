import React from 'react'

const HeroMain = () => {


// the responsive design of the landing page in complete for the slight bigger screens 
// done for the smallest screen size 
// s20 ultra done

  return (
    <div className=' w-full h-[87.5vh] zs:h-[108vh] xs:h-[86.5vh]  overflow-hidden pt-[110px] zs:pt-[117px] ss:pt-[128px] px-[5px]'>
               {/* container for the main big text */}

               <div className='text-[4.6rem] zs:text-[4.79rem] xs:text-[5rem] ss:text-[5.3rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[3.93rem] f1 uppercase'>
                              <p className=' overflow-hidden'>A committed,</p>
                              <p className='pl-[2px]'>creative and </p>
                              <p className='pl-[17%] xs:pl-[16.7%]'>Agile Team</p>
               </div>


               {/*this is first  the outer div for the locomotive images */}

               <div className='box1 zs:w-[53%] w-[52%] float-end inline -top-3 h-[30%] z-[500] zs:h-[32%] xs:h-[29%] ss:h-[32%] p-[2px] relative overflow-hidden -skew-y-2 -skew-x-1'>
               {/* this is the inner div that contains the images */}
               <div className=' w-full h-full   border-[1px] border-black/30 overflow-hidden'>
                              <img className='w-full h-full object-cover scale-125 -rotate-[15deg] object-top' src="https://images.prismic.io/localstudio/65ae835438f662e9dd21247c_matthieu-solo-hd.png?auto=format,compress" alt="not showing" />
               </div>
               </div>

               {/* this is second the outer div for the locomotive images  */}

               <div className=' w-[46%] float- p-[2px] top-[3%] h-[25%]   zs:h-[27%] xs:h-[24%] ss:h-[25%] relative overflow-hidden skew-y-[8deg] '>
               {/* this is the second inner div that contains the images */}

                              <div className='w-full border-[1px] border-black/30 overflow-hidden h-full'>
                                             <img className='scale-150 object-cover object-top' src="https://images.prismic.io/localstudio/65ae837038f662e9dd21247e_thibaud-solo-hd.png?auto=format,compres" alt="not showing " />
                              </div>




               </div>

               {/* this is the intro paragraph */}
               <div className='w-full h-[50%] z-[1000]  flex items-start justify-center relative -top-[4px] zs:-top-[5px] xs:-top-[5px] ss:-top-[17px]'>
                <div className='f2 text-[22.5px] zs:text-[23.5px] xs:text-[24.5px] ss:text-[25.5px] tracking-tight w-[74%] opacity-90 leading-[24px] zs:leading-[25px] xs:leading-[25.5px] ss:leading-[26.5px]'>
                <p>We are NikoChan and arima.</p>
                <p>two passionate guys born in the early 20's</p>
                <p>We enjoy playing with the codes of digital</p>
                <p>and branding, so we founded our studio in 2024</p>
                <p>to offer a customized approach to our clients.</p>
                </div>
               </div>

    </div> 
  )
}

export default HeroMain