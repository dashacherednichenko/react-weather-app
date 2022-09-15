import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import DayForecast from "./DayForecast";

import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <div className="container">
                <div id="weather" className="weather-block">
                    <div>
                        <Header />
                        <div>
                            <div className="">
                                <div>
                                    <div className="clearfix">
                                        <form className="float-left" id="search_form">
                                            <input
                                                type="text"
                                                placeholder="Enter a city"
                                                autoComplete="off"
                                                id="city_input"
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
                                            <h1 id="town">Kyiv</h1>
                                            <div className="weather-detail__text">
                                                last updated at:{" "}
                                                <span id="current_date">Sunday 13:05</span>
                                            </div>
                                            <div className="weather-detail__text" id="weatherDesc">
                                                Sunny
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
                                                        <span id="temperature">22</span>
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
                                                    Humidity: <span id="humidity">57</span>%
                                                </div>
                                                <div className="weather-detail__text">
                                                    Wind: <span id="wind">5</span>km/h
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
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
