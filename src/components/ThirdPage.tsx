import React from 'react'

const ThirdPage = () => {


  // ipad_mini_responsive started somewhat done  
  
  return (
    <div className='w-full h-[90vh] md:h-[70vh] zs:h-[110vh] overflow-hidden  md:xs:h-[93vh] pt-12 md:pt-1 '>


      {/* this is the top heading text  */}

               <div className='text-[4.6rem] md:text-[6.6rem] md:-mt-0 md:leading-[5rem]  zs:text-[4.79rem] xs:text-[5.1rem] md:z-[114]  ss:text-[5.3rem] zm:text-[5.5rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[3.9rem] zm:leading-[4.1rem] f1 uppercase'>
                              <h1 className='md:pl-[38%]'> the balance</h1>
                              <h1 className='pl-16 md:pl-[28%]'> between</h1>
               </div>

               {/* this is the image container section */}
               
               <div className=' w-[96%] px-[3px] -mt-14 zs:-mt-12 md:-mt-20 xs:-mt-[3rem] ss:-mt-[3.3rem] zm:-mt-[3.5rem] box3 h-[57%] skew-y-3 skew-x-3 top-[5px] bg-zinc-100   relative   mx-auto '>
                        <div className='w-full h-full overflow-hidden skew  relative   border-x-[1px] border-b-[1px] border-black/30 '>
                                <img className='w-full h-full object-cover translate-y-[40px]  object-top scale-125 relative z-[117]' src="https://images.prismic.io/localstudio/65ae849838f662e9dd2124a4_full.png?auto=format,compress" alt="not showing" />
                        </div>
               </div>


               {/* this is the last heading text */}

               <div className='text-[4.5rem] zs:text-[4.79rem] md:text-[6.6rem] md:mt-10 md:leading-[5rem] xs:text-[5rem] zm:text-[5.5rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.4rem] zs:leading-[3.6rem] xs:leading-[3.8rem] zm:leading-[4.1rem] f1 uppercase'>
                              <h1 className='pl-5 xs:pl-3'>creativity &</h1>
                              <h1 className='pl-16 md:hidden'>common</h1>
                              <h1 className='md:hidden'>sense.</h1>
                              <h1 className='hidden md:block pl-[20%]'>common sense.</h1>

               </div>

               {/* this is the paragraph  */}

               <div className='f2 w-full text-[22.5px] zs:text-[23.5px]  xs:text-[25px] ss:text-[25.5px] zm:text-[26.5px] md:text-[11.5px] md:leading-[12.5px] z-[200] tracking-tight text-center mt-5 xs:mt-8 relative opacity-85j md:-top-[27.5%] md:left-[30%] xs:opacity-100 leading-[24px] zs:leading-[25.5px] xs:leading-[28px] ss:leading-[29px] zm:leading-[31px]'>
                              <p>Local is the power</p>
                              <p>and efficiency of "home made",</p>
                              <p>a carefully crafted, agile</p>
                              <p>and committed meathod,</p>
                              <p>with just the right amount of</p>
                              <p>creativity and pragmatism.</p>
               </div>
    </div>
  )
}

export default ThirdPage