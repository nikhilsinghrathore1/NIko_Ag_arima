import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-[10%] flex items-center justify-between fixed pl-[14px] pr-[15.5px] py-1'>

               {/* this is the logo div  */}
               <div className='relative f1 uppercase w-fit '>
               <h1 className='text-[2.25rem] tracking-[0.2px] '>Local</h1>
               <h2 className='absolute top-3 text-[5px] -right-[2px]'>tm</h2>
               </div>

               {/* this is the menu div for the smaller screen sizes */}
               <div className='w-[18%] h-[55%] uppercase f1 tracking-wide font-bold text-4xl border-black border-[1px] rounded-sm flex items-center justify-center'>
                              <h1>Menu</h1>
               </div>
    </div>
  )
}

export default Nav