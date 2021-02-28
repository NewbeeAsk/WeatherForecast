import {connect} from "react-redux";
import React from "react";
import WeatherTab from "./weatherTab";

class WeatherForecastView extends React.Component {
    constructor(props) {
        super(props);
    }
    i=1;
    render() {
        return (
            <div>
                {this.props.weatherData.map(forecast => (<WeatherTab key={this.i++} data={forecast} />))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weatherData: state.weather.weatherForecast,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
const WeatherTabContainerComponent = connect(mapStateToProps, mapDispatchToProps)(WeatherForecastView);

export default WeatherTabContainerComponent;
