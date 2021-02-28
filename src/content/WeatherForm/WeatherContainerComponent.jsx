import {connect} from "react-redux";
import WeatherForm from "./weatherForm";
import {searchWeatherByCityThunk, searchWeatherByCoordinatesThunk} from "../../redux/weatherReducer";

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchWeatherByCity: (city) => {
            dispatch(searchWeatherByCityThunk(city.name));
        },
        searchWeatherByCoordinates: (city) => {
            if (city != null) {
                dispatch(searchWeatherByCoordinatesThunk(city.lat, city.lon));
            }
        }
    }
}
const WeatherContainerComponent = connect(mapStateToProps, mapDispatchToProps)(WeatherForm);

export default WeatherContainerComponent;
