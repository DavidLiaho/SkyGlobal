class AppConfig {
    public ApiKey: string = process.env.REACT_APP_WEATHERBIT_API_KEY
    
    public CountryCityApiKey: string = process.env.REACT_APP_COUNTRIES_API_KEY
    public ForecastApiUrl: string = `https://api.weatherbit.io/v2.0/forecast/daily?&days=7&key=${this.ApiKey}&city=`; // Free Plan key
    public currentWeatherUrl: string = `https://api.weatherbit.io/v2.0/current/?key=${this.ApiKey}&city=`
    public IconsUrl: string = "https://cdn.weatherbit.io/static/img/icons/";
    public CountriesUrl: string = "https://api.countrystatecity.in/v1/countries/";
}

export const appConfig = new AppConfig();