import React from 'react'

const Fourth = () => {
  return (
    <div className='w-full h-[65vh] overflow-hidden -mt-2'>
      {/* this is the div that contains the inner images */}
               <div className='relative flex items-start justify-center w-full box4 h-[65%] b pt-8 bg overflow-   '>

               <div className='w-[98%] ml-2 h-[70%] -skew-y-6 border-[1px]   border-black/30   absolute -left-1  '>
                              <img className='w-full -translate-y-52 scale-110' src="https://images.prismic.io/localstudio/65ae849838f662e9dd2124a4_full.png?auto=format,com" alt="not showing" />
               </div>

               </div>
      {/* this is the tilted call to action div section  */}

    <div className='w-full h-[35%] flex items-center justify-center'>
                    <div className='px-10 py-5 rotate-6 border-[2px] border-black'>

                    </div>
    </div>

    </div>
  )
}

export default Fourth