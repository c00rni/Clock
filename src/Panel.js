import { useContext } from 'react';
import { ThemeContext } from './App';

function Panel({data, open, className}) {
    const dayTheme = useContext(ThemeContext);
    return (
      <>
        <aside className={`opacity-90 ${dayTheme ? "bg-white text-dark" : "bg-black text-white"} h-[40vh] w-full flex items-center justify-center absolute top-full -translate-y-full ${open.isOpen || "hidden"} ${className}`}>
            <div className='sm:gap-x-[10vw] col-auto grid sm:grid-cols-2 sm:grid-rows-2 grid-rows-4 items-center h-[calc(40vh-_8rem)] '>
                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2 mr-14'>CURRENT TIMEZONE</p>
                  <p className='font-bold text-h4 sm:text-[4rem]'>{data.timezone}</p>
                </div>

                <div className='sm:block row-end-3 flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>Day of the year</p>
                  <p className='font-bold text-h4 sm:text-[4rem]'>{data.day_of_year}</p>
                </div>

                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>day of the week</p>
                  <p className='font-bold text-h4 sm:text-[4rem]'>{data.day_of_week + 1}</p>
                </div>


                <div className='sm:block flex justify-between items-center'>
                  <p className='uppercase tracking-mb sm:text-[1.3rem] sm:tracking-md2'>week number</p>
                  <p className='font-bold text-h4 sm:text-[4rem]'>{data.week_number}</p>
                </div>
            </div>
        </aside>
      </>
    );
}

export default Panel;
