
const HeroMain = () => {

  return (
    <div className=' w-full relative   xl:h-[155vh]  h-[87.5vh] zs:h-[108vh] xs:h-[86.5vh]  overflow-hidden pt-[110px] md:pt-[80px] md:h-[53vh] zs:pt-[117px] ss:pt-[128px]  xl:pt-[150px] px-[5px]'>
               {/* container for the main big text */}

               <div className='text-[4.6rem] md:w-full  zs:text-[4.79rem] xs:text-[5rem] xl:-tracking-[3px]  ss:text-[5.3rem] md:text-[6.4rem] xl:text-[12.4rem] xl:leading-[10rem] zm:text-[5.5rem] px-[3px] tracking-tight leading-[3.5rem] zs:leading-[3.6rem] xs:leading-[3.8rem] ss:leading-[3.93rem] zm:leading-[4.15rem] md:leading-[5rem] f1 uppercase'>
                              <p className=' overflow-hidden xl:overflow-visible md:pl-[37%] xl:pl-[36.5%]'>A committed,</p>
                              <p className='pl-[2px] xl:pl-[10px]'>creative and </p>
                              <p className='pl-[17%] xs:pl-[16.7%] xl:pl-[10px] md:pl-0'>Agile Team</p>
               </div>


               {/*this is first  the outer div for the locomotive images */}


               <div className='box1 zs:w-[53%]  md:w-[40.5%] w-[52%] float-end inline -top-3 md:-top-[70px] xl:-top-[140px] md:right-16 xl:right-32 h-[30%] z-[500] zs:h-[32%] xs:h-[29%] ss:h-[32%] md:h-[67%] p-[2px] relative overflow-hidden -skew-y-2 -skew-x-1'>
               {/* this is the inner div that contains the images */}

               <div className=' w-full h-full   border-[1px] border-black/30 xl:border-black overflow-hidden'>
                              <img className='w-full h-full object-cover scale-125 -rotate-[15deg] object-top' src="https://images.prismic.io/localstudio/65ae835438f662e9dd21247c_matthieu-solo-hd.png?auto=format,compress" alt="not showing" />
               </div>
               </div>
``

               {/* this is second the outer div for the locomotive images  */}

               <div className=' w-[46%] md:w-[36%] md:h-[45%] xl:w-[34%] xl:left-[16%] z-[50000] md:left-[100px] p-[2px] top-[3%] xl:top-[4%] h-[25%]   zs:h-[27%] xs:h-[24%] ss:h-[25%] relative overflow-hidden skew-y-[8deg] md:skew-y-[12deg] '>
               {/* this is the second inner div that contains the images */}

                              <div className='w-full border-[1px] border-black/30 xl:border-black overflow-hidden h-full'>
                                             <img className='scale-150 object-cover object-top' src="https://images.prismic.io/localstudio/65ae837038f662e9dd21247e_thibaud-solo-hd.png?auto=format,compres" alt="not showing " />
                              </div>




               </div>

               {/* this is the intro paragraph for the mobile view */}

               <div className='w-full h-[50%] md:hidden z-[1000]  flex items-start justify-center relative -top-[4px] zs:-top-[5px] xs:-top-[5px] ss:-top-[17px]'>
                <div className='f2 text-[22.5px] zs:text-[23.5px]  xs:text-[24.5px] ss:text-[25.5px] zm:text-[26.7px] tracking-tight w-[74%] opacity-90 leading-[24px] zs:leading-[25px] xs:leading-[25.5px] ss:leading-[26.5px] zm:leading-[27.7px]'>
                <p>We are NikoChan and arima.</p>
                <p>two passionate guys born in the early 20's</p>
                <p>We enjoy playing with the codes of digital</p>
                <p>and branding, so we founded our studio in 2024</p>
                <p>to offer a customized approach to our clients.</p>
                </div>
               </div>


               {/* this is the intro paragraph for the tablet screen size  */}

               <div className='hidden top-[-160px] xl:top-[-130px]  left-[120px] xl:left-[780px]   w-full xl:w-fit h-[50%] xl:h-fit  md:flex    z-[50000000]      items-start justify-center relative '>
                <div className='f2 text-[12px]  tracking-tight  xl:text-[1.4rem] '>
                <p className='leading-[13px] xl:leading-[1.62rem]'>We are NikoChan and arima.</p>
                <p className='leading-[13px] xl:leading-[1.62rem]'>two passionate guys born in the early 20's</p>
                <p className='leading-[13px] xl:leading-[1.62rem]'>We enjoy playing with the codes of digital</p>
                <p className='leading-[13px] xl:leading-[1.62rem]'>and branding, so we founded our studio in 2024</p>
                <p className='leading-[13px] xl:leading-[1.62rem]'>to offer a customized approach to our clients.</p>
                </div>
               </div>

    </div> 
  )
}

export default HeroMain