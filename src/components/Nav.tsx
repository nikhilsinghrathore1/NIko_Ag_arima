import React from 'react'

const Nav = () => {

// done for all mobile devices

// ipad mini done

  return (
    <div className='w-full h-[8%] zs:h-[10%] xs:h-[7%] ss:h-[8%] flex items-center  justify-between z-[500] fixed pl-[14px] pr-[15.5px] py-1'>

               {/* this is the logo div  */}
               {/* this will be common for mobile and tablet view */}

               <div className='relative f1 uppercase w-fit '>
               <h1 className='text-[2.1rem] zs:text-[2.25rem] xs:text-[2.31rem] ss:text-[2.4rem] zm:text-[2.6rem] md:text-[3rem] tracking-wide zs:tracking-[0.2px] xs:tracking-[0.55px] '>Local</h1>
               <h2 className='absolute top-3 xs:top-[10px] text-[5px] xs:text-[8px] -right-[2px] xs:-right-[5px]'>tm</h2>
               </div>

               {/* this is the menu div for the smaller screen sizes */}

               <div className='w-[18%] h-[62%] zs:h-[55%] xs:h-[65%] ss:h-[50%] zm:h-[55%] font-bold md:hidden uppercase f3 xs:mt-[3px] border-black border-[1px] rounded-sm flex pt-1 items-center justify-center'>

                              <h1 className='leading-none ss:text-[24px] text-[22px] xs:text-[23px] zm:text-[25.5px] tracking-[0.2px]'>Menu</h1>
               </div>















               {/* this is the responsive code for the tablet view */}

               <div className='w-[70%]  flex justify-between '>

          {["the studio" , "playground" , "get in touch"].map(e=>(

        <div className='hidden md:flex  md:px-1 md:h-8 items-center  justify-center border-[2px] text-[1.1rem] rounded-[2px] border-black uppercase f3 '>{e}</div>
          ))}


               </div>



    </div>

  )
}

export default Nav