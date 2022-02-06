import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 75%;
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
`;


export const Search = () => {
    const [search, setSearch] = useState<String>("");

    return (
        <StyledDiv>
            <InputWrapper>
                <StyledH2>Search for a Location</StyledH2>
                <StyledInput type='text' onChange={ (e) => setSearch(e.target.value) } />
            </InputWrapper>
        </StyledDiv>
    );
};
