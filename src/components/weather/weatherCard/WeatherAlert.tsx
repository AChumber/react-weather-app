import React, { useCallback, useState } from 'react'
import styled from 'styled-components';
import { StyledH3 } from '../../shared/FontStyles';

interface Props {
    alerts: Array<any>
}

const AlertsContainer = styled.div`
    maring: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(217, 4, 41, 0.03);
`;

const alertContainerBorderColor = {
    yellow: '#F9E000',
    amber: '#F99500',
    red: '#F93C00'
}


export const WeatherAlert: React.FC<Props> = ({ alerts }) => {
    return(
        <AlertsContainer>
            <StyledH3>Weather Alerts</StyledH3>
            {
                alerts.length > 0 ?
                    <div>
                        {
                            alerts.map((alert, i) => <AlertCard key={i} alert={ alert } />)
                        }
                    </div>
                : <p>No Alerts in your area</p>
            }
        </AlertsContainer>
    );
};

interface AlertCardProps {
    alert: any
}
const StyledSingleAlertContainer = styled.div`
    width: 95%;
    margin: auto;
    padding: 0.5rem 1rem;
    background: rgba(250,250,250,0.1);
    margin-bottom: 0.5rem;
    border-left: 10px solid red;
`;
const AlertH4Title = styled.h4`
    font-size: 24px;
    font-weight: normal;
    text-decoration: underline;
`;
const AlertDescription = styled.p`
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    line-clamp: 2;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    cursor: pointer;
`;
const AlertTimeScale = styled.div`
    background: rgba(250, 250, 250, 0.2);
    width: 75%;
    padding: 0.25rem 0.5rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledLine = styled.div`
    width: clamp(40%, 50%, 70%);
    background: black;
    height: 2px;
`;

const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
    const [isShowFullDesc, setIsShowFullDesc] = useState<boolean>(false);

    const getBorderColor = useCallback((event:string):string => {
        const lowerCaseEvent = event.toLowerCase();
        if(lowerCaseEvent.includes('yellow')) return alertContainerBorderColor.yellow;
        else if(lowerCaseEvent.includes('amber')) return alertContainerBorderColor.amber;
        else return alertContainerBorderColor.red;
    }, [])

    return(
        <StyledSingleAlertContainer 
            style={{ 'borderLeft': `8px solid ${getBorderColor(alert.event)}` }}>
            <AlertH4Title>{ alert.event }</AlertH4Title>
            <AlertDescription
                style={ isShowFullDesc ? { display: 'block'} : {}}
                onClick={ () => setIsShowFullDesc(!isShowFullDesc) }
            >{ alert.description }</AlertDescription>
            <AlertTimeScale>
                <p>{ (new Date(alert.start * 1000)).toDateString() }</p>
                <StyledLine />
                <p>{ (new Date(alert.end * 1000)).toDateString() }</p>
            </AlertTimeScale>
        </StyledSingleAlertContainer>
    );
}