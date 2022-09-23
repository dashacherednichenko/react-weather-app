import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props){
    let description = props.data.weather[0].description;
    let updated = formatDate(props.data.dt * 1000);
    let citySelect = props.data.name;

    function formatDate(timestamp) {
        let now = new Date(timestamp);
        let day = now.getDay();
        let days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        let hours = now.getHours();
        let minutes = now.getMinutes();
        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return `${days[day]}, ${hours}:${minutes}`;
    }

    return (
        <div className="WeatherInfo weather-summary">
            <div className="weather-summary-header">
                <h1 id="town">{citySelect}</h1>
                <div className="weather-detail__text">
                    last updated at:{" "}
                    <span id="current_date">{updated}</span>
                </div>
                <div className="weather-detail__text" id="weatherDesc">
                    {description}
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="clearfix">
                        <div className="float-left weather-icon">
                            <WeatherIcon code={props.data.weather[0].icon} size={52}/>
                        </div>
                        <WeatherTemp celsius={props.data.main.temp}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="weather-detail__text">
                        Humidity: <span id="humidity">{props.data.main.humidity}</span>%
                    </div>
                    <div className="weather-detail__text">
                        Wind: <span id="wind">{Math.round(props.data.wind.speed)}</span>km/h
                    </div>
                </div>
            </div>
        </div>
    )
}