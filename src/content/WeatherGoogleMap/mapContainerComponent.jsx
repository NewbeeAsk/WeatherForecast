import {connect} from "react-redux";
import {searchWeatherByCityThunk, searchWeatherByCoordinatesThunk} from "../../redux/weatherReducer";
import Maps from "./map";

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
const WeatherMapContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Maps);

export default WeatherMapContainerComponent;