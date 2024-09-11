import React from 'react'

const Nav = () => {

// nav bar done for the slightly bigger screen sizes

  return (
    <div className='w-full h-[10%] xs:h-[7%] flex items-center  justify-between z-[500] fixed pl-[14px] pr-[15.5px] py-1'>

               {/* this is the logo div  */}
               <div className='relative f1 uppercase w-fit '>
               <h1 className='text-[2.25rem] xs:text-[2.31rem] tracking-[0.2px] xs:tracking-[0.55px] '>Local</h1>
               <h2 className='absolute top-3 xs:top-[10px] text-[5px] xs:text-[8px] -right-[2px] xs:-right-[5px]'>tm</h2>
               </div>

               {/* this is the menu div for the smaller screen sizes */}
               <div className='w-[18%] h-[55%] xs:h-[65%] font-bold uppercase f3 xs:mt-[3px] border-black border-[1px] rounded-sm flex pt-1 items-center justify-center'>

                              <h1 className='leading-none text-[22px] xs:text-[23px] tracking-[0.2px]'>Menu</h1>
               </div>
    </div>
  )
}

export default Nav