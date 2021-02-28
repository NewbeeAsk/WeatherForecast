import {weatherAPI} from "../API/API";

const CURRENT_CITY_WEATHER_FORECAST = 'CURRENT_CITY_WEATHER_FORECAST';
const COORDINATE_WEATHER_FORECAST = 'COORDINATE_WEATHER_FORECAST';

let initialState = {
    weatherForecast: [],
    currentCityWeatherForecast: {},
};

const weatherReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
    };

    switch (action.type) {
        case CURRENT_CITY_WEATHER_FORECAST:
            stateCopy = {...stateCopy, currentCityWeatherForecast: action.data}
            return stateCopy;
        case COORDINATE_WEATHER_FORECAST:
            stateCopy = {...stateCopy, weatherForecast: [action.data]}
            return stateCopy;
        default:
            return state;
    }
}

export const searchWeatherByCity = (data) => ({type: CURRENT_CITY_WEATHER_FORECAST, data});
export const searchWeatherByCoordinates = (data) => ({type: COORDINATE_WEATHER_FORECAST, data});

export const searchWeatherByCityThunk = (city) => (dispatch) => {
    return weatherAPI.getCityWeather(city)
        .then(response => {
            if (response.status === 200) {
                let data = response.data
                dispatch(searchWeatherByCity(data))
            }
        })
}

export const searchWeatherByCoordinatesThunk = (lat, lon) => (dispatch) => {
    return weatherAPI.getCoordinatesWeather(lat, lon)
        .then(response => {
            if (response.status === 200) {
                let data = response.data
                dispatch(searchWeatherByCoordinates(data))
            }
        })
}
export default weatherReducer;


