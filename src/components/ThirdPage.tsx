import React from 'react'

const ThirdPage = () => {


  //  responsive design for the third page is complete for the slight bigger screen size
  // done for the smallest screen size 
  // s20 ultra done
  // iphone 12pro max 
  
  return (
    <div className='w-full h-[90vh] zs:h-[110vh] xs:h-[93vh] pt-12 overflow-hidden'>


      {/* this is the top heading text  */}

               <div className='text-[4.6rem] zs:text-[4.79rem] xs:text-[5.1rem] ss:text-[5.3rem] zm:text-[5.5rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[3.9rem] zm:leading-[4.1rem] f1 uppercase'>
                              <h1> the balance</h1>
                              <h1 className='pl-16'> between</h1>
               </div>
               
               <div className=' w-[96%] px-[3px] -mt-14 zs:-mt-12 xs:-mt-[3rem] ss:-mt-[3.3rem] zm:-mt-[3.5rem] box3 h-[37%] top-[5px] bg-zinc-100  relative   mx-auto '>
                        <div className='w-full h-full overflow-hidden skew  relative   border-x-[1px] border-b-[1px] border-black '>
                                <img className='w-full h-full object-cover translate-y-[40px]  object-top scale-125 relative z-[117]' src="https://images.prismic.io/localstudio/65ae849838f662e9dd2124a4_full.png?auto=format,compress" alt="not showing" />
                        </div>
               </div>


               {/* this is the last heading text */}

               <div className='text-[4.5rem] zs:text-[4.79rem] xs:text-[5rem] zm:text-[5.5rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.4rem] zs:leading-[3.6rem] xs:leading-[3.8rem] zm:leading-[4.1rem] f1 uppercase'>
                              <h1 className='pl-5 xs:pl-3'>creativity &</h1>
                              <h1 className='pl-16'>common</h1>
                              <h1>sense.</h1>
               </div>

               {/* this is the paragraph  */}

               <div className='f2 w-full text-[22.5px] zs:text-[23.5px]  xs:text-[25px] ss:text-[25.5px] zm:text-[26.5px] z-[200] tracking-tight text-center mt-5 xs:mt-8 relative opacity-85 xs:opacity-100 leading-[24px] zs:leading-[25.5px] xs:leading-[28px] ss:leading-[29px] zm:leading-[31px]'>
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