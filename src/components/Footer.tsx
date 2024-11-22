
const Footer = () => {

// responsive design for all the mobile devices is complete 
// completed the design for the tablet view 
  return (
    <div className='w-full h-[75vh] md:h-screen zs:h-[86.5vh]  xl:overflow-hidden  xs:h-[70vh] zm:h-[71vh] bg-[#FFFFF1] relative pt-[4.8rem] overflow-hidden'>
               <div className='w-full h-[30%] xl:h-[90%] xl:scale-[102%] xl:absolute top-[-210px] flex justify-center leading-none -mb-5 '>
                              <img className='w-[95%] h-[95%] object-contain' src="https://localstudio.fr/local.svg" alt="not showing" />
               </div>

               <div className='w-full h-[70%]  absolute '>
                              <div className=' w-[63%] xl:w-[23%] xl:rounded xl:absolute xl:top-[420px] md:w-[50%] zm:w-[68%] z-20 flex items-center uppercase f1 text-[24px] zm:text-[29.5px] md:text-[35px] justify-center -rotate-[4deg] h-10 zm:h-12 absolute top-[33%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-[1px] border-black '>
                                             <h1>contact@.Nikostudio.fr</h1>
                              </div>



                                             <div className='absolute z-10 w-full h-full xl:-top-10 '>
                                                                           <img className=' scale-[138%] xl:scale-[86%] zs:scale-[135%] object-contain' src="https://images.prismic.io/localstudio/65aa8e697a5e8b1120d5b3ff_bike.png" alt="not showing" />
                                             </div>


                              <div className='w-full px-5 text-[13.5px] zm:text-[17px] md:text-[20px] xl:hidden md:items-center z-20 xl:-bottom-20 flex items-start justify-between h-[30%] absolute bottom-0 f1 uppercase'>
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

                              <div className='w-full h-[10%]  px-4 items-end absolute bottom-[-130px] z-50 flex  f1 uppercase justify-between'>
                                {["thread" , "instagram" , "linkedIn" , "x/twitter"].map((e,i)=>(

                                  <div key={i} className={`px-2 flex justify-center ${i===0 &&"mr-20"} ${i===3 && "ml-10"}    py-[3px] mb-2 zm:mb-3 w-fit  bg-white border-[1px] border-black`}>{e}</div>
                                  
                                ))}
                                             
                              </div>

               </div>

    </div>
  )
}

export default Footer