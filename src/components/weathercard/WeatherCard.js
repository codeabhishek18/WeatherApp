import weathercard from './WeatherCard.module.css';

const WeatherCard = ({title, data, unit}) =>
{
    return(
        <div className={weathercard.container}>
            <h3>{title}</h3>
            <p>{data} {unit}</p>
        </div>
    )
}

export default WeatherCard;