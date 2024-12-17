import { appConfig } from "../../../Utils/AppConfig";
import { Arrow } from "../Arrow/Arrow";
import "./Current.css";


export function Current(props: any): JSX.Element {

    const currentForecast = props.forecast?.data[0];
    const currentWeather = props.current?.data[0];

    return (
        <div className="Current">

            {props.forecast &&
            
            <div className="border">
                    <h1>{props.forecast?.city_name}</h1>
                    <h2>Today - {new Date()
                        .toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit'
                        })}
                    </h2>
                    <h1>{currentWeather?.temp}°C</h1>
                    <img src={appConfig.IconsUrl + currentForecast.weather.icon + ".png"} />
                    <h3>{currentForecast.weather.description}</h3>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                    <th>Humidity</th>
                                    <th>Wind Speed</th>
                                    <th>Wind Direction</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{currentForecast.low_temp}°C</td>
                                    <td>{currentForecast.high_temp}°C</td>
                                    <td>{currentForecast.rh}%</td>
                                    <td>{currentForecast.wind_spd}(m/s)</td>
                                    <td>{currentForecast.wind_dir}° &nbsp; <Arrow degree={currentForecast.wind_dir + 180} /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </div>

    );
}