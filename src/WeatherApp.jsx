import {useState} from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
         city : "Indore",
        feelslike:24.84,
        temp :25 ,
        tempMin :25 ,
         tempMax : 25,
         humidity : 47,
         weather : "haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
<div>
    <h1><i>Weather App</i></h1>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    
</div>
    );
}