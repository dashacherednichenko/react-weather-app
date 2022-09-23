import React from "react";
import "./Weather.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
// import {setGlobalState, useGlobalState} from "./App";

export default function Weather() {
    // const city = useGlobalState('defaultCity');
    return (
        <div className="Weather">
            <div className="container">
                <div id="weather" className="weather-block">
                    <div>
                        <Header />
                        <div>
                            <Search/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
