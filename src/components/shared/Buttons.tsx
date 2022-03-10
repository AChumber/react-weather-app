import React from 'react';
import styled from 'styled-components';

interface Props {
    onClick?: () => any;
    children: React.ReactNode
}

const StyledPrimaryBtn = styled.button`
    font-size: 1.15rem;
    border-radius: 5px;
    padding: 0rem 1rem;
    border: none;
    background: #2B2D42;
    color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
        background-color: #0E0F15;
        box-shadow: 1px 1px 4px rgba(43,45,66,0.3);
    }
`;

const StyledSecondaryBtn = styled.button`
    font-size: 1.15rem;
    border-radius: 5px;
    padding: 1rem;
    border: 1px solid #2B2D42;
    background: linear-gradient(90.59deg, rgba(255, 255, 255, 0.6) 0.51%, rgba(255, 255, 255, 0) 99.7%);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s ease-in;

    &:hover {
        background-color: #EDF2F4;
        box-shadow: 1px 1px 4px rgba(43,45,66,0.3);
    }
`;

const StyledTertiaryBtn = styled.button`
    font-size: 1.15rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.15s ease-in;
    color: #2B2D42;
    border: none;
    text-decoration: underline;

    &:hover {
        color: #8D99AE;
        box-shadow: 0px 0px 1px rgba(43,45,66,0.3);
    }
`;

export const TertiaryButton = ({ children, onClick }: Props) => <StyledTertiaryBtn 
                                                                    onClick={ onClick && onClick }>{ children }</StyledTertiaryBtn>;

export const PrimaryButton = ({ children, onClick }: Props) => <StyledPrimaryBtn 
                                                                    onClick={ onClick && onClick }>{ children }</StyledPrimaryBtn>;

export const SecondaryButton = ({ children, onClick }: Props) => <StyledSecondaryBtn 
                                                                    onClick={ onClick && onClick }>{ children }</StyledSecondaryBtn>;
