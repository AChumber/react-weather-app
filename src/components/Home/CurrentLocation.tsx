import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

import { BiCurrentLocation } from 'react-icons/bi';
import { SecondaryButton } from '../shared/Buttons';

export const CurrentLocation: React.FC = () => {
    const [isGeolocation, setIsGeolocation] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(!navigator.geolocation) {
            setIsGeolocation(false);
        }
        setIsGeolocation(true);
    }, [])

    const handleCurrentLocationClick = () => {
        if(isGeolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let { latitude:lat, longitude:long } = position.coords;
                console.log(lat, long);
                navigate('/weather', { state: { lat, long } });
            })
        }
    }

    return (
        <SecondaryButton onClick={ handleCurrentLocationClick }>
            <BiCurrentLocation />{ isGeolocation ? 'Use My Current Location' : 'Current Location Unavailable'}
        </SecondaryButton>
    );
}
