import React, {useState} from "react";
import axios from "axios";
import DayForecast from "./DayForecast";

export default function WeatherForecast(props){
    const apiKey = "061af8862776400f0f98509421517421";
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState([{}]);

    function displayForecast(res) {
        setForecastData(res.data.daily);
        setLoaded(true);
        console.log('forecastData', forecastData);
    }

    function getForecast(coord, unit) {
        // console.log('coord', coord);
        let apiUrlDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrlDays).then(displayForecast);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast forecast" id="forecast">
                <div className="row">
                    {forecastData.map(function (data, i) {
                        return i < 6 ?
                            <DayForecast data={data} key={i}/>
                            : null
                            ;
                    })}
                </div>
            </div>
        );
    }
    else {
        getForecast(props.coordinates, 'metric');
        return "Loading forecast"
    }
}