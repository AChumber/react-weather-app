import React from 'react';
import styled from 'styled-components';
import { Search } from './Search';
import BGImage from '../../assets/pexels-sunny-cropped.jpg';

const StyledImg = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
`;

export const HomePage = () => {
    return(
        <div>
            <StyledImg src={ BGImage } />
            <Search />
        </div>
    );
};
