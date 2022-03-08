import { uniqueId } from 'lodash';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../../redux/hooks';
import { LocationTile } from './LocationTile';

const StyledTitle = styled.h2`
    font-size: 1.25rem;
    color: #7E7E7E;
`;
const LocationTileContainer = styled.div`
    display: flex;
    justify-content: spave-evenly;
    align-items: center;
    gap: 0.15rem;
`;

export const SavedLocations:React.FC = () => {
    const savedLocations = useAppSelector(state => state.location.savedLocations);

    return (
        <div>
            <StyledTitle>Saved Locations</StyledTitle>
            <LocationTileContainer>
                {
                    savedLocations.length <= 0 ? <p>No saved locations</p> : 
                        savedLocations.map(location => <LocationTile 
                                                            key={uniqueId()} 
                                                            geo={{ lat: location.lat, long: location.long }} 
                                                            locationName={location.name} />
                                                        )
                }
            </LocationTileContainer>
        </div>
    )
}