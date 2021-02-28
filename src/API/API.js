import axios from "axios";

const instance = axios.create({
        baseURL: "https://api.openweathermap.org/data/2.5/",
        responseType: "json"
    }
)

export const weatherAPI = {

    API_KEY: "f1b9cc063a5e8272c59b92eed536a26a",

    getCityWeather(city) {
        return instance.get(`weather?q=${city}&appid=${this.API_KEY}`)
            .then(response => response);
    },

    getCoordinatesWeather(lat, lon) {
        return instance.get(`weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`)
            .then(response => response);
    },
}
