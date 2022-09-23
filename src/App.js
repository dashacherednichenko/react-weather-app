import React from "react";
import './App.css';
import Weather from "./Weather"
import {createGlobalState} from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    defaultUnit: 'metric',
    defaultCity: 'Kyiv'
});

export {useGlobalState, setGlobalState};


function App() {
    return (
        <div className="App">
            <Weather/>
        </div>
    );
}

export default App;
