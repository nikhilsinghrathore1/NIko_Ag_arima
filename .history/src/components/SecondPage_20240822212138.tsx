import React from 'react'

const SecondPage = () => {
  return (
    <div className='w-full h-[50vh] pt-5'>
               {/* the main text of the second page */}
               <div className='text-[4.79rem] text-center tracking-tight leading-[3.6rem] f1 uppercase'>
                              <h1>the power of</h1>
                              <h1>"homemade"</h1>
                              <h1>for brands</h1>
               </div>
               {/* outer div for the image    **** putting the overflow hidden on the outer div for maybe fun purposes ************* */}
               <div className='relative w-[96%] h-[25%] box2 mx-auto overflow-hidden -skew-y-[4deg]  z-40 p-[3px] '>
                              {/* inner div for the image */}
                              <div className='w-full h-full border-[1px]   border-black '>
                                             <img className='w-full h-full object-cover object-top scale-125' src="https://images.prismic.io/localstudio/65ae83ed38f662e9dd212489_fusion.png?auto=format,compress" alt="not showing" />
                              </div>
               </div>

               {/* this is the text area */}

               <div className='f2 w-full text-[23.5px] tracking-tight text-center  relative z-50  opacity-85 leading-[25.5px]'>
                              <p>We design customs stories</p>
                              <p>and experiences that</p>
                              <p>are beautiful and intelligent.</p>
                              <p>Our perspective is unique.</p>
                              <p>It relies on the subtle balance</p>
                              <p>between asthetics and pragmatism.</p>
               </div>
    </div>
  )
}

export default SecondPage