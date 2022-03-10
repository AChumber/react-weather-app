import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import styled from 'styled-components';
import { uppercaseWordsInString } from '../../../helpers/StringConversion';
import { removeLocation } from '../../../redux/slices/locationSlice';


interface LocationTileProps {
    locationName: string,
    geo: {
        lat: number,
        long: number
    }
}
const LocationContainer = styled.div`
    border: 1px dashed rgba(43, 45, 66, 0.3);
    background: rgba(0, 0, 0, 0.15);
    min-height: 9rem;
    text-align: center;
`;
const LocationRemoveBtn = styled.button`
    margin-top: 0.5rem;
    width: 100%;
    padding: 0.75rem 0;
    font-size: 0.8rem;
    border: none;
    transition: background 0.15s ease-in, color 0.1s ease-out;
    cursor: pointer;
    &:hover {
        background: #2B2D42;
        color: #FEFEFE;
    }
`;

export const LocationTile:React.FC<LocationTileProps> = ({ locationName, geo }) => {
    const dispatch = useAppDispatch();
    const [weatherData, setWeatherData] = useState<any>({});

    //Fetch and display current weather
    useEffect(() => {
        (async () => {
            await fetch(`${process.env.REACT_APP_API_BASE_URL}/data/2.5/weather?lat=${geo.lat}&lon=${geo.long}&appid=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if(!res.ok) {
                        console.log(`Could not fetch data for ${locationName}`);
                        setWeatherData({
                            error: true
                        });
                    }
                    return res.json();
                })
                .then(data => setWeatherData(data))
                .catch(err => console.log(err));
        })()
    }, [])

    return(
        <LocationContainer>
            <p>{ locationName }</p>
            {
                (Object.keys(weatherData).includes("weather") && Object.keys(weatherData).length > 0) 
                ? (
                    <div>
                        <img 
                            src={ `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` }
                            alt={ weatherData.weather[0].description } />
                        <p>{ uppercaseWordsInString(weatherData.weather[0].description) }</p>
                        <LocationRemoveBtn onClick={ () => dispatch(removeLocation(locationName)) }>
                            -Remove Location
                        </LocationRemoveBtn>
                    </div>
                )
                : (
                    <div>
                        <p>Error fetching location weather data</p>
                    </div>
                )
            }
        </LocationContainer>
    );
}