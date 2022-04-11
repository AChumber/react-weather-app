import { uniqueId } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { LocationTile } from './LocationTile';

const SavedLocationsContainer = styled.div`
    position: absolute;
    top: 68%;
    left: 10%;
    width: 80%;
    z-index: -1;
`;

const StyledTitle = styled.h2`
    font-size: 1.25rem;
    color: #7E7E7E;
`;
const LocationTileContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 0.2rem;
`;

export const SavedLocations:React.FC = () => {
    const savedLocations = useAppSelector(state => state.location.savedLocations);

    return (
        <SavedLocationsContainer data-testid="saved-locations-container">
            {
                savedLocations.length > 0 
                    ? (
                        <>
                            <StyledTitle>Saved Locations</StyledTitle>
                            <LocationTileContainer>
                                {
                                    savedLocations.map(location => <LocationTile 
                                                                        key={uniqueId()} 
                                                                        geo={{ lat: location.lat, long: location.long }} 
                                                                        locationName={location.name} />
                                                                    )
                                }
                            </LocationTileContainer>
                        </>
                    )
                    : null
            }
        </SavedLocationsContainer>
    )
}