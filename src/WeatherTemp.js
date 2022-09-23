import React, {useState} from "react";
import {setGlobalState, useGlobalState} from "./App";

export default function WeatherTemp(props) {
    const [unit] = useGlobalState('defaultUnit');

    function convertTemp(event) {
        let click_unit = event.target;
        // console.log("useGlobalState('defaultUnit')", useGlobalState('defaultUnit'));
        if (click_unit.id === 'fahrenheit-link') {
            // setUnit('imperial');
            setGlobalState("defaultUnit",'imperial');
        } else {
            // setUnit('metric');
            setGlobalState("defaultUnit",'metric');
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