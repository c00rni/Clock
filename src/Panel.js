import { useContext } from 'react';
import { ThemeContext } from './App';

function Panel({data, open, className}) {
    const dayTheme = useContext(ThemeContext);
    return (
      <>
        <aside className={`opacity-90 ${dayTheme ? "bg-white text-dark" : "bg-black text-white"} h-[40vh] w-full flex items-center justify-center absolute top-full -translate-y-full ${open.isOpen || "h-0"} duration-500 ${className}`}>
            <div className={`sm:gap-x-[10vw] col-auto grid sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-3 grid-rows-4 max-w-[1280px] xl:gap-x-0 xl:w-full items-center h-[calc(40vh-_8rem)] ${open.isOpen || "hidden"}`}>
                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2 mr-14'>CURRENT TIMEZONE</p>
                  <p className='font-bold text-h4 sm:text-[4rem] xl:text-h2'>{data.timezone}</p>
                </div>

                <div className='sm:block row-end-3 flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>Day of the year</p>
                  <p className='font-bold text-h4 sm:text-[4rem] xl:text-h2'>{data.day_of_year}</p>
                </div>

                <div className='hidden xl:flex justify-center h-full row-span-full col-start-2 col-end-3'>
                  <div className='border-r xl:border-gray-300 h-full'></div>
                </div>

                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>day of the week</p>
                  <p className='font-bold text-h4 sm:text-[4rem] xl:text-h2'>{data.day_of_week + 1}</p>
                </div>


                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>week number</p>
                  <p className='font-bold text-h4 sm:text-[4rem] xl:text-h2'>{data.week_number}</p>
                </div>
            </div>
        </aside>
      </>
    );
}

export default Panel;
