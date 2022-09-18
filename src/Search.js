import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DayForecast from "./DayForecast";

export default function Search() {
    let apiKey = "061af8862776400f0f98509421517421";
    let [city, setCity] = useState("");
    let units = "metric";
    let [citySelect, setCitySelect] = useState("Kyiv");
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
    let [temp, setTemp] = useState(22);
    let [description, setDescription] = useState("Sunny");
    let [humidity, setHumidity] = useState(57);
    let [wind, setWind] = useState(5);
    let [icon, setIcon] = useState("http://openweathermap.org/img/wn/01d@2x.png");
    let [updated, setUpdated] = useState("Sunday 13:05");
    let [coord, setCoord] = useState({});
    let [forecastData, setForecastData]=useState([{}]);

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

    function displayForecast(res) {
        setForecastData(res.data.daily);
        // console.log('forecastData', forecastData);
    }

    function getForecast(coord, unit) {
        // console.log('coord', coord);
        let apiUrlDays = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&exclude=hourly,minutely&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrlDays).then(displayForecast);
    }

    function showTemp(res) {
        // console.log('showTemp',res, res.data.name);
        setCitySelect(res.data.name);
        setTemp(res.data.main.temp);
        setDescription(res.data.weather[0].description);
        setHumidity(res.data.main.humidity);
        setWind(res.data.wind.speed);
        setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`);
        setUpdated(formatDate(res.data.dt * 1000));
        setCoord(res.data.coord);
        getForecast(res.data.coord, 'metric');
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.length > 0) {
            let apiKey = "061af8862776400f0f98509421517421";
            let units = "metric";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

            axios.get(apiUrl).then(showTemp);
        }
        // else {
        //     setCurrentWeather([]);
        // }
        // else {
        //     setCurrentWeather([]);
        // }
    }

    function changeCity(event) {
        // console.log('city', event.target.value);
        setCity(event.target.value);
    }

    // function first() {
    // console.log('TEST', apiUrl, citySelect, apiKey);
        // axios.get(`${apiUrl}?q=${citySelect}&appid=${apiKey}&units=metric`).then(showTemp);
    // }
    // first();

    return (
    <div className="Search">
        <div>
            <div className="clearfix">
                <form className="float-left" id="search_form" onSubmit={handleSubmit}>
                    <input
                        type="search"
                        placeholder="Enter a city"
                        autoComplete="off"
                        id="city_input"
                        onChange={changeCity}
                    />
                    <input
                        type="submit"
                        className="btn btn-primary"
                        value="Search"
                        readOnly
                    />
                </form>
                <button
                    className="float-left btn btn-success"
                    id="currentCityBtn"
                >
                    Current
                </button>
            </div>
            <div className="weather-summary">
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
                            <span className="weather-emoji">
                              <img
                                  src={icon}
                                  alt="Clear"
                                  id="icon"
                                  className="float-left"
                              />
                              ️
                            </span>
                            </div>
                            <div className="weather-temp weather-temp--today">
                                <span id="temperature">{Math.round(temp)}</span>
                                <span className="units">
                              <span
                                  className="units_link active"
                                  id="celsius-link"
                              >
                                °C
                              </span>{" "}
                                    |
                              <span className="units_link" id="fahrenheit-link">
                                °F
                              </span>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="weather-detail__text">
                            Humidity: <span id="humidity">{humidity}</span>%
                        </div>
                        <div className="weather-detail__text">
                            Wind: <span id="wind">{Math.round(wind)}</span>km/h
                        </div>
                    </div>
                </div>
            </div>
            <div className="forecast" id="forecast">
                <div className="row">
                    {forecastData.map(function (data, i) {
                        return i < 6 ?
                                <DayForecast data={data} key={i}/>
                            : null
                            ;
                    })}
                </div>
            </div>
        </div>
    </div>
    );
}
