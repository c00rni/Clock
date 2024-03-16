function Panel({open, className}) {

    return (
      <>
        <aside className={`opacity-90 bg-white h-[40vh] w-full absolute top-full -translate-y-full ${open.isOpen || "hidden"} ${className}`}>
            <div className='mx-10 my-16 grid grid-cols-2 grid-rows-4 items-center h-[calc(40vh-_8rem)]'>
                <p className='uppercase tracking-mb col-span-1 row-span-1 '>CURRENT TIMEZONE</p>
                <p className='font-bold text-dark text-h4 col-start-2 col-end-3 row-span-1 text-right'>Europe/London</p>


                <p className='uppercase tracking-mb col-span-1'>Day of the year</p>
                <p className='font-bold text-dark text-h4 col-start-2 col-end-3 text-right'>295</p>

                <p className='uppercase tracking-mb col-span-1'>day of the week</p>
                <p className='font-bold text-dark text-h4 col-start-2 col-end-3 text-right'>5</p>


                <p className='uppercase tracking-mb col-span-1'>week number</p>
                <p className='font-bold text-dark text-h4 col-start-2 col-end-3 text-right'>42</p>
            </div>
        </aside>
      </>
    );
}

export default Panel;
