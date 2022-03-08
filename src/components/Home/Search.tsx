import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    top: 50%;
    transform: translate(10px, -50%);
    color: #eee;
`;
const StyledH2 = styled.h2`
    font-weight: bold;
    color: #7E7E7E;
`;
const InputWrapper = styled.div`
    position:relative;
`;
const StyledInput = styled.input`
    width: 100%;
    padding: 1.5rem 0.5rem;
    border: none;
    font-size: 1.75rem;
    margin-bottom: 0.75rem;

    &:focus ~ ${StyledIcon} {
        display: none;
        opacity: 0;
    }
`;

const SuggestionsContainer = styled.div`
    position: absolute;
    background: #f0f0f0;
    width: 100%;
    top: 100%;
    transform: translateY(-5%);
    z-index: 100;
`;
const Suggestion = styled.p`
    font-size: 1.25rem;
    padding: 0.5rem;
    border-bottom: 1px solid #ccc;

    &:hover {
        cursor: pointer;
        background: #fff;
    }

`;


export const Search: React.FC = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState<string>("");
    const [suggestions, setSuggestions] = useState<[] | null>(null);

    //Suggestions whilst typing
    const debounceSuggestions = useCallback(debounce(async (searchTerm:string) => {
            if(searchTerm !== '') {
                console.log(searchTerm);
                await fetch(`${process.env.REACT_APP_API_BASE_URL}/geo/1.0/direct?q=${searchTerm}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
                    .then(res => {
                        if(!res.ok) {
                            throw new Error('Could not fetch query');
                        }
                        return res.json();
                    })
                    .then(data => {
                        setSuggestions(data);
                        console.log(data);
                    })
                    .catch(err => console.log(err));
            }
            //setSuggestions(null);
        }, 400), []);

    //Handle Submit Click
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        let searchTerm:string = e.target.value;
        setSearch(searchTerm);
        debounceSuggestions(searchTerm);
    };

    const handleSuggestionClick = (lat:number, long:number, placeName:string) => {
        console.log(lat, long);
        navigate('/weather', { state: { lat, long, placeName } });
    };

    return (
        <StyledDiv>
                <StyledH2>Search for a Location</StyledH2>
                <InputWrapper>
                    <StyledInput type='text' onChange={ (e) => handleInputChange(e) } value={ search } />
                    {
                        !search && (
                            <StyledIcon>
                                <FiSearch />
                            </StyledIcon>
                        )
                    }

                    <SuggestionsContainer>
                        {
                            suggestions && (
                                suggestions.map((place:any, i:number) =>
                                        <Suggestion 
                                            key={i} onClick={() => handleSuggestionClick(place.lat, place.lon, place.name)}>
                                                {place.name}, {place.state} {place.country}</Suggestion>)
                            )
                        }
                    </SuggestionsContainer>

                </InputWrapper>
                
                <CurrentLocation />
        </StyledDiv>
    );
};
