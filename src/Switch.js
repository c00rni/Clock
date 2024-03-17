function Switch({data, className}) {

  return (
    <>
        <div className={`flex items-center w-[115px] h-[36px] sm:w-[153px] sm:h-[48px] bg-white rounded-[28px] mb-7 cursor-pointer ${className} transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300`} onClick={() => data.setIsOpen(!data.isOpen)} >
            <span className='text-base font-bold tracking-button text-gray-400 flex-[0.94] text-center sm:text-[1.6rem]'>{data.isOpen ? "LESS" : "MORE"}</span>
            <div className={`w-[28px] h-[28px] sm:w-[37px] sm:h-[37px] bg-dark hover:bg-gray-400 flex items-center justify-center rounded-full`}>
                {data.isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>
                ):(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                )}
            </div>
        </div>
    </>
  );
}

export default Switch;
