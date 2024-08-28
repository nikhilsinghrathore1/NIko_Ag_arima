import React from 'react'

const SecondPage = () => {
  return (
    <div className='w-full h-[100vh] pt-5'>
               {/* the main text of the second page */}
               <div className='text-[4.79rem] text-center tracking-tight leading-[3.6rem] f1 uppercase'>
                              <h1>the power of</h1>
                              <h1>"homemade"</h1>
                              <h1>for brands</h1>
               </div>
               {/* outer div for the image    **** putting the overflow hidden on the outer div for maybe fun purposes ************* */}
               <div className='relative w-[96%] h-[25%] box2 mx-auto overflow-hidden -skew-y-[4deg]  z-50 p-[3px] '>
                              {/* inner div for the image */}
                              <div className='w-full h-full border-[1px]   border-black '>
                                             <img className='w-full h-full object-cover object-top scale-125' src="https://images.prismic.io/localstudio/65ae83ed38f662e9dd212489_fusion.png?auto=format,compress" alt="not showing" />
                              </div>
               </div>

               {/* this is the text area */}

               <div className='w-full text-center '>
                              <p>We design customs stories</p>
                              <p>and experience </p>
               </div>
    </div>
  )
}

export default SecondPage