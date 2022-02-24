import React, { useState, useEffect, useCallback } from 'react';
import { Location } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { WeatherCard } from './weatherCard/WeatherCard';

interface LocationState {
    lat: number,
    long: number,
    placeName?: string
}

export const WeatherPage:React.FC = () => {
    const [weatherData, setWeatherData] = useState<object | null>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const location:Location = useLocation();
    const myState:LocationState = location.state as LocationState;

    const fetchWeatherData = useCallback(async () => {
        setIsLoading(true);
        await fetch(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/onecall?lat=${myState.lat}&lon=${myState.long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                if(!res.ok) {
                    setIsLoading(false);
                    setWeatherData(null);
                }
                return res.json();
            })
            .then(data => {
                setWeatherData(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, [myState]);

    useEffect(():void => {
        fetchWeatherData();
    }, [fetchWeatherData]);

    return(
        <div>
            {
                isLoading ?
                    <h1>Loading...</h1> :
                    (!weatherData) ? <h1>Could not retrive weather data</h1> :
                        <WeatherCard weatherData={ weatherData } />
            }
        </div>
    );
}
