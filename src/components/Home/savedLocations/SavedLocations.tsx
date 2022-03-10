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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 0.2rem;
`;

export const SavedLocations:React.FC = () => {
    const savedLocations = useAppSelector(state => state.location.savedLocations);

    if(savedLocations.length > 0) {
        return (
            <div>
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
            </div>
        )
    }

    return(null);
}