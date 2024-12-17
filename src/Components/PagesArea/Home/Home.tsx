import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { CityModel } from "../../../Models/CityModel";
import { weatherServices } from "../../../Services/WeatherServices";
import { appConfig } from "../../../Utils/AppConfig";
import { countries } from "../../../Utils/Countries";
import { notify } from "../../../Utils/Notify";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { Current } from "../../WeatherArea/Current/Current";
import { Forecast } from "../../WeatherArea/Forecast/Forecast";
import "./Home.css";

export function Home(): JSX.Element {

    const [selectedCity, setSelectedCity] = useState<string>('');
    const [cities, setCities] = useState<CityModel[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [forecast, setForecast] = useState<any>();
    const [failed, setFailed] = useState<boolean>(false);
    const [currentWeather, setCurrentWeather] = useState();

    useEffect(() => {
        // Ask for geolocation:
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetchCityName(latitude, longitude);
            },
            err => {
                return;
            }
        );
    }, []);

    async function fetchCityName(latitude: number, longitude: number): Promise<void> {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            if (response.data) {
                const data = response.data;
                setSelectedCountry(data.address.country_code.toUpperCase());
                const city = data.address.city || data.address.town || data.address.village;
                if (city) {
                    const fixedCity = city.split("'").join("");
                    setSelectedCity(fixedCity);
                }
            }

        }
        catch (err: any) {
        }
    }

    function handleCountryChange(event: SelectChangeEvent) {
        setSelectedCountry(event.target.value as string);
    };

    function handleCityChange(event: SelectChangeEvent) {
        setSelectedCity(event.target.value as string);
    };

    // Get cities of selectedCountry:
    useEffect(() => {
        if (selectedCountry) {
            setSelectedCity('');
            const options = {
                headers: {
                    'X-CSCAPI-KEY': appConfig.CountryCityApiKey
                }
            };

            axios.get<CityModel[]>(`https://api.countrystatecity.in/v1/countries/${selectedCountry}/cities`, options)
                .then(response => {
                    if (response.data.length === 0) {
                        notify.error("No cities found, <br /> Please try another country");
                        setFailed(true);
                    }
                    else {
                        setFailed(false);
                        setCities(response.data);
                    }

                })
                .catch(err => notify.error(err));
        }
    }, [selectedCountry]);

    // Fetch forecast for selectedCity:
    useEffect(() => {
        if (selectedCity) {
            const fixedCity = selectedCity.split("'").join("");

            weatherServices.getForecast(fixedCity)
                .then(response => {
                    setForecast(response);
                    notify.success(`Showing ${response.city_name} weather`);
                })
                .catch(err => notify.error(err));

            weatherServices.getCurrentWeather(fixedCity)
                .then(response => setCurrentWeather(response))
                .catch(err => notify.error(err));
            
        }
    }, [selectedCity]);

    return (
        <div className="Home">

            <br />

            <FormControl>
                <InputLabel>Country</InputLabel>
                <Select
                    value={selectedCountry}
                    label="Country"
                    style={{ width: 200 }}
                    onChange={handleCountryChange}
                >
                    {countries.map(country => <MenuItem key={country.iso2} value={country.iso2}>{country.name}</MenuItem>)}
                </Select>
            </FormControl>

            <br />

            {selectedCountry && cities.length === 0 && !failed && <Spinner />}

            {selectedCountry && cities.length > 0 && !failed &&
                <FormControl>
                    <InputLabel>City</InputLabel>
                    <Select
                        value={selectedCity}
                        label="City"
                        style={{ width: 200 }}
                        onChange={handleCityChange}
                    >
                        {cities.map(city => <MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>)}
                    </Select>
                </FormControl>
            }

            {selectedCity && !forecast && <Spinner />}

            <br />

            <Current forecast={forecast} current={currentWeather} />

            <br />

            <Forecast forecast={forecast} />

        </div>
    );
}
