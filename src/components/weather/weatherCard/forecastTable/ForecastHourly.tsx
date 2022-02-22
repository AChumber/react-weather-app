import React, { useCallback } from 'react';
import styled from 'styled-components';
import { uppercaseWordsInString } from '../../../../helpers/StringConversion';

interface Props{
    hourly: any
}

const StyledTBody = styled.tbody`position:relative;`;
const StyledTR = styled.tr`
    position: relative;
    width: 100%;
    background: rgba(43, 45, 66, 0.1);
    outline: rgba(43, 45, 66, 1);
    overflow-x: auto;
`;
const StyledTD = styled.td`
    position: absolute;
    width: 100%;
    display: flex;
    overflow-x: auto;
    background: rgba(43, 45, 66, 0.1);
`;

export const ForecastHourly: React.FC<Props> = ({ hourly }) => {
    return (
        <StyledTBody>
            <StyledTR>
                <StyledTD>
                    {/* Card showing details go here */}
                    {
                        hourly.length > 0 ?
                        hourly.map((hour: { dt: number; }) => <HourlyCard key={hour.dt} hour={ hour } />) :
                        <p>No data for this date is available</p>
                    }
                </StyledTD>
            </StyledTR>
        </StyledTBody>
    )
}

interface HourlyCardProps {
    hour: any
}
const CardContainer = styled.div`
    padding: 1rem 2rem;
    margin-right: 1rem;
    background: rgba(141, 153, 174, 0.5);
    margin-bottom: 0.5rem;
`;
const CardTitle = styled.h6`
    font-size: 0.85rem;
    font-weight: 300;
    color: #555;
`;

const HourlyCard:React.FC<HourlyCardProps> = ({ hour }) => {
    const formatTime = useCallback((utc:number):string => {
        const date = new Date(utc * 1000);
        return `${date.getHours()}:00`
    }, []);

    return(
        <CardContainer>
            <p style={{'textAlign':'center', 'textDecoration':'underline', 'fontSize':'1.25rem'}}><b>{ formatTime(hour.dt) }</b></p>
            <img src={ `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png` } alt={ hour.weather[0].description } loading='lazy' />
            <p style={{'fontWeight':'bold', 'textAlign':'center'}}>{ uppercaseWordsInString(hour.weather[0].description) }</p>
            <CardTitle>Temperature</CardTitle>
            <p>{ hour.temp }&deg;C</p>
            <CardTitle>Feels Like</CardTitle>
            <p>{ hour.feels_like }&deg;C</p>
            <CardTitle>Humidity</CardTitle>
            <p>{ hour.humidity }%</p>
        </CardContainer>
    )
};