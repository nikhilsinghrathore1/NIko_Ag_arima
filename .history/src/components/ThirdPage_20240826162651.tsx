import React from 'react'

const ThirdPage = () => {
  return (
    <div className='w-full h-[100vh] pt-12'>
      {/* this is the top heading text  */}
               <div className='text-[4.79rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.6rem] f1 uppercase'>
                              <h1> the balance</h1>
                              <h1 className='pl-16'> between</h1>
               </div>
               
               <div className=' w-[96%] px-[3px] -mt-10 box3 h-[35%] top-[5px] bg-zinc-100  relative   mx-auto '>
                        <div className='w-full h-full overflow-hidden skew  relative   border-x-[1px] border-b-[1px] border-black '>
                                <img className='w-full h-full object-cover translate-y-[40px]  object-top scale-125 relative z-[117]' src="https://images.prismic.io/localstudio/65ae849838f662e9dd2124a4_full.png?auto=format,compress" alt="not showing" />
                        </div>
               </div>
               {/* this is the last heading text */}

               <div className='text-[4.79rem] px-[6px] relative skew-x-0 z-[114] tracking-tight leading-[3.6rem] f1 uppercase'>
                              <h1 className='pl-5'>creativity &</h1>
                              <h1 className='pl-16'>common</h1>
                              <h1>sense.</h1>
               </div>

               {/* this is the paragraph  */}

               <div>
                <p>Local is the power</p>
                <p>and efficiency of "hand-made"</p>
               </div>
    </div>
  )
}

export default ThirdPage