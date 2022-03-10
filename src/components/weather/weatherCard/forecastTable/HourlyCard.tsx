import React, { useCallback } from 'react';
import styled from 'styled-components';
import { uppercaseWordsInString } from '../../../../helpers/StringConversion';

interface HourlyCardProps {
    hour: any;
}
const CardContainer = styled.div`
    margin-right: 1rem;
    background: rgba(141, 153, 174, 0.5);
    text-align: center;
    width: 12rem;
    flex-shrink: 0;
`;
const CardTitle = styled.h6`
    font-size: 0.85rem;
    font-weight: 300;
    color: #555;
`;
const CardData = styled.p`
    font-size: 1.1rem;
`;
export const HourlyCard: React.FC<HourlyCardProps> = ({ hour }) => {
    const formatTime = useCallback((utc: number): string => {
        const date = new Date(utc * 1000);
        return `${date.getHours()}:00`;
    }, []);

    return (
        <CardContainer>
            <p style={{ 'textAlign': 'center', 'textDecoration': 'underline', 'fontSize': '1.25rem' }}><b>{formatTime(hour.dt)}</b></p>
            <img src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} alt={hour.weather[0].description} loading='lazy' />
            <p style={{ 'fontWeight': 'bold', 'textAlign': 'center', 'fontSize': '1.4rem' }}>{uppercaseWordsInString(hour.weather[0].description)}</p>
            <CardTitle>Temperature</CardTitle>
            <CardData>{hour.temp}&deg;C</CardData>
            <CardTitle>Feels Like</CardTitle>
            <CardData>{hour.feels_like}&deg;C</CardData>
            <CardTitle>Humidity</CardTitle>
            <CardData>{hour.humidity}%</CardData>
        </CardContainer>
    );
};
