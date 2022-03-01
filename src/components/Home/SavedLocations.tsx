import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';

const StyledTitle = styled.h2`
    font-size: 1.25rem;
    color: #7E7E7E;
`;
const LocationTileContainer = styled.div`
    display: flex;
    justify-content: spave-evenly;
    align-items: center;
`;

export const SavedLocations:React.FC = () => {
    const savedLocations = useAppSelector(state => state.location.savedLocations);
    const dispatch = useAppDispatch();

    return (
        <div>
            <StyledTitle>Saved Locations</StyledTitle>
            <LocationTileContainer>
                {
                    savedLocations.length <= 0 ? <p>No saved locations</p> : 
                        savedLocations.map(location => <LocationTile>{location.name}</LocationTile>)
                }
            </LocationTileContainer>
        </div>
    )
}


const LocationTile:React.FC = ({ children }) => {
    const LocationContainer = styled.div`
        border: 1px dashed rgba(43, 45, 66, 0.3);
        background: rgba(237, 242, 244, 0.9);
        width: 25%;
        min-height: 9rem;
        text-align: center;
    `;
    return(
        <LocationContainer>
            <p>{ children }</p>
        </LocationContainer>
    );
}
