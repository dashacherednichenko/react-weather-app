import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Search() {
    const [ready, setReady] = useState(false);
    const apiKey = "061af8862776400f0f98509421517421";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
    let units = "metric";
    let [city, setCity] = useState("Kyiv");
    let [weather, setWeather] = useState([{}]);


    function showTemp(res) {
        setWeather(res.data);
        // console.log('showTemp', res, res.data.name, res.data, weather);
        setReady(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (city.length > 0) {
            search();
        }
    }

    function changeCity(event) {
        // console.log('city', event.target.value);
        setCity(event.target.value);
    }
    function search() {
        axios.get(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`).then(showTemp);
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
                        {/*<button*/}
                        {/*    className="float-left btn btn-success"*/}
                        {/*    id="currentCityBtn"*/}
                        {/*>*/}
                        {/*    Current*/}
                        {/*</button>*/}
                    </div>
                    <WeatherInfo data={weather} />
                    {/*<WeatherForecast coordinates={weather.coord}/>*/}
                </div>
            </div>
        );
    }
    else {
        search()
        return "Loading"
    }
}
