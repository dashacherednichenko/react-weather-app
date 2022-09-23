import React, {useState, useEffect} from "react";
import WeatherIcon from "./WeatherIcon";

import "./DayForecast.css";


export default function DayForecast(props) {
    const unit = props.unit;

    function formatDay(date) {
        let now = new Date(date * 1000);
        let day = now.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    if (JSON.stringify(props.data) !== '{}') {
        return (
            <div className="DayForecast col-sm-2">
                <div className="day">{formatDay(props.data.dt)}</div>
                <div className="emoji">
                    <WeatherIcon code={props.data.weather[0].icon} size={52}/>
                </div>
                <div className="temperature">
                    <span className="temp-max">{unit === 'imperial' ? Math.round(props.data.temp.max * 9 / 5 + 32) : Math.round(props.data.temp.max)}°</span>
                    <span className="temp-min">{unit === 'imperial' ? Math.round(props.data.temp.min * 9 / 5 + 32) : Math.round(props.data.temp.min)}°</span>
                </div>
            </div>
        );
    }
}
