import React from 'react'
import styled from 'styled-components';
import { StyledH3 } from '../../shared/FontStyles';
import { InfoCard } from './InfoCard';

interface Props {
    currentWeather: any
};

const CurrentWeatherContainer = styled.div`
    background: rgba(43, 45, 66, 0.05);
    border-radius: 5px;
    padding: 1.5rem;
`;
const CurrentWeatherCardsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media only screen and (max-width: 930px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 0.5rem;
    }
    @media only screen and (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 500px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const CurrentWeather: React.FC<Props> = ({ currentWeather }) => {
    return(
        <CurrentWeatherContainer>
            <StyledH3>Current Weather</StyledH3>
            <CurrentWeatherCardsContainer>
                <InfoCard info={ currentWeather.weather[0] } infoType='image' title={currentWeather.weather[0]['description']}/>
                <InfoCard info={ currentWeather.temp } infoType='degree' title='Temperature' />
                <InfoCard info={ currentWeather.feels_like } infoType='degree' title='Feels Like' />
                <InfoCard info={ currentWeather.humidity } infoType='percent' title='Humidity' />
            </CurrentWeatherCardsContainer>
        </CurrentWeatherContainer>
    )
}

export default CurrentWeather