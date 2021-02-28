import './App.css';
import React from "react";
import {ContentContainer} from "./content/mainPage";
import WeatherMapContainerComponent from "./content/WeatherGoogleMap/mapContainerComponent";

function App() {
    return (
            <div className="app-wrapper">
                <ContentContainer className="app-autocomplete"/>
                <WeatherMapContainerComponent className="app-map"/>
            </div>
    );
}

export default App;
