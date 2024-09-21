import React from 'react'

const SecondPage = () => {

// the responsive design for all the mobile design is complete
// ipad mini 
  return (

    <div className='w-full h-[77vh]  zs:h-[80vh] xs:h-[66vh] zs:pt-5 pt-8 ss:-pt-5 xs:pt-2'>


               {/* the main text of the second page */}
               <div className='text-[4.6rem] zs:text-[4.79rem] text-center tracking-tight leading-[3.4rem] zs:leading-[3.6rem] xs:text-[5.03rem] ss:text-[5.3rem] zm:text-[5.5rem] xs:leading-[3.7rem] ss:leading-[3.9rem] zm:leading-[4.1rem] f1 uppercase'>
                              <h1>the power of</h1>
                              <h1>"homemade"</h1>
                              <h1>for brands.</h1>
               </div>


               {/* outer div for the image    **** putting the overflow hidden on the outer div for maybe fun purposes ************* */}
               
               <div className='relative w-[96%] h-[42%] zs:h-[40%] xs:h-[42%] box2  mx-auto overflow-hidden -skew-y-[4deg]  z-40 p-[3px] '>
                              {/* inner div for the image */}
                              <div className='w-full h-full border-[1px]   border-black/30 '>
                                             <img className='w-full h-full object-cover object-top scale-125' src="https://images.prismic.io/localstudio/65ae83ed38f662e9dd212489_fusion.png?auto=format,compress" alt="not showing" />
                              </div>
               </div>

               {/* this is the text area */}

               <div className='f2 w-full text-[22.5px] zs:text-[23.5px] xs:text-[24.6px] ss:text-[25px] zm:text-[26px] z-[200] tracking-tight text-center -mt-6 xs:-mt-9 relative  opacity-85 xs:opacity-100 leading-[24px] zs:leading-[25.5px] xs:leading-[26.5px] ss:leading-[27px] zm:leading-[28px]'>
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