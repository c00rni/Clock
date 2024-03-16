import { useContext } from 'react';
import { ThemeContext } from './App';

function Panel({data, open, className}) {
    const dayTheme = useContext(ThemeContext);
    return (
      <>
        <aside className={`opacity-90 ${dayTheme ? "bg-white text-dark" : "bg-black text-white"}  h-[40vh] w-full absolute top-full -translate-y-full ${open.isOpen || "hidden"} ${className}`}>
            <div className='mx-10 my-16 grid grid-cols-2 grid-rows-4 items-center h-[calc(40vh-_8rem)]'>
                <p className='uppercase tracking-mb col-span-1 row-span-1 '>CURRENT TIMEZONE</p>
                <p className='font-bold  text-h4 col-start-2 col-end-3 row-span-1 text-right'>{data.timezone}</p>


                <p className='uppercase tracking-mb col-span-1'>Day of the year</p>
                <p className='font-bold text-h4 col-start-2 col-end-3 text-right'>{data.day_of_year}</p>

                <p className='uppercase tracking-mb col-span-1'>day of the week</p>
                <p className='font-bold text-h4 col-start-2 col-end-3 text-right'>{data.day_of_week}</p>


                <p className='uppercase tracking-mb col-span-1'>week number</p>
                <p className='font-bold text-h4 col-start-2 col-end-3 text-right'>{data.week_number}</p>
            </div>
        </aside>
      </>
    );
}

export default Panel;
