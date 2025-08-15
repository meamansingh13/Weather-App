import { useState } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export default function SearchBox({updateInfo}){
    let [city,setCity]=useState[""];
    let [err,setErr]=useState[false];
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        const API_KEY = "e952b761739cfea251fb971cb49a78fa";
      
        let getWeatherInfo = async() =>{
            try{
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
          let jsonResponse= await response.json();
            let result={
                city:city,
                temp: jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                feelsLike:jsonResponse.main.feels_like,
                humidity:jsonResponse.main.humidity,
                weather:jsonResponse.weather[0].description
            }
            return result;
        } catch(err){
            setErr(true);
        }
        };
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit=async (evt)=>{
        evt.preventdefault;
        setCity[""];
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
    };

return (
    <div className="Searchbox">        <form>
            <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type="submit" onClick={handleSubmit}>
                Search
            </Button>
            (err & <p>no such place exists</p>)
        </form>
    </div>
);
}