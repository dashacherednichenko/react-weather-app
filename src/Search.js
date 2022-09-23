import React, {useState} from "react";
import axios from "axios";
// import {setGlobalState, useGlobalState} from "./App";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
    const [ready, setReady] = useState(false);
    // const [unit] = useGlobalState('defaultUnit');
    const apiKey = "061af8862776400f0f98509421517421";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
    let units = "metric";
    let [city, setCity] = useState("Kyiv");
    let [weather, setWeather] = useState([{}]);


    function showTemp(res) {
        setWeather(res.data);
        setReady(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.length > 0) {
            search();
        }
    }

    function changeCity(event) {
        setCity(event.target.value);
    }

    function search() {
        axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=${units}`).then(showTemp);
    }

    if (ready) {
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
                    </div>
                    <WeatherInfo data={weather}/>
                    <WeatherForecast coordinates={weather.coord}/>
                </div>
            </div>
        );
    } else {
        search()
        return "Loading"
    }
}
