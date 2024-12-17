import axios from "axios";
import { appConfig } from "../Utils/AppConfig";

class WeatherServices {

    public async getForecast(city: string) {
        const response = await axios.get(appConfig.ForecastApiUrl + city);
        const forecastArray = response.data;
        return forecastArray;
    }

    public async getCurrentWeather(city: string) {
        const response = await axios.get(appConfig.currentWeatherUrl + city);
        const currentWeather = response.data;
        return currentWeather;
    }
}

export const weatherServices = new WeatherServices();
