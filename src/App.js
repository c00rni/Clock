import { useState, createContext, useEffect } from 'react';
import Switch from './Switch';
import Panel from './Panel';
import Clock from './Clock';
import Quote from './Quote';

import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const  [isDayTime, setIsDayTime] = useState();
  const [timeInfo, setTimeInfo] = useState({timezone:"",day_of_year:"",day_of_week:"",week_number:""});

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/ip`).then(response => response.json()).then(res => {console.log(res); setTimeInfo(res)});
  },[])


  return (
    <>
    <main className='h-screen bg-black relative opacity-99'>
      <ThemeContext.Provider value={isDayTime}>
        <img className="h-screen object-cover opacity-60" src={isDayTime ? require("./assets/desktop/bg-image-daytime.jpg") : require("./assets/desktop/bg-image-nighttime.jpg")} alt="Day time" />
        <article className='grid grid-cols-10 grid-rows-8 absolute top-0 w-full h-full text-white font-normal py-11 px-8'>
          <Quote className={"col-start-1 col-end-11 row-start-1 row-end-5"} open={{isOpen, setIsOpen}} />
          <Clock open={{isOpen, setIsOpen}}/>
          <Switch className={`${isOpen ? "col-start-1 col-end-11 row-start-5 row-end-9" : "col-start-1 col-end-11 row-start-8 row-end-9"}`} data={{isOpen, setIsOpen}}/>
        </article>
        <Panel data={timeInfo} open={{isOpen, setIsOpen}} />
      </ThemeContext.Provider>
    </main>
    </>
  );
}

export default App;
