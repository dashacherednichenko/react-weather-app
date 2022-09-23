import React, {useState, useEffect, useContext } from "react";
import axios from "axios";
import {useGlobalState} from "./App";
import DayForecast from "./DayForecast";

export default function WeatherForecast(props){
    const apiKey = "061af8862776400f0f98509421517421";
    // змінити на свій
    const [unit] = useGlobalState('defaultUnit');
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState([{}]);

    useEffect(()=>{
        setLoaded(false);
    }, [props.coordinates]);

    function displayForecast(res) {
        setForecastData(res.data.daily);
        setLoaded(true);
    }

    function getForecast() {
        // console.log('unit', unit);
        let apiUrlDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=hourly,minutely&appid=${apiKey}&units=metric`;
        axios.get(apiUrlDays).then(displayForecast);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast forecast" id="forecast">
                <div className="row">
                    {forecastData.map(function (data, i) {
                        return i < 6 ?
                            <DayForecast data={data} key={i} unit={unit}/>
                            : null
                            ;
                    })}
                </div>
            </div>
        );
    }
    else {
        getForecast();
        return "Loading forecast"
    }
}