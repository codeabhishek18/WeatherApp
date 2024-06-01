import dashboard from './Dashboard.module.css';
import { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../weathercard/WeatherCard';

const Dashboard = () =>
{
    const [ city, setCity ] = useState('');
    const [ weatherData, setWeatherData ] = useState([]);

    const getWeatherData = async() =>
    {
        try
        {
            let url = `http://api.weatherapi.com/v1/current.json?key=7646e2e709a24d079be84925242502&q=${city}&aqi=no`
            const response = await axios(url);
            setWeatherData(response.data);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        getWeatherData();
    }

    return(
        <div className={dashboard.container}>
            <form onSubmit={handleSubmit} className={dashboard.searchbar}>
                <input name="city" placeholder="Enter city name" onChange={(e)=>setCity(e.target.value)}/>
                <button>Search</button>
            </form>
            {weatherData && <div className={dashboard.cards}>
                <WeatherCard title="Temperature" data={weatherData.current?.temp_c} unit="°C"/>
                <WeatherCard title="Humidity" data={weatherData.current?.humidity} unit="%"/>
                <WeatherCard title="Condition" data={weatherData.current?.condition.text} unit=""/>
                <WeatherCard title="Wind Speed" data={weatherData.current?.wind_kph} unit="kph"/>
            </div>}
        </div>
    )
}

export default Dashboard;