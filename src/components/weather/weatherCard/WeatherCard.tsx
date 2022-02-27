import React from 'react';
import styled from 'styled-components';
import { StyledH1 } from '../../shared/FontStyles';
import CurrentWeather from './CurrentWeather';
import { Forecast } from './forecastTable/Forecast';
import { WeatherAlert } from './WeatherAlert';

interface Props {
    weatherData: any,
    placeName?: string
};

const StyledContainer = styled.div`
    width: clamp(80%, 80%, 85%);
    background: linear-gradient(91.53deg, #EDF2F4 1.86%, rgba(141, 153, 174, 0.75) 112.53%);
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translate(-50%, -25%);
    padding: 1rem;
`;
const StyledSpanTitle = styled.span`
    color: #111;
`;

export const WeatherCard: React.FC<Props> = ({weatherData, placeName}) => {
    return(
        <StyledContainer>
            <StyledH1>Weather - <StyledSpanTitle>{ placeName ? placeName : 'Your Location' }</StyledSpanTitle></StyledH1>
            <CurrentWeather currentWeather={ weatherData.current } />
            {
                weatherData.hasOwnProperty('alerts') && <WeatherAlert alerts={ weatherData.alerts } />
            }
            { console.log(weatherData) }
            <Forecast daily={ weatherData.daily } hourly={ weatherData.hourly } />
        </StyledContainer>
    );
}
