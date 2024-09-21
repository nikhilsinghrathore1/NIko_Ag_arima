import React from 'react'

const Footer = () => {

  // the responsive design of the footer is complete for the sligthly bigger screen sizes 
  // done for the smallest screen size. 
// done for all mobile devices 
  return (
    <div className='w-full h-[75vh] zs:h-[86.5vh] xs:h-[70vh] zm:h-[71vh] bg-[#FFFFF1] relative pt-[4.8rem] overflow-hidden'>
               <div className='w-full h-[30%] flex justify-center leading-none -mb-5 '>
                              <img className='w-[95%] h-[95%] object-contain' src="https://localstudio.fr/local.svg" alt="not showing" />
               </div>

               <div className='w-full h-[70%]  absolute '>
                              <div className=' w-[63%] zm:w-[68%] z-20 flex items-center uppercase f1 text-[24px] zm:text-[29.5px] justify-center -rotate-[4deg] h-10 zm:h-12 absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[1px] border-black '>
                                             <h1>contact@.Nikostudio.fr</h1>
                              </div>



                                             <div className='absolute z-10 w-full h-full '>
                                                                           <img className=' scale-[138%] zs:scale-[135%] object-contain' src="https://images.prismic.io/localstudio/65aa8e697a5e8b1120d5b3ff_bike.png" alt="not showing" />
                                             </div>


                              <div className='w-full px-5 text-[13.5px] zm:text-[17px]  z-20 flex items-start justify-between h-[30%] absolute bottom-0 f1 uppercase'>
                                             <div>
                                                            <div className='px-2 flex justify-center  py-[3px] mb-2 zm:mb-3 w-fit  bg-white border-[1px] border-black'>
                                                                           thread
                                                            </div>
                                                            <div className='px-2 flex justify-center py-[3px] w-fit   bg-white border-[1px] border-black'>
                                                                           linkedin
                                                            </div>
                                             </div>


                                             <div>
                                                            <div className='px-2 flex justify-center py-[2px] mb-2 zm:mb-3 w-fit bg-white border-[1px] border-black'>
                                                                           instagram
                                                            </div>
                                                            <div className='px-2 flex justify-center py-[2px]   bg-white w-fit border-[1px] border-black'>
                                                                           x / twitter
                                                            </div>
                                             </div>
                              </div>

               </div>

    </div>
  )
}

export default Footer