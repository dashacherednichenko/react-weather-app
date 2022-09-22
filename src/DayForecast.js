import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./DayForecast.css";

export default function DayForecast(props) {
    function formatDay(date) {
        let now = new Date(date * 1000);
        let day = now.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    // console.log('props', props.data);
    if (JSON.stringify(props.data) !== '{}') {
        return (
            <div className="DayForecast col-sm-2">
                <div className="day">{formatDay(props.data.dt)}</div>
                <div className="emoji">
                    <WeatherIcon code={props.data.weather[0].icon} size={52}/>
                </div>
                <div className="temperature">
                    <span className="temp-max">{Math.round(props.data.temp.max)}°</span>
                    <span className="temp-min">{Math.round(props.data.temp.min)}°</span>
                </div>
            </div>
        );
    }
}
