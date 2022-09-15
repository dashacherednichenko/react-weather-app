import React from "react";

import "./DayForecast.css";

export default function DayForecast(props) {
    return (
        <div className="DayForecast col-sm-2">
            <div className="day">{props.dt}</div>
            <div className="emoji">
        <span className="weather-emoji">
          <img
              src="http://openweathermap.org/img/wn/04d@2x.png"
              alt="Clear"
              className=""
          />
          ️
        </span>
            </div>
            <div className="temperature">
                <span className="temp-max">{props.maxTemp}°</span>
                <span className="temp-min">{props.minTemp}°</span>
            </div>
        </div>
    );
}
