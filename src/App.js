import { useState } from 'react';
import Switch from './Switch';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <main className='h-screen bg-black relative opacity-99'>
      <img className="h-screen object-cover opacity-60" src={require("./assets/desktop/bg-image-daytime.jpg")} alt="Day time" />
      <article className='grid grid-cols-10 grid-rows-8 absolute top-0 w-full h-full text-white font-normal py-11 px-8'>

        <div className={`col-start-1 col-end-10 row-start-1 row-end-5 ${isOpen && "hidden"}`}>
          <p className='text-base font-light'>“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
          <p className='mt-3 font-semibold text-base'>Ada Lovelace</p>
        </div>
        <svg className={`col-start-10 col-end-11 row-start-1 row-end-5 ${isOpen && "hidden"}`} width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z" fill="#FFF" fill-rule="nonzero" opacity=".5"/></svg>

        <div className={`${isOpen ? "col-start-1 col-end-11 row-start-2 row-end-5 mt-[20px]" : "col-start-1 col-end-10 row-start-5 row-end-8 mt-[20px]"}`}>
          <div className='flex gap-4'>
            <svg className="text-whit mr-4" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.78 19.417c.594 0 1.083.449 1.146 1.026l.006.125v1.842a1.152 1.152 0 01-2.296.125l-.007-.125v-1.842c0-.636.516-1.151 1.152-1.151zM6.382 17.18a1.15 1.15 0 01.09 1.527l-.09.1-1.302 1.303a1.152 1.152 0 01-1.718-1.528l.09-.1 1.302-1.302a1.15 1.15 0 011.628 0zm12.427 0l1.303 1.303a1.15 1.15 0 11-1.628 1.627L17.18 18.81a1.15 1.15 0 111.628-1.628zM11.781 5.879a5.908 5.908 0 015.901 5.902 5.908 5.908 0 01-5.901 5.902 5.908 5.908 0 01-5.902-5.902 5.908 5.908 0 015.902-5.902zm10.63 4.75a1.151 1.151 0 110 2.303h-1.843a1.151 1.151 0 110-2.303h1.842zm-19.418 0a1.151 1.151 0 01.126 2.296l-.125.007H1.15a1.151 1.151 0 01-.125-2.296l.125-.007h1.842zm1.985-7.268l.1.09 1.303 1.302a1.151 1.151 0 01-1.528 1.718l-.1-.09L3.45 5.08A1.15 1.15 0 014.978 3.36zm15.133.09c.45.449.45 1.178 0 1.628L18.808 6.38a1.151 1.151 0 11-1.628-1.628l1.303-1.303c.449-.449 1.178-.449 1.628 0zM11.781 0c.636 0 1.151.515 1.151 1.151v1.843a1.152 1.152 0 01-2.303 0V1.15C10.63.515 11.145 0 11.781 0z" fill="#FFF" fill-rule="nonzero"/></svg>
            <p className='uppercase tracking-h6 text-mb font-light'>good morning</p>
          </div>
          <div className='flex items-baseline'>
            <h1 className='font-bold text-[9rem] leading-[1.2]'>11:37</h1>
            <p className='font-light text-mb'>BST</p>
          </div>
          <p className='uppercase font-bold text-mb tracking-h6'>IN LONDON, UK</p>
        </div>
        <Switch className={`${isOpen ? "col-start-1 col-end-11 row-start-5 row-end-9" : "col-start-1 col-end-11 row-start-8 row-end-9"}`} data={{isOpen, setIsOpen}}/>
      </article>
      <aside className={`opacity-90 bg-white h-[40vh] w-full absolute top-full -translate-y-full ${isOpen || "hidden"}`}>
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
    </main>
    </>
  );
}

export default App;
