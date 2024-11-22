
const FifthPage = () => {

//    responsive design for all the mobile devices is complete 
// ṛesponsive for the tablet view in ipad mini 
  return (
    <div className='w-full h-[160vh] md:h-[73vh] xl:h-[170vh]  zs:h-[175vh] xs:h-[135vh] bg-[#1EC5FC] overflow-hidden px-1 pt-10 '>
      {/* this is the first blue area huge text  */}
      {/* this is the text area  */}
       <div className=' md:hidden  text-[4.6rem] zs:text-[4.79rem] xs:text-[5rem] ss:text-[5.45rem] zm:text-[5.5rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[4.08rem] zm:leading-[4.25rem] f1 uppercase'>
                              <p className=' overflow-hidden'>We're</p>
                              <p >Providing</p>
                              <p >full- </p>
                              <p className='pl-[7.6rem] zm:pl-[8.2rem]'>services</p>
               </div>


       <div className=' md:block hidden  text-[6.54rem] leading-[5rem] xl:text-[13rem]  px-[3px] xl:leading-[10rem] tracking-tight  f1 uppercase'>
                              <p className=' overflow-hidden xl:overflow-visible pl-[20%] xl:-mt-3 xl:pl-[20%]'>We're Providing</p>
                              <p >full-services</p>
               </div>
      {/* this is the blue area paragraph area  */}
               <div className='w-full gap-10 md:gap-0 md:justify-between xl:text-[1.55rem] xl:leading-[1.77rem] mt-6 md:px-2 my-10 f2 text-[22.5px] zs:text-[23px] xs:text-[24px] ss:text-[25.5px] zm:text-[27px] md:text-[15.5px] md:leading-[17.5px] tracking-tight leading-[25px] zs:leading-[26px] xs:leading-[27.5px] ss:leading-[28.5px] zm:leading-[30px] flex flex-col md:flex-row items-center justify-center   '>

                          <div className='text-center zs:opacity-80 xs:opacity-90 zm:opacity-100 xl:opacity-80' >
                                  <p>Positioning</p>
                                  <p>Storytelling</p>
                                  <p>Brand Strategy</p>
                                  <p>Brand identity</p>
                          </div>
                          <div className='text-center zs:opacity-80 xs:opacity-90 zm:opacity-100 xl:opacity-80' >
                                  <p>Art Direction</p>
                                  <p>UX & UI Design</p>
                                  <p>Website & E-Commerce</p>
                                  <p>Mobile App</p>
                          </div>
                          <div className='text-center zs:opacity-80 xs:opacity-90 zm:opacity-100 xl:opacity-80' >
                                  <p>Creative Development</p>
                                  <p>Front-end Development</p>
                                  <p>Back-end Development</p>
                                  <p>Headless CMS</p>
                                  <p>Wordpress</p>
                          </div>
               </div>

               <div className='text-[4.6rem] md:text-[6.4rem] md:leading-[5rem] xl:text-[13rem] xl:leading-[10rem] zs:text-[4.79rem] xs:text-[5rem] ss:text-[5.35rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[4.08rem] f1 uppercase'>
                              <p className=' overflow-hidden'>from</p>
                              <p >strategy </p>
                              <p className='pl-[6.7rem] md:hidden'>to Design</p>
                              <p className='pl-[7.7rem] md:hidden'>and</p>
                              <p className='md:hidden'>Development</p>
                              <p className='hidden md:block pl-[33%]'>to design and</p>
                              <p className='hidden md:block pl-[17.5%]'>development.</p>
               </div>
    </div>
  )
}

export default FifthPage