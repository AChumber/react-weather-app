import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { CurrentLocation } from './CurrentLocation';

const StyledDiv = styled.div`
    width: clamp(80%, 80%, 75%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 4rem 0; 
    background: linear-gradient(91.53deg, #EDF2F4 1.86%, rgba(141, 153, 174, 0.75) 112.53%);
    border-radius: 5px;
`;
const InputWrapper = styled.div`
    width: 90%;
    margin: auto;
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
`;


export const Search = () => {
    const [search, setSearch] = useState<string>("");

    const debounceSuggestions = useCallback(debounce(async (searchTerm:string) => {
            if(searchTerm !== '') {
                console.log(searchTerm);
            }
        }, 400), []);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let searchTerm:string = e.target.value;
        setSearch(searchTerm);

        debounceSuggestions(searchTerm);
    };

    return (
        <StyledDiv>
            <InputWrapper>
                <StyledH2>Search for a Location</StyledH2>
                <StyledInput type='text' onChange={ (e) => handleInputChange(e) } value={ search } />
                <CurrentLocation />
            </InputWrapper>
        </StyledDiv>
    );
};
