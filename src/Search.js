import React, { useState } from "react";
import axios from "axios";
import "./Search.css";
import DayForecast from "./DayForecast";

export default function Search() {
    let [city, setCity] = useState("");
    let [citySelect, setCitySelect] = useState("Kyiv");
    let [temp, setTemp] = useState(22);
    let [description, setDescription] = useState("Sunny");
    let [humidity, setHumidity] = useState(57);
    let [wind, setWind] = useState(5);
    let [currentWeather, setCurrentWeather] = useState([]);

    function showTemp(res) {
        console.log('showTemp',res);
        setCitySelect(res.data.name);
        setTemp(res.data.main.temp);
        setDescription(res.data.weather[0].description);
        setHumidity(res.data.main.humidity);
        setWind(res.data.wind.speed);
        setCurrentWeather([
            { name: "temperature", value: `${Math.round(res.data.main.temp)} °C` },
            { name: "Description", value: res.data.weather[0].description },
            { name: "Humidity", value: `${res.data.main.humidity}%` },
            { name: "Wind", value: `${res.data.wind.speed}km/h` },
            {
                name: "icon",
                value: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`,
                alt: "res.data.weather[0].description"
            }
        ]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.length > 0) {
            let apiKey = "061af8862776400f0f98509421517421";
            let units = "metric";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

            axios.get(apiUrl).then(showTemp);
        } else {
            setCurrentWeather([]);
        }
    }

    function changeCity(event) {
        console.log('city', event.target.value);
        setCity(event.target.value);
    }

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
                        <span id="current_date">Sunday 13:05</span>
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
                                  src="http://openweathermap.org/img/wn/01d@2x.png"
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
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                    <DayForecast dt="Sun" maxTemp={29} minTemp={20} />
                </div>
            </div>
        </div>
    </div>
    );
}
