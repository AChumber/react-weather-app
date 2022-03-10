import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ForecastHourly } from './ForecastHourly';

interface Props {
    daily: any,
    hourly: any,
    isActive?: boolean
    isDataAvailable?: boolean
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const StyledTable = styled.table`
    width: 100%;
    padding: 1rem;
    margin-bottom: 25rem;
`;
const StyledTR = styled.tr`
    width: 100%;
    overflow-x: scroll;
`;
const ForecastHeadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
    margin-top: 1rem;
`;
const ForeCastHeading = styled.th<Pick<Props, 'isActive' | 'isDataAvailable'>>`
    background: ${ props => props.isActive ? 'rgba(141, 153, 174, 0.5)' : 
                    !props.isDataAvailable ? 'rgba(0,0,0,0.1)' :'#EDF2F4' };
    ${ props => !props.isDataAvailable && 'color: grey;'}
    ${ props => props.isDataAvailable && 'cursor:pointer;' }
    padding: 0.5rem;
`;

export const Forecast: React.FC<Props> = ({ daily, hourly }) => {
    const [forecastHeadingTab, setForecastHeadingTab] = useState<number>(0);
    const [hourlyData, setHourlyData] = useState<{}>(() => {
        //slice the hourly data for today's hourly forecast initally
        return hourly.slice(0, 24 - (new Date()).getHours());
    });

    const formatHeading = useCallback((utc:number):string => {
        const date:Date = new Date(utc * 1000);
        const day = date.getDay() - 1;
        return `${days[day >= 0 ? day : days.length-1]} ${date.getDate()} / ${date.getMonth() + 1} `;
    }, []);

    const onTabHeadingClick = (index:number):void => {
        setForecastHeadingTab(index);
        //changed the hourly data based on the index of 'forecastHeadingTab' state
        const [start, end] = getSliceIndexFromTabIndex(index);
        setHourlyData(hourly.slice(start,end));
    };

    const getSliceIndexFromTabIndex = (index:number) => {
        if(index === 0) {
            return [0, 24 - (new Date()).getHours()];
        } else {
            const todaysLength:number = 24 - (new Date()).getHours();
            const startIndex:number = todaysLength + (24 * (index - 1));
            const endIndex:number = startIndex + 24;
            return [startIndex, endIndex];
        }
    }

    return (
        <> 
            <ForecastHeadingContainer>
                <ForeCastHeading
                    isActive={forecastHeadingTab === 0}
                    isDataAvailable 
                    onClick={() => onTabHeadingClick(0) }>Today</ForeCastHeading>
                {
                    daily.slice(1).map((day: { dt: number }, index: number) => (
                        <ForeCastHeading 
                            key={index} 
                            isActive={forecastHeadingTab === index+1}
                            isDataAvailable={!(index+1>2)}
                            onClick={() => onTabHeadingClick(index+1)}>{ formatHeading(day.dt) }</ForeCastHeading>
                    ))
                }
            </ForecastHeadingContainer>
            <ForecastHourly hourly={ hourlyData } />
        </>
    )
}