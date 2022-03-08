import React from 'react';
import styled from 'styled-components';
import { BGImage } from '../shared/BGImage';
import { SavedLocations } from './savedLocations/SavedLocations';
import { Search } from './Search';

const SavedLocationsContainer = styled.div`
    position: absolute;
    top: 68%;
    left: 10%;
    width: 80%;
    z-index: 1;
`;

export const HomePage: React.FC = () => {
    return(
        <div>
            <BGImage imgSrc={ process.env.PUBLIC_URL + '/assets/pexels-sunny-cropped.jpg' } />
            <Search />
            <SavedLocationsContainer>
                <SavedLocations />
            </SavedLocationsContainer>
        </div>
    );
};
