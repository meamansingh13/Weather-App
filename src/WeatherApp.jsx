import SearchBox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo]=useState({
        city: Delhi,
        feelslike: 24.84,
        temp: 35.05,
        tempMin: 25,
        tempMax:39,
        humidity: 15
    }
    );
    
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox/>
            <Infobox info={weatherInfo}/>
        </div>
    )
}