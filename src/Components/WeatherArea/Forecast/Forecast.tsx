import { appConfig } from "../../../Utils/AppConfig";
import { formatDateString } from "../../../Utils/FormatDateString";
import { getDayOfWeek } from "../../../Utils/GetDayOfWeek";
import "./Forecast.css";

export function Forecast(props: any): JSX.Element {

    const forecast = props.forecast?.data;

    return (
        <div className="Forecast">

			{props.forecast &&
                <div className="container">

                    <div>
                        <h2>{getDayOfWeek(forecast[1].valid_date)}</h2>
                        <h2>{formatDateString(forecast[1].valid_date)}</h2>
                        <h3>Average: {forecast[1].temp}°C</h3>
                        <img src={appConfig.IconsUrl + forecast[1].weather.icon + ".png"}/>
                        <h3>{forecast[1].weather.description}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{forecast[1].low_temp}°C</td>
                                    <td>{forecast[1].high_temp}°C</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2>{getDayOfWeek(forecast[2].valid_date)}</h2>
                        <h2>{formatDateString(forecast[2].valid_date)}</h2>
                        <h3>Average: {forecast[2].temp}°C</h3>
                        <img src={appConfig.IconsUrl + forecast[2].weather.icon + ".png"}/>
                        <h3>{forecast[2].weather.description}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{forecast[2].low_temp}°C</td>
                                    <td>{forecast[2].high_temp}°C</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2>{getDayOfWeek(forecast[3].valid_date)}</h2>
                        <h2>{formatDateString(forecast[3].valid_date)}</h2>
                        <h3>Average: {forecast[3].temp}°C</h3>
                        <img src={appConfig.IconsUrl + forecast[3].weather.icon + ".png"}/>
                        <h3>{forecast[3].weather.description}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{forecast[3].low_temp}°C</td>
                                    <td>{forecast[3].high_temp}°C</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2>{getDayOfWeek(forecast[4].valid_date)}</h2>
                        <h2>{formatDateString(forecast[4].valid_date)}</h2>
                        <h3>Average: {forecast[4].temp}°C</h3>
                        <img src={appConfig.IconsUrl + forecast[4].weather.icon + ".png"}/>
                        <h3>{forecast[4].weather.description}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{forecast[4].low_temp}°C</td>
                                    <td>{forecast[4].high_temp}°C</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h2>{getDayOfWeek(forecast[5].valid_date)}</h2>
                        <h2>{formatDateString(forecast[5].valid_date)}</h2>
                        <h3>Average: {forecast[5].temp}°C</h3>
                        <img src={appConfig.IconsUrl + forecast[5].weather.icon + ".png"}/>
                        <h3>{forecast[5].weather.description}</h3>
                        <table>
                            <thead>
                                <tr>
                                    <th>Lowest</th>
                                    <th>Highest</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{forecast[5].low_temp}°C</td>
                                    <td>{forecast[5].high_temp}°C</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            }

        </div>
    );
}
