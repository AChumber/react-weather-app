import React from 'react';
import styled from 'styled-components';
import { HourlyCard } from './HourlyCard';

interface Props{
    hourly: any
}

const ForeCastHourlyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;
    background: rgba(43, 45, 66, 0.1);
    margin-bottom: 1rem;

    &::-webkit-scrollbar {
        width: 1px;
    }
    &::-webkit-scrollbar-track {
        background: rgba(242, 249, 255, 1);
    }

    &::-webkit-scrollbar-thumb {
        background: #2B2D42;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #5E628A;
    }
`;

export const ForecastHourly: React.FC<Props> = ({ hourly }) => {
    return (
        <ForeCastHourlyContainer>
            {/* Card showing details go here */}
            {
                hourly.length > 0 ?
                hourly.map((hour: { dt: number; }) => <HourlyCard key={hour.dt} hour={ hour } />) :
                <p>No data for this date is available</p>
            }
        </ForeCastHourlyContainer>
    )
}

