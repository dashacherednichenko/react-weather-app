import React from "react";
// import {setGlobalState, useGlobalState} from "./App";

import "./Header.css";

export default function Header() {
    // const city = useGlobalState('defaultCity');

    // function changeSearchCity(event) {
    //     event.preventDefault();
    //     console.log('event', event, event.target.innerText);
    //     setGlobalState("defaultCity", event.target.innerText);
    // }
    return (
        <header className="Header">
            <ul className="navigation-cities">
                {/*<li className="navigation-city">*/}
                {/*    <a onClick={changeSearchCity}>Irpin</a>*/}
                {/*</li>*/}
                {/*<li className="navigation-city">*/}
                {/*    <a onClick={changeSearchCity}>Bucha</a>*/}
                {/*</li>*/}
                {/*<li className="navigation-city">*/}
                {/*    <a onClick={changeSearchCity}>Kherson</a>*/}
                {/*</li>*/}
                {/*<li className="navigation-city">*/}
                {/*    <a onClick={changeSearchCity}>Mariupol</a>*/}
                {/*</li>*/}
            </ul>
        </header>
    );
}
