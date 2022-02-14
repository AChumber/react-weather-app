import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { CurrentLocation } from './CurrentLocation';

import { FiSearch } from 'react-icons/fi';

const StyledDiv = styled.div`
    width: clamp(80%, 80%, 75%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 4rem 2rem; 
    background: linear-gradient(91.53deg, #EDF2F4 1.86%, rgba(141, 153, 174, 0.75) 112.53%);
    border-radius: 5px;
`;
const StyledIcon = styled.div`
    font-size: 3rem;
    position: absolute;
    top: calc(50% - 0.5rem);
    transform: translate(10px, -50%);
    color: #eee;
`;
const StyledH2 = styled.h2`
    font-weight: bold;
    color: #7E7E7E;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 1.5rem 0.5rem;
    border: none;
    font-size: 1.75rem;
    margin-bottom: 0.75rem;

    &:focus ${StyledIcon} {
        opacity: 0;
    }
`;


export const Search: React.FC = () => {
    const [search, setSearch] = useState<string>("");

    //Suggestions whilst typing
    const debounceSuggestions = useCallback(debounce(async (searchTerm:string) => {
            if(searchTerm !== '') {
                console.log(searchTerm);
            }
        }, 400), []);

    //Handle Submit Click

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let searchTerm:string = e.target.value;
        setSearch(searchTerm);

        debounceSuggestions(searchTerm);
    };

    return (
        <StyledDiv>
                <StyledH2>Search for a Location</StyledH2>
                <div>
                    <StyledIcon>
                        <FiSearch />
                    </StyledIcon>
                    <StyledInput type='text' onChange={ (e) => handleInputChange(e) } value={ search } />
                </div>
                <CurrentLocation />
        </StyledDiv>
    );
};
