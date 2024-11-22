
const Fourth = () => {
// completed all the responsive design till tablet now starting with desktop view
  return (
    <div className='w-full h-[50vh] xl:h-[100vh] xl:mt-[-250px] zs:h-[65vh]  xs:h-[50vh] overflow-hidden -mt-2 xs:mt-0 '>
      {/* this is the div that contains the inner images */}
               <div className='relative flex items-start md:items-center  justify-center w-full box4 z-20 h-[65%] xl:h-[75%] b pt-8  xs:pt-10     '>

               <div className='w-[85%]  ml-2 xs:ml-3 h-[70%] xl:h-[110%]  z-[10] -skew-y-[9deg] border-x-[1px] border-t-[1px] border-b-[1px] border-b-black/30   border-black/30   absolute -left-1 md:left-1/2 md:-translate-x-1/2  '>
                              <img className='w-full  -translate-y-52 scale-110 ' src="https://images.prismic.io/localstudio/65ae849838f662e9dd2124a4_full.png?auto=format,com" alt="not showing" />
               </div>

               </div>
      {/* this is the tilted call to action div section  */}

    <div className='w-full h-[40%]  zs:h-[35%] relative z-[50000000]  ss:h-[28%] flex items-center justify-center'>
                    <div className='px-[15px] zs:px-[6px] xs:px-[8px] bg-white ss:px-[15px] zm:px-[20px] rounded uppercase zs:py-[2px] xs:py-[1px] ss:py-0 f1 text-[1.7rem] zs:text-[2rem] xs:text-[2.1rem] zm:text-[2.15rem] rotate-6 mt-5 xs:mt-12 border-[2px] border-black/50'>
                        credit
                    </div>
    </div>

    </div>
  )
}

export default Fourth