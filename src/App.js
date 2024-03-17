import { useState, createContext, useEffect } from 'react';
import Switch from './Switch';
import Panel from './Panel';
import Clock from './Clock';
import Quote from './Quote';

import './App.css';

export const ThemeContext = createContext(null);

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const  [isDayTime, setIsDayTime] = useState(true);
  const [timeInfo, setTimeInfo] = useState({timezone:"",day_of_year:"",day_of_week:"",week_number:"", unixtime:"", abbreviation:""});
  const [locationInfo, setLocationInfo] = useState({city:"", countryCode:""})

  useEffect(() => {
    let ip = "";
    let lat = "";
    let lon = "";
    fetch(`http://worldtimeapi.org/api/ip`).then(response => response.json()).then(res => {
      ip = res.client_ip;
      setTimeInfo(res);
    });
    fetch(`https://api.techniknews.net/ipgeo/${ip}`).then(response => response.json()).then(res => {
      setLocationInfo(res);
      lat = res.lat;
      lon = res.lon;
    });
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today&formatted=0`).then(response => response.json()).then(
      res => {
        const sunRise = Date.parse(res.results.sunrise)
        const sunSet = Date.parse(res.results.sunset)
        const time = Date.now()
        if (time >= sunRise && time < sunSet) {
          setIsDayTime(true);
        }
        else {
          setIsDayTime(false);
        }
      }
    )
  },[])


  return (
    <>
    <main className='h-screen bg-black relative opacity-99'>
      <ThemeContext.Provider value={isDayTime}>
        <img className="h-screen w-screen object-cover opacity-60" src={isDayTime ? require("./assets/desktop/bg-image-daytime.jpg") : require("./assets/desktop/bg-image-nighttime.jpg")} alt="Day time" />
        <article className='grid grid-cols-10 grid-rows-8 md:px-[60px] md:py-[80px] xl:px-0 xl:py-0 max-w-[1280px] xl:m-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full text-white font-normal py-11 px-8'>
          <Quote className={"col-start-1 col-end-11 row-start-1 xl:row-start-2 row-end-5"} open={{isOpen, setIsOpen}} />
          <Clock timeInfo={timeInfo} location={locationInfo} open={{isOpen, setIsOpen}} className={isOpen ? "col-start-1 col-end-9 row-start-2 row-end-5 mt-[20px]" : "col-start-1 col-end-8 row-start-5 row-end-9 mt-[20px]"}/>
          <Switch className={`${isOpen ? "col-start-1 col-end-11 xl:col-start-9 xl:row-start-4 xl:row-end-5 xl:self-end xl:mb-0 row-start-5 row-end-9" : "col-start-1 col-end-11 row-start-8 row-end-9 xl:col-start-9 xl:row-start-7 xl:row-end-8 xl:self-end xl:mb-0"}`} data={{isOpen, setIsOpen}}/>
        </article>
        <Panel data={timeInfo} open={{isOpen, setIsOpen}} />
      </ThemeContext.Provider>
    </main>
    </>
  );
}

export default App;
