import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function SearchBox(){
    let [city,setCity]=useState[""];
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "e952b761739cfea251fb971cb49a78fa";
      
        let getWeatherInfo = async() =>{
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
          let jsonResponse= await response.json();
            let result={
                temp:{ jsonResponse.main.temp},
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                feelsLike:jsonResponse.main.feels_like,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description
            }
        };
    let handleChange=(evt)=>{
        setCity(evt.teget.value);
    }

    let handleSubmit=(evt)=>{
        evt.preventdefault;
        setCity[""];
        getWeatherInfo();
    };

return (
    <div className="Searchbox">
        <h3>Search for the weather</h3>
        <form>
            <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type="submit" onClick={handleSubmit}>
                Search
            </Button>
        </form>
    </div>
);
}