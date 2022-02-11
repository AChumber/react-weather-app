import React, { useState, useEffect } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { SecondaryButton } from '../shared/SecondaryButton';

export const CurrentLocation = () => {
    const [isGeolocation, setIsGeolocation] = useState<boolean>(true);

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
            })
        }
    }

    return (
        <SecondaryButton onClick={ handleCurrentLocationClick }>
            <BiCurrentLocation />{ isGeolocation ? 'Use My Current Location' : 'Current Location Unavailable'}
        </SecondaryButton>
    );
}
