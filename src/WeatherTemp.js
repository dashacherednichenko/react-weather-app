import React, {useState} from "react";

export default function WeatherTemp(props) {
    let [unit, setUnit] = useState('metric');

    function convertTemp(event) {
        let click_unit = event.target;
        // console.log('event', event, event.target)
        if (click_unit.id === 'fahrenheit-link') {
            setUnit('imperial');
            // getForecast(coord, 'imperial');
        } else {
            setUnit('metric');
            // getForecast(coord, 'metric');
        }

    }

    return (
        <div className="weather-temp weather-temp--today">
            <span
                id="temperature">{unit === 'metric' ? Math.round(props.celsius) : Math.round(props.celsius * 9 / 5 + 32)}</span>
            <span className="units">
                <span
                    className={`units_link ${unit === 'metric' ? "active" : ""}`}
                    id="celsius-link" onClick={convertTemp}
                >
                    °C
                </span>{" "}
                |
                <span className={`units_link ${unit === 'imperial' ? "active" : ""}`} id="fahrenheit-link"
                      onClick={convertTemp}>
                    °F
                </span>
            </span>
        </div>
    );
}