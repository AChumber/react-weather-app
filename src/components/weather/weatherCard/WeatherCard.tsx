import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { addLocation, removeLocation } from '../../../redux/slices/locationSlice';
import { PrimaryButton } from '../../shared/Buttons';
import { StyledH1 } from '../../shared/FontStyles';
import CurrentWeather from './CurrentWeather';
import { Forecast } from './forecastTable/Forecast';
import { WeatherAlert } from './WeatherAlert';

interface Props {
    weatherData: any,
    placeName: string
};

const StyledContainer = styled.div`
    width: clamp(70%, 75%, 95%);
    background: linear-gradient(91.53deg, #EDF2F4 1.86%, rgba(141, 153, 174, 0.75) 112.53%);
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
`;
const StyledTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;
const StyledSpanTitle = styled.span`
    color: #111;
`;

export const WeatherCard: React.FC<Props> = ({weatherData, placeName}) => {
    const [isLocationInSavedLocation, setIsLocationInSavedLocation] = useState<boolean>(false);
    const savedLocations = useAppSelector(state => state.location.savedLocations);
    const dispatch = useAppDispatch();

    useEffect(() => {
        //Check redux state returning if place exists in saved locations array
        setIsLocationInSavedLocation(savedLocations.some(savedLocation => savedLocation.name === placeName));
    }, [placeName]);

    const onSaveLocationClick = ():void => {
        dispatch(addLocation({name: placeName, long: weatherData.lon, lat: weatherData.lat}));
        //render toast to ToastContainer set up in App.tsx
        toast('Location saved', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setIsLocationInSavedLocation(true);
    }
    const onRemoveLocationClick = ():void => {
        dispatch(removeLocation(placeName));
        toast('Removed Location from saved list', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setIsLocationInSavedLocation(false);
    }

    return(
        <StyledContainer>
            <StyledTitleContainer>
                <StyledH1>Weather - <StyledSpanTitle>{ placeName ? placeName : 'Your Location' }</StyledSpanTitle></StyledH1>
                <PrimaryButton
                    onClick={ isLocationInSavedLocation ? onRemoveLocationClick : onSaveLocationClick }>
                        { isLocationInSavedLocation ? '- Remove Location' : '+ Save Location' }
                </PrimaryButton>
            </StyledTitleContainer>
            <CurrentWeather currentWeather={ weatherData.current } />
            {
                weatherData.hasOwnProperty('alerts') && <WeatherAlert alerts={ weatherData.alerts } />
            }
            { console.log(weatherData) }
            <Forecast daily={ weatherData.daily } hourly={ weatherData.hourly } />
        </StyledContainer>
    );
}
