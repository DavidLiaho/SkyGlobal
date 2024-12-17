class AppConfig {
    // public ForecastApiUrl: string = "https://api.weatherbit.io/v2.0/forecast/daily?&days=7&key=067b5c2b2a944362b691cc8fa5a8dfa2&city="; // 30days Trial key
    public ForecastApiUrl: string = "https://api.weatherbit.io/v2.0/forecast/daily?&days=7&key=35afe168def0467b897727302a9f58bf&city="; // Free Plan key
    public currentWeatherUrl: string = "https://api.weatherbit.io/v2.0/current/?key=35afe168def0467b897727302a9f58bf&city="
    public IconsUrl: string = "https://cdn.weatherbit.io/static/img/icons/";
    public ApiKey: string = "35afe168def0467b897727302a9f58bf";
    public CountriesUrl: string = "https://api.countrystatecity.in/v1/countries/";
    public CountryCityApiKey = "ck1VbHNaODQ2RUJSbDA4UFBxaHpLTmVTNU9FbEhYWlpCUnNDbUpWZg==";
}

export const appConfig = new AppConfig();
