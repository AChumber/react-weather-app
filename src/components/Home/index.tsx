import React from 'react';
import { BGImage } from '../shared/BGImage';
import { Search } from './Search';


export const HomePage: React.FC = () => {
    return(
        <div>
            <BGImage imgSrc={ process.env.PUBLIC_URL + '/assets/pexels-sunny-cropped.jpg' } />
            <Search />
        </div>
    );
};
